/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const ip2location = require("ip-to-location");

type Data = {
  message: string;
  locationInfo: string;
};
type LocationInfo = {
  country_code: string;

  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  isp: string;
  zip_code: string;
  time_zone: string;
  latitude: number;
  longitude: number;
};
type clientsCreateInput = {
  ip?: string | null;
  agent?: string | null;
  location?: LocationInfo;
  referer?: string | null;
  timestamp?: string | null;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // await client.connect()
  // get the user's IP address and user-agent
  const userIp = req.headers["x-real-ip"] || req.connection.remoteAddress;
  if (userIp === undefined) {
    return;
  }
  const userAgent = req.headers["user-agent"];
  const referer = req.headers["referer"];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const locationInfo: LocationInfo = await ip2location.fetch(userIp);
  const ts = new Date().toUTCString();
  console.log(userIp);
  console.log(locationInfo);

  //   const newClient: clientsCreateInput = {
  //     ip: typeof(userIp) === 'string' ? userIp : userIp[0],
  //     agent: userAgent,
  //     location: locationInfo,
  //     referer: referer,
  //     timestamp: ts.toString()
  //   }

  // if (locationInfo.city) {

  //     try {
  //       const scriptURL = 'https://script.google.com/macros/s/AKfycbzubOC4zq3DQl2JAR1WkGw39hyRB2Y-MzdoQ2THgFlOtnAwiXrFv5mhnQhxehscUQjT_Q/exec'
  //       const formData = new FormData();
  //       formData.append("ip", newClient.ip || "")
  //       formData.append("agent", newClient.agent || "")
  //       formData.append('location', JSON.stringify(newClient.location) || "")
  //       formData.append('timestamp', newClient.timestamp || "")
  //       // const gSheets = await fetch(scriptURL, { method: 'POST', headers: {
  //       // }, body: formData})

  //       // insert the user information into the database
  //       // await client.query('INSERT INTO clients (ip, agent, location, referer, timestamp) VALUES ($1, $2, $3, $4, $5)', [userIp, userAgent, locationInfo, referer, ts.toString()]);
  //       // const result = await fetch('https://capcut-tools-api-production.up.railway.app/clients',
  //       // {
  //       //   method: 'POST',
  //       //   headers: {
  //       //     'Content-Type': 'application/json'
  //       //   },
  //       //   body: JSON.stringify(newClient),
  //       // }

  //       // )

  //       res.status(200).json({ message: JSON.stringify(newClient.location) })
  //       // console.log(gSheets);
  //     } catch (err) {
  //       // close the client
  //       // client.end();
  //     }
  // }
  res
    .status(200)
    .json({
      message: userIp.toString(),
      locationInfo: JSON.stringify(locationInfo),
    });
}
