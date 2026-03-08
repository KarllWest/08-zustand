"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { fetchNotes, type FetchNotesResponse } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import Pagination from "@/components/Pagination/Pagination";
import SearchBox from "@/components/SearchBox/SearchBox";
import Loader from "@/components/Loader/Loader";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

export default function NotesClient() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebouncedCallback((q: string) => {
    setQuery(q);
    setPage(1);
  }, 500);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", query, page, "all"],
    queryFn: () => fetchNotes(page, 12, undefined, query),
    placeholderData: (prev: FetchNotesResponse | undefined) => {
      return page > 1 ? prev : undefined;
    },
  });

  const { notes = [], totalPages = 0 } = data ?? {};

  return (
    <div>
      <div>
        <SearchBox onSearch={debouncedSearch} />
        {totalPages > 1 && (
          <Pagination
            pageCount={totalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        )}
      </div>

      {isLoading && <Loader />}
      {isError && <ErrorMessage message="Failed to load notes." />}

      {!isLoading && !isError && notes.length === 0 && (
        <ErrorMessage message="No notes found" />
      )}

      {notes.length > 0 && <NoteList notes={notes} />}
    </div>
  );
}
