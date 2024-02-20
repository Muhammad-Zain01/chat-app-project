import RegisterForm from "@/components/register-form";
import Link from "next/link";

export const metadata = {
  title: "Sign In ",
  description: "Authentication forms built using the components.",
};

export default async function RegisterPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center">
      <div className="flex w-full justify-center mt-24"></div>
      <div className="p-4 lg:p-8 mt-2 flex w-full justify-center items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign Up to an Account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your username and password to login
            </p>
          </div>
          <RegisterForm />
          <p className="text-sm text-grey-400 text-center">
            Already have an account{" "}
            <Link className="text-underline" href="/register">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
