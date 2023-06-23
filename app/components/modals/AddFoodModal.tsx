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
import { CldUploadButton } from "next-cloudinary";
import Button from "@/app/conversations/[conversationId]/components/Button";
import Image from "next/image";

const AddFoodModal = () => {
 

  const router = useRouter();
  const addFoodModal = useFoodAddModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
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

  const image = watch("image");

  const handleUpload = (result: any) => {
    setValue("image", result?.info?.secure_url, {
      shouldValidate: true,
    });
  };

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

          <Image
            width="48"
            height="48"
            className="rounded-full"
            src={
              image || "/images/placeholderFood.jpg"
            }
            alt="Avatar"
          />

          <CldUploadButton
          options={{ maxFiles: 1 }}
          onUpload={handleUpload}
          uploadPreset="u2ohm0qd"
        >
          <Button disabled={isLoading} secondary type="button">
            {image ? "Cambiar" : "Subir"}
          </Button>
        </CldUploadButton>

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
