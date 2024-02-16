export const TableSkeleton = () => {
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
      <tbody className="animate-pulse">
        <tr className="bg-white border-b border-gray-50">
          <th className="px-6 py-3">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-20 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="flex items-center justify-center gap-1 py-3">
            <div className="w-7 h-7 bg-gray-200 rounded-sm"></div>
            <div className="w-7 h-7 bg-gray-200 rounded-sm"></div>
          </th>
        </tr>
        <tr className="bg-white border-b border-gray-50">
          <th className="px-6 py-3">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-20 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="flex items-center justify-center gap-1 py-3">
            <div className="w-7 h-7 bg-gray-200 rounded-sm"></div>
            <div className="w-7 h-7 bg-gray-200 rounded-sm"></div>
          </th>
        </tr>
        <tr className="bg-white border-b border-gray-50">
          <th className="px-6 py-3">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-20 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="flex items-center justify-center gap-1 py-3">
            <div className="w-7 h-7 bg-gray-200 rounded-sm"></div>
            <div className="w-7 h-7 bg-gray-200 rounded-sm"></div>
          </th>
        </tr>
        <tr className="bg-white border-b border-gray-50">
          <th className="px-6 py-3">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-20 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="flex items-center justify-center gap-1 py-3">
            <div className="w-7 h-7 bg-gray-200 rounded-sm"></div>
            <div className="w-7 h-7 bg-gray-200 rounded-sm"></div>
          </th>
        </tr>
        <tr className="bg-white border-b border-gray-50">
          <th className="px-6 py-3">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-20 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="px-6 py-3">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          </th>
          <th className="flex items-center justify-center gap-1 py-3">
            <div className="w-7 h-7 bg-gray-200 rounded-sm"></div>
            <div className="w-7 h-7 bg-gray-200 rounded-sm"></div>
          </th>
        </tr>
      </tbody>
    </table>
  );
};
