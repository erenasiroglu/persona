"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  // Auth sayfalarında header'ı gösterme
  const authPages = ["/login", "/register", "/reset-password"];
  if (authPages.includes(pathname)) {
    return null;
  }

  // Kullanıcı giriş yapmamışsa header'ı gösterme
  if (!session) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/dashboard">
          <span className="text-xl font-bold">Logo</span>
        </Link>

        <nav>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Çıkış Yap
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
