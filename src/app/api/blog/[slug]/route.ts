import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { BlogPost } from '@/types/blog';

// GET single blog post by slug
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection<BlogPost>('blogs');

    const post = await collection.findOne({ slug });

    if (!post) {
      return NextResponse.json(
        { message: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Increment view count
    await collection.updateOne({ slug }, { $inc: { views: 1 } });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { message: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

// PUT update blog post
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('blogs');

    // Recalculate reading time if content changed
    let readingTime;
    if (body.content) {
      const wordCount = body.content.split(/\s+/).length;
      readingTime = Math.ceil(wordCount / 200);
    }

    const updateData = {
      ...body,
      ...(readingTime && { readingTime }),
      updatedAt: new Date(),
    };

    const result = await collection.updateOne({ slug }, { $set: updateData });

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Blog post updated successfully' });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { message: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE blog post
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('blogs');

    const result = await collection.deleteOne({ slug });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { message: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}
