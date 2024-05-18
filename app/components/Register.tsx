"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

type cart = {
  id: number;
  title: string;
  quantity: number;
  addToCart: (formData: FormData, title: string) => void;
};

const AddToCartForm = ({ id, title, quantity, addToCart }: cart) => {
  const addToCartAction = async (prevState: string, formData: FormData) => {
    try {
      await addToCart(formData, title);
      return "カートに追加しました。";
    } catch (e) {
      return "在庫がないため、カートに追加できません。";
    }
  };

  const [message, formAction] = useFormState(addToCartAction, null);

  return (
    <form action={formAction}>
      <p>{title}</p>
      <p>在庫: {quantity}</p>
      <input type="hidden" name="itemID" value={id} />
      <SubmitButton />
      <div>{message}</div>
    </form>
  );
};

const SubmitButton = () => {
  const { pending, data } = useFormStatus();
  data && console.log(data.get("itemID"));
  return (
    <button disabled={pending} type="submit">
      {pending ? "カートに追加中・・・" : "カートに追加"}
    </button>
  );
};

export const Register = () => {
  const [quantity, setQuantity] = useState(5);

  const addToCart = async (formData: FormData, title: string) => {
    const id = String(formData.get("itemID"));
    // AJAX 操作を模擬
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (quantity > 0) {
      setQuantity((quantity) => quantity - 1);
    } else {
      throw new Error("Unavailable");
    }

    return { id };
  };

  return (
    <>
      <AddToCartForm
        id={0}
        title={"スイカバー"}
        quantity={quantity}
        addToCart={addToCart}
      />
    </>
  );
};
