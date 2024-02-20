"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const form = useForm();

  const onSubmit = async (data) => {
    setError(false);
    if (!data?.username || !data?.password) {
      return setError("Please enter username and password");
    }
    if (data?.username.trim() == "" || data?.password.trim() == "") {
      return setError("Please enter username and password");
    }

    setloading(true);
    const response = await signIn("credentials", { ...data, redirect: false });
    if (response?.ok) {
      router.push("/dashboard");
    } else {
      setError(response?.error ?? "Something went wrong, try again");
    }
    setloading(false);
  };

  return (
    <>
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your username..."
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password..."
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <div className="mt-0 pt-0">
            <Button
              disabled={loading}
              className="ml-auto mt-6 w-full"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
