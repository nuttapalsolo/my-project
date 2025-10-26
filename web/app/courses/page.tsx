import type { Course } from "@/lib/courses";

async function getCourses(): Promise<Course[]> {
  const res = await fetch("http://localhost:3000/api/courses", { cache: "no-store" });
  if (!res.ok) throw new Error("โหลดคอร์สไม่สำเร็จ");
  const json = (await res.json()) as { ok: boolean; data: Course[] };
  return json.data;
}

export default async function CoursesPage() {
  const courses = await getCourses();
  return (
    <section style={{ display: "grid", gap: 8 }}>
      <h2>คอร์สทั้งหมด</h2>
      {courses.map((c) => (
        <div key={c.id} style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}>
          <b>{c.title}</b>
          {c.description && <p style={{ margin: 0 }}>{c.description}</p>}
        </div>
      ))}
    </section>
  );
}