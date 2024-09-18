import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "ศรัณย์ ไม้หอม",
    studentId: "660610796",
  });
};
