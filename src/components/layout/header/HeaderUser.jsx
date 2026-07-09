"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserRound, X, Eye, EyeOff } from "lucide-react";

const HeaderUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to auth logic
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="cursor-pointer">
          <UserRound size={20} color="white" strokeWidth={1.5} />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:max-w-md bg-[#fff2dd] border-none p-0 flex flex-col gap-0 [&>button]:hidden">
        {/* Header */}
        <SheetHeader className="flex-row items-center justify-between px-6 py-5 border-b border-[#4F7374]/20 space-y-0">
          <SheetTitle className="text-sm tracking-widest uppercase font-semibold text-secondary">
            Login
          </SheetTitle>
          <SheetClose asChild>
            <button
              aria-label="Close login"
              className="cursor-pointer text-[#4F7374] transition-opacity hover:opacity-60"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </SheetClose>
        </SheetHeader>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-6">
          <div className="flex flex-col gap-5">
            {/* Username */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="username"
                className="text-xs uppercase tracking-wide text-secondary"
              >
                Username or Email Address <span className="text-secondary">*</span>
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full h-12 px-4 rounded-sm border border-[#4F7374]/30 bg-[#FBE7C6]/80 text-sm text-[#2C4344] placeholder:text-[#4F7374]/50 outline-none transition-colors focus:border-[#4F7374]"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-xs uppercase tracking-wide text-[#4F7374]"
              >
                Password <span className="text-[#4F7374]">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full h-12 px-4 pr-11 rounded-sm border-2 border-[#4F7374] bg-[#FBE7C6] text-sm text-[#2C4344] placeholder:text-[#4F7374]/50 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="cursor-pointer absolute right-3.5 top-1/2 -translate-y-1/2 text-[#4F7374] transition-opacity hover:opacity-60"
                >
                  {showPassword ? (
                    <Eye size={16} strokeWidth={1.5} />
                  ) : (
                    <EyeOff size={16} strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me + Lost password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe((prev) => !prev)}
                  className="size-4 rounded-sm border-[#4F7374] accent-[#4F7374] cursor-pointer"
                />
                <span className="text-xs text-[#4F7374]">Remember me</span>
              </label>
              <Link
                href="/lost-password"
                className="text-xs text-[#4F7374] underline underline-offset-2 hover:text-[#2C4344]"
              >
                Lost password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="cursor-pointer w-full py-3.5 text-xs tracking-widest uppercase font-medium text-white bg-[#4F7374] rounded-sm transition-colors hover:bg-[#3D5A5B]"
            >
              Log In
            </button>

            {/* Create account */}
            <p className="text-center text-xs text-[#4F7374]">
              No account yet?{" "}
              <Link
                href="/register"
                className="underline underline-offset-2 font-medium hover:text-[#2C4344]"
              >
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderUser;