import { ActivityType } from "../../types/activity";

interface CardProps { 
  activity?: ActivityType;
}

export function Card ({ activity }: CardProps) {
  return (
    <div className="card">
      <h2 className="title-2">Atividade</h2>
      <div className="info">
        <p><strong>Atividade</strong>: {activity?.activity}</p>
        <p><strong>Tipo</strong>: {activity?.type}</p>
        <p><strong>Número de participantes</strong>: {activity?.participants}</p>
        <p><strong>Preço</strong>: {activity?.price}</p>
        <p><strong>Link</strong>: {activity?.link}</p>
        <p><strong>Key</strong>: {activity?.key}</p>
        <p><strong>Acessibilidade</strong>: {activity?.accessibility}</p>
      </div>
    </div>
  );
}