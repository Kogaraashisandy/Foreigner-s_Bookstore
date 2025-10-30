interface MiBotoncito {
  title: string;
  disabled?: boolean;
  onClick: () => void;
  color?: "azul" | "rojo" | "verde";
}

function Botoncito({ title, disabled, onClick, color = "azul" }: MiBotoncito) {
  const colores = {
    azul: "#007bff",
    rojo: "#dc3545",
    verde: "#28a745",
  };
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{ backgroundColor: colores[color] }}
    >
      {title}
    </button>
  );
}

export default Botoncito;
