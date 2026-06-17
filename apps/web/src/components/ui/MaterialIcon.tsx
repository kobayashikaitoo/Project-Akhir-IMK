import { HTMLAttributes } from "react";

export function MaterialIcon({ name, className = "", ...props }: { name: string } & HTMLAttributes<HTMLSpanElement>) {
  return <span className={`material-symbols-outlined ${className}`} {...props}>{name}</span>;
}

