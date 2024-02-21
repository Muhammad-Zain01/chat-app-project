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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { createUser, loginToUser } from "@/requests/requests";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const form = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    setError(false);
    if (!data?.username || !data?.password || !data?.email) {
      return setError("Please enter username and password");
    }
    if (
      data?.username.trim() == "" ||
      data?.password.trim() == "" ||
      data?.email.trim() == ""
    ) {
      return setError("Please enter username, password and email");
    }
    setloading(true);
    const response = await createUser(data);
    if (response) {
      router.push("/login");
    } else {
      setError("You Did it Wrong Please Try Again");
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
            name="email"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your Email..."
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
              Register
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
