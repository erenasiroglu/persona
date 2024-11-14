import React, { useState } from "react";
import { X, Upload, User } from "lucide-react";

export type CVModalProps = {
  onClose: () => void;
};

const CVModal = ({ onClose }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (e: { target: { files: any[] } }) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl">
        <div className="bg-white rounded-xl shadow-xl p-5 m-4">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-semibold text-[#1E0E62]">
                Personal Information
              </h2>
              <p className="text-sm text-[#1E0E62]/60 mt-1">Step 1 of 4</p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          <div className="w-full h-1 bg-gray-100 rounded-full mb-6">
            <div className="w-1/4 h-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full" />
          </div>

          <form className="space-y-5">
            <div className="flex justify-center mb-2">
              <div className="relative group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                />
                <label htmlFor="imageUpload" className="cursor-pointer block">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-dashed border-gray-300 group-hover:border-[#8B5CF6] transition-colors flex items-center justify-center bg-gray-50">
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center">
                        <User className="w-8 h-8 mx-auto text-gray-400 mb-1" />
                        <span className="text-xs text-gray-500">Add Photo</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md border border-gray-200 group-hover:border-[#8B5CF6] transition-colors">
                    <Upload className="w-3 h-3 text-gray-500" />
                  </div>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-[#1E0E62] mb-1.5">
                  First Name*
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 outline-none transition-all text-sm"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1E0E62] mb-1.5">
                  Last Name*
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 outline-none transition-all text-sm"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1E0E62] mb-1.5">
                Phone Number{" "}
                <span className="text-[#1E0E62]/60">(Optional)</span>
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 outline-none transition-all text-sm"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1E0E62] mb-1.5">
                Social Media Links{" "}
                <span className="text-[#1E0E62]/60">(Optional)</span>
              </label>
              <div className="space-y-2">
                <input
                  type="url"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 outline-none transition-all text-sm"
                  placeholder="LinkedIn URL"
                />
                <input
                  type="url"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 outline-none transition-all text-sm"
                  placeholder="GitHub URL"
                />
              </div>
            </div>

            <div className="flex justify-end pt-3">
              <button
                type="submit"
                className="px-5 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
