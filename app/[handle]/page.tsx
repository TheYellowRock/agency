import { NavBar } from "@/app/components/header";
import TheOffer from "../offer";
import Headless from "../headless";
import TheAgency from "../agency";
import Footer from "../components/footer";

export default function Page({ params }: { params: { handle: string } }) {
  if (params.handle == "offer")
    return (
      <>
        <TheOffer />
        <Footer />
      </>
    );
  if (params.handle == "agency")
    return (
      <>
        <TheAgency />
        <Footer />
      </>
    );
  if (params.handle == "headless")
    return (
      <>
        <Headless />
        <Footer />
      </>
    );
}
