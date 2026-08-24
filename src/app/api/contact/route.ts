import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, services, budget, details } = body;

    // Server-side basic validation
    if (!name || !email || !phone || !services || services.length === 0 || !budget || !details) {
      return NextResponse.json(
        { success: false, error: 'All fields (name, email, phone, services, budget, details) are required.' },
        { status: 400 }
      );
    }

    // Simulated database save or CRM ingestion log
    console.log('====== NEW LEAD RECEIVED ======');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Company: ${body.company || 'N/A'}`);
    console.log(`Services Requested: ${services.join(', ')}`);
    console.log(`Budget Range: ${budget}`);
    console.log(`Project Scope: ${details}`);
    console.log('===============================');

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Inquiry successfully logged in development CRM database.' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
