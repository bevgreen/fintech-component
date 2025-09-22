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
     const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();  // Prevent scrolling when Space is pressed
      onSelect(id);
    }
  }
  return (
    <div 
    className={`strategy-card ${selected ? 'selected' : ''}`}
    onClick={() => onSelect(id)}
       tabIndex={0}    
      role="button" 
      aria-pressed={selected}
      onKeyDown={handleKeyDown}  
      aria-label={`Strategy: ${title}, Risk: ${riskLevel}, Expected Return: ${expectedReturn}`}
      >
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Expected Return: {expectedReturn}</p>
      <p className={`risk ${riskLevel.toLowerCase()}`}>Risk: {riskLevel}</p>
    </div>
  );
}
export default StrategyCard;