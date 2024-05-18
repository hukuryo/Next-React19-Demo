"use client";

import { useState } from "react";
import { useFormState } from "react-dom";

type sample = {
  id: string;
  title: string;
  quantity: string;
  addToCart: (formData: FormData, title: string) => void;
};

const AddToCartForm = ({ id, title, quantity, addToCart }: sample) => {
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
      <button type="submit">カートに追加</button>
      {message}
    </form>
  );
};

export const UseFormStateSample = () => {
  const [quantity, setQuantity] = useState(1);

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
