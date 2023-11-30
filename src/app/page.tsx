import ItemCard from "./components/itemcard";
import gun1 from "../assets/dg-58-call-of-duty-mw3.png";
import gun2 from "../assets/fr_556-call-of-duty-mw3.png";
import gun3 from "../assets/holger_556-call-of-duty-mw3.png";
import gun4 from "../assets/mcw-call-of-duty-mw3.png";
import gun5 from "../assets/mtz-556-call-of-duty-mw3.png";
import gun6 from "../assets/sva-45-call-of-duty-mw3.png";

export default function Home() {
  return (
    <main className="text-white container mx-auto">
      <div className="mt-20">
        <div className="p-6 text-xl font-bold flex flex-col items-center">Multiplayer</div>

        <div className="p-6 text-l font-bold ">Assault rifles</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full justify-center">
          <ItemCard imageSrc={gun5} title="mtz-556" />

          <ItemCard imageSrc={gun4} title="mcw" />

          <ItemCard imageSrc={gun6} title="sva-45" />

          <ItemCard imageSrc={gun1} title="dg-58" />

          <ItemCard imageSrc={gun2} title="fr-556" />

          <ItemCard imageSrc={gun3} title="holger-556" />
        </div>
      </div>
    </main>
  );
}
