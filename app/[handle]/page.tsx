import { NavBar } from "@/app/components/header";
import TheOffer from "../offer";
import Headless from "../headless";
import TheAgency from "../agency";

export default function Page({ params }: { params: { handle: string } }) {
  if (params.handle == "offer")
    return (
      <>
        <TheOffer />
      </>
    );
  if (params.handle == "agency")
    return (
      <>
        <TheAgency />
      </>
    );
  if (params.handle == "headless")
    return (
      <>
        <Headless />
      </>
    );
}
