'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import Pagination from '@/components/Pagination/Pagination';
import SearchBox from '@/components/SearchBox/SearchBox';

export default function NotesClient({ tag }: { tag: string | string[] }) {
  const currentTag = Array.isArray(tag) ? tag[0] : tag;

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', currentTag, debouncedSearch, page],
    queryFn: () => fetchNotes(currentTag, debouncedSearch, page),
    retry: false,
  });

  if (isError) return <p>Error loading notes. Please try again.</p>;

  return (
    <div>
      <div>
        <SearchBox value={search} onChange={setSearch} />
        <Link href="/notes/action/create">Create note</Link>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data?.notes?.length > 0 ? (
            <NoteList notes={data.notes} />
          ) : (
            <p>No notes found.</p>
          )}

          {data?.totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={data.totalPages}
              onPageChange={(p: number) => setPage(p)}
              basePath={`/notes/filter/${currentTag}?page=`}
            />
          )}
        </>
      )}
    </div>
  );
}