"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeaderProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "max-w-3xl mb-12 sm:mb-16 transition-all duration-700",
        center ? "mx-auto text-center" : "",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4",
            light
              ? "bg-white/20 text-white"
              : "bg-primary-50 text-primary-700 border border-primary-100"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-heading",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-body-lg",
            light ? "text-white/80" : "text-slate-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft card-hover text-center">
      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3 text-primary-600">
        {icon}
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
        {value}
      </div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  );
}

interface FeatureIconBoxProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureIconBox({ icon, title, description }: FeatureIconBoxProps) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl hover:bg-primary-50/50 transition-colors duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center text-2xl shrink-0 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  name: string;
  event: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ name, event, text, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft card-hover border border-slate-100">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={cn(
              "w-5 h-5",
              i < rating ? "text-amber-400" : "text-slate-200"
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {/* Quote */}
      <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">
        &ldquo;{text}&rdquo;
      </p>
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-sm text-slate-900">{name}</div>
          <div className="text-xs text-slate-500">{event}</div>
        </div>
      </div>
    </div>
  );
}

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <svg
          className={cn(
            "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className={cn("accordion-content", isOpen ? "open" : "")}>
        <div>
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-500 text-sm leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
