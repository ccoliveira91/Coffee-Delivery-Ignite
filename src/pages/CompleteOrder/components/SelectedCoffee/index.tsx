import { TitleText } from '../../../../components/Typography';
import { CartCoffeeCard } from '../CartCoffeeCard';
import { DetailsContainer, SelectedCoffeeContainer } from './styles';

export function SelectedCoffee() {
  return (
    <SelectedCoffeeContainer>
      <TitleText size="xs" weight={700} color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <CartCoffeeCard />
      </DetailsContainer>
    </SelectedCoffeeContainer>
  );
}
