import { CreditCard } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../../../contexts/CartContext';
import { PaymentInputContainer } from './styles';

export function PaymentInput() {

  return (
    <PaymentInputContainer>
      <CreditCard size={16} />
      Cartão de crédito
    </PaymentInputContainer>
  );
}
