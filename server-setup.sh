#!/bin/bash
# One-time server setup script for HarmonyTechLabs
# This sets up the server, clones from GitHub, and configures everything

set -e  # Exit on error

echo "🚀 Starting HarmonyTechLabs Server Setup..."
echo ""

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install required packages
echo "📥 Installing Node.js, nginx, git, and certbot..."
apt install -y curl git nginx certbot python3-certbot-nginx

# Install Node.js 20.x
if ! command -v node &> /dev/null; then
    echo "📥 Installing Node.js 20.x..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt install -y nodejs
fi

# Verify installations
echo ""
echo "✅ Verifying installations..."
echo "Node.js: $(node --version)"
echo "npm: $(npm --version)"
echo "nginx: $(nginx -v 2>&1 | head -1)"
echo "git: $(git --version)"
echo ""

# Create project directory
PROJECT_DIR="/opt/harmonytechlabs"
echo "📁 Setting up project directory: $PROJECT_DIR"
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# Clone repository from GitHub
echo "📥 Cloning repository from GitHub..."
if [ -d ".git" ]; then
    echo "⚠️  Repository already exists. Pulling latest changes..."
    git pull origin main
else
    git clone https://github.com/harmonymwirigi/harmonytechlabs.git .
fi

# Install dependencies
echo "📦 Installing npm dependencies..."
npm install

# Create web directory
WEB_DIR="/var/www/harmonytechlabs"
echo "📁 Creating web directory: $WEB_DIR"
mkdir -p $WEB_DIR

# Build the project
echo "🔨 Building project..."
npm run build

# Copy built files to web directory
echo "📋 Copying built files to web directory..."
cp -r dist/* $WEB_DIR/
chown -R www-data:www-data $WEB_DIR
chmod -R 755 $WEB_DIR

# Configure nginx
echo "⚙️ Configuring nginx..."
cat > /etc/nginx/sites-available/harmonytechlabs << 'EOF'
server {
    listen 80;
    server_name harmonytechlabs.com www.harmonytechlabs.com;
    
    root /var/www/harmonytechlabs;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Enable site
echo "🔗 Enabling nginx site..."
ln -sf /etc/nginx/sites-available/harmonytechlabs /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
echo "🧪 Testing nginx configuration..."
nginx -t

# Reload nginx
echo "🔄 Reloading nginx..."
systemctl reload nginx

# Create update script for future deployments
echo "📝 Creating update script..."
cat > $PROJECT_DIR/update.sh << 'UPDATE_EOF'
#!/bin/bash
# Quick update script - run this after making changes to GitHub

set -e

PROJECT_DIR="/opt/harmonytechlabs"
WEB_DIR="/var/www/harmonytechlabs"

echo "🔄 Updating HarmonyTechLabs from GitHub..."

cd $PROJECT_DIR

# Pull latest changes
echo "📥 Pulling latest changes from GitHub..."
git pull origin main

# Install any new dependencies
echo "📦 Installing/updating dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Copy built files to web directory
echo "📋 Deploying to web directory..."
cp -r dist/* $WEB_DIR/
chown -R www-data:www-data $WEB_DIR
chmod -R 755 $WEB_DIR

# Reload nginx
echo "🔄 Reloading nginx..."
systemctl reload nginx

echo "✅ Update complete! Your site is now live with the latest changes."
UPDATE_EOF

chmod +x $PROJECT_DIR/update.sh

echo ""
echo "✅ Server setup complete!"
echo ""
echo "📋 Summary:"
echo "   - Project directory: $PROJECT_DIR"
echo "   - Web directory: $WEB_DIR"
echo "   - Repository: https://github.com/harmonymwirigi/harmonytechlabs.git"
echo ""
echo "🚀 Your site should be accessible at: http://harmonytechlabs.com"
echo ""
echo "📝 For future updates, just run:"
echo "   cd /opt/harmonytechlabs && ./update.sh"
echo "   OR"
echo "   /opt/harmonytechlabs/update.sh"
echo ""
echo "🔒 To set up SSL (after DNS propagates), run:"
echo "   certbot --nginx -d harmonytechlabs.com -d www.harmonytechlabs.com"
echo ""

