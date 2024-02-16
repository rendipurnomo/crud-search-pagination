import { getContacts } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { EditButton, DeleteButton } from '@/components/button';

const TableContact = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const contacts = await getContacts(query, currentPage);
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Phone</th>
          <th className="px-6 py-3">CreatedAt</th>
          <th className="px-6 py-3 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={contact.id} className="bg-white border-b">
            <th className="px-6 py-3">{index + 1}</th>
            <th className="px-6 py-3">{contact.name}</th>
            <th className="px-6 py-3">{contact.phone}</th>
            <th className="px-6 py-3">
              {formatDate(contact.createdAt.toString())}
            </th>
            <th className="flex items-center justify-center gap-1 py-3">
              <EditButton id={contact.id} />
              <DeleteButton id={contact.id} />
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContact;
