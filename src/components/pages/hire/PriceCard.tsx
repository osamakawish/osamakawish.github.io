import "./PriceCard.css";
import { PriceInfo, PriceTier } from "./Prices";

type Props = PriceInfo & {
  priceTier: PriceTier;
  selected: boolean;
  updateParams: (newTier: PriceTier) => void;
};

export default function PriceCard({
  priceTier,
  title,
  price,
  description,
  features,
  selected,
  updateParams,
}: Props) {
  return (
    <div
      className="price-card"
      id={selected ? "selectedPriceTier" : ""}
      onClick={() => updateParams(priceTier)}
    >
      <img
        src={`/hire/${priceTier.toLowerCase()}.png`}
        className="price-tier-image"
      />
      <div className="price-card-text">
        <p className="tier-p">Tier</p>
        <h1>{priceTier}</h1>
        <h3>{title}</h3>
        <h4>{price}</h4>
        <p>{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
