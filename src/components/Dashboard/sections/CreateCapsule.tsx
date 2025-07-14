import React, { useState } from 'react';
import { capsuleFormList } from '@/utils/lists';
import { createCapsule } from '@/axios_helper'; // Asegúrate de importar correctamente
import type { CapsuleDto } from '@/components/interfaces/Capsule';

const CreatecapsuleForm = () => {
  let step = 2;

  const [formData, setFormData] = useState<CapsuleDto>({
    title: '',
    description: '',
    isShared: false,
    isPrivate: false,
    closeDate: undefined,
    CapsuleAvatar: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');
    step = 2;

    try {
      const capsule: CapsuleDto = {
        ...formData,
        // transforma fecha si hace falta
      };

      await createCapsule(capsule); // llamada a la función de la API
      setSuccessMsg('Capsule created successfully 🚀');
      setFormData({
        title: '',
        description: '',
        isShared: false,
        isPrivate: false,
        closeDate: undefined,
        CapsuleAvatar: '',
      });
    } catch (err) {
      setErrorMsg('Error creating capsule.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 text-white font-sans">
      <div className="w-full max-w-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-white tracking-wider drop-shadow-glow">
          Create a Time Capsule
        </h2>

        {step === 1 ? (
          <>
            {capsuleFormList.map((form, index) => {
              const isCheckbox = form.type === 'checkbox';

              return (
                <div
                  key={index}
                  className={`${
                    form.layout === 'inline' ? 'flex items-center gap-4' : 'flex flex-col'
                  }`}>
                  <label
                    htmlFor={form.name}
                    className={`text-sm font-semibold tracking-wide ${
                      form.layout === 'inline' ? '' : 'mb-2'
                    }`}>
                    {form.label}
                  </label>

                  <input
                    id={form.name}
                    name={form.name}
                    type={form.type}
                    value={
                      !isCheckbox
                        ? (formData[form.name as keyof CapsuleDto] as string) ?? ''
                        : undefined
                    }
                    checked={
                      isCheckbox ? Boolean(formData[form.name as keyof CapsuleDto]) : undefined
                    }
                    placeholder={form.placeholder}
                    onChange={handleChange}
                    className={`${
                      isCheckbox
                        ? 'h-5 w-5 accent-indigo-500'
                        : 'bg-transparent border-b border-gray-700/50 text-white placeholder-white/50 p-3 focus:outline-none focus:border-b-blue-700 transition-all rounded'
                    }`}
                  />
                </div>
              );
            })}

            {errorMsg && <p className="text-red-400">{errorMsg}</p>}
            {successMsg && <p className="text-green-400">{successMsg}</p>}

            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold tracking-wide shadow-lg shadow-indigo-500/20 transition duration-200">
                {loading ? 'Creating...' : 'Create'}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              <label className=" text-sm font-semibold mb-2">Upload Media</label>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                // onChange={handleMediaUpload} // Esta función actualizaría otro estado
                className="text-white file:bg-indigo-600 file:text-white file:rounded file:px-4 file:py-2 file:border-0 file:cursor-pointer "
              />
              <button
                className="mt-6  bg-blue-600 py-2 px-4 rounded text-white cursor-pointer"
                // onClick={handleSubmitMedia}
              >
                Upload
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CreatecapsuleForm;
