import Category from "../../components/category/category";
import HeroSection from "../../components/heroSection/heroSection";
import HomePageProductCard from "../../components/homePageProductCard/homePageProductCard";
import LayOut from "../../components/layout/layout";
import Testimonial from "../../components/testimonial/testimonial";
import Track from "../../components/track/track";
function HomePage() {

  return (
    <LayOut>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial/>
      {/* <Loader/> */}
    </LayOut>
  );
}
export default HomePage;
