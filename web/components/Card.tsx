type CardProps = {
  title: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function Card({ title, children, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}
    >
      <b>{title}</b>
      <div>{children}</div>
    </div>
  );
}