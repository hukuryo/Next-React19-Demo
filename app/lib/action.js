"use server";

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get("itemID");
  if (itemID === "1") {
    return "Added to cart";
  } else {
    return "Couldn't add to cart: the item is sold out.";
  }
}
