import "./PriceCard.css";
import { PriceInfo } from "./Prices";

export default function PriceCard({
  title,
  subtitle,
  image,
  price,
  description,
  features,
}: PriceInfo) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
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
