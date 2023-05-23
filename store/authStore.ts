import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { BASE_URL } from "@/utils";
const useAuthStore = create(
  persist(
    (set, get) => ({
      userProfile: null,
      allUsers: [],
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;
