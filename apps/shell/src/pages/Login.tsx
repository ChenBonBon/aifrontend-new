import { LogIn } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserStore, type User } from "../store/user";

const createDemoUser = (account: string): User => {
  const now = new Date().toISOString();

  return {
    user_id: 10001,
    user_name: account.trim() || "Demo User",
    email: account.includes("@") ? account : `${account || "demo"}@example.com`,
    phone_number: null,
    dept_id: 1,
    remark: "Signed in from shell demo login",
    delete: 0,
    create_time: now,
    update_time: now,
    role: "admin",
  };
};

export default function Login() {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const [account, setAccount] = useState("admin@example.com");
  const [password, setPassword] = useState("demo123");

  if (user) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUser(createDemoUser(account));
    navigate("/", { replace: true });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-slate-950">
      <section className="w-full max-w-sm rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-sky-50 text-sky-700">
          <LogIn className="h-5 w-5" />
        </div>
        <h1 className="mt-5 text-2xl font-semibold">Sign in to Shell</h1>
        <p className="mt-2 text-sm text-slate-600">
          登录后，用户信息只写入 shell 本地 store，用于 shell 侧路由和用户菜单。
        </p>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <label className="block text-sm font-medium text-slate-700">
            Account
            <input
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              value={account}
              onChange={(event) => setAccount(event.target.value)}
              autoComplete="username"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Password
            <input
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
            />
          </label>

          <button
            className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
            type="submit"
          >
            <LogIn className="h-4 w-4" />
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
