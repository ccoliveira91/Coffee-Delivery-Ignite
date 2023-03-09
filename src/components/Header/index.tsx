import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from './styles';
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Header() {
  const { orderState } = useContext(CartContext);
  // const countItems = orderState.items.reduce((a, b) => {return a + b.quantity; }, 0);

  const countItems = orderState.items.reduce((count, items) => {
    return count + items.quantity;
  }, 0);

  console.log(countItems);

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Cedral, SP
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {/* {countItems >= 1 && <span>{countItems}</span>} */}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
