import { generateMetadata } from '@/lib/metadata';
import { getPost } from '@/lib/posts';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);

  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    ogImage: post.featuredImage,
    publishedTime: post.date,
    modifiedTime: post.lastUpdated,
  });
}

// ... rest of page component
