export function ComingSoonPage({ title }: { title: string }) {
  return (
    <section className="mx-auto flex min-h-[calc(100dvh-20rem)] max-w-4xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="w-full rounded-lg border border-border bg-surface-glass p-8 shadow-glass sm:p-10">
        <p className="font-mono text-xs text-technical">EN DESARROLLO</p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Próximamente.
        </p>
      </div>
    </section>
  );
}