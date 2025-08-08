# PowerShell script to fix import statements by removing version numbers
$uiPath = "src/components/ui"
$files = Get-ChildItem -Path $uiPath -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Fix Radix UI imports by removing version numbers
    $content = $content -replace '@radix-ui/react-([^@]+)@[0-9.]+', '@radix-ui/react-$1'
    
    # Fix class-variance-authority imports
    $content = $content -replace 'class-variance-authority@[0-9.]+', 'class-variance-authority'
    
    # Write the fixed content back to the file
    Set-Content -Path $file.FullName -Value $content -NoNewline
    
    Write-Host "Fixed imports in $($file.Name)"
}

Write-Host "All import statements have been fixed!" 