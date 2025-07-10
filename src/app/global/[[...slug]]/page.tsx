export default async function Global({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  if (slug.length === 2) {
    return (
      <h1>
        view docs for features {slug[0]} and concept of using {slug[1]}
      </h1>
    );
  }
  if (slug.length === 1) {
    return <h1>Docs home page feature {slug[0]}</h1>;
  }
  return <h1>Docs home page</h1>;
}