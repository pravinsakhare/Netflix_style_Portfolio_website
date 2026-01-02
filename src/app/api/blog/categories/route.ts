import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// GET all categories with post counts
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('blogs');

    const categories = await collection
      .aggregate([
        {
          $group: {
            _id: '$category',
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            name: '$_id',
            slug: { $toLower: { $replaceAll: { input: '$_id', find: ' ', replacement: '-' } } },
            count: 1,
            _id: 0,
          },
        },
        { $sort: { count: -1 } },
      ])
      .toArray();

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { message: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
