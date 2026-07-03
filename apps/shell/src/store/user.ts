import { create } from "zustand";

export type User = {
  user_name: string;
  email: string | null;
  phone_number: string | null;
  dept_id: number | null;
  remark: string | null;
  delete: number;
  create_time: string;
  update_time: string;
  user_id: number;
  role: string;
};

export interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

const initialState = {
  user: null,
};

export const useUserStore = create<UserState>((set) => ({
  ...initialState,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export const getUserState = () => useUserStore.getState();
