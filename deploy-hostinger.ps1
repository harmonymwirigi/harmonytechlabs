# PowerShell deployment script for Hostinger VPS
# This script will guide you through the deployment process

$serverIP = "72.61.193.230"
$serverUser = "root"
$domain = "harmonytechlabs.com"
$repoUrl = "https://github.com/harmonymwirigi/harmonytechlabs.git"

Write-Host "🚀 HarmonyTechLabs Deployment to Hostinger VPS" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green
Write-Host ""

# Step 1: Upload deployment script
Write-Host "Step 1: Uploading deployment script..." -ForegroundColor Yellow
Write-Host "You will be prompted for the root password: H@rmo.36840568" -ForegroundColor Cyan
Write-Host ""

$uploadScript = Read-Host "Press Enter to upload the deployment script (or type 'skip' to skip)"
if ($uploadScript -ne "skip") {
    scp deploy-to-hostinger.sh ${serverUser}@${serverIP}:/root/
    Write-Host "✅ Script uploaded!" -ForegroundColor Green
}

Write-Host ""
Write-Host "Step 2: Connect to server and run deployment" -ForegroundColor Yellow
Write-Host "=============================================" -ForegroundColor Yellow
Write-Host ""
Write-Host "Run these commands on the server:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. SSH into the server:" -ForegroundColor White
Write-Host "   ssh root@72.61.193.230" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Make script executable and run it:" -ForegroundColor White
Write-Host "   chmod +x deploy-to-hostinger.sh" -ForegroundColor Gray
Write-Host "   ./deploy-to-hostinger.sh" -ForegroundColor Gray
Write-Host ""
Write-Host "3. After deployment, set up SSL (once DNS propagates):" -ForegroundColor White
Write-Host "   certbot --nginx -d harmonytechlabs.com -d www.harmonytechlabs.com" -ForegroundColor Gray
Write-Host ""

Write-Host "📋 Full deployment guide saved in: DEPLOYMENT_GUIDE.md" -ForegroundColor Green
Write-Host ""

# Check if user wants to connect now
$connectNow = Read-Host "Would you like to connect to the server now? (y/n)"
if ($connectNow -eq "y" -or $connectNow -eq "Y") {
    Write-Host "Connecting to server..." -ForegroundColor Yellow
    ssh ${serverUser}@${serverIP}
}

