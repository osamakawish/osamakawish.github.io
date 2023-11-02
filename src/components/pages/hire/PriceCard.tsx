import "./PriceCard.css";
import { PriceInfo } from "./Prices";

export default function PriceCard({
  title,
  price,
  description,
  features,
}: PriceInfo) {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{price}</h4>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
