'use client';

import Link from 'next/link';
import { IoAdd, IoPencil, IoTrashOutline } from 'react-icons/io5';
import { useFormStatus } from 'react-dom';
import clsx from 'clsx';
import { deleteContact } from '@/lib/actions';

export const CreateButton = () => {
  return (
    <Link
      href="/contact/create"
      className="inline-flex items-center space-x-1 bg-blue-700 hover:bg-blue-800 text-white text-sm py-[9px] px-5 rounded-md">
      <IoAdd size={20} />
      Create
    </Link>
  );
};

export const EditButton = ({id}: { id: string }) => {
  return (
    <Link
      href={`/contact/edit/${id}`}
      className="rounded-md border p-1 hover:bg-gray-100">
      <IoPencil size={20} />
    </Link>
  );
};
export const DeleteButton = ({ id }: { id: string }) => {
  const DeleteContactWithId = deleteContact.bind(null, id);
  return (
    <form action={DeleteContactWithId}>
    <button
      className="rounded-md border p-1 hover:bg-gray-100">
      <IoTrashOutline size={20} />
    </button>
    </form>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  const className = clsx(
    'bg-blue-700 hover:bg-blue-800 text-white text-center text-sm py-3 px-5 rounded-md w-full',
    {
      'opacity-50 cursor-progress': pending,
    }
  );
  return (
    <button disabled={pending} type="submit" className={className}>
      {label === 'save' ? (
        <span>{pending ? 'Saving...' : 'Save'}</span>
      ) : (
        <span>{pending ? 'Updating...' : 'Update'}</span>
      )}
    </button>
  );
};
