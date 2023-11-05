import dns from "dns";
import whois from "whois-json";

// Function to check domain information, including DNS records, expiration date, and owner info
export const checkDomain = async (req, res) => {
  const domain = req.params.domain;

  try {
    // Fetch WHOIS information for the domain
    const whoisInfo = await whois(domain);

    // Extract relevant data from the WHOIS response
    const expirationDate = whoisInfo["expirationDate"];
    const ownerInfo = {
      registrar: whoisInfo["registrar"],
      registrant: whoisInfo["registrant"],
    };

    // Fetch DNS records for the domain
    dns.resolve(domain, (err, records) => {
      if (err) {
        res.status(500).json({ error: "Error fetching DNS records." });
      } else {
        res.json({
          domain: domain,
          dnsRecords: records,
          expirationDate: expirationDate,
          ownerInfo: ownerInfo,
        });
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while checking the domain." });
  }
};
