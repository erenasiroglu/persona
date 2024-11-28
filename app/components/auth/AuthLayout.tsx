import { motion } from "framer-motion";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center relative p-6 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, #FF0D6A 33%, #0500FF 33% 66%, #00FFE0 66%)",
          filter: "blur(200px)",
          opacity: 0.1,
          width: "200%",
          height: "200%",
          transform: "translate(-25%, -25%)",
        }}
      ></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[400px]"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>

        {/* Auth Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-gray-100/50 ring-1 ring-gray-200/50"
        >
          {children}
        </motion.div>

        {/* Brand */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Powered by{" "}
            <span className="font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Persona
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
