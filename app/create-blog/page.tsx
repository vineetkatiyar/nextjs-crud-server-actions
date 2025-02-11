"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createBlogData, FormState } from "@/actions/blog";
import { useActionState } from "react";
import Form from 'next/form'

export default function CreateBlog() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createBlogData,
    initialState
  );

  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none  p-4 md:p-8 shadow-input bg-white border">
      <h1 className="text-center text-2xl font-bold">Create Blog</h1>
      <Form action={formAction} className="items-center justify-center">
        <div className="mt-4">
          <Label className="" htmlFor="name">
            Title
            <Input type="text" id="title" name="title" placeholder="Title..." />
          </Label>
          {state.errors.title && (
            <p className="text-red-700">{state.errors.title}</p>
          )}
        </div>
        <div className="mt-4">
          <Label className="" htmlFor="name">
            Content
            <Input
              type="text"
              id="content"
              name="content"
              placeholder="Content..."
            />
          </Label>
          {state.errors.content && (
            <p className="text-red-700">{state.errors.content}</p>
          )}
        </div>
        <div className="mt-4">
          <Button className="w-full" disabled={isPending}>
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
}
