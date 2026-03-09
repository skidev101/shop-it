import { User } from "@/types/user";
import { create } from "zustand";


interface AuthState {
    user: User | null;
    accessToken: string | null;
    
    setUser: (user: User | null) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,
    
    setUser: (user) => set({ user }),
    logout: () => set({ user: null, accessToken: null }),
}));

