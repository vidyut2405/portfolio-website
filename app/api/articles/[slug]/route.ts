import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const articlesDir = path.join(process.cwd(), 'public/articles');
    const filePath = path.join(articlesDir, `${params.slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontMatter, content } = matter(fileContent);
    
    return NextResponse.json({
      frontMatter,
      content,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load article' },
      { status: 500 }
    );
  }
}