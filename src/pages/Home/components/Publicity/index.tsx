import {
  PublicityContainer,
  PublicityContent,
  PublicityItem,
  PublicityItensContainer,
  PublicitySubTitle,
  PublicityTitle,
} from './styles';
import publicityImg from '../../../../assets/publicity-img.png';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import styled from 'styled-components';

export function Publicity() {
  return (
    <PublicityContainer>
      <PublicityContent className="container">
        <div>
          <section>
            <PublicityTitle>
              Encontre o café perfeito para qualquer hora do dia
            </PublicityTitle>

            <PublicitySubTitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </PublicitySubTitle>
          </section>

          <PublicityItensContainer>
            <PublicityItem backgroundColor="yellow_dark">
              <span>
                <ShoppingCart weight="fill" />
              </span>
              Compra simples e segura
            </PublicityItem>

            <PublicityItem backgroundColor="gray_dark">
              <span>
                <Package weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </PublicityItem>

            <PublicityItem backgroundColor="yellow">
              <span>
                <Timer weight="fill" />
              </span>
              Compra simples e segura
            </PublicityItem>

            <PublicityItem backgroundColor="purple">
              <span>
                <Coffee weight="fill" />
              </span>
              Compra simples e segura
            </PublicityItem>
          </PublicityItensContainer>
        </div>

        <img src={publicityImg} />
      </PublicityContent>
    </PublicityContainer>
  );
}
