import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { getPokemon } from "../requests/get";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationsSchemas } from "./utils/validationsSchemas";

export default function App() {
  const [isAlwaysAvailable, setIsAlwaysAvailable] = useState(false);
  const [isAmountLimit, setIsAmountLimit] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    getValues, // getValues('name')
    setValue, // setValues('name', 'value')
    reset, // reset({ name: 'value' })
  } = useForm({
    resolver: zodResolver(validationsSchemas),
  });

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

  const onSubmit = (data: PromoCode) => {
    const promoCode = { ...data };
    console.log("promoCode", promoCode);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {/* // ******************** Promo Code ********************************** */}
        <input
          {...register("promoCode")}
          aria-label="promoCode"
          placeholder="penguin22"
        />
        <p>
          <>{errors["promoCode"]?.message}</>
        </p>
      </div>
      {/* // ********************** Description ******************************** */}
      <div>
        <input {...register("description")} />
      </div>
      {/* // ********************** Discount Type ******************************** */}
      <div>
        <select {...register("isPercentage")}>
          <option value="false">$</option>
          <option value="true">%</option>
        </select>
        <input {...register("amountOff")} type="number" />
        <p>
          <>{errors["amountOff"]?.message}</>
        </p>
      </div>
      {/* // ********************** Amount of usage ******************************** */}
      {!isAmountLimit ? (
        <>
          <p>Unlimited usage</p>
          <input
            {...register("enforceLimit")}
            onClick={() => setIsAmountLimit(!isAmountLimit)}
            type="checkbox"
          />
        </>
      ) : (
        <>
          <p>Unlimited usage</p>
          <input
            {...register("enforceLimit")}
            onClick={() => setIsAmountLimit(!isAmountLimit)}
            type="checkbox"
          />
          <input {...register("limit")} type="number" />
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
                name="startDate"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} type="date" />}
              />
              <p>
                <>{errors["startDate"]?.message}</>
              </p>
              <Controller
                name="endDate"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} type="date" />}
              />
              <p>
                <>{errors["endDate"]?.message}</>
              </p>
              {/* // ********************** Start and End Time ******************************** */}
              <input {...register("Starting Time")} type="time" />
              <p>
                <>{errors["startingTime"]?.message}</>
              </p>
              <input {...register("endingTime")} type="time" />
              <p>
                <>{errors["endingTime"]?.message}</>
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
