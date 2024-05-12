"use client";
import { useTransition, useState } from "react";

export default function UseTransitionSample({}) {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {
    // ↓ここで非同期処理（Action)が渡せるようになりました
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
    });
  };

  async function updateName(name: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setName("");
    console.log("リセットしました");
    return null;
  }

  return (
    <div>
      <br />
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {isPending && <p>更新中</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
