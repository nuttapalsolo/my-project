export type Course = { id: string; title: string; description?: string };

export const COURSES: Course[] = [
  { id: "react-basic", title: "React พื้นฐาน", description: "เริ่มที่ hooks และ JSX" },
  { id: "next-ts", title: "Next + TS", description: "App Router + Types" },
];