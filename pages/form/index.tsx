import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import {
  getDefaultStartDate,
  getDefaultEndDate,
  isEndBeforeStart,
} from "./utils/dates";
import { getPokemon } from "../requests/get";
import { postNickname } from "../requests/post";
import { deleteNickname } from "../requests/delete";

export default function App() {
  const [isAlwaysAvailable, setIsAlwaysAvailable] = useState(false);
  const [isAmountLimit, setIsAmountLimit] = useState(false);
  const [startDate, setStartDate] = useState(getDefaultStartDate());
  const [startTime, setStartTime] = useState(getDefaultStartDate());
  const [endDate, setEndDate] = useState(getDefaultEndDate());
  const [endTime, setEndTime] = useState(getDefaultEndDate());

  type PromoCode = {
    promoCode: string;
    description: string;
    enforceLimit: boolean;
    limit: number;
    amountOff: number;
    isPercentage: boolean;
    numTimesUsed: number;
    applyToAll: boolean;
    startDate: string;
    endDate: string;
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    getValues
  } = useForm();

  const validateDates = (data: string, start?, end?) => {
    const date = new Date(data);
    const isValid = date > new Date();
    return isValid || "Date must be in the future";
  };

  const onSubmit = (data: PromoCode) => {
    const promoCode = { ...data };
    console.log("promoCode", promoCode);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onError={() => {
        alert("Please fix the errors in the form");
      }}
    >
      <div>
        {/* // ******************** Promo Code ********************************** */}
        <input
          {...register("promoCode", {
            required: "Promo Code can't be empty",
            minLength: {
              value: 1,
              message: "Must be at least 1 characters",
            },
            maxLength: {
              value: 35,
              message: "Must be less than 35 characters",
            },
            validate: async (value) => {
              const response = await getPokemon();
              for (const pokemon of response.results) {
                if (pokemon.name === value) {
                  return true;
                } else {
                  return "Pokemon not found";
                }
              }
            }
          })}
          aria-label="promoCode"
          placeholder="penguin22"
        />
        <p>
          <>{errors["promoCode"]?.message}</>
        </p>
      </div>
      {/* // ********************** Description ******************************** */}
      <div>
        <input
          {...register("description", {
            required: false,
            maxLength: {
              value: 250,
              message: "Description must be less than 250 characters",
            },
          })}
        />
      </div>
      {/* // ********************** Discount Type ******************************** */}
      <div>
        <select {...register("isPercentage")}>
          <option value="false">$</option>
          <option value="true">%</option>
        </select>
        <input
          {...register("amountOff", {
            required: "Discount cant be empty",
            min: {
              value: 0.01,
              message: "Must be greater than 0",
            },
            max: {
              value: 10000,
              message: "Cant be greater than total price",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Must be a number",
            },
          })}
          type="number"
        />
        <p>
          <>{errors["amountOff"]?.message}</>
        </p>
      </div>
      {/* // ********************** Amount of usage ******************************** */}
      {!isAmountLimit ? (
        <>
          <p>Unlimited usage</p>
          <input
            {...register("enforceLimit", { required: false })}
            onClick={() => setIsAmountLimit(!isAmountLimit)}
            type="checkbox"
          />
        </>
      ) : (
        <>
          <p>Unlimited usage</p>
          <input
            {...register("enforceLimit", { required: false })}
            onClick={() => setIsAmountLimit(!isAmountLimit)}
            type="checkbox"
          />
          <input
            {...register("limit", {
              required: "Amount of usage cant be empty",
              min: {
                value: 1,
                message: "Must be greater than 0",
              },
              max: {
                value: 10000,
                message: "Cant be greater than total pass limit",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Must be a number",
              },
            })}
            type="number"
          />
          <p>
            <>{errors["limit"]?.message}</>
          </p>
        </>
      )}
      {/* // ********************** What Pass Type ******************************** */}
      <div>
        <select {...register("applyToAll")}>
          <option value="true">All Passes</option>
          <option value="false">Other Passes</option>
        </select>
        <p>
          <>{errors["applyToAll"]?.message}</>
        </p>
      </div>
      {/* // ********************** Promo When Available ******************************** */}
      <div>
        {!isAlwaysAvailable ? (
          <>
            <p>Promo available from registration start to finish</p>
            <input
              onClick={() => setIsAlwaysAvailable(!isAlwaysAvailable)}
              type="checkbox"
            />
          </>
        ) : (
          <>
            <p>Promo available from registration start to finish</p>
            <input
              onClick={() => setIsAlwaysAvailable(!isAlwaysAvailable)}
              type="checkbox"
            />
            <div>
              {/* // ********************** Available Between ******************************** */}
              <Controller
                name="Start Date"
                control={control}
                defaultValue=""
                rules={{ validate: validateDates }}
                render={({ field }) => <input {...field} type="date" />}
              />
              <p>
                <>{errors["Start Date"]?.message}</>
              </p>
              <Controller
                name="End Date"
                control={control}
                defaultValue=""
                rules={{ validate: validateDates }}
                render={({ field }) => <input {...field} type="date" />}
              />
              <p>
                <>{errors["End Date"]?.message}</>
              </p>
              {/* // ********************** Start and End Time ******************************** */}
              <input
                {...register("Starting Time", {
                  required: "Start Time can't be empty",
                  max: {
                    value: 10000,
                    message: "Cant be sooner than Ending time",
                  },
                })}
                type="time"
              />
              <p>
                <>{errors["Starting Time"]?.message}</>
              </p>
              <input
                {...register("Ending Time", {
                  required: "Ending Time can't be empty",
                  min: {
                    value: 1,
                    message: "Cant be sooner than Starting time",
                  },
                })}
                type="time"
              />
              <p>
                <>{errors["Ending Time"]?.message}</>
              </p>
            </div>
          </>
        )}
      </div>
      {/* // ********************** Submit, Cancel, & Delete ******************************** */}
      <input type="submit" />
    </form>
  );
}
