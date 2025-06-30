import { useFormStatus } from "react-dom";
import Button from "./button";

export function FormButton({ className, children, ...props }: React.ComponentProps<typeof Button>) {
  const { pending } = useFormStatus();

  return (
    <Button className={className} disabled={pending} {...props}>
      {pending ? "Submitting..." : children}
    </Button>
  );
}
