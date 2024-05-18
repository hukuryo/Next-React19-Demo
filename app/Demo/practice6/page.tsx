import { Register } from "@/app/components/Register";

export default function page() {
  const formAction = async (formData: FormData) => {
    "use server";
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  };

  return (
    <form action={formAction}>
      <div>
        <label>Name:</label>
        <input type="text" name="firstName" />
      </div>
      <Register />
    </form>
  );
}
