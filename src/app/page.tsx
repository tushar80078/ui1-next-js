import { redirect } from "next/navigation";

const page = () => {
  redirect("http://localhost:3000/home");
  return null;
};

export default page;
