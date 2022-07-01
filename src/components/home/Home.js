import { Item } from "../pages/Item";
import { Product } from "../pages/Product";
import { Concept } from "./Concept";
import { MainBanner } from "./MainBanner";

export const Home = () => {
  return (
    <div>
      <MainBanner />
      <Concept />
      <Product />
      <Item />
    </div>
  );
};
