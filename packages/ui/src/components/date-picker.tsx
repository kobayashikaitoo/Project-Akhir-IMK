import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "@labas/ui/lib/utils";

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

interface DatePickerProps {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Select date",
  className,
  disabled,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
        className="h-10 w-full flex items-center gap-2 rounded-[var(--radius-lg)] border-2 border-[var(--oat-border)] bg-[var(--pure-white)] px-3.5 text-sm text-left transition-colors hover:bg-[var(--oat-light)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4 text-[var(--warm-charcoal)] shrink-0 fill-current"
          aria-hidden="true"
        >
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
        </svg>
        <span
          className={
            value ? "text-[var(--clay-black)]" : "text-[var(--warm-silver)]"
          }
        >
          {value ? formatDate(value) : placeholder}
        </span>
        {value && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange(undefined);
            }}
            className="ml-auto text-[var(--warm-silver)] hover:text-[var(--clay-black)] cursor-pointer"
            aria-label="Clear date"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-3.5 fill-current"
              aria-hidden="true"
            >
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        )}
      </button>

      {open && (
        <div className="absolute top-full mt-1 left-0 z-50 bg-[var(--pure-white)] border-2 border-[var(--oat-border)] rounded-[var(--radius-lg)] clay-shadow p-2">
          <DayPicker
            mode="single"
            selected={value}
            onSelect={(d) => {
              onChange(d);
              setOpen(false);
            }}
            className="rdp-custom"
          />
        </div>
      )}
    </div>
  );
}
