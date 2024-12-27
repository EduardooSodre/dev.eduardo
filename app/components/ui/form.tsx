import React from "react";
import * as Form from "@radix-ui/react-form";
import { Button } from "@/components/ui/button";

const Forms = () => (
  <Form.Root className="w-[50%] mx-auto ">
    <Form.Field className="mb-2 grid" name="Name">
      <div className="flex items-baseline justify-between ">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white ">
          Name
        </Form.Label>
        <Form.Message
          className="text-[13px] text-white opacity-80"
          match="valueMissing">
          Please enter your name
        </Form.Message>
        <Form.Message
          className="text-[13px] text-white opacity-80 "
          match="typeMismatch">
          Please provide a valid number
        </Form.Message>
      </div>
      <Form.Control asChild className="bg-secondary-foreground border-none">
        <input
          className=" inline-flex h-[40px] w-full  rounded px-2.5 outline-none focus:shadow-[0_0_0_2px_black]"
          required
        />
      </Form.Control>
    </Form.Field>

    <Form.Field className="mb-2 grid" name="email">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          Email
        </Form.Label>
        <Form.Message
          className="text-[13px] text-white opacity-80"
          match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message
          className="text-[13px] text-white opacity-80"
          match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild className="bg-secondary-foreground border-none">
        <input
          className=" inline-flex h-[40px] w-full  rounded px-2.5 outline-none focus:shadow-[0_0_0_2px_black]"
          type="email"
          required
        />
      </Form.Control>
    </Form.Field>

    <Form.Field className="mb-2 grid" name="phone">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          Phone Number
        </Form.Label>
        <Form.Message
          className="text-[13px] text-white opacity-80"
          match="valueMissing">
          Please enter your number
        </Form.Message>
        <Form.Message
          className="text-[13px] text-white opacity-80"
          match="typeMismatch">
          Please provide a valid number
        </Form.Message>
      </div>
      <Form.Control asChild className="bg-secondary-foreground border-none">
        <input
          className=" inline-flex h-[40px] w-full  rounded px-2.5 outline-none focus:shadow-[0_0_0_2px_black]"
          type="email"
          required
        />
      </Form.Control>
    </Form.Field>

    <Form.Field className="mb-2 grid" name="question">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          Question
        </Form.Label>
        <Form.Message
          className="text-[13px] text-white opacity-80"
          match="valueMissing">
          Please enter a question
        </Form.Message>
      </div>
      <Form.Control asChild className="bg-secondary-foreground border-none">
        <textarea
          className=" inline-flex h-[40px] w-full  rounded px-2.5 outline-none focus:shadow-[0_0_0_2px_black]"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <Button className="mt-10 w-full items-center justify-center bg-green-400 shadow-[0_2px_10px] hover:bg-white hover:text-green-400">
        Post question
      </Button>
    </Form.Submit>
  </Form.Root>
);

export default Forms;
