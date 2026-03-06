import { Metadata } from 'next';
import NotesClient from './Notes.client';

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug[0];

  return {
    title: `Notes tagged "${tag}" | NoteHub`,
    description: `Browse notes filtered by tag: ${tag}`,
    openGraph: {
      title: `Notes tagged "${tag}" | NoteHub`,
      description: `Browse notes filtered by tag: ${tag}`,
      url: `/notes/filter/${tag}`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        },
      ],
    },
  };
}

export default async function FilterPage({ params }: Props) {
  const resolvedParams = await params;
  const currentTag = resolvedParams.slug[0];

  return (
    <div>
      <NotesClient tag={currentTag} />
    </div>
  );
}