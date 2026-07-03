import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { RemoteErrorBoundary } from "./RemoteErrorBoundary";
import { useUserStore } from "./store/user";

const WorkspaceApp = lazy(() => import("workspace/App"));

function App() {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);

  const onLogout = () => {
    clearUser();
    navigate("/login", { replace: true });
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-sky-700">
              Module Federation host
            </p>
            <h1 className="mt-2 text-3xl font-semibold">AI Frontend Shell</h1>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div>
              <p className="text-sm font-semibold">{user?.user_name}</p>
              <p className="text-xs text-slate-500">{user?.role}</p>
            </div>
            <button
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium transition hover:bg-slate-100"
              onClick={onLogout}
              type="button"
            >
              Logout
            </button>
          </div>
        </header>

        <section className="grid flex-1 gap-6 py-8 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Runtime map</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-slate-500">Host</dt>
                <dd className="font-medium">shell:5173</dd>
              </div>
              <div>
                <dt className="text-slate-500">Remote</dt>
                <dd className="font-medium">workspace:5174</dd>
              </div>
              <div>
                <dt className="text-slate-500">Remote entry</dt>
                <dd className="break-all font-medium">http://localhost:5174/mf-manifest.json</dd>
              </div>
            </dl>
          </aside>

          <div>
            <RemoteErrorBoundary remoteName="workspace">
              <Suspense
                fallback={
                  <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                    Loading workspace remote...
                  </div>
                }
              >
                <WorkspaceApp />
              </Suspense>
            </RemoteErrorBoundary>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
