import { useRouter } from "next/router";

const Cart = () => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/");
  };
  return (
    <div>
      This si cart page
      <button onClick={onClickHandler}>Navigate to Home page</button>
    </div>
  );
};

export default Cart;

// test
// 1) how we can mock : regular way , cart file (proj) pura router what all thinsg are getting sed
// 2) next-router-mock
// cart -> solve by eod
