interface ButtonProps {
  onClick: () => void;
}

export function Button({ onClick }: ButtonProps) {
  return (
    <button className="bt-primary" onClick={onClick}>
      Gerar atividade
    </button>
  )
}