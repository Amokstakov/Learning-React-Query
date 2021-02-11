import "./App.css";
import { useQuery, QueryClientProvider, QueryClient } from "react-query";
import axios from "axios";
import { ReactQueryDevtools } from "react-query-devtools";

function Pokemon() {
  const queryInfo = useQuery(
    "pokemon",
    async () =>
      (await axios.get("https://pokeapi.co/api/v2/pokemon")).data.results
  );

  console.log(queryInfo.isLoading);
  return queryInfo.isLoading ? (
    "Loading.."
  ) : queryInfo.isError ? (
    queryInfo.error.message
  ) : (
    <div>
      {queryInfo.data.map((pokemon) => {
        return <div>{pokemon.name}</div>;
      })}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Pokemon />
      <ReactQueryDevtools />
    </div>
  );
}
