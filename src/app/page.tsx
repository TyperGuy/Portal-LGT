import getSeminars from "@/services/contentfull";
import HomePage from "./home";
import { contentfullResponseType } from "./home/sections/seminars/seminars.types";

export default async function Home() {
  const response = await getSeminars();
  console.log("Começou aqui:" + response);
  return (
    <main>
      <HomePage data={response as unknown as contentfullResponseType[]} />
    </main>
  );
}
