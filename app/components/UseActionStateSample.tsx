import { useActionState } from "react";

const Counter: React.FC = () => {
  const [count, increment, isPending] = useActionState(async (currentCount) => {
    await fetch('https://api.example.com/increment', {
      method: 'POST',
    });
    return currentCount + 1;
  }, 0);

  const handleClick = () => {
    increment();
  };

  return (
    <div>
      <p>{count}</p>
      <button
        type="button"
        onClick={handleClick}
        disabled={isPending}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;