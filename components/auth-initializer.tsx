import client from "@/lib/api/client";
import { useAuthStore } from "@/stores/auth-store";
import { useEffect } from "react";

export default function AuthInitializer({ children }: { children: React.ReactNode }) {
  const { user, setUser, logout } = useAuthStore();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { data } = await client.get("/auth/users/me");
        console.log("auth initialized:", data)
        setUser(data.user);
      } catch (error) {
        setUser(null);
        logout();
        console.log("No authenticated user found:", error);
      }
    };

    initializeAuth();
  }, [setUser, logout]);

  return <>{children}</>;
}
