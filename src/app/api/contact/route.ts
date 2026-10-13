import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  phone?: string;
  area?: string;
  message?: string;
}

const PHONE_REGEX = /^(?=(?:\D*\d){7,})[\d\s()+-]{7,20}$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Некоректний формат запиту" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";

  if (name.length < 2) {
    return NextResponse.json(
      { error: "Вкажіть, будь ласка, ваше ім'я" },
      { status: 400 }
    );
  }

  if (!PHONE_REGEX.test(phone)) {
    return NextResponse.json(
      { error: "Перевірте формат номера телефону" },
      { status: 400 }
    );
  }

  // Integration point: forward the lead to Resend/Telegram/Google Sheets here.
  console.log("New lead:", { name, phone, area: body.area, message: body.message });

  return NextResponse.json({ ok: true });
}