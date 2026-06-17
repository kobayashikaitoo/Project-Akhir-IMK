import { createFileRoute, redirect, Link } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";
import { Button } from "@labas/ui/components/button";
import { Card, CardContent } from "@labas/ui/components/card";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { Avatar } from "@/components/ui/Avatar";

export const Route = createFileRoute("/me")({
  component: MeComponent,
  beforeLoad: async () => {
    const session = await authClient.getSession();
    if (!session.data) {
      redirect({ to: "/login", throw: true });
    }
    return { session };
  },
});

function MeComponent() {
  const { session } = Route.useRouteContext();

  return (
    <div className="min-h-screen pt-8 pb-32 px-6 md:px-12 lg:px-16 max-w-3xl mx-auto bg-[var(--warm-cream)]">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-[var(--warm-charcoal)] mb-4">
          <Link to="/dashboard" className="hover:text-[var(--clay-black)] transition-colors">
            Beranda
          </Link>
          <MaterialIcon name="chevron_right" className="text-xs" />
          <span className="text-[var(--clay-black)] font-medium">Profil Saya</span>
        </div>
        <h1 className="text-4xl font-headline font-extrabold text-[var(--clay-black)] tracking-tight">
          Profil Saya
        </h1>
      </div>

      {/* Profile Card */}
      <Card className="clay-shadow bg-[var(--pure-white)] border-2 border-[var(--oat-border)] rounded-[var(--radius-xl)] mb-8">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center gap-4 md:gap-6">
            <Avatar
              src={session.data?.user.image}
              name={session.data?.user.name ?? ""}
              size="xl"
              variant="profile"
            />
            <div>
              <h2 className="text-2xl font-headline font-extrabold text-[var(--clay-black)]">
                {session.data?.user.name ?? "Pengguna"}
              </h2>
              <p className="text-sm text-[var(--warm-charcoal)]">{session.data?.user.email}</p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t-2 border-[var(--oat-border)] flex flex-wrap gap-3">
            <Link to="/setup-avatar" search={{ redirectTo: "/me" }} className="inline-flex">
              <Button
                variant="outline"
                className="rounded-[var(--radius-lg)] border-2 border-[var(--oat-border)] clay-hover"
              >
                <MaterialIcon name="face" className="mr-2" />
                Ganti Avatar
              </Button>
            </Link>
            <Link to="/settings" className="inline-flex">
              <Button
                variant="outline"
                className="rounded-[var(--radius-lg)] border-2 border-[var(--oat-border)] clay-hover"
              >
                <MaterialIcon name="settings" className="mr-2" />
                Pengaturan
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
