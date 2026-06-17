import { useState } from "react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";
import { useSidebar } from "@/hooks/use-sidebar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@labas/ui/components/sheet";

interface NavItem {
  to: string;
  label: string;
  icon: string;
  disabled?: boolean;
}

interface NavGroup {
  label?: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    items: [{ to: "/dashboard", label: "Dashboard", icon: "dashboard" }],
  },
  {
    label: "Mata Pelajaran",
    items: [
      { to: "/subject/matematika", label: "Matematika", icon: "calculate" },
      { to: "/subject/fisika", label: "Fisika", icon: "insights" },
      { to: "/subject/kimia", label: "Kimia", icon: "science" },
      { to: "/subject/biologi", label: "Biologi", icon: "spa" },
      { to: "/subject/bahasa-inggris", label: "B. Inggris", icon: "translate" },
    ],
  },
  {
    label: "Latihan",
    items: [
      { to: "/latihan-soal", label: "Latihan Soal", icon: "edit_note" },
      { to: "/latihan-soal/analytics", label: "Analytics", icon: "analytics" },
    ],
  },
];

const bottomItems: NavItem[] = [
  { to: "/me", label: "Profil", icon: "person" },
  { to: "/settings", label: "Settings", icon: "settings" },
];

const mobileNavItems: NavItem[] = [
  { to: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { to: "/dashboard", label: "Materi", icon: "menu_book" },
  { to: "/me", label: "Profil", icon: "person" },
];

function NavIcon({ name }: { name: string }) {
  return <span className="material-symbols-outlined text-xl w-6 text-center">{name}</span>;
}

function NavLink({ item, isActive, collapsed }: { item: NavItem; isActive: boolean; collapsed: boolean }) {
  if (item.disabled) {
    return (
      <div
        className={`flex items-center gap-3 rounded-[var(--radius-lg)] transition-all opacity-50 cursor-not-allowed ${
          collapsed ? "justify-center py-3 px-2" : "py-3 px-3"
        }`}
        title={collapsed ? `${item.label} (Segera Hadir)` : undefined}
      >
        <NavIcon name={item.icon} />
        {!collapsed && (
          <span className="text-sm font-medium text-[var(--warm-charcoal)] flex items-center gap-2">
            {item.label}
            <span className="text-[9px] font-bold bg-[var(--oat-border)] rounded-full px-1.5 py-0.5 uppercase tracking-wider">Soon</span>
          </span>
        )}
      </div>
    );
  }
  return (
    <Link
      to={item.to}
      aria-current={isActive ? "page" : undefined}
      className={`flex items-center gap-3 rounded-[var(--radius-lg)] transition-all group clay-hover cursor-pointer ${
        isActive
          ? "bg-[var(--matcha-300)] text-[var(--matcha-800)] font-semibold clay-shadow"
          : "text-[var(--warm-charcoal)] hover:bg-[var(--oat-light)] hover:text-[var(--clay-black)]"
      } ${collapsed ? "justify-center py-3 px-2" : "py-3 px-3"}`}
      title={collapsed ? item.label : undefined}
    >
      <NavIcon name={item.icon} />
      {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
    </Link>
  );
}

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { collapsed, toggle } = useSidebar();
  const { data: session } = authClient.useSession();
  const isLoggedIn = !!session;
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);

  async function handleSignOut() {
    await authClient.signOut();
    navigate({ to: "/" });
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full flex flex-col z-40 bg-[var(--warm-cream)] border-r border-[var(--oat-border)] hidden md:flex transition-all duration-300 overflow-y-auto ${
          collapsed ? "w-16 items-center px-2 py-4" : "w-64 py-4 px-3"
        }`}
      >
        <div className={`mb-8 ${collapsed ? "px-0 text-center" : "px-3"}`}>
          <img
            src="/logo.png"
            alt="Labas"
            width={64}
            height={64}
            className="mt-2 size-16 object-contain select-none"
            decoding="async"
          />
          {!collapsed && (
            <p className="text-xs text-[var(--warm-charcoal)] uppercase tracking-widest font-semibold mt-1">
              Learning Platform
            </p>
          )}
        </div>

        <nav className="flex-1 space-y-4 w-full">
          {navGroups.map((group) => (
            <div key={group.label ?? "ungrouped"} className="space-y-1">
              {!collapsed && group.label && (
                <p className="px-3 text-[10px] font-bold text-[var(--warm-charcoal)]/50 uppercase tracking-wider">
                  {group.label}
                </p>
              )}
              {(() => {
                // Find the most specific matching path in this group
                let bestMatch: string | null = null;
                let bestLen = 0;
                for (const item of group.items) {
                  if (
                    location.pathname === item.to ||
                    (location.pathname.startsWith(`${item.to}/`) && item.to !== "/")
                  ) {
                    if (item.to.length > bestLen) {
                      bestLen = item.to.length;
                      bestMatch = item.to;
                    }
                  }
                }
                return group.items.map((item) => {
                  const isActive = bestMatch === item.to;
                  return (
                    <NavLink
                      key={item.to + item.label}
                      item={item}
                      isActive={isActive}
                      collapsed={collapsed}
                    />
                  );
                });
              })()}
            </div>
          ))}
        </nav>

        <div className="mt-auto space-y-1 pt-4 border-t border-[var(--oat-border)] w-full">
          {bottomItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <NavLink
                key={item.to}
                item={item}
                isActive={isActive}
                collapsed={collapsed}
              />
            );
          })}

          {isLoggedIn ? (
            <button
              onClick={handleSignOut}
              aria-label="Keluar"
              className={`flex items-center gap-3 rounded-[var(--radius-lg)] transition-all clay-hover cursor-pointer text-[var(--warm-charcoal)] hover:bg-[var(--oat-light)] hover:text-[var(--clay-black)] w-full ${
                collapsed ? "justify-center py-3 px-2" : "py-3 px-3 text-left"
              }`}
              title={collapsed ? "Keluar" : undefined}
            >
              <NavIcon name="logout" />
              {!collapsed && <span className="text-sm font-medium">Keluar</span>}
            </button>
          ) : (
            <Link
              to="/login"
              className={`flex items-center gap-3 rounded-[var(--radius-lg)] transition-all clay-hover cursor-pointer text-[var(--warm-charcoal)] hover:bg-[var(--oat-light)] hover:text-[var(--clay-black)] ${
                collapsed ? "justify-center py-3 px-2" : "py-3 px-3"
              }`}
              title={collapsed ? "Masuk" : undefined}
            >
              <NavIcon name="login" />
              {!collapsed && <span className="text-sm font-medium">Masuk</span>}
            </Link>
          )}
        </div>
      </aside>

      {/* Floating toggle button (right edge of sidebar) */}
      <button
        onClick={toggle}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        aria-expanded={!collapsed}
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        style={{ left: collapsed ? "48px" : "240px" }}
        className="hidden md:flex fixed top-6 z-40 items-center justify-center w-10 h-10 rounded-full bg-[var(--pure-white)] border-2 border-[var(--oat-border)] shadow-md hover:bg-[var(--oat-light)] transition-all duration-300 text-[var(--warm-charcoal)] clay-hover cursor-pointer"
      >
        <span className="relative inline-flex size-6 shrink-0 items-center justify-center">
          <span
            className={`material-symbols-outlined pointer-events-none absolute inset-0 flex items-center justify-center text-[20px] leading-none transition-all duration-300 ease-out select-none ${
              collapsed
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 -rotate-90"
            }`}
            aria-hidden
          >
            right_panel_open
          </span>
          <span
            className={`material-symbols-outlined pointer-events-none absolute inset-0 flex items-center justify-center text-[20px] leading-none transition-all duration-300 ease-out select-none ${
              collapsed
                ? "opacity-0 scale-75 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            }`}
            aria-hidden
          >
            right_panel_close
          </span>
        </span>
      </button>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-6 pt-3 bg-[var(--warm-cream)]/90 backdrop-blur-xl border-t border-[var(--oat-border)] rounded-t-[var(--radius-xl)]">
        {mobileNavItems.map((item, i) => {
          const isActive = i === 0 ? location.pathname === item.to : false;
          return (
            <Link
              key={item.label}
              to={item.to}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-col items-center justify-center px-3 py-1.5 transition-all rounded-[var(--radius-lg)] cursor-pointer ${
                isActive
                  ? "bg-[var(--matcha-300)] text-[var(--matcha-800)]"
                  : "text-[var(--warm-charcoal)]"
              }`}
            >
              <NavIcon name={item.icon} />
              <span className="text-[10px] font-medium uppercase tracking-wider mt-1">{item.label}</span>
            </Link>
          );
        })}
        <button
          onClick={() => setMobileSheetOpen(true)}
          aria-label="More menu"
          className={`flex flex-col items-center justify-center px-3 py-1.5 transition-all rounded-[var(--radius-lg)] cursor-pointer text-[var(--warm-charcoal)]`}
        >
          <NavIcon name="menu" />
          <span className="text-[10px] font-medium uppercase tracking-wider mt-1">More</span>
        </button>
      </nav>

      {/* Mobile Sheet Drawer */}
      <Sheet open={mobileSheetOpen} onOpenChange={setMobileSheetOpen}>
        <SheetContent side="bottom" className="bg-[var(--warm-cream)] max-h-[80vh] overflow-y-auto rounded-t-[var(--radius-xl)] px-4 pb-10 pt-2">
          <SheetHeader className="px-2 pt-2 pb-3">
            <SheetTitle className="text-sm font-headline font-bold text-[var(--clay-black)]">Menu</SheetTitle>
          </SheetHeader>
          <div className="space-y-4">
            {navGroups.map((group) => (
              <div key={group.label ?? "ungrouped"} className="space-y-1">
                {group.label && (
                  <p className="px-3 text-[10px] font-bold text-[var(--warm-charcoal)]/50 uppercase tracking-wider">
                    {group.label}
                  </p>
                )}
                {group.items.map((item) => {
                  if (item.disabled) {
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-[var(--radius-lg)] py-3 px-3 opacity-50 cursor-not-allowed"
                      >
                        <NavIcon name={item.icon} />
                        <span className="text-sm font-medium text-[var(--warm-charcoal)] flex items-center gap-2">
                          {item.label}
                          <span className="text-[9px] font-bold bg-[var(--oat-border)] rounded-full px-1.5 py-0.5 uppercase tracking-wider">Soon</span>
                        </span>
                      </div>
                    );
                  }
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to + item.label}
                      to={item.to}
                      onClick={() => setMobileSheetOpen(false)}
                      className={`flex items-center gap-3 rounded-[var(--radius-lg)] transition-all py-3 px-3 cursor-pointer ${
                        isActive
                          ? "bg-[var(--matcha-300)] text-[var(--matcha-800)] font-semibold"
                          : "text-[var(--warm-charcoal)] hover:bg-[var(--oat-light)] hover:text-[var(--clay-black)]"
                      }`}
                    >
                      <NavIcon name={item.icon} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            ))}

            {/* Bottom items */}
            <div className="space-y-1 pt-2 border-t border-[var(--oat-border)]">
              {bottomItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileSheetOpen(false)}
                    className={`flex items-center gap-3 rounded-[var(--radius-lg)] transition-all py-3 px-3 cursor-pointer ${
                      isActive
                        ? "bg-[var(--matcha-300)] text-[var(--matcha-800)] font-semibold"
                        : "text-[var(--warm-charcoal)] hover:bg-[var(--oat-light)] hover:text-[var(--clay-black)]"
                    }`}
                  >
                    <NavIcon name={item.icon} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Auth row */}
            <div className="pt-2 border-t border-[var(--oat-border)]">
              {isLoggedIn ? (
                <button
                  onClick={() => { handleSignOut(); setMobileSheetOpen(false); }}
                  className="flex items-center gap-3 rounded-[var(--radius-lg)] transition-all py-3 px-3 cursor-pointer text-[var(--warm-charcoal)] hover:bg-[var(--oat-light)] hover:text-[var(--clay-black)] w-full text-left"
                >
                  <NavIcon name="logout" />
                  <span className="text-sm font-medium">Keluar</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileSheetOpen(false)}
                  className="flex items-center gap-3 rounded-[var(--radius-lg)] transition-all py-3 px-3 cursor-pointer text-[var(--warm-charcoal)] hover:bg-[var(--oat-light)] hover:text-[var(--clay-black)]"
                >
                  <NavIcon name="login" />
                  <span className="text-sm font-medium">Masuk</span>
                </Link>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
