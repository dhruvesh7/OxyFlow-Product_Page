"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { PRODUCT } from "@/lib/constants";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    hospitalName: "",
    email: "",
    phone: "",
    quantity: 1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
          setFormData({ name: "", hospitalName: "", email: "", phone: "", quantity: 1 });
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Failed to submit order.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-8 shadow-2xl pointer-events-auto dark:bg-slate-900 border border-border"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-slate-100 hover:text-[var(--oxy-navy)] transition-colors dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <X className="size-5" />
              </button>

              {success ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle2 className="size-16 text-[var(--oxy-green)] mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[var(--oxy-navy)] dark:text-white">Order Submitted!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Your order has been submitted. We will contact you soon.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="mb-2 text-2xl font-bold text-[var(--oxy-navy)] dark:text-white">
                    Order OxyFlow
                  </h2>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Device cost is ₹{PRODUCT.pricePerDevice.toLocaleString("en-IN")} per unit. ₹
                    {PRODUCT.monthlyCharge}/month covers AWS cloud hosting and a monthly device
                    maintenance check. Includes {PRODUCT.replacementWarrantyMonths}-month replacement
                    warranty and {PRODUCT.serviceWarrantyYears}-year service warranty.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-sm font-medium">Your Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--oxy-teal)] focus:ring-1 focus:ring-[var(--oxy-teal)]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium">Hospital Name</label>
                        <input
                          required
                          type="text"
                          name="hospitalName"
                          value={formData.hospitalName}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--oxy-teal)] focus:ring-1 focus:ring-[var(--oxy-teal)]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-sm font-medium">Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--oxy-teal)] focus:ring-1 focus:ring-[var(--oxy-teal)]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium">Phone</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--oxy-teal)] focus:ring-1 focus:ring-[var(--oxy-teal)]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium">Quantity (Devices)</label>
                      <input
                        required
                        type="number"
                        min="1"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--oxy-teal)] focus:ring-1 focus:ring-[var(--oxy-teal)]"
                      />
                    </div>

                    <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        Total Today: <strong className="text-[var(--oxy-navy)] dark:text-white text-lg">₹{formData.quantity * PRODUCT.pricePerDevice}</strong>
                      </div>
                      <GradientButton as="button" type="submit" className="px-8" disabled={loading}>
                        {loading ? "Submitting..." : "Submit Order"}
                      </GradientButton>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
