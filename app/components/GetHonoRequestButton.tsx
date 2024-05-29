"use client";

export default function GetHonoRequestButton() {
  const playHono = async () => {
    const res = await fetch("http://localhost:8787");
    console.log(res);
  };

  return (
    <div>
      <button onClick={playHono}>API実行!!</button>
    </div>
  );
}
