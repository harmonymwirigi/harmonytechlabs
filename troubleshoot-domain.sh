#!/bin/bash
# Troubleshooting script for domain access issues

echo "🔍 Troubleshooting HarmonyTechLabs Domain Access"
echo "================================================"
echo ""

# Check DNS resolution
echo "1️⃣ Checking DNS resolution..."
echo "   harmonytechlabs.com should resolve to 72.61.193.230"
nslookup harmonytechlabs.com
echo ""
echo "   www.harmonytechlabs.com should resolve to 72.61.193.230"
nslookup www.harmonytechlabs.com
echo ""

# Check nginx status
echo "2️⃣ Checking nginx status..."
systemctl status nginx --no-pager | head -10
echo ""

# Check nginx configuration
echo "3️⃣ Testing nginx configuration..."
nginx -t
echo ""

# Check if nginx is listening on port 80
echo "4️⃣ Checking if nginx is listening on port 80..."
netstat -tlnp | grep :80 || ss -tlnp | grep :80
echo ""

# Check firewall
echo "5️⃣ Checking firewall status..."
if command -v ufw &> /dev/null; then
    ufw status
else
    echo "   UFW not installed, checking iptables..."
    iptables -L -n | grep -E "(80|443)" || echo "   No specific rules found"
fi
echo ""

# Check web directory
echo "6️⃣ Checking web directory..."
ls -la /var/www/harmonytechlabs/ | head -10
echo ""

# Check nginx site configuration
echo "7️⃣ Checking nginx site configuration..."
cat /etc/nginx/sites-available/harmonytechlabs
echo ""

# Test local access
echo "8️⃣ Testing local access..."
curl -I http://localhost 2>&1 | head -5
echo ""

# Check nginx error logs
echo "9️⃣ Recent nginx error logs..."
tail -20 /var/log/nginx/error.log
echo ""

# Check nginx access logs
echo "🔟 Recent nginx access logs..."
tail -10 /var/log/nginx/access.log
echo ""

echo "✅ Troubleshooting complete!"
echo ""
echo "💡 Common fixes:"
echo "   - If DNS doesn't resolve: Wait for propagation (15min-24hrs)"
echo "   - If nginx not running: sudo systemctl start nginx"
echo "   - If firewall blocking: sudo ufw allow 80 && sudo ufw allow 443"
echo "   - If config error: Check /etc/nginx/sites-available/harmonytechlabs"

