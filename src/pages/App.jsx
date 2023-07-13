import Header from "../components/header/header";
import Catalog from "../components/catalog/catalog";
import CreateCar from "../components/createCar/createCar";
import { CarService } from "../services/car.service";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../components/hooks/useAuth";

function App() {
  const { data, isLoading } = useQuery(["cars"], () => CarService.getAll());

  const { user, setUser } = useAuth();

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Header title="Lesson 1, task 2"></Header>
      <main>
        {user ? (
          <>
            <b>Welcome, {user.name}!</b>
            <button onClick={() => setUser(null)}>Logout</button>
          </>
        ) : (
          <button onClick={() => setUser({ name: "Max" })}> Login</button>
        )}
        <Catalog cars={data} />
        <CreateCar />
      </main>
    </>
  );
}

export default App;
