import Card from "@/components/Card";

export default function HomePage() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h1>Next.js + TypeScript เริ่มต้น</h1>
      <Card title="ยินดีต้อนรับ">นี่คือคอมโพเนนต์แรกของคุณ</Card>
    </div>
  );
}