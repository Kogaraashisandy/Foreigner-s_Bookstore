interface miBotoncitoProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function MBotoncito({ children, ...rest }: miBotoncitoProps) {
  return <button {...rest}>{children}</button>;
}

export default MBotoncito;
