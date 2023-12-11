import ItemCard from "./components/itemcard";
import * as images from "./images";

export default function Home() {
  return (
    <main className="text-white container mx-auto">
      <div className="mt-20">
        {/* itemcards ar */}
        <div className="p-4 text-l font-bold ">Assault rifles</div>
        <div className="grid grid-cols-3 gap-5 w-full justify-center">
          <ItemCard
            imageSrc={images.mtz556}
            title="mtz-556"
            description="ar"
            imageScrCamo1={images.orangetones}
            imageScrCamo2={images.irisglitch}
            imageScrCamo3={images.germfactory}
            imageScrCamo4={images.purple}
            imageScrCamogilded={images.gilded}
            imageScrCamoforged={images.forged}
            imageScrCamopriceless={images.priceless}
          />

          <ItemCard
            imageSrc={images.mcw}
            title="mcw"
            description="ar"
            imageScrCamo1={images.razorfeather}
            imageScrCamo2={images.skullflagration}
            imageScrCamo3={images.abyssalfox}
            imageScrCamo4={images.menelaus}
            imageScrCamogilded={images.gilded}
            imageScrCamoforged={images.forged}
            imageScrCamopriceless={images.priceless}
          />

          <ItemCard
            imageSrc={images.sva45}
            title="sva-45"
            description="ar"
            imageScrCamo1={images.bluetones}
            imageScrCamo2={images.topomuddy}
            imageScrCamo3={images.cinders}
            imageScrCamo4={images.monarch}
            imageScrCamogilded={images.gilded}
            imageScrCamoforged={images.forged}
            imageScrCamopriceless={images.priceless}
          />

          <ItemCard
            imageSrc={images.dg58}
            title="dg-58"
            description="ar"
            imageScrCamo1={images.heatmap}
            imageScrCamo2={images.creeplines}
            imageScrCamo3={images.twilightglitch}
            imageScrCamo4={images.oakleaf}
            imageScrCamogilded={images.gilded}
            imageScrCamoforged={images.forged}
            imageScrCamopriceless={images.priceless}
          />

          <ItemCard
            imageSrc={images.fr556}
            title="fr-556"
            description="ar"
            imageScrCamo1={images.getstony}
            imageScrCamo2={images.digitalbloodbath}
            imageScrCamo3={images.nightshade}
            imageScrCamo4={images.tigerblood}
            imageScrCamogilded={images.gilded}
            imageScrCamoforged={images.forged}
            imageScrCamopriceless={images.priceless}
          />

          <ItemCard
            imageSrc={images.holger556}
            title="holger-556"
            description="ar"
            imageScrCamo1={images.fractaldirt}
            imageScrCamo2={images.magmaheat}
            imageScrCamo3={images.paletterosemary}
            imageScrCamo4={images.topoglitch}
            imageScrCamogilded={images.gilded}
            imageScrCamoforged={images.forged}
            imageScrCamopriceless={images.priceless}
          />
        </div>
      </div>
    </main>
  );
}