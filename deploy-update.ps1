# Quick deployment script for HarmonyTechLabs
# Run this after making changes to deploy to the server

Write-Host "Building project..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Deploying updated index.html..." -ForegroundColor Green
scp -i flaskdeployedone.pem dist/index.html ubuntu@3.148.241.67:/tmp/index.html

if ($LASTEXITCODE -eq 0) {
    Write-Host "Moving file to web directory..." -ForegroundColor Green
    ssh -i flaskdeployedone.pem ubuntu@3.148.241.67 "sudo mv /tmp/index.html /var/www/harmonytechlabs/index.html && sudo chown www-data:www-data /var/www/harmonytechlabs/index.html"
    Write-Host "Deployment complete! Refresh your browser to see the changes." -ForegroundColor Green
} else {
    Write-Host "Deployment failed. Please check your connection and try again." -ForegroundColor Red
}

