// Marketing section layout


export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header style={{ backgroundColor: 'blue', padding: '1rem' }}>
        <h1>Header</h1>
      </header>
      {children}
      <footer style={{ backgroundColor: 'red', padding: '1rem' }}>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
