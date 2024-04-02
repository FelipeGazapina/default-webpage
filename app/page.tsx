import { db } from "../db";
import { revalidatePath } from "next/cache";

export default async function Home() {
  return <main className="flex min-h-screen flex-col gap-4 p-24"></main>;
}
