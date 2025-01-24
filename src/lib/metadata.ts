export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  type?: 'article' | 'website';
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = '/images/default-og.png',
  type = 'article',
  publishedTime,
  modifiedTime,
}: PageMetadata) {
  return {
    title: `${title} | Decoding Disney`,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: `${title} | Decoding Disney`,
      description,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Decoding Disney`,
      description,
      images: [ogImage],
    },
  };
}
