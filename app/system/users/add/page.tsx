import { Separator } from "@/components/ui/separator";
import { UserForm } from "./form";

export default function AddUserPage() {
  return (
    <main className="container mx-auto my-12 min-h-screen bg-background">
      <h1 className="font-bold text-2xl">Add User</h1>
      <Separator />
      <UserForm />
    </main>
  );
}
