import { useRouter } from "next/router";

const Cart = () => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/");
  };
  return (
    <div>
      {" "}
      Thsi si cart page
      <button onClick={onClickHandler}>Navigate to Home page</button>
    </div>
  );
};

export default Cart;
