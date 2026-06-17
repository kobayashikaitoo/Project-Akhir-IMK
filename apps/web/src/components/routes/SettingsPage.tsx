import { Link } from "@tanstack/react-router";
import { AccountSettings } from "@/components/settings/AccountSettings";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function RouteComponent() {
  return (
    <div className="min-h-screen pt-8 pb-32 px-6 md:px-12 lg:px-16 max-w-3xl mx-auto bg-[var(--warm-cream)]">
      <section className="mb-10">
        <div className="flex items-center gap-2 text-sm text-[var(--warm-charcoal)] mb-4">
          <Link to="/dashboard" className="hover:text-[var(--clay-black)] transition-colors">Beranda</Link>
          <MaterialIcon name="chevron_right" className="text-xs" />
          <span className="text-[var(--clay-black)] font-medium">Pengaturan</span>
        </div>
        <h1 className="text-4xl font-headline font-extrabold text-[var(--clay-black)] tracking-tight">
          Pengaturan
        </h1>
        <p className="text-lg text-[var(--warm-charcoal)] mt-2">
          Kelola informasi akun dan preferensi Anda.
        </p>
      </section>

      <AccountSettings />
    </div>
  );
}
