#!/bin/bash
# Deployment script for HarmonyTechLabs on Hostinger VPS

set -e  # Exit on error

echo "🚀 Starting HarmonyTechLabs deployment..."

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install required packages
echo "📥 Installing Node.js, nginx, git, and certbot..."
apt install -y curl git nginx certbot python3-certbot-nginx

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verify installations
echo "✅ Verifying installations..."
node --version
npm --version
nginx -v
git --version

# Create deployment directory
DEPLOY_DIR="/var/www/harmonytechlabs"
echo "📁 Creating deployment directory: $DEPLOY_DIR"
mkdir -p $DEPLOY_DIR
chown -R www-data:www-data $DEPLOY_DIR

# Clone or update repository
REPO_DIR="/opt/harmonytechlabs"
if [ -d "$REPO_DIR" ]; then
    echo "🔄 Updating existing repository..."
    cd $REPO_DIR
    git pull origin main
else
    echo "📥 Cloning repository..."
    git clone https://github.com/harmonymwirigi/harmonytechlabs.git $REPO_DIR
    cd $REPO_DIR
fi

# Install dependencies
echo "📦 Installing npm dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Copy built files to web directory
echo "📋 Copying built files to web directory..."
cp -r dist/* $DEPLOY_DIR/
chown -R www-data:www-data $DEPLOY_DIR
chmod -R 755 $DEPLOY_DIR

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
ln -sf /etc/nginx/sites-available/harmonytechlabs /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
nginx -t

# Reload nginx
systemctl reload nginx

echo "✅ Deployment complete!"
echo "🌐 Your site should be accessible at http://harmonytechlabs.com"
echo ""
echo "🔒 To set up SSL, run:"
echo "   sudo certbot --nginx -d harmonytechlabs.com -d www.harmonytechlabs.com"

