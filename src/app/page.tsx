import ItemCard from "./components/itemcard";
import gun1 from "../assets/dg-58-call-of-duty-mw3.png";
import gun2 from "../assets/fr_556-call-of-duty-mw3.png";
import gun3 from "../assets/holger_556-call-of-duty-mw3.png";

export default function Home() {
  return (
    <main className="text-white container mx-auto">
      <div className="flex flex-col items-center mt-20">
        <div className="p-6 text-xl font-bold">Multiplayer</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 w-full justify-center">
          <ItemCard imageSrc={gun1} title="Item 1" />

          <ItemCard imageSrc={gun2} title="Item 2" />

          <ItemCard imageSrc={gun3} title="Item 3" />

          <ItemCard imageSrc={gun3} title="Item 3" />

          <ItemCard imageSrc={gun3} title="Item 3" />

          <ItemCard imageSrc={gun3} title="Item 3" />

          <ItemCard imageSrc={gun3} title="Item 3" />
        </div>
      </div>
    </main>
  );
}
