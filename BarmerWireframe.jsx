import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  MessageSquare, User, ChevronLeft, ChevronRight, ArrowRight, Plus,
  Search, Heart, Brain, Wind, Bone, Activity, Smile, Meh, Frown,
  Calendar, Lock, Send, Info, Users, BookOpen, Sparkles, ShieldAlert,
  Compass, Gift, Mail, Tag, FileEdit, ArrowUpRight,
} from "lucide-react";

// ════════════════════════════════════════════════════════════════════════
//  👉 HIER deinen gehosteten Bild-Pfad einsetzen, sobald verfügbar.
//  Beispiel: const FAMILY_IMAGE_URL = "/assets/barmer-family.jpg";
//  Solange null, wird das verbesserte SVG-Fallback gezeigt.
// ════════════════════════════════════════════════════════════════════════
const FAMILY_IMAGE_URL = null;

// ─── Barmer color tokens ─────────────────────────────────────────────────
const C = {
  green: "#5BBE4F",
  greenDark: "#0FA84D",
  greenMint: "#C7F2C8",
  greenMintBg: "#D8F5D9",
  purple: "#7C3AED",
  purpleLight: "#EDE9FE",
  pink: "#F8D7D5",
  pinkSoft: "#FAE3E1",
  beige: "#EFEBDC",
  beigeSoft: "#F5F1E4",
  lightBlue: "#D8E8F2",
  black: "#0A0A0A",
  textMuted: "#6B7280",
  border: "#EAEAEA",
  bgGray: "#F4F5F7",
};

// Rounded-corner system (modern mobile app feel)
const RAD = {
  hero: "32px",       // largest hero cards
  card: "28px",       // standard content cards
  inner: "22px",      // inner cards / list items
  icon: "18px",       // icon containers
  chip: "9999px",     // pills/buttons
};

// ─── Hero family SVG (improved fallback, closer to reference) ───────────
// ═══ ORIGINAL FAMILY ILLUSTRATION (4 Personen, Barmer-Farben) ═══
// Eigenes Design: Papa mit lila Pulli (hinten links), Mama mit langem
// aubergine Haar und grünem Oberteil (hinten rechts), Sohn ~7J. in beigem
// Pulli (vorne links), 4-jähriges Mädchen in blauem Top mit Pony (vorne
// rechts). Blätter & Herz-Deko im Hintergrund, Barmer-Farbpalette.
const HeroFamilySVG = () => (
  <svg viewBox="0 0 320 340" xmlns="http://www.w3.org/2000/svg">

    {/* ═══ BACKGROUND BLOB (soft mint) ═══ */}
    <path d="M 30 70 Q 30 30 80 28 Q 160 18 240 28 Q 290 32 290 75 Q 296 200 282 280 Q 272 322 222 320 L 100 320 Q 50 322 40 280 Q 24 200 30 70 Z"
          fill="#D8F0DC" opacity="0.85" />

    {/* ═══ LEAVES & FLORAL DECO ═══ */}
    {/* Left side leaves */}
    <ellipse cx="18" cy="170" rx="15" ry="6" fill="#5BBE4F"
             transform="rotate(-30 18 170)" />
    <ellipse cx="30" cy="195" rx="13" ry="5" fill="#7C3AED" opacity="0.7"
             transform="rotate(25 30 195)" />
    <ellipse cx="12" cy="215" rx="15" ry="6" fill="#5BBE4F"
             transform="rotate(-15 12 215)" />
    <ellipse cx="32" cy="240" rx="13" ry="5" fill="#5BBE4F"
             transform="rotate(40 32 240)" />
    <ellipse cx="18" cy="265" rx="11" ry="4" fill="#7C3AED" opacity="0.6"
             transform="rotate(-30 18 265)" />
    <ellipse cx="35" cy="290" rx="14" ry="5" fill="#5BBE4F"
             transform="rotate(20 35 290)" />
    {/* Stem left */}
    <path d="M 25 280 Q 18 220 22 160" stroke="#3FA837" strokeWidth="1.5"
          fill="none" />
    {/* Right side leaves */}
    <ellipse cx="302" cy="170" rx="15" ry="6" fill="#5BBE4F"
             transform="rotate(30 302 170)" />
    <ellipse cx="290" cy="195" rx="13" ry="5" fill="#7C3AED" opacity="0.7"
             transform="rotate(-25 290 195)" />
    <ellipse cx="308" cy="215" rx="15" ry="6" fill="#5BBE4F"
             transform="rotate(15 308 215)" />
    <ellipse cx="288" cy="240" rx="13" ry="5" fill="#5BBE4F"
             transform="rotate(-40 288 240)" />
    <ellipse cx="302" cy="265" rx="11" ry="4" fill="#7C3AED" opacity="0.6"
             transform="rotate(30 302 265)" />
    <ellipse cx="285" cy="290" rx="14" ry="5" fill="#5BBE4F"
             transform="rotate(-20 285 290)" />
    <path d="M 295 280 Q 302 220 298 160" stroke="#3FA837" strokeWidth="1.5"
          fill="none" />
    {/* Small berries / dots */}
    <circle cx="50" cy="58" r="2.5" fill="#F5A5A0" />
    <circle cx="270" cy="40" r="2.5" fill="#F5A5A0" />
    <circle cx="40" cy="105" r="2" fill="#7C3AED" opacity="0.6" />
    <circle cx="280" cy="115" r="2" fill="#7C3AED" opacity="0.6" />
    <circle cx="55" cy="320" r="2.5" fill="#F5A5A0" />
    <circle cx="270" cy="312" r="2.5" fill="#F5A5A0" />

    {/* ═══ FLOATING HEARTS ═══ */}
    <path d="M 60 38 C 56 32 47 33 47 42 C 47 51 60 62 60 62 C 60 62 73 51 73 42 C 73 33 64 32 60 38 Z" fill="#F5A5A0" />
    <path d="M 258 28 C 254 22 245 23 245 32 C 245 41 258 52 258 52 C 258 52 271 41 271 32 C 271 23 262 22 258 28 Z" fill="#F5A5A0" />
    <path d="M 162 16 C 159 12 153 13 153 18 C 153 24 162 31 162 31 C 162 31 171 24 171 18 C 171 13 165 12 162 16 Z"
          fill="#F5A5A0" opacity="0.6" />

    {/* ═══════ DAD — back left, brown hair, purple sweater ═══════ */}
    {/* Hair */}
    <path d="M 72 80 Q 67 50 95 45 Q 125 42 130 75 L 130 95 Q 122 78 108 76 Q 92 78 78 92 L 72 95 Z" fill="#7C4A2A" />
    {/* Hair tuft front */}
    <path d="M 92 50 Q 100 38 112 46 Q 110 56 100 56 Q 92 56 92 50 Z"
          fill="#5C3A1F" />
    {/* Face */}
    <ellipse cx="100" cy="102" rx="27" ry="30" fill="#F2D5B8" />
    {/* Closed happy eyes */}
    <path d="M 86 102 Q 91 107 96 102" stroke="#1A1A1A" strokeWidth="2.3"
          fill="none" strokeLinecap="round" />
    <path d="M 104 102 Q 109 107 114 102" stroke="#1A1A1A" strokeWidth="2.3"
          fill="none" strokeLinecap="round" />
    {/* Eyebrows */}
    <path d="M 85 94 Q 91 91 97 94" stroke="#1A1A1A" strokeWidth="1.5"
          fill="none" strokeLinecap="round" />
    <path d="M 103 94 Q 109 91 115 94" stroke="#1A1A1A" strokeWidth="1.5"
          fill="none" strokeLinecap="round" />
    {/* Cheek blush */}
    <ellipse cx="83" cy="112" rx="5" ry="3.5" fill="#F5A595" opacity="0.6" />
    <ellipse cx="117" cy="112" rx="5" ry="3.5" fill="#F5A595" opacity="0.6" />
    {/* Big smile with teeth */}
    <path d="M 87 120 Q 100 132 113 120" stroke="#1A1A1A" strokeWidth="2.5"
          fill="none" strokeLinecap="round" />
    <path d="M 92 124 Q 100 128 108 124 L 106 126 Q 100 127 94 126 Z"
          fill="#FFFFFF" />
    {/* Purple sweater */}
    <path d="M 64 140 Q 54 230 60 340 L 142 340 Q 148 230 138 140 Q 118 145 100 145 Q 80 145 64 140 Z" fill="#7C3AED" />
    {/* Sweater V-neck darker */}
    <path d="M 85 140 Q 100 156 115 140 L 112 145 Q 100 154 88 145 Z"
          fill="#5B1FB0" />

    {/* ═══════ MOM — back right, dark aubergine hair, green top ═══════ */}
    {/* Long flowing hair (back) */}
    <path d="M 196 80 Q 188 50 222 42 Q 260 38 272 80 Q 282 130 275 195 Q 282 260 270 320 L 268 340 L 222 340 Q 218 260 220 195 Q 210 130 196 80 Z"
          fill="#3D1F66" />
    {/* Hair drape over shoulder */}
    <path d="M 220 130 Q 212 200 216 280 Q 218 312 218 340 L 233 340 Q 232 312 233 280 Q 230 200 233 130 Z" fill="#3D1F66" />
    {/* Face */}
    <ellipse cx="234" cy="102" rx="26" ry="30" fill="#F2D5B8" />
    {/* Open eyes with subtle lashes */}
    <ellipse cx="223" cy="102" rx="2.6" ry="3.6" fill="#1A1A1A" />
    <ellipse cx="245" cy="102" rx="2.6" ry="3.6" fill="#1A1A1A" />
    <circle cx="224" cy="100.5" r="0.9" fill="#FFFFFF" />
    <circle cx="246" cy="100.5" r="0.9" fill="#FFFFFF" />
    {/* Lashes */}
    <path d="M 219 98 L 221 96" stroke="#1A1A1A" strokeWidth="0.9"
          strokeLinecap="round" />
    <path d="M 226 98 L 224 96" stroke="#1A1A1A" strokeWidth="0.9"
          strokeLinecap="round" />
    <path d="M 241 98 L 243 96" stroke="#1A1A1A" strokeWidth="0.9"
          strokeLinecap="round" />
    <path d="M 248 98 L 246 96" stroke="#1A1A1A" strokeWidth="0.9"
          strokeLinecap="round" />
    {/* Curved eyebrows */}
    <path d="M 217 93 Q 223 90 229 93" stroke="#1A1A1A" strokeWidth="1.5"
          fill="none" strokeLinecap="round" />
    <path d="M 239 93 Q 245 90 251 93" stroke="#1A1A1A" strokeWidth="1.5"
          fill="none" strokeLinecap="round" />
    {/* Cheek blush */}
    <ellipse cx="217" cy="112" rx="5" ry="3.5" fill="#F5A595" opacity="0.6" />
    <ellipse cx="251" cy="112" rx="5" ry="3.5" fill="#F5A595" opacity="0.6" />
    {/* Soft smile */}
    <path d="M 222 120 Q 234 128 246 120" stroke="#1A1A1A" strokeWidth="2.3"
          fill="none" strokeLinecap="round" />
    <path d="M 226 123 Q 234 126 242 123 L 240 125 Q 234 126 228 125 Z"
          fill="#FFFFFF" />
    {/* Green top */}
    <path d="M 192 140 Q 182 230 192 340 L 270 340 Q 278 230 272 140 Q 252 145 234 145 Q 216 145 192 140 Z" fill="#5BBE4F" />
    {/* Top neckline */}
    <path d="M 218 140 Q 234 156 250 140 L 247 145 Q 234 153 221 145 Z"
          fill="#3FA837" />

    {/* ═══════ SON (~7yo) — front left, brown hair, beige top ═══════ */}
    {/* Hair */}
    <ellipse cx="135" cy="172" rx="22" ry="20" fill="#7C4A2A" />
    {/* Hair quiff */}
    <path d="M 130 156 Q 138 148 146 158 Q 140 165 132 162 Q 128 160 130 156 Z"
          fill="#5C3A1F" />
    {/* Face (rounder for child) */}
    <ellipse cx="135" cy="192" rx="22" ry="24" fill="#F2D5B8" />
    {/* Closed happy eyes */}
    <path d="M 124 192 Q 128 196 132 192" stroke="#1A1A1A" strokeWidth="2"
          fill="none" strokeLinecap="round" />
    <path d="M 138 192 Q 142 196 146 192" stroke="#1A1A1A" strokeWidth="2"
          fill="none" strokeLinecap="round" />
    {/* Eyebrows */}
    <path d="M 122 184 Q 128 182 134 184" stroke="#1A1A1A" strokeWidth="1.5"
          fill="none" strokeLinecap="round" />
    <path d="M 136 184 Q 142 182 148 184" stroke="#1A1A1A" strokeWidth="1.5"
          fill="none" strokeLinecap="round" />
    {/* Big rosy cheeks */}
    <ellipse cx="120" cy="202" rx="4.8" ry="3.2" fill="#F5A595" opacity="0.7" />
    <ellipse cx="150" cy="202" rx="4.8" ry="3.2" fill="#F5A595" opacity="0.7" />
    {/* Big smile with teeth */}
    <path d="M 124 211 Q 135 220 146 211" stroke="#1A1A1A" strokeWidth="2.2"
          fill="none" strokeLinecap="round" />
    <path d="M 128 214 Q 135 217 142 214 L 140 216 Q 135 217 130 216 Z"
          fill="#FFFFFF" />
    {/* Beige sweater */}
    <path d="M 108 228 Q 98 290 102 340 L 166 340 Q 172 290 162 228 Q 150 232 135 232 Q 120 232 108 228 Z" fill="#E8D9B5" />
    {/* White Peter Pan collar */}
    <path d="M 118 228 Q 135 245 152 228 Q 148 238 135 240 Q 122 238 118 228 Z"
          fill="#FFFFFF" />

    {/* ═══════ DAUGHTER (~4yo) — front right, blue top, bangs ═══════ */}
    {/* Hair main */}
    <ellipse cx="195" cy="190" rx="21" ry="22" fill="#7C4A2A" />
    {/* Bangs */}
    <path d="M 178 184 Q 188 178 198 182 Q 208 178 215 186 L 213 192 Q 200 187 192 188 Q 184 187 178 192 Z" fill="#5C3A1F" />
    {/* Side hair flair */}
    <ellipse cx="178" cy="200" rx="5" ry="11" fill="#7C4A2A" />
    <ellipse cx="213" cy="200" rx="5" ry="11" fill="#7C4A2A" />
    {/* Tiny bow on side */}
    <path d="M 213 188 Q 220 184 218 192 Q 214 195 213 192 Z" fill="#F5A5A0" />
    {/* Face */}
    <ellipse cx="195" cy="210" rx="20" ry="22" fill="#F2D5B8" />
    {/* Big sparkly child eyes */}
    <circle cx="187" cy="210" r="3.5" fill="#1A1A1A" />
    <circle cx="203" cy="210" r="3.5" fill="#1A1A1A" />
    <circle cx="188.5" cy="208.5" r="1.2" fill="#FFFFFF" />
    <circle cx="204.5" cy="208.5" r="1.2" fill="#FFFFFF" />
    {/* Eyebrows */}
    <path d="M 183 202 Q 187 200 191 202" stroke="#1A1A1A" strokeWidth="1.4"
          fill="none" strokeLinecap="round" />
    <path d="M 199 202 Q 203 200 207 202" stroke="#1A1A1A" strokeWidth="1.4"
          fill="none" strokeLinecap="round" />
    {/* Rosy cheeks */}
    <ellipse cx="180" cy="219" rx="4.8" ry="3.2" fill="#F5A595" opacity="0.75" />
    <ellipse cx="210" cy="219" rx="4.8" ry="3.2" fill="#F5A595" opacity="0.75" />
    {/* Sweet small smile */}
    <path d="M 188 227 Q 195 232 202 227" stroke="#1A1A1A" strokeWidth="2"
          fill="none" strokeLinecap="round" />
    {/* Light blue top */}
    <path d="M 172 244 Q 162 300 168 340 L 224 340 Q 232 300 220 244 Q 208 248 195 248 Q 183 248 172 244 Z" fill="#7BC4E8" />
    {/* White rounded collar */}
    <path d="M 182 244 Q 195 258 208 244 Q 204 252 195 254 Q 186 252 182 244 Z"
          fill="#FFFFFF" />
  </svg>
);
// ─── Topic icons (refined) ──────────────────────────────────────────────
const VersicherungIcon = () => (
  <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="76" height="50" rx="8" fill={C.greenMint} />
    <rect x="10" y="14" width="16" height="12" rx="2.5" fill="#F5C842" />
    <line x1="14" y1="14" x2="14" y2="26" stroke="#D4A82C" strokeWidth="0.5" />
    <line x1="22" y1="14" x2="22" y2="26" stroke="#D4A82C" strokeWidth="0.5" />
    <rect x="10" y="34" width="60" height="5" rx="2.5" fill={C.green} />
    <rect x="10" y="44" width="46" height="5" rx="2.5" fill={C.green} />
  </svg>
);

const GesundheitIcon = () => (
  <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16 Q14 14 10 22 Q6 32 12 42 Q18 50 24 50 Q30 50 36 42 Q42 32 38 22 Q34 14 26 16 Q24 18 22 16 Z" fill={C.green} />
    <path d="M24 13 Q22 9 26 6 Q30 9 28 14 Q26 16 24 13 Z" fill={C.greenDark} />
    <path d="M24 14 L 23 10" stroke="#5C3A1F" strokeWidth="1.5" strokeLinecap="round" />
    <ellipse cx="16" cy="26" rx="2.5" ry="4" fill="#7DE6A0" opacity="0.7" />
    <path d="M40 40 L 60 35 L 70 38 L 74 44 L 74 52 L 40 52 Z" fill="#F5A5A0" />
    <path d="M58 35 L 60 30 L 67 32 L 67 37 Z" fill="#F8C5C0" />
    <ellipse cx="56" cy="52" rx="18" ry="2.2" fill="#E07A74" />
    <circle cx="48" cy="44" r="1.2" fill="#FFFFFF" />
    <circle cx="54" cy="44" r="1.2" fill="#FFFFFF" />
    <circle cx="60" cy="44" r="1.2" fill="#FFFFFF" />
  </svg>
);

const FamilieIcon = () => (
  <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="18" r="11" fill="#2A1A12" />
    <circle cx="16" cy="14" r="6" fill="#2A1A12" />
    <circle cx="32" cy="14" r="6" fill="#2A1A12" />
    <ellipse cx="24" cy="20" rx="8" ry="9" fill="#8B5A3C" />
    <ellipse cx="21.5" cy="20" rx="0.9" ry="1.3" fill="#1A1A1A" />
    <ellipse cx="26.5" cy="20" rx="0.9" ry="1.3" fill="#1A1A1A" />
    <path d="M21 24 Q24 26 27 24" stroke="#1A1A1A" strokeWidth="1"
          fill="none" strokeLinecap="round" />
    <path d="M13 36 Q24 30 35 36 L 35 58 L 13 58 Z" fill="#F0A6A0" />
    <ellipse cx="56" cy="20" rx="9" ry="9" fill="#9A6A3F" />
    <ellipse cx="56" cy="22" rx="7" ry="7.5" fill="#D6A988" />
    <ellipse cx="53.5" cy="22" rx="0.9" ry="1.3" fill="#1A1A1A" />
    <ellipse cx="58.5" cy="22" rx="0.9" ry="1.3" fill="#1A1A1A" />
    <path d="M53 26 Q56 28 59 26" stroke="#1A1A1A" strokeWidth="1"
          fill="none" strokeLinecap="round" />
    <path d="M45 38 Q56 32 67 38 L 67 58 L 45 58 Z" fill={C.green} />
  </svg>
);

const HealthConnectIcon = () => (
  <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="18" cy="22" rx="8" ry="8" fill="#5C3A1F" />
    <ellipse cx="18" cy="24" rx="6.5" ry="7" fill="#C49678" />
    <ellipse cx="15.5" cy="23" rx="0.9" ry="1.3" fill="#1A1A1A" />
    <ellipse cx="20.5" cy="23" rx="0.9" ry="1.3" fill="#1A1A1A" />
    <path d="M15 27 Q18 29 21 27" stroke="#1A1A1A" strokeWidth="1"
          fill="none" strokeLinecap="round" />
    <path d="M8 38 Q18 32 28 38 L 28 58 L 8 58 Z" fill="#9DD5F5" />
    <ellipse cx="62" cy="22" rx="8" ry="8" fill="#3D2317" />
    <ellipse cx="62" cy="24" rx="6.5" ry="7" fill="#8B5A3C" />
    <ellipse cx="59.5" cy="23" rx="0.9" ry="1.3" fill="#1A1A1A" />
    <ellipse cx="64.5" cy="23" rx="0.9" ry="1.3" fill="#1A1A1A" />
    <path d="M59 27 Q62 29 65 27" stroke="#1A1A1A" strokeWidth="1"
          fill="none" strokeLinecap="round" />
    <path d="M52 38 Q62 32 72 38 L 72 58 L 52 58 Z" fill={C.green} />
    <path d="M40 28 C 36 23 28 24 28 31 C 28 38 40 47 40 47 C 40 47 52 38 52 31 C 52 24 44 23 40 28 Z" fill="#F5A5A0" />
    <path d="M32 32 L 36 32 L 38 28 L 41 36 L 43 31 L 48 31"
          stroke="#FFFFFF" strokeWidth="1.4" fill="none"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Reusable bits ──────────────────────────────────────────────────────
const StatusBar = () => (
  <div className="flex items-center justify-between px-6 py-2.5 text-[14px] font-semibold"
       style={{ color: C.black }}>
    <span>07:58</span>
    <div className="flex items-center gap-1.5">
      <svg width="18" height="11" viewBox="0 0 18 11">
        <rect x="0" y="6" width="3" height="5" rx="0.5" fill="#0A0A0A" />
        <rect x="4" y="4" width="3" height="7" rx="0.5" fill="#0A0A0A" />
        <rect x="8" y="2" width="3" height="9" rx="0.5" fill="#0A0A0A" opacity="0.4" />
        <rect x="12" y="0" width="3" height="11" rx="0.5" fill="#0A0A0A" opacity="0.4" />
      </svg>
      <svg width="15" height="11" viewBox="0 0 15 11">
        <path d="M7.5 2 Q3 2 0.5 5 L2 6.5 Q5 4 7.5 4 Q10 4 13 6.5 L14.5 5 Q12 2 7.5 2 Z" fill="#0A0A0A" />
        <path d="M7.5 5.5 Q5 5.5 3.5 7 L5 8.5 Q6 7.5 7.5 7.5 Q9 7.5 10 8.5 L11.5 7 Q10 5.5 7.5 5.5 Z" fill="#0A0A0A" />
        <circle cx="7.5" cy="9.5" r="1" fill="#0A0A0A" />
      </svg>
      <div className="relative flex items-center">
        <div className="rounded-[3px] border flex items-center px-0.5"
             style={{ width: 24, height: 11, borderColor: "#0A0A0A" }}>
          <div className="rounded-[1px]" style={{ width: 17, height: 7, backgroundColor: "#F5C842" }} />
        </div>
        <div className="ml-0.5 rounded-r" style={{ width: 1.5, height: 4, backgroundColor: "#0A0A0A" }} />
        <span className="absolute left-1 top-0 text-[8px] font-bold"
              style={{ color: "#0A0A0A", lineHeight: "11px" }}>72</span>
      </div>
    </div>
  </div>
);

const TopIcons = ({ onBack }) => (
  <div className="flex items-center gap-5 px-6 pt-3 pb-2">
    {onBack ? (
      <button onClick={onBack} className="-ml-2 p-1">
        <ChevronLeft size={26} color={C.black} strokeWidth={2.2} />
      </button>
    ) : (
      <>
        <button><MessageSquare size={24} color={C.black} strokeWidth={1.8} /></button>
        <button><User size={24} color={C.black} strokeWidth={1.8} /></button>
      </>
    )}
  </div>
);

const BottomNav = ({ active = "start", onChange }) => {
  const items = [
    { id: "start", label: "Start", icon: Tag },
    { id: "antraege", label: "Anträge & Co", icon: FileEdit },
    { id: "postfach", label: "Postfach", icon: Mail },
    { id: "bonus", label: "Bonus", icon: Gift },
    { id: "kompass", label: "Kompass", icon: Compass },
  ];
  return (
    <div className="flex items-stretch justify-around border-t bg-white"
         style={{ borderColor: C.border, paddingTop: 10, paddingBottom: 22 }}>
      {items.map((it) => {
        const Icon = it.icon;
        const isActive = active === it.id;
        return (
          <button key={it.id} onClick={() => onChange && onChange(it.id)}
                  className="flex flex-col items-center gap-1.5 px-1">
            <Icon size={22} color={isActive ? C.purple : C.black}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  fill={isActive ? C.purple : "none"} />
            <span className="text-[11px]"
                  style={{ color: isActive ? C.purple : C.black,
                           fontWeight: isActive ? 700 : 500 }}>
              {it.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

// Slot for the hero image — uses FAMILY_IMAGE_URL if set, otherwise SVG
const HeroFamilyImage = () => {
  if (FAMILY_IMAGE_URL) {
    return (
      <img src={FAMILY_IMAGE_URL} alt="Familie"
           style={{ width: "100%", height: "100%", objectFit: "contain" }} />
    );
  }
  return <HeroFamilySVG />;
};

// ─── HOME SCREEN ────────────────────────────────────────────────────────
const HomeScreen = ({ onOpenHealthConnect }) => {
  const quickCards = [
    { title: "Meine BARMER -\nFeedback geben", cta: "Jetzt erledigen" },
    { title: "Vorsorge", cta: "Jetzt erledigen" },
    { title: "Gesundheitskurs\nbuchen", cta: "Entdecken" },
  ];

  return (
    <div className="flex flex-col bg-white">
      <StatusBar />

      {/* ── Top bar: nur Chat/Person-Icons, kein Logo ── */}
      <div className="flex items-center gap-5 px-6 pt-3 pb-2">
        <button><MessageSquare size={24} color={C.black} strokeWidth={1.8} /></button>
        <button><User size={24} color={C.black} strokeWidth={1.8} /></button>
      </div>

      {/* Greeting + Bild oben rechts */}
      <div className="flex items-center overflow-hidden" style={{ minHeight: 220 }}>
        <div className="flex-1 px-6" style={{ minWidth: 0, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <img src="data:image/jpeg;base64,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" alt="Hallo Anna"
               style={{ width: "auto", maxWidth: "100%", height: "auto", maxHeight: 200, display: "block" }}/>
        </div>
        {/* Hochgeladenes Bild oben rechts */}
        <div style={{ width: 210, height: 230, flexShrink: 0 }}>
          <img src="./assets/familie.jpg" alt="Familie"
               style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center top" }}/>
        </div>
      </div>

      <div className="flex gap-3 px-6 pb-5 overflow-x-auto"
           style={{ scrollbarWidth: "none" }}>
        {quickCards.map((card, i) => (
          <div key={i} className="p-5 shrink-0 flex flex-col justify-between"
               style={{ backgroundColor: C.beige, width: 270, minHeight: 170,
                        borderRadius: RAD.card }}>
            <div className="text-[19px] leading-tight whitespace-pre-line"
                 style={{ fontWeight: 800, color: C.black, letterSpacing: "-0.01em" }}>
              {card.title}
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="px-4 py-1.5 text-[13px]"
                   style={{ backgroundColor: C.lightBlue, fontWeight: 600,
                            color: C.black, borderRadius: RAD.chip }}>
                {card.cta}
              </div>
              <ArrowRight size={22} color={C.black} strokeWidth={2} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pb-10">
        <button className="px-7 py-3 border-2 text-[15px]"
                style={{ borderColor: C.purple, color: C.purple,
                         fontWeight: 700, borderRadius: RAD.chip }}>
          Zeig mir alles
        </button>
      </div>

      {/* Was möchten Sie heute tun? */}
      <div className="px-6 pb-5">
        <h2 className="text-[34px] leading-[1.1] tracking-[-0.025em] mb-5"
            style={{ fontWeight: 800, color: C.black }}>
          Was möchten Sie<br />heute tun?
        </h2>
        <div className="grid grid-cols-2 gap-3" style={{ gridAutoRows: "180px" }}>
          <button className="p-5 row-span-2 flex flex-col justify-between text-left"
                  style={{ backgroundColor: C.pink, borderRadius: RAD.hero }}>
            <div className="text-[20px] leading-tight"
                 style={{ fontWeight: 800, color: C.black, letterSpacing: "-0.01em" }}>
              Antrag<br />stellen
            </div>
            <div className="flex justify-end">
              <div className="rounded-full flex items-center justify-center"
                   style={{ width: 56, height: 56, backgroundColor: C.purple }}>
                <ArrowRight size={26} color="white" strokeWidth={2.4} />
              </div>
            </div>
          </button>

          <button className="p-5 flex flex-col justify-between text-left"
                  style={{ backgroundColor: C.greenMint, borderRadius: RAD.card }}>
            <div className="text-[18px] leading-tight"
                 style={{ fontWeight: 800, color: C.black, letterSpacing: "-0.01em" }}>
              Bescheinigung<br />laden
            </div>
            <div className="flex justify-end">
              <div className="rounded-full flex items-center justify-center"
                   style={{ width: 48, height: 48, backgroundColor: C.purple }}>
                <Plus size={22} color="white" strokeWidth={2.6} />
              </div>
            </div>
          </button>

          <button className="p-5 flex flex-col justify-between text-left"
                  style={{ backgroundColor: C.beige, borderRadius: RAD.card }}>
            <div className="text-[18px] leading-tight"
                 style={{ fontWeight: 800, color: C.black, letterSpacing: "-0.01em" }}>
              Rechnung<br />einreichen
            </div>
            <div className="flex justify-end">
              <div className="rounded-full flex items-center justify-center"
                   style={{ width: 48, height: 48, backgroundColor: C.purple }}>
                <ArrowRight size={22} color="white" strokeWidth={2.4} />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Was ist Ihr Thema? */}
      <div className="px-6 pt-6 pb-2">
        <h2 className="text-[34px] leading-[1.1] tracking-[-0.025em] mb-4"
            style={{ fontWeight: 800, color: C.black }}>
          Was ist Ihr Thema?
        </h2>
        <div className="border-t" style={{ borderColor: C.border }} />

        <button className="w-full flex items-center gap-4 py-4 text-left">
          <div className="shrink-0" style={{ width: 80, height: 56 }}>
            <img src="./assets/versicherung.jpg" alt="Versicherung" style={{ width:"100%", height:"100%", objectFit:"contain" }}/>
          </div>
          <div className="flex-1 text-[19px]"
               style={{ fontWeight: 700, color: C.black, letterSpacing: "-0.01em" }}>
            Versicherung
          </div>
          <ArrowRight size={22} color={C.black} strokeWidth={2} />
        </button>
        <div className="border-t" style={{ borderColor: C.border }} />

        <button className="w-full flex items-center gap-4 py-4 text-left">
          <div className="shrink-0" style={{ width: 80, height: 56 }}>
            <img src="./assets/gesundheit.jpg" alt="Gesundheit" style={{ width:"100%", height:"100%", objectFit:"contain" }}/>
          </div>
          <div className="flex-1 text-[19px]"
               style={{ fontWeight: 700, color: C.black, letterSpacing: "-0.01em" }}>
            Gesundheit
          </div>
          <ArrowRight size={22} color={C.black} strokeWidth={2} />
        </button>
        <div className="border-t" style={{ borderColor: C.border }} />

        <button className="w-full flex items-center gap-4 py-4 text-left">
          <div className="shrink-0" style={{ width: 80, height: 56 }}>
            <img src="./assets/familie-kachel.jpg" alt="Familie" style={{ width:"100%", height:"100%", objectFit:"contain" }}/>
          </div>
          <div className="flex-1 text-[19px]"
               style={{ fontWeight: 700, color: C.black, letterSpacing: "-0.01em" }}>
            Familie
          </div>
          <ArrowRight size={22} color={C.black} strokeWidth={2} />
        </button>
        <div className="border-t" style={{ borderColor: C.border }} />

        <button onClick={onOpenHealthConnect}
                className="w-full flex items-center gap-4 py-4 text-left">
          <div className="shrink-0" style={{ width: 80, height: 56 }}><img src="data:image/jpeg;base64,PLACEHOLDER" alt="Health Connect" style={{ width:"100%", height:"100%", objectFit:"contain" }}/></div>
          <div className="flex-1 flex items-center gap-2">
            <span className="text-[19px]"
                  style={{ fontWeight: 700, color: C.black, letterSpacing: "-0.01em" }}>
              Health Connect
            </span>
            <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 text-white"
                  style={{ backgroundColor: C.purple, letterSpacing: "0.08em",
                           borderRadius: RAD.chip }}>
              Neu
            </span>
          </div>
          <ArrowRight size={22} color={C.black} strokeWidth={2} />
        </button>
        <div className="border-t" style={{ borderColor: C.border }} />
      </div>

      <div className="flex justify-center pt-6 pb-8">
        <button className="px-7 py-3 border-2 text-[15px]"
                style={{ borderColor: C.purple, color: C.purple,
                         fontWeight: 700, borderRadius: RAD.chip }}>
          Zeig mir mehr
        </button>
      </div>

      <div className="px-6 pb-6">
        <h2 className="text-[34px] leading-[1.1] tracking-[-0.025em] mb-4"
            style={{ fontWeight: 800, color: C.black }}>
          Neues entdecken?
        </h2>
        <div className="flex gap-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {[
            { title: "Bonusprogramm", color: C.pinkSoft },
            { title: "Newsletter", color: C.greenMintBg },
            { title: "Gymondo", color: C.beigeSoft },
          ].map((c, i) => (
            <div key={i} className="p-5 shrink-0 flex flex-col justify-between"
                 style={{ backgroundColor: c.color, width: 200, height: 200,
                          borderRadius: RAD.card }}>
              <div className="text-[19px] leading-tight"
                   style={{ fontWeight: 800, color: C.black, letterSpacing: "-0.01em" }}>
                {c.title}
              </div>
              <ArrowRight size={22} color={C.black} strokeWidth={2} className="self-end" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Health Connect screens ─────────────────────────────────────────────

// ─── Health Connect: eigene Illustrations-SVGs ──────────────────────────

// Hero: 3 Personen auf grünem Blob (eigenes Design)
const HealthHeroSVG = () => (
  <svg viewBox="0 0 230 260" xmlns="http://www.w3.org/2000/svg">
    {/* Grüner Blob Hintergrund */}
    <path d="M 45 0 Q 20 50 45 105 Q 15 160 55 210 Q 105 258 180 252 L 230 252 L 230 0 Z" fill="#C7F2C8" />

    {/* Papa (hinten Mitte): gewelltes kastanienbraunes Haar, grünes Shirt */}
    <path d="M 80 62 Q 72 32 102 24 Q 130 18 138 55 L 136 78 Q 128 60 116 58 Q 100 58 85 74 Z" fill="#8B5A3C" />
    <path d="M 98 28 Q 108 14 120 22 Q 118 34 108 36 Q 98 34 98 28 Z" fill="#6B3F22" />
    <ellipse cx="110" cy="80" rx="26" ry="29" fill="#D6A988" />
    <path d="M 99 78 Q 104 83 109 78" stroke="#1A1A1A" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M 112 78 Q 117 83 122 78" stroke="#1A1A1A" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M 100 94 Q 110 103 120 94" stroke="#1A1A1A" strokeWidth="2.3" fill="none" strokeLinecap="round"/>
    <path d="M 104 97 Q 110 100 116 97 L 115 99 Q 110 100 105 99 Z" fill="#FFFFFF" />
    <ellipse cx="94" cy="90" rx="4" ry="2.8" fill="#F5A595" opacity="0.55"/>
    <ellipse cx="126" cy="90" rx="4" ry="2.8" fill="#F5A595" opacity="0.55"/>
    <path d="M 80 112 Q 68 185 72 260 L 156 260 Q 160 185 148 112 Z" fill="#1AC85F" />

    {/* Mama (rechts): langes dunkles Haar, cremefarbenes Top */}
    <path d="M 160 80 Q 152 52 178 44 Q 210 38 216 80 Q 225 130 218 190 L 218 260 L 182 260 Q 178 190 176 130 Q 158 100 160 80 Z" fill="#1F1410" />
    <ellipse cx="184" cy="94" rx="22" ry="25" fill="#A87651" />
    <ellipse cx="177" cy="93" rx="2" ry="2.8" fill="#1A1A1A"/>
    <ellipse cx="192" cy="93" rx="2" ry="2.8" fill="#1A1A1A"/>
    <circle cx="177.8" cy="91.8" r="0.8" fill="#FFFFFF"/>
    <circle cx="192.8" cy="91.8" r="0.8" fill="#FFFFFF"/>
    <path d="M 176 107 Q 184 113 192 107" stroke="#1A1A1A" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M 179 109 Q 184 112 189 109 L 188 111 Q 184 112 180 111 Z" fill="#FFFFFF" />
    <ellipse cx="170" cy="102" rx="4" ry="2.5" fill="#F5A595" opacity="0.55"/>
    <ellipse cx="198" cy="102" rx="4" ry="2.5" fill="#F5A595" opacity="0.55"/>
    <path d="M 158 126 Q 148 210 156 260 L 225 260 Q 228 210 222 126 Z" fill="#F0D2C8" />

    {/* Kind (vorne links): dunkler Haarknoten, Neongrün-Shirt, hält Herz */}
    <ellipse cx="52" cy="128" rx="11" ry="13" fill="#3D2317" />
    <ellipse cx="63" cy="158" rx="26" ry="24" fill="#3D2317" />
    <ellipse cx="64" cy="168" rx="21" ry="23" fill="#7B4928" />
    <ellipse cx="55" cy="166" rx="1.8" ry="2.5" fill="#1A1A1A"/>
    <ellipse cx="73" cy="166" rx="1.8" ry="2.5" fill="#1A1A1A"/>
    <ellipse cx="50" cy="174" rx="4" ry="2.5" fill="#F5A595" opacity="0.65"/>
    <ellipse cx="78" cy="174" rx="4" ry="2.5" fill="#F5A595" opacity="0.65"/>
    <path d="M 55 181 Q 64 187 73 181" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M 38 200 Q 28 248 35 260 L 100 260 Q 105 248 95 200 Z" fill="#D9F857" />
    {/* Herz in der Hand */}
    <path d="M 64 194 C 60 188 51 189 51 197 C 51 205 64 214 64 214 C 64 214 77 205 77 197 C 77 189 68 188 64 194 Z" fill="#F5A5A0" />
    {/* Kleines Herzchen oben links */}
    <path d="M 40 28 C 37 23 30 24 30 30 C 30 36 40 44 40 44 C 40 44 50 36 50 30 C 50 24 43 23 40 28 Z" fill="#F5A5A0" />
  </svg>
);

// Community-Gruppe: 4 Personen mit Sprechblasen
const CommunityGroupSVG = () => (
  <svg viewBox="0 0 170 160" xmlns="http://www.w3.org/2000/svg">
    {/* Hintergrundform */}
    <ellipse cx="85" cy="110" rx="80" ry="50" fill="#E8F5E9" />
    {/* Person 1 (lila Top) */}
    <ellipse cx="28" cy="54" rx="15" ry="15" fill="#2A1A12" />
    <ellipse cx="28" cy="58" rx="11" ry="12" fill="#C49678" />
    <path d="M 10 90 Q 28 80 46 90 L 46 160 L 10 160 Z" fill="#9C7CE0" />
    {/* Person 2 (rosa Top, langes Haar) */}
    <path d="M 50 50 Q 46 30 72 26 Q 92 22 94 50 Q 98 80 92 115 L 92 160 L 58 160 Q 54 115 50 80 Q 46 65 50 50 Z" fill="#1F1410" />
    <ellipse cx="72" cy="62" rx="18" ry="20" fill="#8F5A38" />
    <ellipse cx="65" cy="61" rx="2" ry="2.5" fill="#1A1A1A"/>
    <ellipse cx="79" cy="61" rx="2" ry="2.5" fill="#1A1A1A"/>
    <path d="M 65 74 Q 72 79 79 74" stroke="#1A1A1A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <path d="M 58 90 Q 48 160 55 160 L 95 160 Q 102 160 95 90 Z" fill="#F9A8C4" />
    {/* Person 3 (grünes Top) */}
    <ellipse cx="118" cy="54" rx="14" ry="14" fill="#7C4A2A" />
    <ellipse cx="118" cy="57" rx="10" ry="11" fill="#D6A988" />
    <path d="M 100 88 Q 118 78 136 88 L 136 160 L 100 160 Z" fill="#1AC85F" />
    {/* Person 4 (blaues Top) */}
    <ellipse cx="148" cy="56" rx="13" ry="13" fill="#9A6A3F" />
    <ellipse cx="148" cy="59" rx="9" ry="10" fill="#EFB69A" />
    <path d="M 132 86 Q 148 78 164 86 L 164 160 L 132 160 Z" fill="#7BC4E8" />
    {/* Sprechblase links (Punkte) */}
    <rect x="5" y="14" width="34" height="20" rx="6" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
    <circle cx="15" cy="24" r="2" fill="#9CA3AF"/>
    <circle cx="22" cy="24" r="2" fill="#9CA3AF"/>
    <circle cx="29" cy="24" r="2" fill="#9CA3AF"/>
    <path d="M 12 34 L 8 40 L 18 34 Z" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
    {/* Sprechblase rechts (Herz) */}
    <rect x="128" y="12" width="34" height="22" rx="6" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
    <path d="M 145 23 C 143 19 136 20 136 26 C 136 32 145 38 145 38 C 145 38 154 32 154 26 C 154 20 147 19 145 23 Z" fill="#F5A5A0" />
    <path d="M 152 34 L 156 40 L 148 34 Z" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
  </svg>
);

// Themen-Karten Icons
const ErkrankungenSVG = () => (
  <svg viewBox="0 0 80 72" xmlns="http://www.w3.org/2000/svg" style={{transform:"scale(0.82)",transformOrigin:"center center"}}>
    {/* Großes grünes Herz */}
    <path d="M40 66 C40 66 6 46 6 24 C6 13 14 5 24 5 C30 5 36 8 40 13 C44 8 50 5 56 5 C66 5 74 13 74 24 C74 46 40 66 40 66Z" fill="#22A45D" />
    {/* Weißer Herzschlag / EKG-Linie */}
    <path d="M10 34 L20 34 L24 20 L30 48 L36 24 L41 34 L70 34" stroke="white" strokeWidth="3.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FreundeSVG = () => (
  <svg viewBox="0 0 80 78" xmlns="http://www.w3.org/2000/svg">
    {/* Person links – lila, Arm nach oben */}
    <circle cx="19" cy="16" r="13" fill="#C4B5FD" />
    <ellipse cx="19" cy="18" rx="10" ry="11" fill="#A78BFA" />
    <circle cx="15" cy="17" r="1.6" fill="#1A1A1A" />
    <circle cx="23" cy="17" r="1.6" fill="#1A1A1A" />
    <path d="M15 23 Q19 26 23 23" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <ellipse cx="13" cy="22" rx="3" ry="2" fill="#F5A595" opacity="0.6" />
    <ellipse cx="25" cy="22" rx="3" ry="2" fill="#F5A595" opacity="0.6" />
    {/* Körper links */}
    <path d="M4 54 Q19 44 34 54 L34 78 L4 78Z" fill="#A78BFA" />
    {/* Arm links oben (Richtung Mitte) */}
    <path d="M32 46 L40 28" stroke="#A78BFA" strokeWidth="7" strokeLinecap="round" />
    {/* Person rechts – grün, Arm nach oben */}
    <circle cx="61" cy="16" r="13" fill="#86EFAC" />
    <ellipse cx="61" cy="18" rx="10" ry="11" fill="#4ADE80" />
    <circle cx="57" cy="17" r="1.6" fill="#1A1A1A" />
    <circle cx="65" cy="17" r="1.6" fill="#1A1A1A" />
    <path d="M57 23 Q61 26 65 23" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <ellipse cx="55" cy="22" rx="3" ry="2" fill="#F5A595" opacity="0.6" />
    <ellipse cx="67" cy="22" rx="3" ry="2" fill="#F5A595" opacity="0.6" />
    {/* Körper rechts */}
    <path d="M46 54 Q61 44 76 54 L76 78 L46 78Z" fill="#4ADE80" />
    {/* Arm rechts oben (Richtung Mitte) */}
    <path d="M48 46 L40 28" stroke="#4ADE80" strokeWidth="7" strokeLinecap="round" />
    {/* Hände die sich in der Mitte treffen – High Five */}
    <circle cx="40" cy="26" r="6" fill="#F2D5B8" />
    <circle cx="40" cy="26" r="3.5" fill="#E8C09E" />
  </svg>
);

const GruppenSVG = () => (
  <svg viewBox="0 0 80 68" xmlns="http://www.w3.org/2000/svg">
    {/* Person links (kleiner, hinten, gelb-amber) */}
    <circle cx="17" cy="21" r="11" fill="#FDE68A" />
    <ellipse cx="17" cy="23" rx="8.5" ry="9.5" fill="#FBBF24" />
    <path d="M3 52 Q17 43 31 52 L31 68 L3 68Z" fill="#FBBF24" />
    {/* Person rechts (kleiner, hinten, gelb-amber) */}
    <circle cx="63" cy="21" r="11" fill="#FDE68A" />
    <ellipse cx="63" cy="23" rx="8.5" ry="9.5" fill="#FBBF24" />
    <path d="M49 52 Q63 43 77 52 L77 68 L49 68Z" fill="#FBBF24" />
    {/* Person Mitte (größer, vorne, orange) */}
    <circle cx="40" cy="17" r="14" fill="#FED7AA" />
    <ellipse cx="40" cy="19" rx="11" ry="13" fill="#F97316" />
    {/* Gesicht Mitte */}
    <circle cx="36" cy="19" r="1.8" fill="#1A1A1A" />
    <circle cx="44" cy="19" r="1.8" fill="#1A1A1A" />
    <path d="M36 26 Q40 29 44 26" stroke="#1A1A1A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <ellipse cx="33" cy="24" rx="3.5" ry="2.2" fill="#F5A595" opacity="0.55" />
    <ellipse cx="47" cy="24" rx="3.5" ry="2.2" fill="#F5A595" opacity="0.55" />
    {/* Körper Mitte */}
    <path d="M18 55 Q40 44 62 55 L62 68 L18 68Z" fill="#F97316" />
  </svg>
);

const TagebuchSVG = () => (
  <svg viewBox="0 0 62 74" xmlns="http://www.w3.org/2000/svg">
    {/* Buchschatten */}
    <rect x="7" y="6" width="52" height="66" rx="9" fill="#BAD6FB" />
    {/* Buchdeckel */}
    <rect x="4" y="3" width="52" height="66" rx="9" fill="#93C5FD" />
    {/* Buchrücken – dunkler blauer Streifen */}
    <rect x="4" y="3" width="14" height="66" rx="9" fill="#60A5FA" />
    <rect x="14" y="3" width="4" height="66" fill="#60A5FA" />
    {/* Trennlinie Rücken/Deckel */}
    <line x1="18" y1="3" x2="18" y2="69" stroke="#3B82F6" strokeWidth="2" />
    {/* Textlinien auf dem Deckel */}
    <line x1="24" y1="16" x2="50" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="23" x2="50" y2="23" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="30" x2="42" y2="30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    {/* Herz – lila, groß, zentriert */}
    <path d="M31 50 C28 44 19 45 19 53 C19 62 31 70 31 70 C31 70 43 62 43 53 C43 45 34 44 31 50Z" fill="#8B5CF6" />
    {/* Highlight auf dem Herz */}
    <path d="M23 51 Q26 54 28 52" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.75" />
  </svg>
);

// Schnellzugriff-Icons (Outline, dunkelgrün)
const IconBell = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#22A45D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#22A45D" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconPill = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 20.5L3.5 13.5a5 5 0 1 1 7.07-7.07l7 7a5 5 0 0 1-7.07 7.07z" stroke="#22A45D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="8.5" y1="11.5" x2="15.5" y2="4.5" stroke="#22A45D" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="3" stroke="#22A45D" strokeWidth="1.8"/>
    <line x1="16" y1="2" x2="16" y2="6" stroke="#22A45D" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="8" y1="2" x2="8" y2="6" stroke="#22A45D" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="3" y1="10" x2="21" y2="10" stroke="#22A45D" strokeWidth="1.8"/>
    <circle cx="8" cy="14" r="1" fill="#22A45D"/>
    <circle cx="12" cy="14" r="1" fill="#22A45D"/>
    <circle cx="16" cy="14" r="1" fill="#22A45D"/>
    <circle cx="8" cy="18" r="1" fill="#22A45D"/>
    <circle cx="12" cy="18" r="1" fill="#22A45D"/>
  </svg>
);
const IconDoc = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#22A45D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="14 2 14 8 20 8" stroke="#22A45D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="8" y1="13" x2="16" y2="13" stroke="#22A45D" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="8" y1="17" x2="16" y2="17" stroke="#22A45D" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconHelp = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#22A45D" strokeWidth="1.8"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="#22A45D" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="12" cy="17" r="0.5" fill="#22A45D" stroke="#22A45D" strokeWidth="1"/>
  </svg>
);

// Bottom-Nav Icons für Health Connect
const NavHome = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#22A45D" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9L12 2L21 9V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9z" fill="#22A45D"/>
    <path d="M9 21V12h6v9" fill="white"/>
  </svg>
);
const NavCommunity = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="7" r="3" stroke="#6B7280" strokeWidth="1.8"/>
    <circle cx="17" cy="7" r="2.5" stroke="#6B7280" strokeWidth="1.8"/>
    <path d="M2 20c0-4 3-6 7-6s7 2 7 6" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M18 14c2 0 4 1.5 4 4" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const NavPosten = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#6B7280" strokeWidth="1.8"/>
    <line x1="12" y1="8" x2="12" y2="16" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="12" x2="16" y2="12" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const NavNachrichten = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#6B7280" strokeWidth="1.8"/>
    <polyline points="2,4 12,13 22,4" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const NavProfil = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="#6B7280" strokeWidth="1.8"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const HealthConnectOverview = ({ onBack, onOpen }) => {
  const HCG = "#22A45D";

  const cards = [
    { id:"info",    label:"Erkrankungen", color:HCG,       Icon:ErkrankungenSVG, desc:"Infos & Austausch zu deiner Erkrankung", centered:true, bg:"#F7F9F4" },
    { id:"freunde",  label:"Freunde",      centered:true, bg:"#F5F3F9", color:"#8B5CF6", Icon:() => <img src="data:image/jpeg;base64,PLACEHOLDER" alt="Freunde" style={{width:"100%",height:"100%",objectFit:"contain"}}/>,      desc:"Finde Menschen, die dich verstehen" },
    { id:"gruppen", label:"Gruppen",      color:"#F59E0B", Icon:() => <img src="data:image/jpeg;base64,PLACEHOLDER" alt="Gruppen" style={{width:"100%",height:"100%",objectFit:"contain",transform:"scale(1.2)",transformOrigin:"center center"}}/>,      desc:"Tritt Gruppen bei oder starte deine eigene", centered:true, bg:"#FCFAEE" },
    { id:"tagebuch",label:"Tagebuch",     color:"#3B82F6", Icon:() => <img src="data:image/jpeg;base64,PLACEHOLDER" alt="Tagebuch" style={{width:"100%",height:"100%",objectFit:"contain"}}/>,     desc:"Halte deine Gedanken & Fortschritte fest", centered:true, bg:"#F2F6FA" },
  ];

  const quick = [
    { label:"Erinnerungen", Icon:IconBell, action: () => onOpen("erinnerungen"), bg:"#F7F9F4" },
    { label:"Termine",      Icon:IconCalendar, action: () => onOpen("termine"), bg:"#F7F9F4" },
    { label:"Dokumente",    Icon:IconDoc, bg:"#F7F9F4" },
    { label:"Hilfe & Kontakt", Icon:IconHelp, bg:"#F7F9F4" },
  ];

  const S = { fontFamily:"Manrope, system-ui, sans-serif" };

  return (
    <div style={{ ...S, display:"flex", flexDirection:"column", height:"100%", background:"white" }}>

      {/* ── Scrollbarer Inhalt ── */}
      <div style={{ flex:1, overflowY:"auto" }}>

        {/* Statusbar 15:59 */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 24px 4px", ...S }}>
          <span style={{ fontSize:16, fontWeight:600, color:"#111" }}>15:59</span>
          <div style={{ display:"flex", alignItems:"center", gap:6 }}>
            {/* Signal */}
            <svg width="18" height="12" viewBox="0 0 18 12">
              <rect x="0" y="7" width="3" height="5" rx="0.5" fill="#111"/>
              <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.5" fill="#111"/>
              <rect x="9" y="2" width="3" height="10" rx="0.5" fill="#111"/>
              <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="#111"/>
            </svg>
            {/* WiFi */}
            <svg width="16" height="12" viewBox="0 0 16 12">
              <path d="M8 10 C7 9 7 9 8 10Z" fill="#111"/>
              <circle cx="8" cy="10" r="1.2" fill="#111"/>
              <path d="M5 7 Q8 4 11 7" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M2.5 4.5 Q8 -1 13.5 4.5" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
            {/* Battery full */}
            <div style={{ display:"flex", alignItems:"center" }}>
              <div style={{ width:24, height:12, border:"1.5px solid #111", borderRadius:3, padding:1.5, display:"flex" }}>
                <div style={{ flex:1, background:"#111", borderRadius:1.5 }}/>
              </div>
              <div style={{ width:2, height:6, background:"#111", borderRadius:"0 1px 1px 0", marginLeft:-0.5 }}/>
            </div>
          </div>
        </div>

        {/* Zurück-Pfeil + Chat + Person Icons */}
        <div style={{ display:"flex", alignItems:"center", gap:20, padding:"14px 20px 12px" }}>
          {/* Grüner Zurück-Pfeil */}
          <button onClick={onBack} style={{ border:"none", background:"none", cursor:"pointer", padding:0, display:"flex", alignItems:"center" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#22A45D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#222" strokeWidth="1.8" strokeLinejoin="round"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="#222" strokeWidth="1.8"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#222" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>

        {/* ── HERO ── */}
        <div style={{ display:"flex", alignItems:"flex-start", overflow:"hidden", paddingBottom:8 }}>
          {/* Text links */}
          <div style={{ flex:1, paddingLeft:20, paddingTop:0 }}>
            <div style={{ fontSize:44, fontWeight:900, color:"#111", lineHeight:1.0, letterSpacing:"-0.025em" }}>Hallo</div>
            <div style={{ fontSize:44, fontWeight:900, color:HCG, lineHeight:1.0, letterSpacing:"-0.025em", marginTop:2 }}>Anna!</div>
            <p style={{ fontSize:15, color:"#555", lineHeight:1.55, marginTop:14, marginBottom:0 }}>
              Schön, dass du da bist.<br/>Gemeinsam sind wir<br/>stärker. 💚
            </p>
          </div>
          {/* Illustration rechts */}
          <div style={{ width:208, height:240, flexShrink:0 }}>
            <img src="./assets/familie.jpg" alt="Familie" style={{ width:"100%", height:"100%", objectFit:"contain", objectPosition:"center top" }}/>
          </div>
        </div>

        {/* ── DEINE THEMEN ── */}
        <div style={{ padding:"16px 16px 10px" }}>
          <div style={{ fontSize:21, fontWeight:800, color:"#111" }}>Deine Themen</div>
        </div>

        {/* 4 Karten – alle gleichbreit, alle sichtbar */}
        <div style={{ display:"flex", gap:8, padding:"0 16px", marginBottom:20 }}>
          {cards.map((card, i) => (
            <button key={i} onClick={() => onOpen(card.id)}
                    style={{ flex:"1 1 0", minWidth:0, background: card.bg || "#F6F7F8",
                             borderRadius:18, padding:"12px 9px",
                             border:"none", cursor:"pointer",
                             display:"flex", flexDirection:"column",
                             alignItems:"center",
                             textAlign:"center" }}>
              <span style={{ fontSize:10, fontWeight:700, color:card.color, lineHeight:1.2, marginBottom:10, display:"block", textAlign:"center", width:"100%" }}>
                {card.label}
              </span>
              <div style={{ width:"100%", height:72, display:"flex", alignItems:"center", justifyContent:"center", overflow: card.iconOverflow || "visible" }}>
                <card.Icon />
              </div>
              <p style={{ fontSize:11, color:"#888", lineHeight:1.4, marginTop:10, marginBottom:0,
                          textAlign:"center", width:"100%" }}>
                {card.desc}
              </p>
            </button>
          ))}
        </div>

        {/* ── BANNER: Gemeinsam geht's besser ── */}
        <div style={{ margin:"0 16px 20px", background:"#EFF6EF", borderRadius:20,
                      overflow:"hidden", padding:"0 0 0 20px", display:"flex",
                      flexDirection:"column", justifyContent:"flex-end", minHeight:130, background:"#F7F9F4" }}>

          {/* Obere Spacer-Fläche – drückt Inhalt nach unten */}
          <div style={{ flex:1 }}/>

          {/* Titel + Beschreibung – optisch auf Höhe von Button und Bild */}
          <div style={{ fontSize:17, fontWeight:800, color:"#111", lineHeight:1.25, marginBottom:8, paddingRight:16, marginTop:14 }}>
            Gemeinsam geht's besser
          </div>
          <p style={{ fontSize:13, color:"#444", lineHeight:1.55, margin:"0 0 16px", paddingRight:16 }}>
            Tausche dich aus, teile Erfahrungen und unterstütze andere.
          </p>

          {/* Unten: Button links | Bild rechts */}
          <div style={{ display:"flex", flexDirection:"row", alignItems:"flex-end" }}>
            {/* Button links */}
            <div style={{ flex:1, paddingBottom:20 }}>
              <button onClick={() => onOpen("gruppen")}
                      style={{ display:"inline-flex", alignItems:"center", gap:8,
                               background:"#2A6B45", color:"white", border:"none",
                               borderRadius:9999, padding:"11px 18px",
                               fontSize:13, fontWeight:700, cursor:"pointer" }}>
                Zur Community
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.4"
                        strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            {/* Bild rechts */}
            <div style={{ width:"45%", flexShrink:0, overflow:"hidden", alignSelf:"flex-end" }}>
              <img src="data:image/jpeg;base64,PLACEHOLDER" alt="Gemeinsam"
                   style={{ width:"100%", height:"auto", display:"block",
                             objectFit:"cover", objectPosition:"top center",
                             maxHeight:130 }}/>
            </div>
          </div>
        </div>

        {/* ── SCHNELLZUGRIFF ── */}
        <div style={{ padding:"0 16px 12px" }}>
          <div style={{ fontSize:21, fontWeight:800, color:"#111" }}>Schnellzugriff</div>
        </div>

        <div style={{ display:"flex", justifyContent:"space-between", padding:"0 16px", marginBottom:24 }}>
          {quick.map((item, i) => (
            <div key={i} onClick={item.action || undefined}
                 style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6,
                          cursor: item.action ? "pointer" : "default" }}>
              <div style={{ width:54, height:54, borderRadius:15, background: item.bg || "#F6F7F8",
                            display:"flex", alignItems:"center", justifyContent:"center" }}>
                <item.Icon />
              </div>
              <span style={{ fontSize:10.5, fontWeight:500, textAlign:"center",
                             color:"#222", lineHeight:1.3, maxWidth:58 }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>{/* End scrollbarer Inhalt */}

      {/* ── BOTTOM NAV (fest unten) ── */}
      <div style={{ borderTop:"1px solid #E8E8E8", background:"white",
                    display:"flex", alignItems:"flex-end", justifyContent:"space-around",
                    paddingTop:10, paddingBottom:8, flexShrink:0 }}>
        {[
          { label:"Start",       active:true,  icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9Z" fill="#22A45D"/>
                <path d="M9 21V12h6v9" fill="white"/>
              </svg>) },
          { label:"Community",  active:false, action:()=>onOpen("gruppen"), icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="9" cy="7" r="3" stroke="#555" strokeWidth="1.8"/>
                <circle cx="17" cy="7" r="2.5" stroke="#555" strokeWidth="1.8"/>
                <path d="M2 20c0-4 3-6 7-6s7 2 7 6" stroke="#555" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M18 14c2 0 4 1.5 4 4" stroke="#555" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>) },
          { label:"Posten",     active:false, icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#555" strokeWidth="1.8"/>
                <line x1="12" y1="8" x2="12" y2="16" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
                <line x1="8" y1="12" x2="16" y2="12" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
              </svg>) },
          { label:"Nachrichten",active:false, icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="#555" strokeWidth="1.8"/>
                <polyline points="2,4 12,13 22,4" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>) },
          { label:"Profil",     active:false, icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="#555" strokeWidth="1.8"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#555" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>) },
        ].map((tab, i) => (
          <button key={i} onClick={tab.action || undefined}
                  style={{ display:"flex", flexDirection:"column", alignItems:"center",
                           gap:3, padding:"0 2px", border:"none", background:"none", cursor:"pointer" }}>
            {tab.icon}
            <span style={{ fontSize:11, fontWeight: tab.active ? 700 : 400,
                           color: tab.active ? HCG : "#666" }}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
      {/* Home Indicator */}
      <div style={{ background:"white", display:"flex", justifyContent:"center", paddingBottom:6, paddingTop:4, flexShrink:0 }}>
        <div style={{ width:134, height:5, borderRadius:3, background:"#111" }}/>
      </div>

    </div>
  );
};


// ─── Freunde: Private Chats + Vorschläge ────────────────────────────────
const FreundeScreen = ({ onBack }) => {
  const HCG = "#22A45D";
  const S   = { fontFamily: "Manrope, system-ui, sans-serif" };

  const chats = [
    { id:1, name:"Sarah M.",   lastMsg:"Danke für den Tipp! Das probiere ich 😊", time:"14:32", unread:2, bg:"#A78BFA", initial:"S" },
    { id:2, name:"Thomas K.",  lastMsg:"Wie geht's dir heute?",                    time:"Gestern",unread:0, bg:"#60A5FA", initial:"T" },
    { id:3, name:"Anonym",     lastMsg:"Ich kenne das Gefühl. Bleib stark! 💪",   time:"Mo.",    unread:0, bg:"#E5E7EB", isAnon:true },
    { id:4, name:"Lisa W.",    lastMsg:"Kannst du mir den Arzt-Link schicken?",    time:"10.Mai", unread:0, bg:"#4ADE80", initial:"L" },
  ];

  const suggestions = [
    { id:1, name:"Julia S.", age:34, disease:"Endometriose", dColor:"#BE185D", dBg:"#FCE7F3", initial:"J", bg:"#F9A8D4" },
    { id:2, name:"Anonym",   age:28, disease:"Arthrose",     dColor:"#B45309", dBg:"#FEF3C7", isAnon:true },
    { id:3, name:"Markus H.",age:45, disease:"Diabetes Typ 2",dColor:"#DC2626",dBg:"#FEE2E2", initial:"M", bg:"#FCA5A5" },
    { id:4, name:"Anonym",   age:52, disease:"Bluthochdruck",dColor:"#DC2626", dBg:"#FEE2E2", isAnon:true },
    { id:5, name:"Anna K.",  age:31, disease:"Depression",   dColor:"#7C3AED", dBg:"#EDE9FE", initial:"A", bg:"#C4B5FD" },
    { id:6, name:"Anonym",   age:39, disease:"Long Covid",   dColor:"#0369A1", dBg:"#E0F2FE", isAnon:true },
  ];

  const AnonAvatar = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="9" r="4" fill="#9CA3AF"/>
      <path d="M4 20c0-3.5 3.6-6.5 8-6.5s8 3 8 6.5" fill="#C4C4C4"/>
    </svg>
  );

  return (
    <div style={{ ...S, display:"flex", flexDirection:"column", height:"100%", background:"#F7F8FA" }}>

      {/* ── Header ── */}
      <div style={{ background:"white", display:"flex", alignItems:"center", gap:10,
                    padding:"12px 16px 12px", borderBottom:"1px solid #EAEAEA", flexShrink:0 }}>
        <button onClick={onBack} style={{ border:"none", background:"none", cursor:"pointer", padding:"4px 2px", display:"flex" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span style={{ fontSize:18, fontWeight:800, color:"#111", flex:1 }}>Freunde</span>
        {/* Suche */}
        <button style={{ border:"none", background:"none", cursor:"pointer", display:"flex" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7.5" stroke="#555" strokeWidth="1.8"/>
            <line x1="20.5" y1="20.5" x2="16.2" y2="16.2" stroke="#555" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
        {/* Freund hinzufügen */}
        <button style={{ border:"none", background:"none", cursor:"pointer", display:"flex", marginLeft:4 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="10" cy="8" r="3.5" stroke={HCG} strokeWidth="1.8"/>
            <path d="M2 20c0-3.5 3.1-6 8-6" stroke={HCG} strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="19" y1="7" x2="19" y2="13" stroke={HCG} strokeWidth="2" strokeLinecap="round"/>
            <line x1="16" y1="10" x2="22" y2="10" stroke={HCG} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* ── Scrollbarer Inhalt ── */}
      <div style={{ flex:1, overflowY:"auto" }}>

        {/* Suchfeld */}
        <div style={{ padding:"14px 16px 8px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8,
                        background:"white", borderRadius:14,
                        padding:"10px 14px", border:"1px solid #E5E7EB" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#9CA3AF" strokeWidth="2"/>
              <line x1="20" y1="20" x2="15.5" y2="15.5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize:14, color:"#9CA3AF" }}>Freunde suchen …</span>
          </div>
        </div>

        {/* ═══ MEINE CHATS ═══ */}
        <div style={{ padding:"14px 16px 8px" }}>
          <span style={{ fontSize:16, fontWeight:800, color:"#111" }}>Meine Chats</span>
        </div>

        <div style={{ padding:"0 16px" }}>
          {chats.map(chat => (
            <div key={chat.id}
                 style={{ background:"white", borderRadius:18, padding:"13px 16px",
                           marginBottom:8, display:"flex", alignItems:"center", gap:12,
                           boxShadow:"0 1px 3px rgba(0,0,0,0.06)" }}>
              {/* Avatar */}
              <div style={{ width:50, height:50, borderRadius:25, background:chat.bg,
                             display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                {chat.isAnon
                  ? <AnonAvatar />
                  : <span style={{ fontSize:19, fontWeight:800, color:"white" }}>{chat.initial}</span>
                }
              </div>
              {/* Text */}
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ fontSize:15, fontWeight:700, color:"#111" }}>{chat.name}</span>
                  <span style={{ fontSize:12, color:"#9CA3AF", flexShrink:0, marginLeft:8 }}>{chat.time}</span>
                </div>
                <div style={{ fontSize:13, color:"#6B7280", marginTop:3,
                              overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
                  {chat.lastMsg}
                </div>
              </div>
              {/* Ungelesen-Badge */}
              {chat.unread > 0 && (
                <div style={{ width:22, height:22, borderRadius:11, background:HCG,
                               display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <span style={{ fontSize:12, fontWeight:700, color:"white" }}>{chat.unread}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ═══ VORSCHLÄGE: GLEICHE ERKRANKUNG ═══ */}
        <div style={{ padding:"20px 16px 6px" }}>
          <span style={{ fontSize:16, fontWeight:800, color:"#111" }}>Menschen mit ähnlichen Erkrankungen</span>
          <p style={{ fontSize:13, color:"#6B7280", margin:"4px 0 0" }}>
            Vorschläge basierend auf deiner Erkrankung
          </p>
        </div>

        <div style={{ padding:"6px 16px 28px" }}>
          {suggestions.map(p => (
            <div key={p.id}
                 style={{ background:"white", borderRadius:18, padding:"14px 16px",
                           marginBottom:10, display:"flex", alignItems:"center", gap:12,
                           boxShadow:"0 1px 3px rgba(0,0,0,0.06)" }}>
              {/* Avatar */}
              <div style={{ width:52, height:52, borderRadius:26, flexShrink:0,
                             background: p.isAnon ? "#F3F4F6" : p.bg+"44",
                             border: p.isAnon ? "1.5px dashed #D1D5DB" : "none",
                             display:"flex", alignItems:"center", justifyContent:"center" }}>
                {p.isAnon
                  ? <AnonAvatar />
                  : <span style={{ fontSize:20, fontWeight:800, color:p.bg }}>{p.initial}</span>
                }
              </div>
              {/* Info */}
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ fontSize:15, fontWeight:700, color:"#111" }}>{p.name}</span>
                  <span style={{ fontSize:13, color:"#6B7280" }}>{p.age} J.</span>
                </div>
                {/* Krankheits-Pill */}
                <div style={{ display:"inline-flex", alignItems:"center", marginTop:6,
                               background:p.dBg, borderRadius:20, padding:"3px 11px" }}>
                  <span style={{ fontSize:12, fontWeight:600, color:p.dColor }}>{p.disease}</span>
                </div>
              </div>
              {/* Verbinden-Button */}
              <button style={{ flexShrink:0, border:`1.5px solid ${HCG}`, background:"white",
                                color:HCG, borderRadius:9999, padding:"7px 13px",
                                fontSize:13, fontWeight:700, cursor:"pointer", whiteSpace:"nowrap" }}>
                + Verbinden
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};


const InfoScreen = ({ onBack, onOpenGroup }) => {
  const [selected, setSelected] = useState(null);
  const topics = [
    { name: "Asthma", icon: Wind, color: "#0EA5E9", articles: 24 },
    { name: "Depression", icon: Brain, color: "#8B5CF6", articles: 38 },
    { name: "Krebs", icon: Activity, color: "#EC4899", articles: 52 },
    { name: "Diabetes", icon: Heart, color: "#EF4444", articles: 31 },
    { name: "Arthrose", icon: Bone, color: "#F59E0B", articles: 18 },
    { name: "Long Covid", icon: Wind, color: "#06B6D4", articles: 14 },
    { name: "Angststörung", icon: Brain, color: "#6366F1", articles: 22 },
    { name: "Bluthochdruck", icon: Heart, color: "#DC2626", articles: 19 },
    { name: "Endometriose", icon: Activity, color: "#BE185D", articles: 27 },
  ];

  if (selected) {
    const t = topics.find((x) => x.name === selected);
    const Icon = t.icon;
    return (
      <div className="flex flex-col bg-white min-h-full">
        <StatusBar />
        <TopIcons onBack={() => setSelected(null)} />
        <div className="px-6 pt-2 pb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center"
                 style={{ width: 56, height: 56, backgroundColor: t.color + "20",
                          borderRadius: RAD.icon }}>
              <Icon size={26} color={t.color} />
            </div>
            <div>
              <h2 className="text-[28px] tracking-[-0.025em]"
                  style={{ fontWeight: 800, color: C.black }}>{t.name}</h2>
              <div className="text-[12px] text-gray-500">{t.articles} Artikel · Geprüft</div>
            </div>
          </div>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Verständliche, medizinisch geprüfte Informationen rund um {t.name}.
          </p>
        </div>
        <div className="px-6 pb-5 space-y-3">
          {[
            "Was ist " + t.name + "? Grundlagen verstehen",
            "Symptome erkennen — wann zum Arzt?",
            "Behandlungsoptionen im Überblick",
            "Tipps für den Alltag mit " + t.name,
            "Erfahrungsberichte aus der Community",
          ].map((title, i) => (
            <div key={i} className="p-4 flex items-start gap-3"
                 style={{ backgroundColor: C.bgGray, borderRadius: RAD.inner }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] shrink-0"
                   style={{ backgroundColor: t.color + "20", color: t.color, fontWeight: 700 }}>
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="text-[14px]" style={{ fontWeight: 700, color: C.black }}>{title}</div>
                <div className="text-[11px] text-gray-500 mt-1">{3 + i} Min Lesezeit</div>
              </div>
              <ChevronRight size={18} color="#9CA3AF" />
            </div>
          ))}
          <button onClick={() => onOpenGroup()}
                  className="w-full p-4 flex items-center gap-3 text-white mt-2"
                  style={{ backgroundColor: C.purple, borderRadius: RAD.inner }}>
            <Users size={20} />
            <div className="flex-1 text-left">
              <div className="text-[14px]" style={{ fontWeight: 700 }}>Zur passenden Gruppe</div>
              <div className="text-[12px] opacity-90">Tausche dich mit Betroffenen aus</div>
            </div>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white min-h-full">
      <StatusBar />
      <TopIcons onBack={onBack} />
      <div className="px-6 pt-2 pb-5">
        <h2 className="text-[34px] leading-[1.1] tracking-[-0.025em]"
            style={{ fontWeight: 800, color: C.black }}>Info</h2>
        <p className="text-[14px] text-gray-500 mt-1">Medizinisch geprüfte Inhalte zum Nachlesen</p>
        <div className="mt-4 flex items-center gap-2 px-4 py-3"
             style={{ backgroundColor: C.bgGray, borderRadius: RAD.chip }}>
          <Search size={16} color="#6B7280" />
          <input placeholder="Thema suchen..." className="flex-1 bg-transparent outline-none text-[14px]" />
        </div>
      </div>
      <div className="px-6 pb-8">
        <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-3"
             style={{ fontWeight: 700 }}>Häufig gesucht</div>
        <div className="grid grid-cols-2 gap-3">
          {topics.map((t, i) => {
            const Icon = t.icon;
            return (
              <button key={i} onClick={() => setSelected(t.name)}
                      className="p-4 text-left flex flex-col gap-3"
                      style={{ backgroundColor: C.bgGray, borderRadius: RAD.card }}>
                <div className="w-12 h-12 flex items-center justify-center"
                     style={{ backgroundColor: t.color + "20", borderRadius: RAD.icon }}>
                  <Icon size={22} color={t.color} />
                </div>
                <div>
                  <div className="text-[15px]" style={{ fontWeight: 700, color: C.black }}>{t.name}</div>
                  <div className="text-[11px] text-gray-500 mt-0.5">{t.articles} Artikel</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const GruppenScreen = ({ onBack }) => {
  const [selected, setSelected] = useState(null);
  const groups = [
    { name: "Chronische Krankheiten", members: 1284, active: 47,
      lastMsg: "Sandra: Wie geht ihr mit Müdigkeit um?", icon: Heart, color: "#EF4444" },
    { name: "Long Covid", members: 892, active: 23,
      lastMsg: "Markus: Neue Studie aus Berlin gelesen?", icon: Wind, color: "#06B6D4" },
    { name: "Arthrose", members: 643, active: 18,
      lastMsg: "Lisa: Welche Übungen helfen euch?", icon: Bone, color: "#F59E0B" },
    { name: "Depression", members: 1567, active: 89,
      lastMsg: "Anonym: Heute war ein guter Tag ❤", icon: Brain, color: "#8B5CF6" },
    { name: "Diabetes Typ 2", members: 1102, active: 34,
      lastMsg: "Tom: Rezept-Tipps für die Woche", icon: Heart, color: "#DC2626" },
    { name: "Krebs — Angehörige", members: 421, active: 12,
      lastMsg: "Maria: Danke für eure Worte 🙏", icon: Activity, color: "#EC4899" },
    { name: "Endometriose", members: 738, active: 31,
      lastMsg: "Julia: Welche Therapie hat bei euch geholfen?", icon: Activity, color: "#BE185D" },
  ];

  if (selected) {
    const g = groups.find((x) => x.name === selected);
    const Icon = g.icon;
    const messages = [
      { author: "Sandra K.", text: "Hallo zusammen! Wie geht ihr mit der Müdigkeit am Nachmittag um?", time: "14:23", me: false, color: "#8B5CF6" },
      { author: "Markus B.", text: "Bei mir hilft ein kurzer Spaziergang an der frischen Luft.", time: "14:31", me: false, color: "#06B6D4" },
      { author: "Du", text: "Ich versuche, mittags 20 Minuten zu ruhen. Macht einen Unterschied.", time: "14:38", me: true },
      { author: "Anonym", text: "Danke für den Tipp! Werde ich probieren.", time: "14:45", me: false, color: "#F59E0B" },
    ];
    return (
      <div className="flex flex-col bg-white h-full">
        <StatusBar />
        <div className="flex items-center gap-3 px-4 py-2 border-b" style={{ borderColor: C.border }}>
          <button onClick={() => setSelected(null)} className="p-1">
            <ChevronLeft size={24} color={C.black} />
          </button>
          <div className="flex items-center justify-center"
               style={{ width: 36, height: 36, backgroundColor: g.color + "20",
                        borderRadius: RAD.icon }}>
            <Icon size={18} color={g.color} />
          </div>
          <div className="flex-1">
            <div className="text-[14px]" style={{ fontWeight: 700, color: C.black }}>{g.name}</div>
            <div className="text-[11px] text-gray-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              {g.active} aktiv · {g.members} Mitglieder
            </div>
          </div>
          <Lock size={16} color="#9CA3AF" />
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ backgroundColor: C.bgGray }}>
          <div className="mx-auto text-[10px] px-3 py-1.5 text-center"
               style={{ backgroundColor: "#E5E7EB", color: "#6B7280",
                        width: "fit-content", fontWeight: 600, borderRadius: RAD.chip }}>
            Moderiert · Anonyme Teilnahme möglich
          </div>
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.me ? "justify-end" : "justify-start"} gap-2`}>
              {!m.me && (
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] text-white shrink-0"
                     style={{ backgroundColor: m.color, fontWeight: 700 }}>{m.author.charAt(0)}</div>
              )}
              <div className="max-w-[75%]">
                {!m.me && <div className="text-[10px] text-gray-500 mb-1 ml-1" style={{ fontWeight: 600 }}>{m.author}</div>}
                <div className="px-3.5 py-2.5 text-[13px]"
                     style={{ backgroundColor: m.me ? C.purple : "white",
                              color: m.me ? "white" : C.black,
                              borderRadius: 20,
                              borderTopLeftRadius: m.me ? 20 : 6,
                              borderTopRightRadius: m.me ? 6 : 20,
                              border: m.me ? "none" : "1px solid #F1F1F4" }}>
                  {m.text}
                </div>
                <div className={`text-[10px] text-gray-400 mt-1 ${m.me ? "text-right mr-1" : "ml-1"}`}>{m.time}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 px-3 py-3 border-t bg-white" style={{ borderColor: C.border }}>
          <button className="p-2 rounded-full" style={{ backgroundColor: C.bgGray }}>
            <Plus size={18} color="#6B7280" />
          </button>
          <div className="flex-1 px-4 py-2.5 text-[13px] text-gray-400"
               style={{ backgroundColor: C.bgGray, borderRadius: RAD.chip }}>Nachricht schreiben...</div>
          <button className="p-2.5 rounded-full" style={{ backgroundColor: C.purple }}>
            <Send size={18} color="white" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white min-h-full">
      <StatusBar />
      <TopIcons onBack={onBack} />
      <div className="px-6 pt-2 pb-5">
        <h2 className="text-[34px] leading-[1.1] tracking-[-0.025em]"
            style={{ fontWeight: 800, color: C.black }}>
          Selbsthilfe-<br />gruppen
        </h2>
        <p className="text-[14px] text-gray-500 mt-2">Wähle ein Thema und tausche dich aus</p>
        <div className="flex items-center gap-1.5 mt-3 text-[11px] text-gray-500">
          <Lock size={12} />
          <span>Verschlüsselt · Moderiert · Anonym möglich</span>
        </div>
      </div>
      <div className="px-6 pb-8 space-y-2.5">
        {groups.map((g, i) => {
          const Icon = g.icon;
          return (
            <button key={i} onClick={() => setSelected(g.name)}
                    className="w-full p-4 flex items-center gap-3 text-left"
                    style={{ backgroundColor: C.bgGray, borderRadius: RAD.card }}>
              <div className="flex items-center justify-center shrink-0"
                   style={{ width: 48, height: 48, backgroundColor: g.color + "20",
                            borderRadius: RAD.icon }}>
                <Icon size={22} color={g.color} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-[15px]" style={{ fontWeight: 700, color: C.black }}>{g.name}</div>
                  <div className="text-[10px] text-gray-400 shrink-0">{g.members.toLocaleString("de-DE")}</div>
                </div>
                <div className="text-[12px] text-gray-500 mt-0.5 truncate">{g.lastMsg}</div>
                <div className="flex items-center gap-1 mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] text-green-700" style={{ fontWeight: 600 }}>{g.active} jetzt aktiv</span>
                </div>
              </div>
            </button>
          );
        })}
        <button className="w-full p-3.5 text-[14px] flex items-center justify-center gap-2 mt-2"
                style={{ border: `1.5px dashed ${C.purple}`, color: C.purple,
                         backgroundColor: C.purpleLight, fontWeight: 600,
                         borderRadius: RAD.card }}>
          <Plus size={16} />
          Neues Thema vorschlagen
        </button>
      </div>
    </div>
  );
};

const TagebuchScreen = ({ onBack }) => {
  const [mood, setMood] = useState(null);
  const [entry, setEntry] = useState("");
  const moods = [
    { id: "good", icon: Smile, label: "Gut", color: "#16A34A" },
    { id: "ok", icon: Meh, label: "Okay", color: "#F59E0B" },
    { id: "bad", icon: Frown, label: "Schwierig", color: "#DC2626" },
  ];
  const entries = [
    { date: "20. Mai", mood: "good", title: "Spaziergang mit Toni",
      excerpt: "War heute eine Stunde im Park. Hat richtig gut getan." },
    { date: "19. Mai", mood: "ok", title: "Müdigkeit am Nachmittag",
      excerpt: "Mittagsruhe hat geholfen. Abends wieder Energie." },
    { date: "17. Mai", mood: "bad", title: "Schlechter Tag",
      excerpt: "Schmerzen waren stark. Gruppe hat geholfen." },
  ];

  return (
    <div className="flex flex-col bg-white min-h-full">
      <StatusBar />
      <TopIcons onBack={onBack} />
      <div className="px-6 pt-2 pb-5">
        <h2 className="text-[34px] leading-[1.1] tracking-[-0.025em]"
            style={{ fontWeight: 800, color: C.black }}>
          Wie geht es dir<br />heute?
        </h2>
        <p className="text-[13px] text-gray-500 mt-2">Donnerstag, 22. Mai 2026</p>
        <div className="flex gap-2.5 mt-5">
          {moods.map((m) => {
            const Icon = m.icon;
            const active = mood === m.id;
            return (
              <button key={m.id} onClick={() => setMood(m.id)}
                      className="flex-1 p-4 flex flex-col items-center gap-1.5"
                      style={{ backgroundColor: active ? m.color + "20" : C.bgGray,
                               border: active ? `1.5px solid ${m.color}` : "1.5px solid transparent",
                               borderRadius: RAD.card }}>
                <Icon size={28} color={active ? m.color : "#9CA3AF"} />
                <span className="text-[12px]"
                      style={{ color: active ? m.color : "#6B7280", fontWeight: 700 }}>{m.label}</span>
              </button>
            );
          })}
        </div>
        <textarea value={entry} onChange={(e) => setEntry(e.target.value)}
                  placeholder="Was beschäftigt dich heute? Schreibe frei drauflos..."
                  className="w-full p-4 text-[14px] outline-none resize-none mt-4"
                  style={{ backgroundColor: C.bgGray, minHeight: 100,
                           border: "1.5px solid transparent", borderRadius: RAD.inner }} />
        <div className="mt-4">
          <div className="text-[11px] text-gray-500 mb-2 uppercase tracking-wider"
               style={{ fontWeight: 700 }}>Symptome heute</div>
          <div className="flex flex-wrap gap-1.5">
            {["Müdigkeit", "Schmerzen", "Schlaf", "Appetit", "Stimmung"].map((s) => (
              <button key={s} className="text-[12px] px-3 py-1.5"
                      style={{ backgroundColor: C.bgGray, color: "#4B5563",
                               border: `1px solid ${C.border}`, fontWeight: 500,
                               borderRadius: RAD.chip }}>
                + {s}
              </button>
            ))}
          </div>
        </div>
        <button className="w-full py-3.5 mt-5 text-[14px] text-white"
                style={{ backgroundColor: C.purple, fontWeight: 700, borderRadius: RAD.chip }}>
          Eintrag speichern
        </button>
      </div>
      <div className="px-6 pb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[11px] text-gray-500 uppercase tracking-wider"
               style={{ fontWeight: 700 }}>Letzte Einträge</div>
          <button className="text-[12px] flex items-center gap-1"
                  style={{ color: C.purple, fontWeight: 700 }}>
            <Calendar size={12} /> Verlauf
          </button>
        </div>
        <div className="space-y-2.5">
          {entries.map((e, i) => {
            const m = moods.find((x) => x.id === e.mood);
            const Icon = m.icon;
            return (
              <div key={i} className="p-3.5 flex items-start gap-3"
                   style={{ backgroundColor: C.bgGray, borderRadius: RAD.inner }}>
                <div className="p-1.5" style={{ backgroundColor: m.color + "20",
                                                  borderRadius: RAD.icon }}>
                  <Icon size={18} color={m.color} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-[14px]" style={{ fontWeight: 700, color: C.black }}>{e.title}</div>
                    <div className="text-[10px] text-gray-400">{e.date}</div>
                  </div>
                  <div className="text-[12px] text-gray-500 mt-1 leading-snug">{e.excerpt}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ─── Erinnerungen Screen ─────────────────────────────────────────────────
const ErinnerungenScreen = ({ onBack }) => {
  const HCG = "#22A45D";
  const S   = { fontFamily:"Manrope, system-ui, sans-serif" };

  const [todayItems, setTodayItems] = React.useState([
    { id:1, icon:"💊", title:"Medikament einnehmen", time:"08:00 Uhr", done:true  },
    { id:2, icon:"💧", title:"Wasser trinken",        time:"10:00 Uhr", done:false },
    { id:3, icon:"📖", title:"Tagebuch ausfüllen",    time:"20:00 Uhr", done:false },
  ]);

  const categories = [
    { icon:"💊", label:"Medikamente",               count:3 },
    { icon:"🩺", label:"Arzttermine",                count:1 },
    { icon:"💬", label:"Gruppenchats / Selbsthilfe", count:2 },
    { icon:"📖", label:"Tagebuch",                   count:1 },
    { icon:"📄", label:"Dokumente & Anträge",        count:0 },
    { icon:"🏃", label:"Gesundheit & Aktivitäten",   count:2 },
  ];

  const [showModal,        setShowModal]        = React.useState(false);
  const [showNotification, setShowNotification] = React.useState(false);
  const [pushEnabled,      setPushEnabled]      = React.useState(true);
  const [timing,           setTiming]           = React.useState("10");

  // Modal-State
  const [mArt,         setMArt]         = React.useState("");
  const [mTitel,       setMTitel]       = React.useState("");
  const [mDatum,       setMDatum]       = React.useState("");
  const [mUhrzeit,     setMUhrzeit]     = React.useState("08:00");
  const [mWiederholung,setMWiederholung]= React.useState("einmalig");
  const [mPush,        setMPush]        = React.useState(true);

  const artOptions = [
    { icon:"💊", label:"Medikamente" },
    { icon:"🩺", label:"Arzttermin"  },
    { icon:"💬", label:"Gruppen"     },
    { icon:"📖", label:"Tagebuch"    },
    { icon:"📄", label:"Dokumente"   },
    { icon:"🏃", label:"Gesundheit"  },
  ];
  const wiederholungOptions = ["einmalig","täglich","wöchentlich"];

  const handleSave = () => {
    setShowModal(false);
    setMArt(""); setMTitel(""); setMDatum(""); setMUhrzeit("08:00");
    setMWiederholung("einmalig"); setMPush(true);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4500);
  };

  const toggleDone = (id) =>
    setTodayItems(prev => prev.map(r => r.id === id ? {...r, done:!r.done} : r));

  // ── Toggle component ──
  const Toggle = ({ value, onChange }) => (
    <button onClick={() => onChange(!value)}
            style={{ width:48, height:28, borderRadius:14, border:"none", cursor:"pointer",
                     background: value ? HCG : "#D1D5DB", position:"relative", flexShrink:0,
                     transition:"background 0.2s" }}>
      <div style={{ width:22, height:22, borderRadius:11, background:"white",
                    position:"absolute", top:3, left: value ? 23 : 3,
                    transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}/>
    </button>
  );

  return (
    <div style={{ ...S, display:"flex", flexDirection:"column", height:"100%",
                  background:"#F7F8FA", position:"relative" }}>

      {/* ── Push-Benachrichtigung ── */}
      {showNotification && (
        <div style={{ position:"absolute", top:12, left:12, right:12, zIndex:200,
                      background:"rgba(28,28,28,0.95)", borderRadius:18, padding:"14px 16px",
                      boxShadow:"0 10px 40px rgba(0,0,0,0.3)",
                      display:"flex", alignItems:"flex-start", gap:12 }}>
          <div style={{ width:38, height:38, borderRadius:10, background:HCG,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        flexShrink:0, fontSize:20 }}>🔔</div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:12, fontWeight:700, color:"rgba(255,255,255,0.55)", marginBottom:2 }}>HealthConnect</div>
            <div style={{ fontSize:14, fontWeight:600, color:"white" }}>Zeit für dein Medikament.</div>
          </div>
          <div style={{ fontSize:11, color:"rgba(255,255,255,0.45)", flexShrink:0 }}>Jetzt</div>
        </div>
      )}

      {/* ── Header ── */}
      <div style={{ background:"white", display:"flex", alignItems:"center", gap:12,
                    padding:"12px 16px", borderBottom:"1px solid #EAEAEA", flexShrink:0 }}>
        <button onClick={onBack} style={{ border:"none", background:"none", cursor:"pointer",
                                          padding:"4px 2px", display:"flex" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#111" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span style={{ fontSize:18, fontWeight:800, color:"#111", flex:1 }}>Erinnerungen</span>
        {/* + Button im Header */}
        <button onClick={() => setShowModal(true)}
                style={{ border:"none", background:HCG, color:"white", borderRadius:10,
                         padding:"6px 14px", fontSize:13, fontWeight:700, cursor:"pointer",
                         display:"flex", alignItems:"center", gap:4 }}>
          <span style={{ fontSize:16 }}>+</span> Neu
        </button>
      </div>

      {/* ── Scrollbarer Inhalt ── */}
      <div style={{ flex:1, overflowY:"auto", padding:"16px 16px 24px" }}>

        {/* ═══ 1. HEUTE ═══ */}
        <div style={{ fontSize:16, fontWeight:800, color:"#111", marginBottom:10 }}>Heute</div>
        <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:22 }}>
          {todayItems.map(r => (
            <div key={r.id} style={{ background:"white", borderRadius:16, padding:"13px 16px",
                                      display:"flex", alignItems:"center", gap:12,
                                      boxShadow:"0 1px 4px rgba(0,0,0,0.05)",
                                      opacity: r.done ? 0.6 : 1 }}>
              <div style={{ width:42, height:42, borderRadius:12, background:"#F0F7F2",
                             display:"flex", alignItems:"center", justifyContent:"center",
                             fontSize:20, flexShrink:0 }}>{r.icon}</div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontSize:14, fontWeight:700, color:"#111",
                              textDecoration: r.done ? "line-through" : "none" }}>{r.title}</div>
                <div style={{ fontSize:12, color:"#6B7280", marginTop:2 }}>{r.time}</div>
              </div>
              {/* Status-Checkbox */}
              <button onClick={() => toggleDone(r.id)}
                      style={{ width:26, height:26, borderRadius:13, border:"none",
                                cursor:"pointer", flexShrink:0,
                                background: r.done ? HCG : "transparent",
                                border: r.done ? "none" : "2px solid #D1D5DB",
                                display:"flex", alignItems:"center", justifyContent:"center" }}>
                {r.done && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L19 7" stroke="white" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* ═══ 2. ALLE ERINNERUNGEN ═══ */}
        <div style={{ fontSize:16, fontWeight:800, color:"#111", marginBottom:10 }}>Alle Erinnerungen</div>
        <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:22 }}>
          {categories.map((c, i) => (
            <div key={i} style={{ background:"white", borderRadius:16, padding:"13px 16px",
                                   display:"flex", alignItems:"center", gap:12,
                                   boxShadow:"0 1px 4px rgba(0,0,0,0.05)", cursor:"pointer" }}>
              <div style={{ width:42, height:42, borderRadius:12, background:"#F0F7F2",
                             display:"flex", alignItems:"center", justifyContent:"center",
                             fontSize:20, flexShrink:0 }}>{c.icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:14, fontWeight:700, color:"#111" }}>{c.label}</div>
              </div>
              {c.count > 0 && (
                <div style={{ background:HCG+"22", borderRadius:10, padding:"3px 10px" }}>
                  <span style={{ fontSize:12, fontWeight:700, color:HCG }}>{c.count}</span>
                </div>
              )}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="#C4C4C4" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>

        {/* ═══ 3. EINSTELLUNGEN ═══ */}
        <div style={{ fontSize:16, fontWeight:800, color:"#111", marginBottom:10 }}>
          Erinnerungs-Einstellungen
        </div>
        <div style={{ background:"white", borderRadius:16, overflow:"hidden",
                      boxShadow:"0 1px 4px rgba(0,0,0,0.05)" }}>
          {/* Push Toggle */}
          <div style={{ display:"flex", alignItems:"center", gap:12,
                        padding:"14px 16px", borderBottom:"1px solid #F3F4F6" }}>
            <div style={{ width:40, height:40, borderRadius:12, background:"#F0F7F2",
                           display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>
              🔔
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:14, fontWeight:700, color:"#111" }}>Push-Benachrichtigungen</div>
              <div style={{ fontSize:12, color:"#6B7280", marginTop:2 }}>Erinnerungen auf dem Sperrbildschirm</div>
            </div>
            <Toggle value={pushEnabled} onChange={setPushEnabled}/>
          </div>
          {/* Timing */}
          <div style={{ padding:"14px 16px" }}>
            <div style={{ fontSize:14, fontWeight:700, color:"#111", marginBottom:10 }}>
              Erinnerungszeitpunkt
            </div>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              {[["5","5 Min."],["10","10 Min."],["30","30 Min."],["60","1 Std."]].map(([val, label]) => (
                <button key={val} onClick={() => setTiming(val)}
                        style={{ padding:"7px 14px", borderRadius:20, border:"none",
                                  fontSize:13, fontWeight:600, cursor:"pointer",
                                  background: timing === val ? HCG : "#F3F4F6",
                                  color: timing === val ? "white" : "#374151" }}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>{/* end scroll */}

      {/* ═══ MODAL: Neue Erinnerung ═══ */}
      {showModal && (
        <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.45)",
                      zIndex:100, display:"flex", alignItems:"flex-end" }}>
          <div style={{ background:"white", borderRadius:"24px 24px 0 0",
                        padding:"20px 20px 36px", width:"100%", boxSizing:"border-box",
                        maxHeight:"90%", overflowY:"auto" }}>
            <div style={{ width:40, height:4, borderRadius:2, background:"#D1D5DB",
                          margin:"0 auto 18px" }}/>
            <div style={{ fontSize:18, fontWeight:800, color:"#111", marginBottom:18 }}>
              Neue Erinnerung
            </div>

            {/* Art der Erinnerung */}
            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:13, fontWeight:600, color:"#6B7280", marginBottom:8 }}>
                Art der Erinnerung
              </div>
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                {artOptions.map(a => (
                  <button key={a.label} onClick={() => setMArt(a.label)}
                          style={{ display:"flex", alignItems:"center", gap:5,
                                   padding:"7px 12px", borderRadius:20, border:"none",
                                   fontSize:13, fontWeight:600, cursor:"pointer",
                                   background: mArt === a.label ? HCG : "#F3F4F6",
                                   color: mArt === a.label ? "white" : "#374151" }}>
                    <span>{a.icon}</span>{a.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Titel */}
            <div style={{ marginBottom:14 }}>
              <div style={{ fontSize:13, fontWeight:600, color:"#6B7280", marginBottom:6 }}>Titel</div>
              <input value={mTitel} onChange={e => setMTitel(e.target.value)}
                     placeholder="z. B. Medikament einnehmen"
                     style={{ width:"100%", padding:"11px 14px", borderRadius:12,
                               border:"1.5px solid #E5E7EB", fontSize:14, outline:"none",
                               boxSizing:"border-box", fontFamily:"Manrope, system-ui, sans-serif" }}/>
            </div>

            {/* Datum + Uhrzeit nebeneinander */}
            <div style={{ display:"flex", gap:10, marginBottom:14 }}>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:600, color:"#6B7280", marginBottom:6 }}>Datum</div>
                <input type="date" value={mDatum} onChange={e => setMDatum(e.target.value)}
                       style={{ width:"100%", padding:"11px 12px", borderRadius:12,
                                 border:"1.5px solid #E5E7EB", fontSize:13, outline:"none",
                                 boxSizing:"border-box", fontFamily:"Manrope, system-ui, sans-serif" }}/>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:600, color:"#6B7280", marginBottom:6 }}>Uhrzeit</div>
                <input type="time" value={mUhrzeit} onChange={e => setMUhrzeit(e.target.value)}
                       style={{ width:"100%", padding:"11px 12px", borderRadius:12,
                                 border:"1.5px solid #E5E7EB", fontSize:13, outline:"none",
                                 boxSizing:"border-box", fontFamily:"Manrope, system-ui, sans-serif" }}/>
              </div>
            </div>

            {/* Wiederholung */}
            <div style={{ marginBottom:14 }}>
              <div style={{ fontSize:13, fontWeight:600, color:"#6B7280", marginBottom:8 }}>Wiederholung</div>
              <div style={{ display:"flex", gap:8 }}>
                {wiederholungOptions.map(w => (
                  <button key={w} onClick={() => setMWiederholung(w)}
                          style={{ flex:1, padding:"9px 6px", borderRadius:12, border:"none",
                                   fontSize:13, fontWeight:600, cursor:"pointer",
                                   background: mWiederholung === w ? HCG : "#F3F4F6",
                                   color: mWiederholung === w ? "white" : "#374151",
                                   textTransform:"capitalize" }}>
                    {w.charAt(0).toUpperCase() + w.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Push-Toggle im Modal */}
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20,
                          background:"#F7F8FA", borderRadius:14, padding:"12px 14px" }}>
              <span style={{ fontSize:18 }}>🔔</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:14, fontWeight:700, color:"#111" }}>Push-Benachrichtigung</div>
                <div style={{ fontSize:12, color:"#6B7280" }}>Erinnerung zur eingestellten Zeit</div>
              </div>
              <Toggle value={mPush} onChange={setMPush}/>
            </div>

            {/* Buttons */}
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={() => setShowModal(false)}
                      style={{ flex:1, padding:"13px", borderRadius:12,
                                border:"1.5px solid #E5E7EB", background:"white",
                                fontSize:14, fontWeight:700, color:"#6B7280", cursor:"pointer" }}>
                Abbrechen
              </button>
              <button onClick={handleSave}
                      style={{ flex:2, padding:"13px", borderRadius:12, border:"none",
                                background:HCG, fontSize:14, fontWeight:700,
                                color:"white", cursor:"pointer" }}>
                Speichern & aktivieren
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

// ─── Termine Screen ──────────────────────────────────────────────────────
const TermineScreen = ({ onBack }) => {
  const HCG = "#22A45D";
  const S   = { fontFamily:"Manrope, system-ui, sans-serif" };

  const terminTypes = [
    { id:"arzt",     icon:"🩺", label:"Arzttermin",              color:"#0EA5E9", bg:"#E0F2FE" },
    { id:"gruppe",   icon:"💬", label:"Selbsthilfegruppe",        color:"#8B5CF6", bg:"#EDE9FE" },
    { id:"therapie", icon:"🏥", label:"Therapie",                 color:HCG,       bg:"#DCFCE7" },
    { id:"antrag",   icon:"📄", label:"Krankenkasse / Antrag",    color:"#F59E0B", bg:"#FEF3C7" },
  ];
  const typeById = (id) => terminTypes.find(t => t.id === id) || terminTypes[0];

  const [appointments, setAppointments] = React.useState([
    { id:1, typeId:"arzt",     title:"Hausarzt Dr. Müller",  day:11, dateLabel:"Mo, 11. Mai", time:"10:00 Uhr", location:"Praxis Dr. Müller, Bahnhofstr. 12" },
    { id:2, typeId:"gruppe",   title:"Online Austausch",      day:14, dateLabel:"Do, 14. Mai", time:"18:00 Uhr", location:"Video-Call (Zoom)" },
    { id:3, typeId:"therapie", title:"Kontrolluntersuchung",  day:22, dateLabel:"Fr, 22. Mai", time:"09:30 Uhr", location:"Klinik am Stadtpark" },
  ]);

  const sortedAppointments = [...appointments].sort((a, b) => (a.day || 99) - (b.day || 99));

  const appointmentsByDay = appointments.reduce((acc, appt) => {
    if (appt.day) {
      if (!acc[appt.day]) acc[appt.day] = [];
      acc[appt.day].push(appt);
    }
    return acc;
  }, {});

  const [selectedDay, setSelectedDay] = React.useState(null);

  // ── Kalender Mai 2026 (Mo–So) ──
  const weekdayNames = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const daysInMonth = 31;
  const firstWeekdayIndex = 4; // 1. Mai 2026 ist ein Freitag
  const calendarCells = [];
  for (let i = 0; i < firstWeekdayIndex; i++) calendarCells.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarCells.push(d);

  const [showModal, setShowModal] = React.useState(false);
  const [tArt, setTArt] = React.useState("arzt");
  const [tTitel, setTTitel] = React.useState("");
  const [tDatum, setTDatum] = React.useState("");
  const [tUhrzeit, setTUhrzeit] = React.useState("09:00");
  const [tOrt, setTOrt] = React.useState("");
  const [tNotizen, setTNotizen] = React.useState("");
  const [tErinnerung, setTErinnerung] = React.useState(true);

  const Toggle = ({ value, onChange }) => (
    <button onClick={() => onChange(!value)}
            style={{ width:48, height:28, borderRadius:14, border:"none", cursor:"pointer",
                     background: value ? HCG : "#D1D5DB", position:"relative", flexShrink:0,
                     transition:"background 0.2s" }}>
      <div style={{ width:22, height:22, borderRadius:11, background:"white",
                    position:"absolute", top:3, left: value ? 23 : 3,
                    transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}/>
    </button>
  );

  const resetForm = () => {
    setTArt("arzt"); setTTitel(""); setTDatum(""); setTUhrzeit("09:00");
    setTOrt(""); setTNotizen(""); setTErinnerung(true);
  };

  const handleSave = () => {
    if (!tTitel.trim()) { setShowModal(false); resetForm(); return; }
    let day = null;
    let dateLabel = tDatum;
    if (tDatum) {
      const parsed = new Date(tDatum + "T00:00:00");
      if (!isNaN(parsed)) {
        const isMai2026 = parsed.getFullYear() === 2026 && parsed.getMonth() === 4;
        if (isMai2026) day = parsed.getDate();
        dateLabel = parsed.toLocaleDateString("de-DE", { weekday:"short", day:"2-digit", month:"long" });
      }
    }
    const newAppt = {
      id: Date.now(),
      typeId: tArt,
      title: tTitel,
      day,
      dateLabel: dateLabel || "Ohne Datum",
      time: tUhrzeit ? `${tUhrzeit} Uhr` : "",
      location: tOrt,
      notes: tNotizen,
      reminder: tErinnerung,
    };
    setAppointments(prev => [...prev, newAppt]);
    setShowModal(false);
    resetForm();
  };

  return (
    <div style={{ ...S, display:"flex", flexDirection:"column", height:"100%",
                  background:"#F7F8FA", position:"relative" }}>

      {/* ── Header ── */}
      <div style={{ background:"white", display:"flex", alignItems:"center", gap:12,
                    padding:"12px 16px", borderBottom:"1px solid #EAEAEA", flexShrink:0 }}>
        <button onClick={onBack} style={{ border:"none", background:"none", cursor:"pointer",
                                          padding:"4px 2px", display:"flex" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#111" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span style={{ fontSize:18, fontWeight:800, color:"#111", flex:1 }}>Termine</span>
      </div>

      {/* ── Scrollbarer Inhalt ── */}
      <div style={{ flex:1, overflowY:"auto", padding:"16px 16px 24px" }}>

        {/* ═══ 1. NÄCHSTE TERMINE ═══ */}
        <div style={{ fontSize:16, fontWeight:800, color:"#111", marginBottom:10 }}>
          Nächste Termine
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:24 }}>
          {sortedAppointments.length === 0 && (
            <div style={{ background:"white", borderRadius:16, padding:"18px 16px",
                          textAlign:"center", color:"#9CA3AF", fontSize:13,
                          boxShadow:"0 1px 4px rgba(0,0,0,0.05)" }}>
              Noch keine Termine geplant.
            </div>
          )}
          {sortedAppointments.map(appt => {
            const type = typeById(appt.typeId);
            return (
              <div key={appt.id}
                   style={{ background:"white", borderRadius:16, padding:"14px 16px",
                             display:"flex", alignItems:"flex-start", gap:12,
                             boxShadow:"0 1px 4px rgba(0,0,0,0.05)" }}>
                <div style={{ width:44, height:44, borderRadius:12, background:type.bg,
                               display:"flex", alignItems:"center", justifyContent:"center",
                               fontSize:20, flexShrink:0 }}>{type.icon}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontSize:10.5, fontWeight:700, color:type.color,
                                textTransform:"uppercase", letterSpacing:"0.04em", marginBottom:3 }}>
                    {type.label}
                  </div>
                  <div style={{ fontSize:15, fontWeight:700, color:"#111" }}>{appt.title}</div>
                  <div style={{ fontSize:12, color:"#6B7280", marginTop:3 }}>
                    {appt.dateLabel}{appt.time ? ` · ${appt.time}` : ""}
                  </div>
                  {appt.location && (
                    <div style={{ fontSize:12, color:"#9CA3AF", marginTop:2 }}>
                      📍 {appt.location}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ═══ 2. KALENDER ═══ */}
        <div style={{ fontSize:16, fontWeight:800, color:"#111", marginBottom:10 }}>
          Kalender
        </div>
        <div style={{ background:"white", borderRadius:18, padding:"16px",
                      boxShadow:"0 1px 4px rgba(0,0,0,0.05)", marginBottom:12 }}>
          <div style={{ fontSize:14, fontWeight:800, color:"#111", textAlign:"center", marginBottom:14 }}>
            Mai 2026
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(7, 1fr)", gap:4, marginBottom:6 }}>
            {weekdayNames.map(d => (
              <div key={d} style={{ textAlign:"center", fontSize:11, fontWeight:700, color:"#9CA3AF" }}>
                {d}
              </div>
            ))}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(7, 1fr)", gap:4 }}>
            {calendarCells.map((day, i) => {
              const hasAppt = day && appointmentsByDay[day];
              const isSelected = day && selectedDay === day;
              return (
                <button key={i} disabled={!day}
                        onClick={() => day && setSelectedDay(isSelected ? null : day)}
                        style={{ aspectRatio:"1", border:"none", borderRadius:12,
                                  cursor: day ? "pointer" : "default",
                                  background: isSelected ? HCG : (hasAppt ? HCG+"18" : "transparent"),
                                  color: isSelected ? "white" : (day ? "#111" : "transparent"),
                                  fontSize:13, fontWeight: hasAppt ? 700 : 500,
                                  position:"relative",
                                  display:"flex", alignItems:"center", justifyContent:"center" }}>
                  {day || "·"}
                  {hasAppt && !isSelected && (
                    <span style={{ position:"absolute", bottom:4, width:4, height:4,
                                   borderRadius:2, background:HCG }}/>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailinfo zum ausgewählten Tag */}
        {selectedDay && appointmentsByDay[selectedDay] && (
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {appointmentsByDay[selectedDay].map(appt => {
              const type = typeById(appt.typeId);
              return (
                <div key={appt.id}
                     style={{ background:type.bg, borderRadius:16, padding:"13px 16px",
                               display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ fontSize:20, flexShrink:0 }}>{type.icon}</div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:14, fontWeight:700, color:"#111" }}>{appt.title}</div>
                    <div style={{ fontSize:12, color:"#4B5563", marginTop:2 }}>
                      {appt.dateLabel}{appt.time ? ` · ${appt.time}` : ""}
                      {appt.location ? ` · ${appt.location}` : ""}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ═══ 3. BUTTON „+ NEUER TERMIN" ═══ */}
        <button onClick={() => setShowModal(true)}
                style={{ width:"100%", padding:"15px", borderRadius:9999, border:"none",
                          background:HCG, color:"white", fontSize:15, fontWeight:700,
                          cursor:"pointer", display:"flex", alignItems:"center",
                          justifyContent:"center", gap:8 }}>
          <span style={{ fontSize:18, lineHeight:1 }}>+</span> Neuer Termin
        </button>

      </div>{/* end scroll */}

      {/* ═══ MODAL: Neuer Termin ═══ */}
      {showModal && (
        <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.45)",
                      zIndex:100, display:"flex", alignItems:"flex-end" }}>
          <div style={{ background:"white", borderRadius:"24px 24px 0 0",
                        padding:"20px 20px 36px", width:"100%", boxSizing:"border-box",
                        maxHeight:"90%", overflowY:"auto" }}>
            <div style={{ width:40, height:4, borderRadius:2, background:"#D1D5DB",
                          margin:"0 auto 18px" }}/>
            <div style={{ fontSize:18, fontWeight:800, color:"#111", marginBottom:18 }}>
              Neuer Termin
            </div>

            {/* Terminart */}
            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:13, fontWeight:600, color:"#6B7280", marginBottom:8 }}>
                Terminart
              </div>
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                {terminTypes.map(t => (
                  <button key={t.id} onClick={() => setTArt(t.id)}
                          style={{ display:"flex", alignItems:"center", gap:5,
                                   padding:"7px 12px", borderRadius:20, border:"none",
                                   fontSize:13, fontWeight:600, cursor:"pointer",
                                   background: tArt === t.id ? HCG : "#F3F4F6",
                                   color: tArt === t.id ? "white" : "#374151" }}>
                    <span>{t.icon}</span>{t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Titel */}
            <div style={{ marginBottom:14 }}>
              <div style={{ fontSize:13, fontWeight:600, color:"#6B7280", marginBottom:6 }}>Titel</div>
              <input value={tTitel} onChange={e => setTTitel(e.target.value)}
                     placeholder="z. B. Hausarzt Dr. Müller"
                     style={{ width:"100%", padding:"11px 14px", borderRadius:12,
                               border:"1.5px solid #E5E7EB", fontSize:14, outline:"none",
                               boxSizing:"border-box", fontFamily:"Manrope, system-ui, sans-serif" }}/>
            </div>

            {/* Datum + Uhrzeit */}
            <div style={{ display:"flex", gap:10, marginBottom:14 }}>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:600, color:"#6B7280", marginBottom:6 }}>Datum</div>
                <input type="date" value={tDatum} onChange={e => setTDatum(e.target.value)}
                       style={{ width:"100%", padding:"11px 12px", borderRadius:12,
                                 border:"1.5px solid #E5E7EB", fontSize:13, outline:"none",
                                 boxSizing:"border-box", fontFamily:"Manrope, system-ui, sans-serif" }}/>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:600, color:"#6B7280", marginBottom:6 }}>Uhrzeit</div>
                <input type="time" value={tUhrzeit} onChange={e => setTUhrzeit(e.target.value)}
                       style={{ width:"100%", padding:"11px 12px", borderRadius:12,
                                 border:"1.5px solid #E5E7EB", fontSize:13, outline:"none",
                                 boxSizing:"border-box", fontFamily:"Manrope, system-ui, sans-serif" }}/>
              </div>
            </div>

            {/* Ort */}
            <div style={{ marginBottom:14 }}>
              <div style={{ fontSize:13, fontWeight:600, color:"#6B7280", marginBottom:6 }}>Ort</div>
              <input value={tOrt} onChange={e => setTOrt(e.target.value)}
                     placeholder="z. B. Praxis, Video-Call, Adresse"
                     style={{ width:"100%", padding:"11px 14px", borderRadius:12,
                               border:"1.5px solid #E5E7EB", fontSize:14, outline:"none",
                               boxSizing:"border-box", fontFamily:"Manrope, system-ui, sans-serif" }}/>
            </div>

            {/* Notizen */}
            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:13, fontWeight:600, color:"#6B7280", marginBottom:6 }}>Notizen</div>
              <textarea value={tNotizen} onChange={e => setTNotizen(e.target.value)}
                        placeholder="Zusätzliche Informationen ..."
                        style={{ width:"100%", padding:"11px 14px", borderRadius:12,
                                  border:"1.5px solid #E5E7EB", fontSize:14, outline:"none",
                                  minHeight:70, resize:"none",
                                  boxSizing:"border-box", fontFamily:"Manrope, system-ui, sans-serif" }}/>
            </div>

            {/* Erinnerung aktivieren */}
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20,
                          background:"#F7F8FA", borderRadius:14, padding:"12px 14px" }}>
              <span style={{ fontSize:18 }}>🔔</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:14, fontWeight:700, color:"#111" }}>Erinnerung aktivieren</div>
                <div style={{ fontSize:12, color:"#6B7280" }}>Push-Benachrichtigung vor dem Termin</div>
              </div>
              <Toggle value={tErinnerung} onChange={setTErinnerung}/>
            </div>

            {/* Buttons */}
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={() => { setShowModal(false); resetForm(); }}
                      style={{ flex:1, padding:"13px", borderRadius:12,
                                border:"1.5px solid #E5E7EB", background:"white",
                                fontSize:14, fontWeight:700, color:"#6B7280", cursor:"pointer" }}>
                Abbrechen
              </button>
              <button onClick={handleSave}
                      style={{ flex:2, padding:"13px", borderRadius:12, border:"none",
                                background:HCG, fontSize:14, fontWeight:700,
                                color:"white", cursor:"pointer" }}>
                Termin speichern
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};


const PlaceholderScreen = ({ title, onBack }) => (
  <div className="flex flex-col bg-white min-h-full">
    <StatusBar />
    <TopIcons onBack={onBack} />
    <div className="flex-1 flex items-center justify-center px-8 text-center pb-20">
      <div>
        <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
             style={{ backgroundColor: C.purpleLight }}>
          <Sparkles size={28} color={C.purple} />
        </div>
        <h3 className="text-[20px]" style={{ fontWeight: 800, color: C.black }}>{title}</h3>
        <p className="text-[13px] text-gray-500 mt-2">
          Diese Ansicht ist Teil der bestehenden Barmer App.
        </p>
      </div>
    </div>
  </div>
);

// ─── Main ───────────────────────────────────────────────────────────────
export default function BarmerWireframe() {
  const [screen, setScreen] = useState("home");
  const [nav, setNav] = useState("start");

  const handleNavChange = (id) => {
    setNav(id);
    if (id === "start") setScreen("home");
    else setScreen(id);
  };
  const goHome = () => { setScreen("home"); setNav("start"); };

  const render = () => {
    switch (screen) {
      case "home": return <HomeScreen onOpenHealthConnect={() => setScreen("health-connect")} />;
      case "health-connect": return <HealthConnectOverview onBack={goHome} onOpen={(id) => setScreen(id)} />;
      case "freunde": return <FreundeScreen onBack={() => setScreen("health-connect")} />;
      case "info": return <InfoScreen onBack={() => setScreen("health-connect")} onOpenGroup={() => setScreen("gruppen")} />;
      case "gruppen": return <GruppenScreen onBack={() => setScreen("health-connect")} />;
      case "tagebuch": return <TagebuchScreen onBack={() => setScreen("health-connect")} />;
      case "erinnerungen": return <ErinnerungenScreen onBack={() => setScreen("health-connect")} />;
      case "termine": return <TermineScreen onBack={() => setScreen("health-connect")} />;
      case "antraege": return <PlaceholderScreen title="Anträge & Co" onBack={goHome} />;
      case "postfach": return <PlaceholderScreen title="Postfach" onBack={goHome} />;
      case "bonus": return <PlaceholderScreen title="Bonus" onBack={goHome} />;
      case "kompass": return <PlaceholderScreen title="Kompass" onBack={goHome} />;
      default: return <HomeScreen onOpenHealthConnect={() => setScreen("health-connect")} />;
    }
  };

  const hideNavOnScreen = screen === "gruppen" || screen === "health-connect" || screen === "freunde" || screen === "info" || screen === "tagebuch" || screen === "erinnerungen" || screen === "termine";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');
        .barmer-app, .barmer-app * {
          font-family: 'Manrope', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }
      `}</style>
      <div className="min-h-screen w-full flex items-center justify-center py-8 px-4 barmer-app"
           style={{ background: "radial-gradient(circle at 50% 0%, #E8EBF0 0%, #D9DDE5 100%)" }}>
        <div className="flex flex-col items-center">
          <div className="mb-4 text-center">
            <div className="text-[11px] uppercase tracking-[0.2em]"
                 style={{ color: C.purple, fontWeight: 700 }}>
              Wireframe · Barmer App
            </div>
            <h1 className="text-[22px] mt-1" style={{ color: C.black, fontWeight: 800 }}>
              Startseite + „Health Connect"
            </h1>
            <p className="text-[11px] text-gray-500 mt-1">
              FAMILY_IMAGE_URL setzen → eigenes Hero-Bild wird verwendet
            </p>
          </div>

          <div className="p-2.5 shadow-2xl"
               style={{ backgroundColor: "#0A0A0A", width: 390, borderRadius: "48px" }}>
            <div className="overflow-hidden relative bg-white"
                 style={{ height: 800, borderRadius: "40px" }}>
              <div className="overflow-y-auto"
                   style={{ height: hideNavOnScreen ? "100%" : "calc(100% - 76px)" }}>
                {render()}
              </div>
              {!hideNavOnScreen && (
                <div className="absolute bottom-0 left-0 right-0">
                  <BottomNav active={nav} onChange={handleNavChange} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<BarmerWireframe />);
