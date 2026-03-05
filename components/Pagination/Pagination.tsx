import Link from 'next/link';
import css from './Pagination.module.css';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  onPageChange?: (page: number) => void; 
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className={css.pagination}>
      {pages.map((page) => (
        <li 
          key={page} 
          className={`${page === currentPage ? css.active : ''}`}
        >
          <Link href={`${basePath}${page}`}>
            {page}
          </Link>
        </li>
      ))}
      
      {currentPage < totalPages && (
        <li>
          <Link href={`${basePath}${currentPage + 1}`}>
            »
          </Link>
        </li>
      )}
    </ul>
  );
}