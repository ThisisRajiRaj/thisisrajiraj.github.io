$JSON = Get-Content -Raw -Path ..\posts\articleIndex.json | ConvertFrom-Json 
$path = (Get-Item .).Parent.FullName

$JSON | Select-Object -Property image | ForEach-Object {
    if ($null -ne $_.image) {
        $imagePath = Join-Path $path "posts"
        $itemPath = Join-Path $imagePath  $_.image
        $newName = $itemPath.Substring(0, $itemPath.Length - 4) + "_thumbnail.jpg"
        Write-Host $itemPath $newName
        ./ResizeImages.ps1 $itemPath $newName 75
    }
}