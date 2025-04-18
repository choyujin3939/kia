"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import reactQueryClient from "@/lib/client/reactQuery";

function RQProvider({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(() => {
    return reactQueryClient;
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default RQProvider;
