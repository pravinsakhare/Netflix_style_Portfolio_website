import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// GET all unique tags with counts
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('blogs');

    const tags = await collection
      .aggregate([
        { $unwind: '$tags' },
        {
          $group: {
            _id: '$tags',
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            name: '$_id',
            count: 1,
            _id: 0,
          },
        },
        { $sort: { count: -1 } },
      ])
      .toArray();

    return NextResponse.json(tags);
  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json(
      { message: 'Failed to fetch tags' },
      { status: 500 }
    );
  }
}
