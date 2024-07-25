import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BooksTable } from "./components/modules/Books";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App max-w-[60rem] mx-auto">
        <BooksTable />
      </div>
    </QueryClientProvider>
  );
}

export default App;
