import { useEffect, useState } from "react";
import "./App.css";
// import Button from "./components/button/button";
import ServerRes from "./components/server-res/server-res";
import { useApi } from "./utils/api";
import { Button, CircularProgress } from "@mui/material";
import Container from "@mui/material/Container";

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [res, setRes] = useState<number | null>(null);

  const { postCount } = useApi();

  const clickHandler = async () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    let timeoutId: number | undefined;

    const sendRequest = async () => {
      setIsLoading(true);

      try {
        const response = await postCount(count);
        setRes(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (count > 0) {
      timeoutId = setTimeout(sendRequest, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count, postCount]);

  return (
    <>
      <Container>
        <main className="page">
          <h1 className="counter">{count}</h1>
          <Button onClick={clickHandler} disabled={isLoading}>
            {!isLoading ? "Click me!" : <CircularProgress />}
          </Button>
          <ServerRes response={res!} />
        </main>
      </Container>
    </>
  );
}

export default App;
