import { useActionState, useState } from "react";
import { addToCart } from "../lib/action.js";

export default function UseActionStateSample({ itemID, itemTitle }) {
  const [message, formAction] = useActionState(addToCart, null);
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      {message}
    </form>
  );
}
