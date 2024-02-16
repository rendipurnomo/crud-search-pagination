'use client';

import { saveContact } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '@/components/button';

const CreateForm = () => {
  const [state, formAction] = useFormState(saveContact, null);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="bg-gray-50 w-full border border-gray-300 text-sm outline-2 rounded-sm focus:ring-blue-500 focus:border-blue-500 block text-gray-900 p-2.5"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="text-red-500 mt-2 text-sm">{state?.Error?.name}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            className="bg-gray-50 w-full border border-gray-300 text-sm outline-2 rounded-sm focus:ring-blue-500 focus:border-blue-500 block text-gray-900 p-2.5"
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="text-red-500 mt-2 text-sm">{state?.Error?.phone}</p>
          </div>
        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="text-red-500 mt-2 text-sm">{state?.message}</p>
        </div>
        <SubmitButton label="save" />
      </form>
    </div>
  );
};

export default CreateForm;
