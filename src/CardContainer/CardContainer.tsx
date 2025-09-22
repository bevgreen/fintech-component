import './CardContainer.css'
import StrategyCard from '../StrategyCard/StrategyCard'
import { useState } from 'react'

function Cards(){
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const strategies = [
            {
      id: "1",
      title: "Conservative Growth",
      description: "Stable assets with modest growth.",
      expectedReturn: "5% annually",
      riskLevel: "Low" as const,
    },
    {
      id: "2",
      title: "Balanced Strategy",
      description: "Balanced risk and return.",
      expectedReturn: "8% annually",
      riskLevel: "Medium" as const,
    },
    {
      id: "3",
      title: "Aggressive Growth",
      description: "High-risk, high-reward strategy.",
      expectedReturn: "15% annually",
      riskLevel: "High" as const,
    },
    ]
   return (
    <div className="cards-container">
      {strategies.map((s) => (
        <StrategyCard
          key={s.id}
          id={s.id}
          title={s.title}
          description={s.description}
          expectedReturn={s.expectedReturn}
          riskLevel={s.riskLevel}
          selected={selectedId === s.id}
          onSelect={setSelectedId}
        />
      ))}
    </div>
  );
}

export default Cards;
