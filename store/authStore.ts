import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { BASE_URL } from "@/utils";
const useAuthStore = create(
  persist(
    (set, get) => ({
      userProfile: null,
      allUsers: [],
      addUser: (user: any) => set({ userProfile: user }),
      removeUser: () => set({ userProfile: null }),
      fetchAllUsers: async () => {
        const response = await axios.get(`${BASE_URL}/api/users`);
        set({ allUsers: response.data });
      },
      bookingData: null,
      setBookingData: (data: any) => {
        set({ bookingData: data });
      },
    }),
    {
      name: "auth",
    }
  )
);


export default useAuthStore;
