import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, service, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "data", "contacts.json");

  let contacts: any[] = [];
  try {
    const data = fs.readFileSync(filePath, "utf8");
    contacts = JSON.parse(data);
  } catch {
    // file doesn't exist or empty
  }

  contacts.push({
    id: contacts.length + 1,
    name,
    email,
    service: service || null,
    message,
    submittedAt: new Date().toISOString(),
  });

  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));

  return NextResponse.json({ message: "Form submitted successfully" });
}
