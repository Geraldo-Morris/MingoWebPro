import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListTrending from "./crudTrending/ProductList";
import AddTrending from "./crudTrending/AddProduct";
import EditTrending from "./crudTrending/EditProduct";
import ListUpcoming from "./crudUpcoming/ProductList";
import AddUpcoming from "./crudUpcoming/AddProduct";
import EditUpcoming from "./crudUpcoming/EditProduct";
import ListNewreleases from "./crudNewreleases/ProductList";
import AddNewreleases from "./crudNewreleases/AddProduct";
import EditNewreleases from "./crudNewreleases/EditProduct";
import Error from "./components/Error";
import ExplorePage from "./pages/ExplorePage";
import Games from "./pages/Games";
import Genre from "./pages/Genre";
import Support from "./pages/SupportUs";
import Trending from "./pages/Trending";
import NewReleases from "./pages/NewReleases";
import Upcoming from "./pages/Upcoming";
import About from "./pages/About";
import Action from "./pages/Action";
import Adventure from "./pages/Adventure";
import Fps from "./pages/Fps";
import Fighting from "./pages/Fighting";
import Rpg from "./pages/Rpg";
import Fortnite from "./pages/Fortnite";
import ApexLegend from "./pages/ApexLegend";
import Persona5 from "./pages/Persona5";
import Csgo from "./pages/Csgo";
import Zelda from "./pages/Zelda";
import Cod from "./pages/Codmw2";
import Valo from "./pages/Valorant";
import Tekken from "./pages/Tekken7";
import Tos from "./pages/TalesofArise";
import Sf from "./pages/StreetFighter6";
import Rf from "./pages/Redfall";
import Re4 from "./pages/Re4";
import Hsr from "./pages/HonkaiStarRail";
import Gow from "./pages/GodOfWarRagnarok";
import Elden from "./pages/EldenRing";
import DeadIsland2 from "./pages/DeadIsland2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* trending */}
        <Route path="previewTrending" element={<ListTrending />} />
        <Route path="addTrending" element={<AddTrending />} />
        <Route path="/editTrending/:id" element={<EditTrending />} />
        {/* upcoming */}
        <Route path="previewUpcoming" element={<ListUpcoming />} />
        <Route path="addUpcoming" element={<AddUpcoming />} />
        <Route path="/editUpcoming/:id" element={<EditUpcoming />} />
        {/* newreleases */}
        <Route path="previewNewreleases" element={<ListNewreleases />} />
        <Route path="addNewreleases" element={<AddNewreleases />} />
        <Route path="/editNewreleases/:id" element={<EditNewreleases />} />
        {/* main page */}
        <Route path="*" element={<Error />} />
        <Route path="/" element={<ExplorePage />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Genre" element={<Genre />} />
        <Route path="/SupportUs" element={<Support />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/NewReleases" element={<NewReleases />} />
        <Route path="/Upcoming" element={<Upcoming />} />

        {/* Filter Game */}
        <Route path="/Action" element={<Action />} />
        <Route path="/Adventure" element={<Adventure />} />
        <Route path="/Fps" element={<Fps />} />
        <Route path="/Fighting" element={<Fighting />} />
        <Route path="/Rpg" element={<Rpg />} />
        {/* list games */}
        <Route path="/Fortnite" element={<Fortnite />} />
        <Route path="/ApexLegend" element={<ApexLegend />} />
        <Route path="/Csgo" element={<Csgo />} />
        <Route path="/Persona5" element={<Persona5 />} />
        <Route path="/Zelda" element={<Zelda />} />
        <Route path="/Codmw2" element={<Cod />} />
        <Route path="/Valorant" element={<Valo />} />
        <Route path="/Tekken7" element={<Tekken />} />
        <Route path="/TalesOfArise" element={<Tos />} />
        <Route path="/StreetFighter6" element={<Sf />} />
        <Route path="/Redfall" element={<Rf />} />
        <Route path="/ResidentEvil4" element={<Re4 />} />
        <Route path="/HonkaiStarRail" element={<Hsr />} />
        <Route path="/GodOfWarRagnarok" element={<Gow />} />
        <Route path="/EldenRing" element={<Elden />} />
        <Route path="/DeadIsland2" element={<DeadIsland2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
