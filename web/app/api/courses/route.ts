import { NextResponse } from "next/server";
import { COURSES } from "@/lib/courses";

export async function GET() {
  return NextResponse.json({ ok: true, data: COURSES });
}