import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-4 text-xl font-semibold text-yellow-500 md:text-3xl">
        <span className="text-stone-900">The best pizza.</span>
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button to={"fast-react-pizza/menu"} type={"primary"}>
          Continue ordering, {userName}
        </Button>
      )}
    </div>
  );
}

export default Home;
