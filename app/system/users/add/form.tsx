"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { instance } from "@/lib/instance";
import React, { useState } from "react";

export function UserForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    await instance
      .post("/users", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form className="mt-12 p-4" onSubmit={(event) => handleSubmit(event)}>
      <Label htmlFor="name" className="mb-2 block">
        Username:
      </Label>
      <Input id="name" name="name" placeholder="Username" />

      <Label className="mt-4 mb-2 block" htmlFor="email">
        E-mail:
      </Label>
      <Input name="email" type="email" placeholder="E-mail" />

      <Label className="mt-4 mb-2 block" htmlFor="role">
        Role:
      </Label>
      <Select name="role">
        <SelectTrigger>
          <SelectValue placeholder="role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="user">User</SelectItem>
        </SelectContent>
      </Select>

      <Label className="mt-4 mb-2 block" htmlFor="password">
        Password:
      </Label>
      <Input name="password" type="password" placeholder="Password" />

      <Button type="submit" className="mt-4 ml-auto block">
        Save
      </Button>
    </form>
  );
}
