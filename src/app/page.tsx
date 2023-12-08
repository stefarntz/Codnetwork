import ItemCard from "./components/itemcard";
// import dg-58 and camos
import dg58 from "../assets/guns/ar/dg-58/dg-58-call-of-duty-mw3.png";
// import fr-556 and camos
import fr556 from "../assets/guns/ar/fr-556/fr_556-call-of-duty-mw3.png";
// import holger-556 and camos
import holger556 from "../assets/guns/ar/holger-556/holger_556-call-of-duty-mw3.png";
import fractaldirt from "../assets/guns/ar/holger-556/fractal-dirt.png";
import magmaheat from "../assets/guns/ar/holger-556/magma-heat.png";
import paletterosemary from "../assets/guns/ar/holger-556/palette-rosemary.png";
import topoglitch from "../assets/guns/ar/holger-556/topo-glitch.png";
// import mcw and camos
import mcw from "../assets/guns/ar/mcw/mcw-call-of-duty-mw3.png";
import razorfeather from "../assets/guns/ar/mcw/razor-feather.png";
import skullflagration from "../assets/guns/ar/mcw/skullflagration.png";
import abyssalfox from "../assets/guns/ar/mcw/abyssal-fox.png";
import menelaus from "../assets/guns/ar/mcw/menelaus-blue.png";
// import mtz-556 and camos
import mtz556 from "../assets/guns/ar/mtz-556/mtz-556-call-of-duty-mw3.png";
import orangetones from "../assets/guns/ar/mtz-556/orange-tones.png";
import irisglitch from "../assets/guns/ar/mtz-556/iris-glitch.png";
import germfactory from "../assets/guns/ar/mtz-556/germ-factory.png";
import purple from "../assets/guns/ar/mtz-556/purple.png";
// import sva-45 and camos
import sva45 from "../assets/guns/ar/sva-45/sva-45-call-of-duty-mw3.png";
import bluetones from "../assets/guns/ar/sva-45/blue-tones.png";
import topomuddy from "../assets/guns/ar/sva-45/topo-muddy.png";
import cinders from "../assets/guns/ar/sva-45/cinders.png";
import monarch from "../assets/guns/ar/sva-45/monarch.png";
//
import gun7 from "../assets/guns/amr9-call-of-duty-mw3.png";
import gun8 from "../assets/guns/rival-9-call-of-duty-mw3.png";
import gun9 from "../assets/guns/striker-call-of-duty-mw3.png";
import gun10 from "../assets/guns/striker-9-call-of-duty-mw3.png";
import gun11 from "../assets/guns/wsp_swarm-call-of-duty-mw3.png";
import gun12 from "../assets/guns/wsp-9-call-of-duty-mw3.png";
import gildedcamo from "../assets/mastery/gilded_wm_155.jpg";
import forgedcamo from "../assets/mastery/forged_wm_155.jpg";
import pricelesscamo from "../assets/mastery/priceless_wm_155.jpg";

export default function Home() {
  return (
    <main className="text-white container mx-auto">
      <div className="mt-20">
        {/* itemcards ar */}
        <div className="p-4 text-l font-bold ">Assault rifles</div>
        <div className="grid grid-cols-3 gap-5 w-full justify-center">
          <ItemCard
            imageSrc={mtz556}
            title="mtz-556"
            description="ar"
            imageScrCamo={orangetones}
            imageScrCamo2={irisglitch}
            imageScrCamo3={germfactory}
            imageScrCamo4={purple}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={mcw}
            title="mcw"
            description="ar"
            imageScrCamo={razorfeather}
            imageScrCamo2={skullflagration}
            imageScrCamo3={abyssalfox}
            imageScrCamo4={menelaus}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={sva45}
            title="sva-45"
            description="ar"
            imageScrCamo={bluetones}
            imageScrCamo2={topomuddy}
            imageScrCamo3={cinders}
            imageScrCamo4={monarch}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={dg58}
            title="dg-58"
            description="ar"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={fr556}
            title="fr-556"
            description="ar"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={holger556}
            title="holger-556"
            description="ar"
            imageScrCamo={fractaldirt}
            imageScrCamo2={magmaheat}
            imageScrCamo3={paletterosemary}
            imageScrCamo4={topoglitch}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />
        </div>

        {/* itemcards smg */}
        {/* <div className="p-4 text-l font-bold ">Submachine guns</div>
        <div className="grid grid-cols-3 gap-5 w-full justify-center">
          <ItemCard
            imageSrc={gun7}
            title="amr9"
            description="smg"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun8}
            title="rival-9"
            description="smg"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun9}
            title="striker"
            description="smg"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun10}
            title="striker-9"
            description="smg"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun11}
            title="wsp-swarm"
            description="smg"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />

          <ItemCard
            imageSrc={gun12}
            title="wsp-9"
            description="smg"
            imageScrCamo={""}
            imageScrCamo2={""}
            imageScrCamo3={""}
            imageScrCamo4={""}
            imageScrCamogilded={gildedcamo}
            imageScrCamoforged={forgedcamo}
            imageScrCamopriceless={pricelesscamo}
          />
        </div> */}
      </div>
    </main>
  );
}
