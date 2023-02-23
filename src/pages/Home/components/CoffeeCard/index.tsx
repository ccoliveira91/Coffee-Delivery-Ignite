import {
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeName,
  CoffeTag,
} from './styles';
import expressotradicional from '../../../../assets/coffees-images/expresso-tradicional.svg';

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expressotradicional} alt="café expresso tradicional" />
      <CoffeTag>
        <span>Tradicional</span>
      </CoffeTag>
      <CoffeeName>
        <span>Expressso Tradicional</span>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeeName>

      <CoffeeCardFooter>
        <div>
          <span>R$</span>
          <h2>
            9,90
          </h2>
        </div>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}
 