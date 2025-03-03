import React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="card-container">
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
