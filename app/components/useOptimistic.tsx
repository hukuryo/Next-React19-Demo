import { useOptimistic, useState } from "react";
import { faker } from "@faker-js/faker";

type optimisticAddToCartType = {
  id: string;
  title: string;
};

type addCartType = {
  id: string;
  title: string;
  addToCart: (formData: FormData, title: string) => void;
  optimisticAddToCart: ({ id, title }: optimisticAddToCartType) => void;
};

const AddToCartForm = ({
  id,
  title,
  addToCart,
  optimisticAddToCart,
}: addCartType) => {
  const formAction = async (formData: FormData) => {
    optimisticAddToCart({ id, title });
    try {
      await addToCart(formData, title);
    } catch (e) {
      // show error notification
    }
  };

  return (
    <form action={formAction}>
      <p>{title}</p>
      <input type="hidden" name="itemID" value={id} />
      <button type="submit">カートに追加</button>
    </form>
  );
};

type Item = {
  id: string;
  title: string;
};

const Cart = ({ cart }: { cart: Item[] }) => {
  if (cart.length == 0) {
    return null;
  }
  return (
    <>
      買い物カート:
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <hr />
    </>
  );
};

const products = [...new Array(2)].map(() => faker.commerce.product());

export const App = () => {
  const [cart, setCart] = useState<Item[]>([]);

  const [optimisticCart, optimisticAddToCart] = useOptimistic<Item[], Item>(
    cart,
    (state, item) => [...state, item]
  );

  const addToCart = async (formData: FormData, title) => {
    const id = String(formData.get("itemID"));
    // AJAX 操作を模擬
    await new Promise((resolve) => setTimeout(resolve, 500));
    setCart((cart: Item[]) => [...cart, { id, title }]);

    return { id };
  };

  return (
    <>
      <Cart cart={optimisticCart} />
      {products.map((product, index) => (
        <AddToCartForm
          id={index}
          title={product}
          addToCart={addToCart}
          optimisticAddToCart={optimisticAddToCart}
        />
      ))}
    </>
  );
};
