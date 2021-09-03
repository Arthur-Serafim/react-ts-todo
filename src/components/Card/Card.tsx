import React from "react";
import "./Card.css";

interface CardProps {
  title: String;
  data: Array<any>;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="card-container">
      <p className="card-title">{title}</p>
    </div>
  );
};

export default Card;
