interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  action?: React.ReactNode;
}

export function Layout({ children, title = 'Marketplace', action }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            {action}
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
