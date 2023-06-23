"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import useFoodAddModal from "@/app/hooks/useAddFoodModal";
import { useRouter } from "next/navigation";

const AddFoodModal = () => {
  const router = useRouter();
  const addFoodModal = useFoodAddModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      instructions: "",
      ingredients: "",
      hour: "",
      calories: "",
      image: ""
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/food", data)
      .then((res) => {
        addFoodModal.onClose();
        toast.success("Receta creada con éxito.");
      })
      .catch((err) => {
        // toast.success("Cuenta creada con éxito.");
        //si el error es de tipo 400 es email
        if (err.response.status === 400) {
          toast.error("Error en la creacion de receta");
          console.log("Error en la creacion de receta");
        } else {
          toast.error("Algo salió mal.");
          console.log("error");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Crear una receta" subtitle="Ingrese la información!" />
      <Input
        id="name"
        label="Nombre"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="instructions"
        label="Instrucciones"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="ingredients"
        label="Ingredientes"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="hour"
        label="Hora"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="calories"
        label="Calorias"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="image"
        label="Imagen"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      
    </div>
  );


  return (
    <Modal
      disabled={isLoading}
      isOpen={addFoodModal.isOpen}
      title="Crear receta"
      actionLabel="Continuar"
      onClose={addFoodModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default AddFoodModal;
