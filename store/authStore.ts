import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";

const useAuthStore = create(
  persist(
    (set, get) => ({
      userProfile: null,
      allUsers: [],
      adminUser:null,
      addAdminUser:(user:any)  => set({ adminUser: user }),
      addUser: (user: any) => set({ userProfile: user }),
      removeUser: () => set({ userProfile: null }),
      removeAdminUser:()=>set({adminUser:null}),
      fetchAllUsers: async () => {
        const response = await axios.get(`/api/users`);
        set({ allUsers: response.data });
      },
      bookingData: null,
      setBookingData: (data: any) => {
        set({ bookingData: data });
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);


export default useAuthStore;
