'use client';

import { FiGithub } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';

export default function DevInfoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-300 via-cyan-200 to-blue-300 flex items-center justify-center p-6">
      <div className="flex flex-col items-center justify-center backdrop-blur-md bg-white/40 border border-white/50 shadow-2xl rounded-3xl p-12 w-full max-w-md text-center animate-fade-in">
        
        <div className="mb-6 animate-bounce">
          <Image
            src="/logo.png"
            alt="DigiR Innovative Services Pvt. Ltd."
            width={110}
            height={110}
            className="rounded-full shadow-lg"
          />
        </div>

        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-10 drop-shadow-md">
          DigiR Innovative Services Pvt. Ltd.
        </h1>

        <div className="border-t border-white/60 pt-8 w-full max-w-xs">
          <p className="text-gray-900 text-lg mb-1">Crafted with ♥️ by</p>
          <p className="text-2xl font-semibold text-indigo-900 mb-4">Shyamsunder Tard</p>

          <Link
            href="https://github.com/shyamsundertard"
            target="_blank"
            className="inline-flex items-center gap-3 justify-center rounded-full bg-indigo-600 px-5 py-2 text-white font-semibold hover:bg-indigo-700 shadow-lg transition transform hover:scale-105"
          >
            <FiGithub className="w-6 h-6" />
            github.com/shyamsundertard
          </Link>
        </div>
      </div>
    </main>
  );
}