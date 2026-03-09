import { useAuthStore } from "@/stores/auth-store";
import { useEffect, useMemo, useState } from "react";

export const useAuth = () => {
  const [isMounted, setIsMounted] = useState(false);
  const store = useAuthStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return useMemo(() => {
    if (!isMounted) {
      return {
        user: null,
        accessToken: null,
        setUser: () => void 0,
        logout: () => void 0,
      };
    }

    return store;
  }, [isMounted, store]);
};

