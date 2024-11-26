import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex">
      {/* Left side - Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-12 relative">
        <div className="absolute inset-0 bg-pattern opacity-10" />
        <div className="relative z-10 w-full flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">
              Create Your Professional CV in Minutes
            </h1>
            <p className="text-lg text-white/80">
              Join thousands of professionals who trust our platform to showcase
              their career journey.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="text-white">
                <h3 className="font-medium">Professional Templates</h3>
                <p className="text-sm text-white/70">
                  Choose from our curated collection of templates
                </p>
              </div>
            </div>
            {/* Add more features */}
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="p-8 shadow-lg bg-white border-0">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
              {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
            </div>
            {children}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
