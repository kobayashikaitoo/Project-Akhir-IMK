import { createFileRoute, redirect, Link } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";
import { routeShell } from "@/lib/route-shell";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { MascotGreeting } from "@/components/MascotGreeting";
import { RewardBadge } from "@/components/RewardBadge";
import { subjects } from "@/data/subjects";
import { useUserRewards } from "@/hooks/use-user-rewards";

export const Route = createFileRoute("/dashboard")({
  staticData: routeShell.app,
  component: HomeComponent,
  beforeLoad: async () => {
    const session = await authClient.getSession();
    if (!session.data) {
      throw redirect({ to: "/login" });
    }
    if (!session.data.user.image) {
      throw redirect({ to: "/setup-avatar" });
    }
    return { session };
  },
});

function HomeComponent() {
  const { session } = Route.useRouteContext();
  const { xp, stars } = useUserRewards();

  return (
    <div className="min-h-screen pt-8 pb-32 px-6 md:px-12 lg:px-16 max-w-6xl mx-auto bg-[var(--warm-cream)]">
      {/* Mascot Greeting */}
      <MascotGreeting username={session.data?.user.name ?? "Remaja Pijar"} />

      {/* Gamified Rewards */}
      <RewardBadge stars={stars} xp={xp} />

      {/* Subject Selector Grid */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-6">
          <MaterialIcon name="school" className="text-2xl text-[var(--clay-black)]" />
          <h2 className="text-2xl font-headline font-bold text-[var(--clay-black)]">
            Mata Pelajaran SMA
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {subjects.map((sub) => {
            if (sub.available) {
              return (
                <Link
                  key={sub.id}
                  to="/subject/$subjectId"
                  params={{ subjectId: sub.id }}
                  className={`block p-5 rounded-[var(--radius-xl)] bg-gradient-to-br ${sub.color} border-2 ${sub.borderColor} clay-shadow clay-hover transition-all`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 bg-[var(--pure-white)] rounded-[var(--radius-lg)] border-2 border-[var(--clay-black)] flex items-center justify-center shrink-0">
                      <MaterialIcon name={sub.icon} className="text-xl text-[var(--clay-black)]" />
                    </div>
                    <h3 className="font-headline font-bold text-[var(--clay-black)] text-lg">
                      {sub.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--warm-charcoal)] font-body">
                    {sub.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs font-headline font-bold text-[var(--clay-black)]">
                    <span>Pelajari Bab</span>
                    <MaterialIcon name="arrow_forward" className="text-base" />
                  </div>
                </Link>
              );
            }
            return (
              <div
                key={sub.id}
                className={`relative p-5 rounded-[var(--radius-xl)] bg-gradient-to-br ${sub.color} border-2 ${sub.borderColor} clay-shadow opacity-70`}
              >
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-[var(--warm-charcoal)]/80 text-[var(--pure-white)] text-[10px] font-bold font-headline uppercase tracking-wider">
                  Segera Hadir
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 bg-[var(--pure-white)] rounded-[var(--radius-lg)] border-2 border-[var(--clay-black)] flex items-center justify-center shrink-0">
                    <MaterialIcon name={sub.icon} className="text-xl text-[var(--clay-black)]" />
                  </div>
                  <h3 className="font-headline font-bold text-[var(--clay-black)] text-lg">
                    {sub.name}
                  </h3>
                </div>
                <p className="text-xs text-[var(--warm-charcoal)] font-body">
                  {sub.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs font-headline font-bold text-[var(--warm-charcoal)]">
                  <span>Dalam Pengembangan</span>
                  <MaterialIcon name="hourglass_empty" className="text-base" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
