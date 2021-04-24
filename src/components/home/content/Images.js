import image1 from "../../../images/bergen-1.jpg";
import image2 from "../../../images/bergen-2.jpg";

export default function Images() {
  return (
    <div className="image-container">
      <div className="image-container__inner image-container__inner--first">
        <img
          className="image-container__inner__img"
          src={image1}
          alt="Fløyen, Bergen"
        />
        <p className="image-container__text">Fløyen</p>
      </div>
      <div className="image-container__inner image-container__inner--second">
        <img
          className="image-container__inner__img"
          src={image2}
          alt="Bryggen, Bergen"
        />
        <p className="image-container__text">Bryggen</p>
      </div>
    </div>
  );
}
