<<<<<<< HEAD
import { validatorMessage } from "@/constants/validatorMessage";
import * as Yup from "yup";

export const OrderEditValidator = () => {
  const {requiredField } = validatorMessage;
  return Yup.object().shape({
    dateOfCreation: Yup.number().required(requiredField),    
    forma_pagamento: Yup.string().required(requiredField),
    qtd: Yup.number().min(0.01, "Campo deve ter o peso min ${min}!"),
    cpf: Yup.number()
      .required(requiredField)
      .max(11, "Campo deve ter no máximo ${max} caracteres!"),
    value: Yup.number().max(
=======
import * as Yup from "yup";

export const OrderEditValidator = () => {
  return Yup.object().shape({
    order_date: Yup.number().required("Campo Obrigatório!"),
    client_document: Yup.number()
      .required("Campo Obrigatório!")
      .max(11, "Campo deve ter no máximo ${max} caracteres!"),
    payment_type: Yup.string().required("Campo Obrigatório!"),
    quantity: Yup.number().min(0.01, "Campo deve ter o peso min ${min}!"),
    total_value: Yup.number().max(
>>>>>>> 8e418072bcf3e88a9fda56f224e8977ff2bb8cc4
      50,
      "Campo deve ter no máximo ${max} caracteres!"
    ),
  });
};
