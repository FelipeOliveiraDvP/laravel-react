import React, { ChangeEvent, useState } from "react";
import { useLogin } from "@/core/services/auth";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginMutation = useLogin();

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    await loginMutation.mutateAsync({
      email,
      password,
    });
  }

  return (
    <div>
      <h2>Entrar no sistema</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>E-mail</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loginMutation.isLoading}>
          Login
        </button>
      </form>
    </div>
  );
}
