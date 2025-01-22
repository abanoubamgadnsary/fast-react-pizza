import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdatedItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type={"round"}
      >
        +
      </Button>
      <span className="">{currentQuantity}</span>
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type={"round"}
      >
        -
      </Button>
    </div>
  );
}

export default UpdatedItemQuantity;
