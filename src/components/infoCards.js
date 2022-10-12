import * as React from "react";
import IconCard from "./iconCard";
import ImageCard from "./imageCard";
import TriangeReverted from "../images/triangle-reverted.svg";
import TriangeRevertedGreen from "../images/triangle-reverted-green.svg";

const InfoCards = (props) => {
  const { data } = props;
  return (
    <div className={`info-cards ${props.green ? "green" : ""}`} id={data.id}>
      {/* {!props.green ? (
        <img
          src={TriangeRevertedGreen}
          alt="triangle"
          className="section-title_triangle"
        />
      ) : (
        <img
          src={TriangeReverted}
          alt="triangle"
          className="section-title_triangle"
        />
      )} */}
      <div className={`section-title`}>
        <p
          className={`title ${
            props.greenText ? "green-text" : "ligth-grey-text"
          }`}
        >
          {data.title}
        </p>
      </div>
      {data.cards.map((card, index) =>
        props.icons ? (
          <IconCard
            icon={props.icons[index]}
            title={card.title}
            description={card.description}
            key={card.title}
            greenText={props.greenText}
          />
        ) : (
          <ImageCard
            image={props.images[index]}
            title={card.title}
            description={card.description}
            key={card.title}
          />
        )
      )}
    </div>
  );
};

export default InfoCards;
