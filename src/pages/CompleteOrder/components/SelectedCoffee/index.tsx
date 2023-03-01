import { TitleText } from '../../../../components/Typography';
import { CartCoffeeCard } from '../CartCoffeeCard';
import { DetailsContainer, SelectedCoffeeContainer } from './styles';
import { TotalsSelectedCoffee } from './TotalsSelectedCoffe';

export function SelectedCoffee() {
  return (
    <SelectedCoffeeContainer>
      <TitleText size="xs" weight={700} color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <CartCoffeeCard />
        <CartCoffeeCard />
        <CartCoffeeCard />

        <TotalsSelectedCoffee />
      </DetailsContainer>
    </SelectedCoffeeContainer>
  );
}
