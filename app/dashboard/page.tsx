import Dashboard from "@/components/Dashboard";
import axios from "axios";


// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default async function Page() {
  return (
    <>
      <Dashboard />
    </>
  );
}
