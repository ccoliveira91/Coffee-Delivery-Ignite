import { Input } from '../../../../components/Input';
import { AddressFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import { useCep } from '../../../../hooks/useCep';

export function AddressForm() {
  const { register, setValue, setFocus } = useForm();
  // const { ceps } = useCep() => {

  } 
  ;

  const checkCEP = (e: string|any) => {
    const cep = e.target.value.replace(/[^0-9,.]+/g, '');
    console.log(cep);
    if (cep) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // register({ name: 'address', value: data.logradouro });
          setValue('street', data.logradouro);
          setValue('neighborhood', data.bairro);
          setValue('city', data.localidade);
          setValue('uf', data.uf);
          setFocus('addressNumber');
        });
    }
  };

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        {...register('cep')}
        className="cep"
        onBlur={useCep}
      />
      <Input placeholder="Rua" {...register('street')} className="street" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" {...register('neighborhood')} />
      <Input placeholder="Cidade" {...register('city')} />
      <Input placeholder="UF" {...register('uf')} />
    </AddressFormContainer>
  );
}
