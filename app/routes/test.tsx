import { useEffect, useState } from "react";
import { ClientOnly } from "~/components/client-only";
import * as pkg from '@frontboi/mondial-relay';
const { ParcelShopSelector, getDeliveryPriceHT } = pkg;
import { ParcelShopID, ParcelShopSelected } from '@frontboi/mondial-relay/types/parcel-shop'
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// export async function loader({
//   }: LoaderFunctionArgs) {
//     const price = getDeliveryPriceHT(3000, "FR")
//     console.log("price in loader:", price)
//     return { priceFromServer: price }
// }

export default function Page() {

    // const data = useLoaderData<typeof loader>()
    const [parcelShop, setParcelShop] = useState<ParcelShopSelected & ParcelShopID>()

    // console.log("server price rendered:", data?.priceFromServer)

    useEffect(() => {
        const price = getDeliveryPriceHT(3000, "FR")
        console.log("client price:", price)
    }, [])
    
    return (
        <div>
            <ClientOnly>
                <ParcelShopSelector
                    weight={3000} // (in grams) optional, filters parcel shops by package weight
                    nbResults={7} // optional (default: 7)
                    deliveryMode="24R" // optional (default: "24R)
                    brandIdAPI="BDTEST" // optional (default: "BDTEST", replace with your Brand Id API value)
                    defaultCountry="FR" // optional (default: "FR")
                    defaultPostcode="59000" // optional (default: "59000")
                    allowedCountries="FR,BG" // optional (default: "FR")
                    onParcelShopSelected={setParcelShop} // setter function when a parcel shop is clicked
                />
            </ClientOnly>
        </div>
    )
}
