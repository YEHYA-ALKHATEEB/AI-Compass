import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-white py-6 mt-10 text-center">
      <p>© 2025 AI Compass — Helping You Find AI Tools Easily</p>

      {/* Contact Links */}
      <div className="mt-3 flex justify-center space-x-6">
        <a
          href="mailto:yehya.alkhateeb@gmail.com"
          className="hover:text-yellow-400 flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          Email Me
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/yehya-alkhateeb"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/yehya-alkhateeb"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
