# Configure IIS for static site serving with proper routing

# Enable rewrite module
powershell -Command `
  if (-not (Test-Path 'C:\Program Files\IIS\Rewrite')) { `
    Write-Host 'Downloading URL Rewrite Module...'; `
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; `
    Invoke-WebRequest -Uri 'https://download.microsoft.com/download/1/2/8/128E2E22-C1B9-44A4-BE2A-5859ED1D4592/rewrite_amd64_en-US.msi' `
      -OutFile 'C:\rewrite.msi'; `
    msiexec.exe /i C:\rewrite.msi /quiet /norestart; `
    Remove-Item -Path 'C:\rewrite.msi' -Force `
  }

# Create web.config for static site routing
@'
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="SPA Routing" stopProcessing="true">
          <match url=".*" />
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
    <staticContent>
      <remove fileExtension=".js" />
      <mimeType fileExtension=".js" mimeType="application/javascript" />
    </staticContent>
    <httpProtocol>
      <customHeaders>
        <add name="X-Frame-Options" value="SAMEORIGIN" />
        <add name="X-Content-Type-Options" value="nosniff" />
        <add name="X-XSS-Protection" value="1; mode=block" />
        <add name="Referrer-Policy" value="strict-origin-when-cross-origin" />
      </customHeaders>
    </httpProtocol>
  </system.webServer>
</configuration>
'@ | Set-Content -Path 'C:\inetpub\wwwroot\web.config' -Force
