"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled = false,
  formatPrice = false,
  register,
  required = false,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...(type === "email" &&
          register(id, {
            pattern:
              // (Inicia con letra o numero, y tiene el formato obligatorio1@obligatorio2.obligatorio3.opcional)
              /^[A-Za-z0-9]+[A-Za-z0-9_.]*[@][a-z]+[.][a-z]+([.][a-z]+)?$/,
          }))}
        {...register(id, { required: "Este campo es obligatorio" })}
        placeholder=" "
        type={type}
        className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    bg-white
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    mt-2
                    ${formatPrice ? "pl-9" : "pl-4"}
                    ${errors[id] ? "border-rose-500" : "border-neutral-300"}
                    ${
                      errors[id]
                        ? "focus:border-rose-500"
                        : "focus:border-black"
                    }
                `}
      />
      <label
        className={`
                    absolute
                    mt-2
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    top-5
                    z-10
                    origin-[0]
                    ${formatPrice ? "left-9" : "left-4"}
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-4
                    ${errors[id] ? "text-rose-500" : "text-zinc-400"}
                `}
      >
        {label}
      </label>

      {errors[id] && (
        <span className="absolute text-rose-500 text-sm top-16 left-0 mt-3">
          {/* checamos si es required o email */}
          {errors[id]!.type === "required"
            ? "Este campo es obligatorio"
            : errors[id]?.type === "pattern" && "El correo no es válido"}
        </span>
      )}
    </div>
  );
};

export default Input;
