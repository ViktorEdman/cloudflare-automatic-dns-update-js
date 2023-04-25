Hej! Välkommen till Viktors automatiska dns-uppdaterare för cloudflare dns.

Minimumversion node = 14.8.0

När node och npm är installerat på datorn, skapa en .env fil med följande information:

TOKEN = ""  
ZONEID = ""  
DOMAIN = ""

TOKEN skapar du under "API Tokens" på "My Profile" i din Cloudflare dashboard.
Behörigheterna som krävs är "Edit Zone DNS" "Include specific zone" med den domänen du vill auto-uppdatera.

ZONEID hittar du under API information på din domän i Cloudflares dashboard.
DOMAIN är namnet på den domänen som du vill autouppdatera (example.org)

När ovan är fixat så behöver du köra "npm install" i denna mappen (endast en gång)
Därefter kan du köra "node ./autodnsupdate.js" för att automatiskt uppdatera dina DNS-records

Skriptet kan med fördel schemaläggas med cron
