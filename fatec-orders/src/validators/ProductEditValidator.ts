import * as Yup from "yup";

export const ProductEditValidater = () => {
  return Yup.object().shape({
    description: Yup.string().required("Campo Obrigatório").min(3).max(100),
    brand: Yup.string().required("Campo Obrigatório").max(80),
    value: Yup.number()
<<<<<<< HEAD
      .min(0.01, "Campo deve ter pelo menos ${min}")
      .required(),
    weight: Yup.number().min(0.01, "Campo deve ter pelo menos ${min}"),
=======
      .min(0.01, "Campo deve ter pelo nenos ${min}")
      .required(),
    weight: Yup.number().min(0.01, "Campo deve ter pelo nenos ${min}"),
>>>>>>> 8e418072bcf3e88a9fda56f224e8977ff2bb8cc4
    flavor: Yup.string().max(50, "Campo deve ter no maximo ${max}"),
  });
};
