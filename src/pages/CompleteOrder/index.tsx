import { CompleteOrderForm } from './components/CompleteOrderForm';
import { SelectedCoffee } from './components/SelectedCoffee';
import { CompleteOrderContainer } from './styles';

export function CompleteOrder() {
  return (
    <CompleteOrderContainer className='container'>
      <CompleteOrderForm />
      <SelectedCoffee />
    </CompleteOrderContainer>
  );
}
