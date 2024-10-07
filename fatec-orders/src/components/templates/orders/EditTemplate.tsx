"use client";
import Layout from "@/components/UI/organisms/Layout";
<<<<<<< HEAD
import { IOrders } from "@/interfaces/IOrders";
import { OrderEditValidator } from "@/validators/OrderEditValidator";
=======
import { IOrders } from "@/interface/IOrders";
import { OrderEditValidator } from "@/validators/OrderValidators";
>>>>>>> 8e418072bcf3e88a9fda56f224e8977ff2bb8cc4
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

interface EditTemplateProps {
  params: { slug: string };
}

const EditTemplate: React.FC = () => {
  //<div>{params.slug}</div>

  const formik = useFormik<IOrders>({
    initialValues: {
<<<<<<< HEAD
      dateOfCreation: 0,
      cpf: 0,
      forma_pagamento: "",
      qtd: 0,
      value: 0,
=======
      order_date: 0,
      client_document: 0,
      payment_type: "",
      quantity: 0,
      total_value: 0,
>>>>>>> 8e418072bcf3e88a9fda56f224e8977ff2bb8cc4
    },

    validationSchema: OrderEditValidator,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleSubmit, values, handleChange, setFieldValue, errors } = formik;

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
<<<<<<< HEAD
          name="data"
          label="Data do pedido"
          fullWidth
          value={values.dateOfCreation}
          onChange={handleChange}
          error={!!errors.dateOfCreation}
          helperText={errors.dateOfCreation}
        />
        <TextField
          name="cpf"
          label="CPF"
          fullWidth
          value={values.cpf}
          onChange={handleChange}
          error={!!errors.cpf}
          helperText={errors.cpf}
        />
        <Select
          name="forma_pagamento"
          label="Tipo de Pagamento"
          fullWidth
          value={values.forma_pagamento}
          onChange={(e) => setFieldValue("forma_pagamento", e.target.value)}
          error={!!errors.forma_pagamento}
        >
          <MenuItem value="">Não informado</MenuItem>
          <MenuItem value="pix">PIX</MenuItem>
          <MenuItem value="credito">Crédito</MenuItem>
          <MenuItem value="debito">Débito</MenuItem>
          
        </Select>

        <TextField
          name="qtd"
          label="Quantidade"
          fullWidth
          value={values.qtd}
          onChange={handleChange}
          error={!!errors.qtd}
          helperText={errors.qtd}
        />
        <TextField
          name="value"
          label="Valor total do pedido"
          fullWidth
          value={values.value}
          onChange={handleChange}
          error={!!errors.value}
          helperText={errors.value}
=======
          name="order_date"
          label="Data do pedido"
          fullWidth
          value={values.order_date}
          onChange={handleChange}
          error={!!errors.order_date}
          helperText={errors.order_date}
        />
        <TextField
          name="client_document"
          label="CPF"
          fullWidth
          value={values.client_document}
          onChange={handleChange}
          error={!!errors.client_document}
          helperText={errors.client_document}
        />
        <Select
          name="payment_type"
          label="Tipo de Pagamento"
          fullWidth
          value={values.payment_type}
          onChange={(e) => setFieldValue("flavor", e.target.value)}
          error={!!errors.payment_type}
        >
          <MenuItem value="A vista">A vista</MenuItem>
          <MenuItem value="A prazo">A prazo</MenuItem>
          <MenuItem value="">Não informado</MenuItem>
        </Select>

        <TextField
          name="quantity"
          label="Quantidade"
          fullWidth
          value={values.quantity}
          onChange={handleChange}
          error={!!errors.quantity}
          helperText={errors.quantity}
        />
        <TextField
          name="total_value"
          label="Valor total do pedido"
          fullWidth
          value={values.total_value}
          onChange={handleChange}
          error={!!errors.total_value}
          helperText={errors.total_value}
>>>>>>> 8e418072bcf3e88a9fda56f224e8977ff2bb8cc4
        />
        <Button variant="outlined" color="secondary">
          Cancelar
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Atualizar
        </Button>
      </Box>
    </Layout>
  );
};
export default EditTemplate;
