import './StrategyCard.css'


export type StrategyCardProps = {
  id: string;
  title: string;
  description: string;
  expectedReturn: string;
  riskLevel: "Low" | "Medium" | "High";
  selected: boolean;
  onSelect: (id: string) => void;
}

function StrategyCard({
  id,
  title,
  description,
  expectedReturn,
  riskLevel,
  selected,
  onSelect
}: StrategyCardProps) {
  return (
    <div 
    className={`strategy-card ${selected ? 'selected' : ''}`}
    onClick={() => onSelect(id)}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Expected Return: {expectedReturn}</p>
      <p className={`risk ${riskLevel.toLowerCase()}`}>Risk: {riskLevel}</p>
    </div>
  );
}
export default StrategyCard;