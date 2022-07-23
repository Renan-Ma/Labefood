import React from "react";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import ModalSelect from "../ModalSelect/ModalSelect";
import {
  BoxInf,
  BoxNameQuantity,
  ImgProduct,
  Main,
  NameProduct,
  QuantityProduct,
  InfButton,
  Price,
  DescriptionProduct,
  BoxInfPriceButton,
} from "./styled";

const CardProduct = ({ product }) => {
  const [showModal, setShowModal] = React.useState(false);
  const {requests} = useGlobal()
  const {addToCart} = requests

  const choiceQuantity = (quantity) => {
    addToCart(product, quantity)
  }

  return (
    <Main>
      <ImgProduct src={product.photoUrl} />
      <BoxInf>
        <BoxNameQuantity>
          <NameProduct>{product.name}</NameProduct>
        </BoxNameQuantity>
        <DescriptionProduct>{product.description}</DescriptionProduct>
        <QuantityProduct>
          <Price>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}{" "}
          </Price>

          <InfButton onClick={() => setShowModal(true)}>Adicionar</InfButton>
        </QuantityProduct>
        <ModalSelect
          choiceQuantity={choiceQuantity}
          open={showModal}
          setOpen={setShowModal}
        ></ModalSelect>
      </BoxInf>
    </Main>
  );
};

export default CardProduct;
