"use client";
import { useFormStatus } from "react-dom";

const Register = () => {
  const { pending } = useFormStatus();

  return (
    <button className="border border-black">
      {pending ? "Loading" : "Register"}
    </button>
  );
};

export default Register;
