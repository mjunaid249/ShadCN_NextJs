"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

import { useRouter } from "next/navigation";

export default function page() {
  const { toast } = useToast();
  const [todo, setTodo] = useState("");
  const router = useRouter();

  const addTodo = async () => {
    try {
      const res = await axios.post("/api", { title: todo });
      console.log(res.data);
      toast({
        title: "Todo Added",
      });
      router.push("/");
    } catch (error) {}
  };

  return (
    <main className="flex items-center flex-col gap-10 justify-center w-full min-h-72">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Add Todo
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todo !== "") {
            addTodo();
          } else {
            toast({
              variant: "destructive",
              title: "Cannot add empty todo",
            });
          }
          setTodo("");
        }}
        className="flex w-full justify-center max-w-sm items-center space-x-2"
      >
        <Input
          type="text"
          name="title"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="New Todo..."
        />
        <Button type="submit">ADD</Button>
      </form>
    </main>
  );
}
