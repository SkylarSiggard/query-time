import { useForm } from "react-hook-form";
import { useState } from "react";
import { getPokemonByName } from "../requests/get";
import { postNickname } from "../requests/post";
import { deleteNickname } from "../requests/delete";

export default function App() {
  const [isAlwaysAvailable, setIsAlwaysAvailable] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("Promo Code", {
            required: "Promo Code can't be empty",
            minLength: {
              value: 3,
              message: "Must be at least 3 characters",
            },
            maxLength: {
              value: 35,
              message: "Must be less than 35 characters",
            },
          })}
          aria-label="Promo Code"
          placeholder="penguin22"
        />
        <p>
          <>{errors["Promo Code"]?.message}</>
        </p>
      </div>

      <div>
        <input {...register("Description", { required: false })} />
      </div>

      <div>
        <select {...register("Discount Type")}>
          <option value="$">$</option>
          <option value="%">%</option>
        </select>
        <input
          {...register("Discount", {
            required: "Discount cant be empty",
            min: {
              value: 0.01,
              message: "Must be greater than 0",
            },
          })}
        />
        <p>
          <>{errors["Discount"]?.message}</>
        </p>
      </div>


      <div onClick={() => setIsAlwaysAvailable(!isAlwaysAvailable)}>
        {!isAlwaysAvailable ? (
          <div>Check Mark - False</div>
        ) : (
          <div>Check Mark - True</div>
        )}
      </div>

      <input type="submit" />
    </form>
  );
}
