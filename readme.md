Hej! Välkommen till Viktors automatiska dns-uppdaterare för cloudflare dns.

<<<<<<< HEAD
För att köra denna appen behöver du NodeJS och npm. läs instruktionerna här:
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm  
OM du kör Ubuntu så kan du följa denna guide:  
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04
=======
För att köra denna appen behöver du NodeJS och npm. läs instruktionerna här:  
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
>>>>>>> fd92f2a4d7a619690f650279ab57fe3c78c5d993

Minimumversion node = 14.8.0  

När node och npm är installerat på datorn, skapa en .env fil med följande information:  

TOKEN = ""  
ZONEID = ""  
DOMAIN = ""  

TOKEN skapar du under "API Tokens" på "My Profile" i din Cloudflare dashboard.
Behörigheterna som krävs är "Edit Zone DNS" "Include specific zone" med den domänen du vill auto-uppdatera.

ZONEID hittar du under API information på din domän i Cloudflares dashboard.
DOMAIN är namnet på den domänen som du vill autouppdatera

När ovan är fixat så behöver du köra "npm install" i denna mappen (endast en gång)
Därefter kan du köra "node ./autodnsupdate.js" för att automatiskt uppdatera dina DNS-records
