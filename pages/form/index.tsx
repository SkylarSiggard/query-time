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
{/* // ******************** Promo Code ********************************** */}
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
{/* // ********************** Description ******************************** */}
      <div>
        <input {...register("Description", { required: false })} />
      </div>
{/* // ********************** Discount Type ******************************** */}
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
{/* // ********************** What Pass Type ******************************** */}
      <div>
        <select {...register("Pass Type")}>
          <option value="All Passes">All Passes</option>
        </select>
        <p>
          <>{errors["Pass Type"]?.message}</>
        </p>
      </div>
{/* // ********************** Promo When Available ******************************** */}
      <div>
        {!isAlwaysAvailable ? (
          <div onClick={() => setIsAlwaysAvailable(!isAlwaysAvailable)}>Check Mark - False</div>
        ) : (
          <>
            <div onClick={() => setIsAlwaysAvailable(!isAlwaysAvailable)}>Check Mark - True</div>
            <div>
{/* // ********************** Available Between ******************************** */}
              <input
                {...register("Start Date", {
                  required: "Start Date can't be empty",
                })}
                type="date"
              />
              <p>
                <>{errors["Start Date"]?.message}</>
              </p>
{/* // ********************** Start and End Time ******************************** */}
              <input
                {...register("Start Time", {
                  required: "Start Time can't be empty",
                })}
                type="time"
              />
            </div>
          </>
        )}
      </div>
{/* // ********************** Submit, Cancel, & Delete ******************************** */}
      <input type="submit" />
    </form>
  );
}
