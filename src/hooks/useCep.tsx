import { useEffect, useState } from 'react';

export interface ICep {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
}

export const useCep = ({ cep }: { cep: string | undefined }) => {
  const [ceps, setCep] = useState<ICep[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!cep) return;

    setLoading(true);
    fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
      .then((response) => response.json())
      .then((data) => setCep(data))
      .then(() => setLoading(false));
  }, [cep]);

  return {
    ceps,
    loading,
  };
};
