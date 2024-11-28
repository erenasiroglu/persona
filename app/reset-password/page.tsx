"use client";
import { useState, useEffect } from "react";
import { AuthLayout } from "../components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ResetPassword() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace("#", "?"));
    const token = params.get("access_token");
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;
      setIsSubmitted(true);

      // 3 saniye sonra login sayfasına yönlendir
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error) {
      console.error("Password update failed:", error);
      setError("Failed to update password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <AuthLayout
        title="Password Updated"
        subtitle="Your password has been successfully updated"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-6"
          >
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </motion.div>
          <p className="text-sm text-gray-600 mb-8">
            You will be redirected to the login page in a few seconds...
          </p>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Create new password"
      subtitle="Enter your new password below"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            New Password
          </Label>
          <Input
            id="password"
            type="password"
            className="h-11 bg-white/80 border-gray-200 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-gray-700"
          >
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            className="h-11 bg-white/80 border-gray-200 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full h-11 bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 transition-opacity rounded-xl font-medium shadow-lg shadow-violet-500/20"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              <span className="text-white">Updating password...</span>
            </div>
          ) : (
            <span className="text-white">Update Password</span>
          )}
        </Button>
      </form>
    </AuthLayout>
  );
}
