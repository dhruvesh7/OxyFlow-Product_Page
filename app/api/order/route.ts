import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, hospitalName, email, phone, quantity } = body;

    // Basic validation
    if (!name || !hospitalName || !email || !phone || !quantity) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.warn("GOOGLE_SCRIPT_URL is not set. Order logged locally:", {
        name,
        hospitalName,
        email,
        phone,
        quantity,
      });
      return NextResponse.json({ success: true, stored: "local" }, { status: 200 });
    }

    // Forward the data to Google Apps Script Webhook
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        hospitalName,
        email,
        phone,
        quantity,
        totalPrice: quantity * 2500,
        monthlyMaint: 199,
        date: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error(`Google Script returned status ${response.status}`);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error saving order to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
