"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <label
        id="name"
        className="block mb-2 text-sm font-medium  dark:text-white">
        Your Name
      </label>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-4">
        <input {...form.register("username")} placeholder="Username" />
      </form>

      <label
        id="name"
        className="block mb-2 text-sm font-medium  dark:text-white">
        Your message
      </label>
      <textarea
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."></textarea>
      <Button className="mt-10 bg-green-400  hover:bg-white hover:text-green-400">
        <a
          href="https://wa.me/18996198597"
          target="_blank"
          rel="noopener noreferrer">
          Send
        </a>
      </Button>
    </>
  );
}
