import React from 'react';
import { capsuleFormList } from '@/utils/lists';
import type { CreatecapsuleForm } from '@/utils/lists';
import { z } from 'zod';

const schema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  isShared: z.boolean(),
  isPrivate: z.boolean(),
  createAt: z.date(),
  closeDate: z.date().optional(),
  CapsuleAvatar: z.string().optional(),
  media: z.array(z.instanceof(File)).optional(),
});

function handleSubmit() {
  console.log('enviaod');
}

const CreatecapsuleForm = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 text-white font-sans">
      <div className="w-full max-w-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-white tracking-wider drop-shadow-glow">
          Create a Time Capsule
        </h2>

        {capsuleFormList.map((form, index) => {
          const isCheckbox = form.type === 'checkbox';

          return (
            <div
              key={index}
              className={`${
                form.layout === 'inline'
                  ? 'flex items-center gap-4'
                  : 'flex flex-col'
              }`}
            >
              <label
                htmlFor={form.name}
                className={`text-sm font-semibold tracking-wide ${
                  form.layout === 'inline' ? '' : 'mb-2'
                }`}
              >
                {form.label}
              </label>

              <input
                id={form.name}
                name={form.name}
                type={form.type}
                placeholder={form.placeholder}
                className={`${
                  isCheckbox
                    ? 'h-5 w-5 	'
                    : 'bg-transparent border-b border-gray-700/50 text-white placeholder-white/50 p-3  focus:outline-none focus:border-b-blue-700 focus:border-transparent  transition-all'
                }`}
              />
            </div>
          );
        })}

        <div className="pt-4">
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold tracking-wide shadow-lg shadow-indigo-500/20 transition duration-200"
          >
            Create
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreatecapsuleForm;
