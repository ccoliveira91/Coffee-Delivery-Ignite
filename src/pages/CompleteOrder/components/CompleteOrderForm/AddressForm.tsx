import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../components/Input';
import { AddressFormContainer } from './styles';

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();
  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressFormContainer>
      <Input placeholder="CEP" className="cep" {...register('cep')} error={errors.cep?.message} />
      <Input placeholder="Rua" className="street" {...register('rua')} error={errors.rua?.message}/>
      <Input placeholder="Número" type="number" {...register('numero')} error={errors.numero?.message}/>
      <Input
        placeholder="Complemento"
        className="complement"
        {...register('complemento')}
      />
      <Input placeholder="Bairro" {...register('bairro')} error={errors.bairro?.message} />
      <Input placeholder="Cidade" {...register('cidade')} error={errors.cidade?.message} />
      <Input placeholder="UF" {...register('uf')} error={errors.uf?.message} />
    </AddressFormContainer>
  );
}
