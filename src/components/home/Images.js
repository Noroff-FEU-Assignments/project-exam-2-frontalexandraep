import image1 from "../../images/bergen-1.jpg";
import image2 from "../../images/bergen-2.jpg";


export default function Images() {
  return <>
  <div className="image-container">
      <img className="image-container__img" src={image1} alt="Bryggen, Bergen" />
      <img className="image-container__img" src={image2} alt="Bryggen, Bergen" />
      </div></>;
}
