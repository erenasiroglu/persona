import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto pl-8 pr-4">
        <div className="relative flex items-center h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-xl font-bold text-white">P</span>
              </div>
              <h1 className="ml-3 text-xl font-semibold text-gray-900">
                Persona
              </h1>
            </div>
            <div className="hidden sm:flex items-center">
              <span className="h-5 w-[1px] bg-gray-200 mx-3"></span>
              <span className="text-sm text-gray-600">
                AI-Powered CV Builder
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
