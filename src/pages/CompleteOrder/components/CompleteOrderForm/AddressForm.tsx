import { useForm } from 'react-hook-form';
import { Input } from '../../../../components/Input';
import { AddressFormContainer } from './styles';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

const addressFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'CEP deve conter 8 dígitos').max(8),
  rua: zod.string().min(1),
  numero: zod.string().min(1),
  complemento: zod.string(),
  bairro: zod.string().min(1),
  cidade: zod.string().min(1),
  uf: zod.string().min(1).max(2),
});

type NewAddressFormData = zod.infer<typeof addressFormValidationSchema>;

export function AddressForm() {
  const addressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento:'',
      bairro: '',
      cidade: '',
      uf: '',
    },
    mode: 'onChange',
  });

  const {
    register,
    reset,
    formState,
  } = addressForm;

  console.log(reset)

  return (
    <AddressFormContainer>
      <Input placeholder="CEP" className="cep" {...register('cep')} />
      <Input placeholder="Rua" className="street" {...register('rua')} />
      <Input placeholder="Número" type="number" {...register('numero')} />
      <Input placeholder="Complemento" className="complement" {...register('complemento')} />
      <Input placeholder="Bairro" {...register('bairro')} />
      <Input placeholder="Cidade" {...register('cidade')} />
      <Input placeholder="UF" {...register('uf')} />
    </AddressFormContainer>
  );
}
