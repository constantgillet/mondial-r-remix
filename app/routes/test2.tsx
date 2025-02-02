import * as pkg from "@frontboi/mondial-relay";
const { getDeliveryPriceHT } = pkg;

import { json } from "@remix-run/node";

export async function loader() {
	const price = getDeliveryPriceHT(1000, "FR");

	return json({ price });
}
