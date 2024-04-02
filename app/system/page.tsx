import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SystemPage() {
  return (
    <main className="container mx-auto my-12 min-h-screen bg-background">
      <h1 className="text-center font-bold text-2xl">System Page</h1>
      <form className="mt-12 shadow-md w-1/2 mx-auto p-4 min-h-32">
        <Label htmlFor="name" className="mb-2 block">
          Name
        </Label>
        <Input id="name" name="name" placeholder="Username" />

        <Label className="mt-4 mb-2 block" htmlFor="password">
          Password
        </Label>
        <Input name="password" type="password" placeholder="Password" />
        <Button className="mt-4 ml-auto block">Send</Button>
      </form>
    </main>
  );
}
