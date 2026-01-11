"use client";

import { Loader2 } from "lucide-react";
import { createContext, ReactNode, useContext, useState } from "react";

type LoadingContextType = {
  setIsLoaded: (loaded: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading deve ser usado dentro de PageLoadingContext");
  }
  return context;
}

type PageLoadingContextProps = {
  children: ReactNode;
};

export function PageLoadingContext({ children }: PageLoadingContextProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={{ setIsLoaded }}>
      {!isLoaded && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-[#F59F23] animate-spin" />
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
}

