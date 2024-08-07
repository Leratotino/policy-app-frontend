import FeatureComponent from "./components/feature";
import FooterComponent from "./components/footer";
import HeaderComponent from "./components/header";
import HeroComponent from "./components/hero";
import SolutionComponent from "./components/solution";

export default function Home() {
  return (
    <div class="bg-white">
      <HeaderComponent />
      <HeroComponent />
      <FeatureComponent />
      <SolutionComponent />
      <FooterComponent />
    </div>
  );
}
