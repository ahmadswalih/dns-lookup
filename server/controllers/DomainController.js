import dns from "dns";
import whois from "whois-json";

// Function to check domain information, including DNS records, expiration date, and owner info
export const checkDomain = async (req, res) => {
  const domain = req.params.domain;

  try {
    // Fetch WHOIS information for the domain
    const whoisInfo = await whois(domain);

    // Extract relevant data from the WHOIS response
    const expirationDate = whoisInfo["registrarRegistrationExpirationDate"];
    const ownerInfo = {
      registrar: whoisInfo["registrar"],
      registrant: whoisInfo["registrant"],
    };
    async function resolveDNS(domain, recordType) {
      return new Promise((resolve, reject) => {
        dns.resolve(domain, recordType, (err, records) => {
          if (err) {
            resolve([]);
          } else {
            resolve(records);
          }
        });
      });
    }
    // Fetch DNS records for the domain
    dns.resolve(domain, async (err, records) => {
      if (err) {
        res.status(500).json({ error: "Error fetching DNS records." });
      } else {
        const aRecords = await resolveDNS(domain, "A");
        const mxRecords = await resolveDNS(domain, "MX");
        const txtRecords = await resolveDNS(domain, "TXT");

        res.json({
          domain: domain,
          dnsRecords: records,
          expirationDate: expirationDate,
          ownerInfo: ownerInfo,
          aRecords: aRecords,
          mxRecords: mxRecords,
          txtRecords: txtRecords,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while checking the domain." });
  }
};
