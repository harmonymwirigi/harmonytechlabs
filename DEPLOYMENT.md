# HarmonyTechLabs - Deployment Guide

## 🚀 Quick Update Workflow

**For regular website updates, this is all you need:**

1. **Make changes locally** → Push to GitHub
2. **SSH to server:**
   ```bash
   ssh root@72.61.193.230
   # Password: H@rmo.36840568
   ```
3. **Run update script:**
   ```bash
   cd /opt/harmonytechlabs && ./update.sh
   ```
4. **Done!** Your site is live with the latest changes.

---

## 📋 Server Information

- **Server IP:** 72.61.193.230
- **Domain:** harmonytechlabs.com
- **SSH:** `ssh root@72.61.193.230`
- **Password:** H@rmo.36840568
- **GitHub Repo:** https://github.com/harmonymwirigi/harmonytechlabs.git

## 📁 Directory Structure

```
/opt/harmonytechlabs/          # Git repository (source code)
├── src/                       # Source files
├── package.json
├── update.sh                  # Update script (auto-created)
└── ...

/var/www/harmonytechlabs/      # Web server (built files)
├── index.html
├── assets/
└── ...
```

---

## 🔄 Update Methods

### Method 1: Update Script (Recommended)
```bash
ssh root@72.61.193.230
cd /opt/harmonytechlabs
./update.sh
```

### Method 2: Manual Update
```bash
ssh root@72.61.193.230
cd /opt/harmonytechlabs
git pull origin main
npm install
npm run build
cp -r dist/* /var/www/harmonytechlabs/
chown -R www-data:www-data /var/www/harmonytechlabs
systemctl reload nginx
```

---

## 🔒 SSL/HTTPS Setup (One-Time)

After DNS has propagated, set up free SSL certificate:

```bash
ssh root@72.61.193.230
certbot --nginx -d harmonytechlabs.com -d www.harmonytechlabs.com
```

**What this does:**
- ✅ Gets free SSL certificate from Let's Encrypt
- ✅ Configures HTTPS automatically
- ✅ Sets up automatic renewal
- ✅ Redirects HTTP to HTTPS

**Verify SSL renewal:**
```bash
certbot renew --dry-run
```

---

## 🛠️ Troubleshooting

### Site Not Updating?
```bash
cd /opt/harmonytechlabs
git status                    # Check git status
git pull origin main          # Pull latest
npm install                   # Update dependencies
npm run build                 # Rebuild
cp -r dist/* /var/www/harmonytechlabs/
chown -R www-data:www-data /var/www/harmonytechlabs
systemctl reload nginx
```

### Nginx Issues?
```bash
systemctl status nginx        # Check status
nginx -t                      # Test configuration
systemctl restart nginx       # Restart if needed
```

### View Logs
```bash
# Error logs
tail -f /var/log/nginx/error.log

# Access logs
tail -f /var/log/nginx/access.log
```

### Rebuild from Scratch
```bash
cd /opt/harmonytechlabs
git pull origin main
rm -rf node_modules dist
npm install
npm run build
cp -r dist/* /var/www/harmonytechlabs/
chown -R www-data:www-data /var/www/harmonytechlabs
systemctl reload nginx
```

### Check DNS
```powershell
# From your local machine
nslookup harmonytechlabs.com
nslookup www.harmonytechlabs.com
```

Both should resolve to `72.61.193.230`

### Test Server Response
```powershell
# From your local machine
curl.exe -I http://harmonytechlabs.com
curl.exe -I http://72.61.193.230
```

Both should return `HTTP/1.1 200 OK`

---

## 📝 Quick Reference Commands

```bash
# Connect to server
ssh root@72.61.193.230

# Update website
cd /opt/harmonytechlabs && ./update.sh

# Check git status
cd /opt/harmonytechlabs && git status

# View recent commits
cd /opt/harmonytechlabs && git log --oneline -5

# Check nginx
systemctl status nginx
nginx -t

# Restart nginx
systemctl restart nginx

# Check SSL certificate
certbot certificates
```

---

## 🌐 DNS Configuration

Your DNS is configured in Hostinger:
- **A Record:** `@` → `72.61.193.230`
- **CNAME:** `www` → `harmonytechlabs.com`

To update DNS, go to: Hostinger Control Panel → Domains → harmonytechlabs.com → DNS / Nameservers

---

## ✅ Initial Setup (Already Done)

The server has been set up with:
- ✅ Node.js 20.x
- ✅ nginx web server
- ✅ Git repository cloned
- ✅ Dependencies installed
- ✅ Site built and deployed
- ✅ Nginx configured
- ✅ Update script created

**You're all set!** Just use the update workflow above for future changes.

---

## 📞 Need Help?

1. **Check logs:** `tail -f /var/log/nginx/error.log`
2. **Test nginx config:** `nginx -t`
3. **Check git status:** `cd /opt/harmonytechlabs && git status`
4. **Verify files:** `ls -la /var/www/harmonytechlabs/`

