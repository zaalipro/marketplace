interface SpinnerProps {
  size?: number;
  className?: string;
}

export function Spinner({ size = 12, className = '' }: SpinnerProps) {
  return (
    <div className={`animate-spin rounded-full ${className}`} style={{
      width: size,
      height: size,
      borderTopColor: 'currentColor',
      borderStyle: 'solid',
      borderWidth: '3px',
      borderTopWidth: '3px',
      borderBottomWidth: '3px',
    }}></div>
  );
}
