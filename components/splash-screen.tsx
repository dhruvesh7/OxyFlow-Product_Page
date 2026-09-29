"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type TargetAndTransition } from "framer-motion";
import Image from "next/image";

const SCENE_MS = 1500; // hospital scene plays, then the logo reveals
const TOTAL_MS = 2500; // splash fades out
const SESSION_KEY = "oxyflow-splash-seen";

// Path the oxygen bubbles follow: tank -> tube -> mask
const BUBBLE_X = [214, 242, 281, 316, 328];
const BUBBLE_Y = [252, 279, 288, 281, 256];

export function SplashScreen() {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState<"scene" | "logo">("scene");
  const reduceMotion = !!useReducedMotion();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        // Use a short timeout to avoid synchronous setState inside useEffect
        setTimeout(() => setShow(false), 0);
        return;
      }
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* storage unavailable: just show the splash */
    }
    const t1 = setTimeout(() => setPhase("logo"), reduceMotion ? 600 : SCENE_MS);
    const t2 = setTimeout(() => setShow(false), reduceMotion ? 1800 : TOTAL_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  // Only loop animations when the user hasn't asked for reduced motion
  const loop = (a: TargetAndTransition) => (reduceMotion ? undefined : a);
  const rep = { repeat: Infinity, ease: "easeInOut" as const };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onClick={() => setShow(false)}
          role="status"
          aria-label="Loading OxyFlow"
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 via-[#eaf4fb] to-emerald-50"
        >
          {/* ---------- Hospital scene ---------- */}
          <motion.div
            className="w-[min(96vw,960px)]"
            animate={{
              opacity: phase === "logo" ? 0.28 : 1,
              filter: phase === "logo" ? "blur(6px)" : "blur(0px)",
              scale: phase === "logo" ? 1.04 : 1,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <svg
              viewBox="0 0 800 400"
              className="h-auto w-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="ox-sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#bae6fd" />
                  <stop offset="100%" stopColor="#e0f2fe" />
                </linearGradient>
                <linearGradient id="ox-floor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#dbe7ef" />
                  <stop offset="100%" stopColor="#c3d3df" />
                </linearGradient>
                <linearGradient id="ox-ecg" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
                <clipPath id="ox-window">
                  <rect x="46" y="66" width="128" height="118" rx="4" />
                </clipPath>
              </defs>

              {/* Floor + baseboard (extends past the viewBox to fill the screen) */}
              <rect x="-1500" y="334" width="3800" height="2000" fill="url(#ox-floor)" />
              <rect x="-1500" y="330" width="3800" height="6" fill="#ffffff" opacity="0.7" />

              {/* Window with drifting clouds */}
              <rect x="40" y="60" width="140" height="130" rx="6" fill="#ffffff" />
              <g clipPath="url(#ox-window)">
                <rect x="46" y="66" width="128" height="118" fill="url(#ox-sky)" />
                <motion.g
                  initial={{ x: -40 }}
                  animate={loop({ x: [-40, 60] })}
                  transition={{ duration: 8, ...rep, repeatType: "reverse" }}
                >
                  <ellipse cx="80" cy="100" rx="22" ry="8" fill="#fff" opacity="0.9" />
                  <ellipse cx="96" cy="94" rx="16" ry="8" fill="#fff" opacity="0.9" />
                </motion.g>
                <circle cx="150" cy="92" r="12" fill="#fde68a" />
              </g>
              <rect x="108" y="66" width="4" height="118" fill="#fff" />
              <rect x="46" y="124" width="128" height="4" fill="#fff" />

              {/* Medical cross sign on the wall */}
              <g opacity="0.9">
                <rect x="664" y="80" width="14" height="42" rx="3" fill="#3b82f6" />
                <rect x="650" y="94" width="42" height="14" rx="3" fill="#3b82f6" />
              </g>

              {/* Wall-mounted vitals monitor */}
              <rect x="520" y="150" width="8" height="18" fill="#94a3b8" />
              <rect x="480" y="66" width="130" height="86" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="3" />
              <text x="490" y="84" fontSize="9" fill="#94a3b8" fontFamily="ui-sans-serif, system-ui">
                SpO₂
              </text>
              <text x="490" y="106" fontSize="20" fontWeight="700" fill="#22c55e" fontFamily="ui-sans-serif, system-ui">
                98
              </text>
              <motion.text
                x="600"
                y="84"
                textAnchor="end"
                fontSize="9"
                fill="#22c55e"
                fontFamily="ui-sans-serif, system-ui"
                animate={loop({ opacity: [1, 0.3, 1] })}
                transition={{ duration: 1.2, ...rep }}
              >
                ● FLOW OK
              </motion.text>
              <motion.path
                d="M490 132 H520 l6 -14 l8 26 l7 -20 l5 8 H560 l6 -14 l8 26 l7 -20 l5 8 H600"
                stroke="url(#ox-ecg)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [1, 1, 0] }}
                transition={{ duration: 1.8, times: [0, 0.75, 1], repeat: Infinity, ease: "linear" }}
              />

              {/* Wireless link: sensor -> monitor */}
              <motion.path
                d="M283 278 C 320 190, 420 150, 478 116"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeDasharray="4 7"
                fill="none"
                strokeLinecap="round"
                animate={loop({ strokeDashoffset: [0, -44] })}
                transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                opacity="0.8"
              />

              {/* Oxygen tank */}
              <rect x="200" y="258" width="28" height="78" rx="12" fill="#22c55e" />
              <rect x="200" y="282" width="28" height="8" fill="#16a34a" />
              <rect x="208" y="246" width="12" height="14" rx="3" fill="#94a3b8" />

              {/* Bed */}
              <rect x="262" y="304" width="8" height="30" fill="#94a3b8" />
              <rect x="622" y="304" width="8" height="30" fill="#94a3b8" />
              <circle cx="266" cy="338" r="8" fill="#64748b" />
              <circle cx="626" cy="338" r="8" fill="#64748b" />
              <rect x="244" y="226" width="10" height="84" rx="4" fill="#94a3b8" />
              <rect x="636" y="262" width="8" height="48" rx="4" fill="#94a3b8" />
              <rect x="250" y="292" width="390" height="12" rx="4" fill="#94a3b8" />
              <rect x="256" y="268" width="380" height="26" rx="8" fill="#e2e8f0" />
              <ellipse cx="302" cy="262" rx="40" ry="14" fill="#ffffff" />

              {/* Patient */}
              <circle cx="304" cy="240" r="26" fill="#e8b992" />
              <path d="M278 236 a26 26 0 0 1 52 -6 c-10 -14 -42 -14 -52 6z" fill="#3b2f2f" />
              <path d="M292 240 q4 2 8 0 M310 240 q4 2 8 0" stroke="#5b4636" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              {/* Mask strap */}
              <path d="M318 234 Q302 220 282 232" stroke="#3b82f6" strokeWidth="2" fill="none" />
              {/* Tube */}
              <path d="M328 256 C 334 300, 236 300, 214 252" stroke="#3b82f6" strokeWidth="4" fill="none" strokeLinecap="round" />
              {/* Mask */}
              <path d="M316 232 q26 -4 30 14 q-3 16 -26 14 q-10 -14 -4 -28z" fill="#dbeafe" fillOpacity="0.9" stroke="#60a5fa" strokeWidth="2" />
              {/* Blanket (breathes) */}
              <motion.g
                style={{ originX: 0.5, originY: 1 }}
                animate={loop({ scaleY: [1, 1.08, 1] })}
                transition={{ duration: 2.6, ...rep }}
              >
                <rect x="340" y="256" width="292" height="40" rx="16" fill="#60a5fa" />
                <rect x="340" y="256" width="292" height="10" rx="5" fill="#93c5fd" />
              </motion.g>

              {/* Oxygen flow bubbles */}
              {[0, 0.5, 1].map((d) => (
                <motion.circle
                  key={d}
                  r="3"
                  fill="#22d3ee"
                  initial={{ opacity: 0, cx: BUBBLE_X[0], cy: BUBBLE_Y[0] }}
                  animate={loop({
                    cx: BUBBLE_X,
                    cy: BUBBLE_Y,
                    opacity: [0, 1, 1, 1, 0],
                  })}
                  transition={{ duration: 1.5, delay: d, repeat: Infinity, ease: "linear" }}
                />
              ))}

              {/* Gentle flow waves at the mask (echoes the logo) */}
              {[0, 8].map((dy, i) => (
                <motion.path
                  key={dy}
                  d={`M350 ${238 + dy} q9 -7 18 0 t18 0 t18 0`}
                  stroke="#22c5c5"
                  strokeWidth="2.2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  animate={loop({ opacity: [0, 0.9, 0], x: [-4, 8] })}
                  transition={{ duration: 1.8, delay: i * 0.35, repeat: Infinity, ease: "easeOut" }}
                />
              ))}

              {/* Sensor on the tube + wifi pulses */}
              <rect x="269" y="282" width="24" height="13" rx="3" fill="#0f172a" />
              <motion.circle
                cx="275"
                cy="288.5"
                r="2"
                fill="#22c55e"
                animate={loop({ opacity: [1, 0.2, 1] })}
                transition={{ duration: 0.9, ...rep }}
              />
              {[
                "M276 274 Q281 270 286 274",
                "M272 269 Q281 262 290 269",
                "M268 264 Q281 254 294 264",
              ].map((d, i) => (
                <motion.path
                  key={d}
                  d={d}
                  stroke="#2563eb"
                  strokeWidth="2.2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ opacity: 0.15 }}
                  animate={loop({ opacity: [0.15, 1, 0.15] })}
                  transition={{ duration: 1.5, delay: i * 0.22, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}

              {/* ---------- Nurse (walks in, then checks the mask) ---------- */}
              <motion.g
                initial={{ x: 280, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.1, ease: "easeOut" }}
              >
                <motion.g
                  animate={reduceMotion ? undefined : { y: [0, -5, 0, -5, 0, 0] }}
                  transition={{ delay: 0.3, duration: 1.1, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                >
                  <ellipse cx="420" cy="372" rx="34" ry="6" fill="#0f172a" opacity="0.12" />
                  {/* legs + shoes */}
                  <rect x="404" y="306" width="15" height="60" rx="6" fill="#334155" />
                  <rect x="421" y="306" width="15" height="60" rx="6" fill="#334155" />
                  <ellipse cx="410" cy="368" rx="12" ry="5" fill="#f8fafc" stroke="#cbd5e1" />
                  <ellipse cx="430" cy="368" rx="12" ry="5" fill="#f8fafc" stroke="#cbd5e1" />
                  {/* scrubs */}
                  <rect x="396" y="166" width="48" height="146" rx="20" fill="#14b8a6" />
                  <path d="M410 166 L420 186 L430 166z" fill="#f8fafc" />
                  <rect x="428" y="200" width="10" height="6" rx="1" fill="#f8fafc" />
                  {/* head */}
                  <circle cx="420" cy="142" r="22" fill="#f1c9a5" />
                  <path d="M398 142 a22 22 0 0 1 44 0 c-8 -12 -36 -12 -44 0z" fill="#2b2b2b" />
                  <rect x="404" y="114" width="32" height="13" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                  <rect x="419" y="116" width="2" height="9" fill="#ef4444" />
                  <rect x="416" y="119.5" width="8" height="2" fill="#ef4444" />
                  <circle cx="411" cy="145" r="1.8" fill="#3b2f2f" />
                  <circle cx="425" cy="145" r="1.8" fill="#3b2f2f" />
                  <path d="M412 153 q6 5 12 0" stroke="#b45f4d" strokeWidth="1.8" fill="none" strokeLinecap="round" />

                  {/* clipboard arm */}
                  <path d="M442 184 L452 232" stroke="#14b8a6" strokeWidth="13" strokeLinecap="round" />
                  <rect x="446" y="220" width="28" height="36" rx="3" fill="#ffffff" stroke="#94a3b8" />
                  <path d="M451 230 h18 M451 237 h18 M451 244 h12" stroke="#94a3b8" strokeWidth="1.5" />
                  <circle cx="452" cy="234" r="6" fill="#f1c9a5" />

                  {/* reaching arm: adjusts the patient's mask */}
                  <motion.path
                    d="M398 184 Q 366 190 352 244"
                    stroke="#14b8a6"
                    strokeWidth="13"
                    strokeLinecap="round"
                    fill="none"
                    animate={loop({
                      d: [
                        "M398 184 Q 366 190 352 244",
                        "M398 184 Q 362 184 356 236",
                        "M398 184 Q 366 190 352 244",
                      ],
                    })}
                    transition={{ delay: 1.4, duration: 1.4, ...rep }}
                  />
                  <motion.circle
                    r="6"
                    fill="#f1c9a5"
                    initial={{ cx: 352, cy: 244 }}
                    animate={loop({ cx: [352, 356, 352], cy: [244, 236, 244] })}
                    transition={{ delay: 1.4, duration: 1.4, ...rep }}
                  />
                </motion.g>
              </motion.g>
            </svg>
          </motion.div>

          {/* ---------- Logo reveal ---------- */}
          <AnimatePresence>
            {phase === "logo" && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.85, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center px-6"
              >
                <div className="rounded-3xl bg-white/75 px-8 py-6 shadow-2xl ring-1 ring-white/60 backdrop-blur-md">
                  <Image
                    src="/images/oxyflow-logo.png"
                    alt="OxyFlow"
                    width={540}
                    height={200}
                    priority
                    className="h-auto w-[min(72vw,480px)] object-contain"
                  />
                </div>
                <svg viewBox="0 0 300 40" className="mt-6 h-9 w-[min(60vw,280px)]" fill="none" aria-hidden="true">
                  <motion.path
                    d="M0 20 H105 L118 20 L126 6 L136 34 L146 12 L152 20 H300"
                    stroke="url(#ox-ecg)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.3, duration: reduceMotion ? 0.01 : 1.1, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}