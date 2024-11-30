"use client";

import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import { StepProvider } from "@/app/context/StepContext";

interface ClientProviderProps {
  children: React.ReactNode;
  session: any;
}

export default function ClientProvider({
  children,
  session,
}: ClientProviderProps) {
  return (
    <SessionProvider session={session}>
      <StepProvider>
        <Header />
        {children}
      </StepProvider>
    </SessionProvider>
  );
}
