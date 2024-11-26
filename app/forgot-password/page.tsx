"use client";
import { useState } from "react";
import { AuthLayout } from "../components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Add your password reset logic here
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated delay
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <AuthLayout
        title="Check your email"
        subtitle="We've sent a password reset link to your email address"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6"
          >
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </motion.div>
          <p className="text-sm text-gray-600 mb-8">
            We've sent a password reset link to <strong>{email}</strong>
          </p>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => setIsSubmitted(false)}
          >
            Back to reset password
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email address and we'll send you instructions to reset your password"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            className="h-11"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full h-11 bg-indigo-600 hover:bg-indigo-500"
          disabled={isLoading}
        >
          {isLoading ? "Sending link..." : "Send reset link"}
        </Button>

        <p className="text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
