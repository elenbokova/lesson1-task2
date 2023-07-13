import styles from "./createCar.module.css";
import { useForm } from "react-hook-form";
import { CarService } from "../../services/car.service";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import ErrorMessage from "./errorMessage";

const CreateCar = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ["create car"],
    (data) => CarService.create(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cars");
        reset();
      },
    }
  );

  const getCar = (data) => {
    mutate(data);
  };

  return (
    <section>
      <form className={styles.form} onSubmit={handleSubmit(getCar)}>
        <input
          {...register("model", { required: "Name is required!" })}
          placeholder="model"
        />
        <ErrorMessage error={errors?.model?.message} />

        <input
          {...register("price", { required: "Price is required!" })}
          placeholder="price"
        />
        <ErrorMessage error={errors?.price?.message} />

        <input
          {...register("image", { required: "Image is required!" })}
          placeholder="image"
        />
        <ErrorMessage error={errors?.image?.message} />

        <button className="button"> Create </button>
      </form>
    </section>
  );
};
export default CreateCar;
