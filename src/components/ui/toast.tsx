import { Toaster, toast } from "sonner";

export function useToast() {
  return {
    success: (message: string) => toast.success(message),
    error: (message: string) => toast.error(message),
    info: (message: string) => toast.info(message),
  };
}

export function ToastProvider() {
  return <Toaster position="top-right" />;
}
