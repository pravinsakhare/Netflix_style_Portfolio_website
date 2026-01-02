import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { BlogPost } from '@/types/blog';

// GET all blog posts
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const featured = searchParams.get('featured');
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');

    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection<BlogPost>('blogs');

    // Build query
    const query: Record<string, unknown> = {};
    if (category) query.category = category;
    if (tag) query.tags = { $in: [tag] };
    if (featured === 'true') query.featured = true;

    const skip = (page - 1) * limit;

    const [posts, totalCount] = await Promise.all([
      collection
        .find(query)
        .sort({ publishedAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      collection.countDocuments(query),
    ]);

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { message: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// POST create a new blog post
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Calculate reading time (average 200 words per minute)
    const wordCount = body.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('blogs');

    const newPost: Omit<BlogPost, '_id'> = {
      title: body.title,
      slug: body.slug || body.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      excerpt: body.excerpt,
      content: body.content,
      coverImage: body.coverImage,
      author: body.author || {
        name: 'Pravin Sakhare',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      },
      category: body.category,
      tags: body.tags || [],
      readingTime,
      publishedAt: new Date(),
      featured: body.featured || false,
      views: 0,
    };

    const result = await collection.insertOne(newPost);

    return NextResponse.json(
      { message: 'Blog post created successfully', id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { message: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
