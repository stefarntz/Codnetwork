import ItemCard from "./components/itemcard";
import gun1 from "../assets/dg-58-call-of-duty-mw3.png";
import gun2 from "../assets/fr_556-call-of-duty-mw3.png";
import gun3 from "../assets/holger_556-call-of-duty-mw3.png";
import gun4 from "../assets/mcw-call-of-duty-mw3.png";
import gun5 from "../assets/mtz-556-call-of-duty-mw3.png";
import gun6 from "../assets/sva-45-call-of-duty-mw3.png";
import gun7 from "../assets/amr9-call-of-duty-mw3.png";
import gun8 from "../assets/rival-9-call-of-duty-mw3.png";
import gun9 from "../assets/striker-call-of-duty-mw3.png";
import gun10 from "../assets/striker-9-call-of-duty-mw3.png";
import gun11 from "../assets/wsp_swarm-call-of-duty-mw3.png";
import gun12 from "../assets/wsp-9-call-of-duty-mw3.png";

export default function Home() {
  return (
    <main className="text-white container mx-auto">
      <div className="mt-20">
        {/* itemcards ar */}
        <div className="p-4 text-l font-bold ">Assault rifles</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-full justify-center">
          <ItemCard imageSrc={gun5} title="Mtz-556" description="ar" />

          <ItemCard imageSrc={gun4} title="Mcw" description="ar" />

          <ItemCard imageSrc={gun6} title="Sva-45" description="ar" />

          <ItemCard imageSrc={gun1} title="Dg-58" description="ar" />

          <ItemCard imageSrc={gun2} title="Fr-556" description="ar" />

          <ItemCard imageSrc={gun3} title="Holger-556" description="ar" />
        </div>

        {/* itemcards smg */}
        <div className="p-4 text-l font-bold ">Submachine guns</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-full justify-center">
          <ItemCard imageSrc={gun7} title="Amr9" description="smg" />

          <ItemCard imageSrc={gun8} title="Rival-9" description="smg" />

          <ItemCard imageSrc={gun9} title="Striker" description="smg" />

          <ItemCard imageSrc={gun10} title="Striker-9" description="smg" />

          <ItemCard imageSrc={gun11} title="Wsp-swarm" description="smg" />

          <ItemCard imageSrc={gun12} title="Wsp-9" description="smg" />
        </div>
      </div>
    </main>
  );
}
