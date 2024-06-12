
import Hero from './Hero';
import SlidingText from './SlidingText'
const Header = () => {
  return (
    <div className="mx-2">
      <SlidingText
        mainText={"Asset Brochure"}
        linkText={"Click here to download Rjy Asset Brochure 2024"}
        link={"#"}
      />
      <Hero />
        
    </div>
  );
}

export default Header