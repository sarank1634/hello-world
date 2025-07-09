import { redirect } from "next/navigation";
import Link from "next/link";

interface ArticlePageProps {
  params: { articlesId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ArticlePage({ params, searchParams }: ArticlePageProps) {
  const { articlesId } = params;
  const lang = typeof searchParams?.lang === "string" ? searchParams!.lang : "en";

  // If language param missing, redirect to english
  if (!searchParams?.lang) redirect(`/articles/${articlesId}?lang=en`);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">News Article – {articlesId}</h1>
      <p className="mb-4">Reading Languages</p>
      <div className="space-x-4">
        <Link href={`/articles/${articlesId}?lang=en`} className="text-blue-500 underline">
          English
        </Link>
        <Link href={`/articles/${articlesId}?lang=fr`} className="text-blue-500 underline">
          French
        </Link>
      </div>
      <p className="mt-6">Current language: {lang}</p>
    </div>
  );
}
