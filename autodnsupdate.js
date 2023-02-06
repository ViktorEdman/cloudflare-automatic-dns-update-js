#!/home/viktor/.nvm/versions/node/v18.1.0/bin/node
import axios from "axios";
import env from "dotenv";;

env.config({ path: "/home/viktor/cloudflare-automatic-dns-update/.env" });

const { TOKEN, ZONEID } = process.env;

const requestHeaders = {
  "content-type": "application/json",
  authorization: "Bearer " + TOKEN,
};

const requestUrl = `https://api.cloudflare.com/client/v4/zones/${ZONEID}/dns_records`;
const request = await axios.get(requestUrl, { headers: requestHeaders });

const dnsARecord = request.data.result.filter((record) => record.type ===  'A').find((record) => record.name === "viktoredman.se");
console.log(dnsARecord)


const dnsIp = dnsARecord.content;
const entryId = dnsARecord.id;

const externalIpRequest = await axios.get("https://checkip.amazonaws.com");
const externalIp = externalIpRequest.data.trim();

console.log(new Date().toLocaleString());
console.log(
  `Comparing dns record ${dnsIp} to actual external ip ${externalIp}`
);
const ipsMatch = dnsIp === externalIp;

if (ipsMatch) {
  console.log("Match! No update required.");
} else {
  console.log("Mismatch! Updating to " + externalIp);
  await axios.patch(
    `https://api.cloudflare.com/client/v4/zones/${ZONEID}/dns_records/${entryId}`,
    {
      content: externalIp,
    },
    {
      headers: requestHeaders,
    }
  );
}

console.log("-".repeat(26));
