import "./App.css";

export default function App() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-sky-700">
        Remote application
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-950">Workspace</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        This screen is rendered by <code>apps/workspace</code> and exposed to
        the shell through <code>workspace/App</code>.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-md border border-slate-200 p-4">
          <span className="text-sm text-slate-500">Federation name</span>
          <strong className="mt-1 block text-slate-950">workspace</strong>
        </div>
        <div className="rounded-md border border-slate-200 p-4">
          <span className="text-sm text-slate-500">Exposed module</span>
          <strong className="mt-1 block text-slate-950">./App</strong>
        </div>
        <div className="rounded-md border border-slate-200 p-4">
          <span className="text-sm text-slate-500">Dev port</span>
          <strong className="mt-1 block text-slate-950">5174</strong>
        </div>
      </div>
    </section>
  );
}
