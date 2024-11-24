"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Register() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Register logic
  };

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-4xl relative flex flex-col items-center justify-center px-4">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #FF0D6A 33%, #0500FF 33% 66%, #00FFE0 66%)",
            filter: "blur(150px)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative z-10 w-[400px] backdrop-blur-md bg-white/80">
            <CardHeader>
              <h1 className="text-3xl font-bold text-center text-[#1E0E62]">
                Create Account
              </h1>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#1E0E62] hover:bg-[#1E0E62]/90"
                >
                  Sign Up
                </Button>
              </form>
            </CardContent>
            <CardFooter>
              <div className="text-sm text-center w-full text-[#1E0E62]/60">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#1E0E62] font-medium hover:underline"
                >
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
