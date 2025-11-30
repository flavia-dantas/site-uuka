import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleX } from 'lucide-react';

export function ErrorMessage({
  message,
  title,
}: {
  message: string;
  title: string;
}) {
  return (
    <Alert variant="destructive">
      <CircleX />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
