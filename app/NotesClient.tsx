'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import Pagination from '@/components/Pagination/Pagination';
import SearchBox from '@/components/SearchBox/SearchBox';

export default function NotesClient() {
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
    queryKey: ['notes', 'all', debouncedSearch, page],
    queryFn: () => fetchNotes(undefined, debouncedSearch, page),
    retry: false,
  });

  if (isError) return <p>Error loading notes. Please try again.</p>;

  return (
    <div>
      <div>
        <SearchBox value={search} onChange={setSearch} />
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
            />
          )}
        </>
      )}
    </div>
  );
}
