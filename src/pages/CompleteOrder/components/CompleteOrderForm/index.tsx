import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { SectionTitle } from '../SectionTitle';
import { AddressForm } from './AddressForm';
import { PaymentOptions } from './PaymentOptions';
import {
  CompleteOrderFormContainer,
  FormSectionContainer,
  FormTitle,
} from './styles';

export function CompleteOrderForm() {
  const { colors } = useTheme();
  return (
    <CompleteOrderFormContainer>
      <FormTitle>Complete seu pedido</FormTitle>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
        />

        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color={colors['brand-purple']} size={22} />}
        />
        <PaymentOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}
