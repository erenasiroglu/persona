"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wand2, Download, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Check, Layout, Type } from "lucide-react";
import { useCvStore } from "../store/useCvStore";
import { CVTemplate } from "../../app/components/CVTemplate";

const templates = [
  { id: 1, name: "Modern", preview: "/templates/modern.png" },
  { id: 2, name: "Professional", preview: "/templates/professional.png" },
  { id: 3, name: "Creative", preview: "/templates/creative.png" },
  // Add more templates
];

export default function PreviewPage() {
  const {
    personalInfo,
    experiences,
    education,
    skills,
    activeTemplate,
    setActiveTemplate,
  } = useCvStore();

  const [activeSidebar, setActiveSidebar] = useState<"design" | "content">(
    "design"
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900 font-medium"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Editor
              </Link>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActiveSidebar("design")}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeSidebar === "design"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Layout className="w-4 h-4 mr-2" />
                  Design
                </button>
                <button
                  onClick={() => setActiveSidebar("content")}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeSidebar === "content"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Type className="w-4 h-4 mr-2" />
                  Content
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-gray-50">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
              <button className="flex items-center px-4 py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:opacity-90">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-3 space-y-6">
            {activeSidebar === "design" ? (
              <>
                {/* Template Selection */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Template
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["modern", "professional", "creative", "minimal"].map(
                      (template) => (
                        <button
                          key={template}
                          onClick={() => setActiveTemplate(template)}
                          className={`relative aspect-[3/4] rounded-lg border-2 transition-all overflow-hidden
                          ${
                            activeTemplate === template
                              ? "border-indigo-500 ring-2 ring-indigo-200"
                              : "border-gray-200 hover:border-indigo-200"
                          }`}
                        >
                          <img
                            src={`/templates/${template}.png`}
                            alt={template}
                            className="w-full h-full object-cover"
                          />
                          {activeTemplate === template && (
                            <div className="absolute top-2 right-2 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Color Schemes */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Color Scheme
                  </h3>
                  <div className="grid grid-cols-4 gap-3">
                    {["blue", "purple", "green", "red"].map((color) => (
                      <button
                        key={color}
                        className="w-full aspect-square rounded-lg border-2 border-gray-200 hover:border-indigo-200"
                        style={{ backgroundColor: `var(--color-${color})` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Font Selection */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Typography
                  </h3>
                  {/* Add font selection options */}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  AI Content Assistant
                </h3>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-center px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
                    <Wand2 className="w-4 h-4 mr-2" />
                    Enhance Summary
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
                    <Wand2 className="w-4 h-4 mr-2" />
                    Improve Experience
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
                    <Wand2 className="w-4 h-4 mr-2" />
                    Optimize Skills
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Preview Area */}
          <div className="col-span-9">
            <div className="bg-white rounded-xl shadow-lg">
              <div className="aspect-[1/1.4] p-8 overflow-y-auto">
                {/* CV Template */}
                <CVTemplate
                  personalInfo={personalInfo}
                  experiences={experiences}
                  education={education}
                  skills={skills}
                  template={activeTemplate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
