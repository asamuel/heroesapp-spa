import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../index";
import { Navbar } from "../../ui/index";

export const HeroesRoute = () => {
  return (
    <>
      <Navbar/>

      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
