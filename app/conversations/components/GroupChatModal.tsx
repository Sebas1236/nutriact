"use client";

import Modal from "@/app/components/Modal";
import Input from "@/app/components/inputs/Input";
import Select from "@/app/components/inputs/Select";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Button from "../[conversationId]/components/Button";

interface GroupChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  users: User[];
}

const GroupChatModal: React.FC<GroupChatModalProps> = ({
  isOpen,
  onClose,
  users,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      members: [],
    },
  });

  const members = watch("members");

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        ...data,
        isGroup: true,
      })
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast.error("Algo salió mal al crear el grupo"))
      .finally(() => setIsLoading(false));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2
              className="
                text-base
                font-semibold
                leading-7
                text-gray-900
              "
            >
              Crear un grupo
            </h2>
            <p
              className="
                mt-1
                text-sm
                leading-6
                text-gray-600
              "
            >
              Crear un chat con más de dos personas
            </p>
            <div
              className="
                mt-10
                flex
                flex-col
                gap-y-8
              "
            >
              <Input
                register={register}
                label="Nombre"
                id="name"
                disabled={isLoading}
                required
                errors={errors}
              />
              <Select
                disabled={isLoading}
                label="Miembros"
                options={users.map((user) => ({
                  value: user.id,
                  label: user.name,
                }))}
                onChange={(value) =>
                  setValue("members", value, {
                    shouldValidate: true,
                  })
                }
                value={members}
              />
            </div>
          </div>
        </div>
        <div
          className="
            mt-6
            flex
            items-center
            justify-end
            gap-x-6
          "
        >
          <Button
            type="button"
            secondary
            onClick={onClose}
            disabled={isLoading}
          >
            Cancelar
          </Button>
          <Button disabled={isLoading} type="submit">
            Crear
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default GroupChatModal;
