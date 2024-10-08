"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const res = await axios.get("/api");
    setTodos(res.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  async function deleteTodo(id) {
    await axios.delete("/api", {
      params: {
        id: id,
      },
    });
    toast({
      title: "Todo Deleted",
    });

    getTodos();
  }
  return (
    <main className="container max-w-[80vw] mx-auto mt-7">
      <h2 className="scroll-m-20 text-center my-5 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Your Todos
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Todo</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo, index) => {
            return (
              <TableRow>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell>{todo.createdAt}</TableCell>
                <TableCell className="">
                  <Button onClick={() => deleteTodo(todo._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
