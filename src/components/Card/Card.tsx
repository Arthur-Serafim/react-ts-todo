import React from "react";
import CardItem from "../CardItem";
import "./Card.css";

interface CardProps {
  title: String;
  data: Array<string>;
  type: number;
}

const Card: React.FC<CardProps> = ({ title, data, type }) => {
  return (
    <div className="card-container">
      <p className="card-title">{title}</p>
      {data.map((item: string) => (
        <CardItem title={item} type={type} />
      ))}
    </div>
  );
};

export default Card;
