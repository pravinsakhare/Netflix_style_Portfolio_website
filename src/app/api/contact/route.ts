import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db('portfolio'); // database name
    const collection = db.collection('contacts');

    await collection.insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: 'Message saved successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving contact:', error);

    return NextResponse.json(
      { message: 'Failed to save message' },
      { status: 500 }
    );
  }
}
