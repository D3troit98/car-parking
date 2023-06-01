import Dashboard from "@/components/Dashboard";
import axios from "axios";
import { BASE_URL } from "@/utils";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default async function Page() {
  return (
    <>
      <Dashboard />
    </>
  );
}
