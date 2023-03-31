import { RegularText, TitleText } from '../../components/Typography';
import {
  DeliveryDetailsContainer,
  DeliveryDetailsItem,
  OrderConfirmedContainer,
} from './styles';
import deliveryInProgress from '../../assets/delivery-in-progress.svg';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { paymentMethods } from '../CompleteOrder/components/CompleteOrderForm/PaymentOptions';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { OrderData } from '../CompleteOrder';

interface LocationType {
  state: OrderData
}

export function ConfirmedOrder() {
  const {state} = useLocation() as LocationType

  const navigate = useNavigate()

  useEffect(()=> {
    if (!state){
      navigate('/')
    }
  }, [])

  if (!state) return <></>


  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>
      <section>
        <DeliveryDetailsContainer>
          <DeliveryDetailsItem backgroundColor="purple">
            <span>
              <MapPin weight="fill" />
            </span>
            <RegularText>
              Entrega em <strong>{state.rua}, {state.numero}</strong>
              <br />
              {state.bairro} - {state.cidade}, {state.uf}
            </RegularText>
          </DeliveryDetailsItem>

          <DeliveryDetailsItem backgroundColor="yellow">
            <span>
              <Timer weight="fill" />
            </span>
            <RegularText>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </RegularText>
          </DeliveryDetailsItem>

          <DeliveryDetailsItem backgroundColor="yellow_dark">
            <span>
              <CurrencyDollar weight="fill" />
            </span>
            <RegularText>
              Pagamento na entrega
              <br />
              <strong>{paymentMethods[state.paymentMethod].method}</strong>
            </RegularText>
          </DeliveryDetailsItem>

        </DeliveryDetailsContainer>

        <img src={deliveryInProgress} />
      </section>
    </OrderConfirmedContainer>
  );
}
