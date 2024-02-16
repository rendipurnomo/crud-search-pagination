"use client"

import Link from 'next/link';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';
import { usePathname,useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { generatePagination } from '@/lib/utils';

const Pagination = ({totalPages}: {totalPages: number}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams?.get('page')) || 1;

  const createPageURL = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  const AllPages = generatePagination(currentPage,totalPages );

  const PaginationNumber =({page, href, position, isActive}: {page: number | string, href: string, position?: "first" | "last" | "middle" | "single", isActive: boolean}) => {
    const className = clsx(
      'w-10 h-10 flex items-center justify-center text-sm border rounded-md',{
        "rounded-l-sm": position === "first" || position === "single",
        "rounded-r-sm": position === "last" || position === "single",
        "z-10 bg-blue-100 border-blue-500 text-white": isActive,
        "hover:bg-gray-100": !isActive && position !== "single",
        "text-gray-300 pointer-events-none": "position === 'middle'"
      });
  return isActive && position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  )
};

  const PaginationArrow = ({
    href,
    direction,
    isDisabled
   }: {
    href: string;
    direction: "left" | "right";
    isDisabled: boolean;
   }) => {
    const className = clsx(
      'w-10 h-10 flex items-center justify-center text-sm border rounded-md',{
        "pointer-events-none text-gray-300": isDisabled,
        "hover:bg-gray-100": !isDisabled,
        "mr-2": direction === "left",
        "ml-2": direction === "right"
      }
    );

    const icon = direction === "left" ? (
      <HiChevronLeft size={20} />
    ): (
      <HiChevronRight size={20} />
    );

    return (
      isDisabled ? (
        <div className={className}>{icon}</div>
      ) : (
        <Link href={href} className={className}>
          {icon}
        </Link>
      )
    )
   }

return (
  <div className='inline-flex '>
    <PaginationArrow href={createPageURL(currentPage - 1)} direction="left" isDisabled={currentPage <= 1} />

    <div className='flex -space-x-px'>{AllPages.map((page,index)=>{
      let position: "first" | "last" | "middle" | "single" | undefined;

      if(index === 0){
        position = "first";
      } 
      if(index === AllPages.length - 1){
        position = "last";
      }
      if(AllPages.length === 1){
        position = "single"
      }
      if(page === "..."){
        position = "middle"
      }
      return <PaginationNumber
        key={index}
        page={page}
        href={createPageURL(page)}
        position={position}
        isActive={page === currentPage}
      />
    })}</div>

    <PaginationArrow href={createPageURL(currentPage + 1)} direction="right" isDisabled={currentPage >= totalPages} />
  </div>
)

}

export default Pagination