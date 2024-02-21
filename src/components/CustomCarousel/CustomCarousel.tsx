import useMediaQuery from "@material-ui/core/useMediaQuery";
import SlickCarousel from "../../ui/SlickCarousel";
import { getImgPath } from "../../utils/getImgPath";
import "./CustomCarousel.css";

export default function CustomCarousel() {
  const isMobile = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(min-width:481px) and (max-width:768px)");

  const device = isMobile ? "m" : isTablet ? "t" : "w";
  const img = getImgPath({ path: "banner", device, count: 4 });

  return (
    <SlickCarousel>
      {img.map((item, index) => (
        <div key={index} className="img-holder">
          <img src={item.path} alt="banner" />
        </div>
      ))}
    </SlickCarousel>
  );
}
