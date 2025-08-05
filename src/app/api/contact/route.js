import { connectToDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req) {
  const body = await req.json();

  try {
    await connectToDB();
    const contact = await Contact.create(body);
    return Response.json({ success: true, contact });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDB();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return Response.json({ success: true, contacts });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
