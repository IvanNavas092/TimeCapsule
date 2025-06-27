import { useCallback, useState } from 'react';



export function useLoginForm(
  onLogin: (e: React.FormEvent, email: string, password: string) => void,
  onRegister: (e: React.FormEvent, name: string, email: string, password: string) => void,
): {
  activeTab: string;
  showPassword: boolean;
  formData: { name: string; email: string; password: string; };
  fields: { name: string; label: string; type: string; placeholder: string; }[];
  toggleTab: () => void;
  togglePassword: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
} {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleTab = () => {
    setActiveTab((prev) => (prev === 'login' ? 'register' : 'login'));
    setFormData({ name: '', email: '', password: '' });
  };

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );
  

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (activeTab === 'login') {
    onLogin(e, formData.email, formData.password)
  } else {
    onRegister(e, formData.name, formData.email, formData.password)
  }
};

const fields =
  activeTab === 'login'
    ? [
      { name: 'email', label: 'Email', type: 'text', placeholder: '' },
      { name: 'password', label: 'Password', type: 'password', placeholder: '' },
    ]
    : [
      { name: 'name', label: 'Username', type: 'text', placeholder: 'Davidvzz_13' },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'david13@gmail.com' },
      { name: 'password', label: 'Password', type: 'password', placeholder: '********' },
    ];

return {
  activeTab,
  showPassword,
  formData,
  fields,
  toggleTab,
  togglePassword,
  handleChange,
  handleSubmit,
};
}
