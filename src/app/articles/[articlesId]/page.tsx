"use client"
import { redirect } from "next/navigation";
import Link from "next/link";

interface ArticlePageProps {
  params: { articlesId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ArticlePage({ params, searchParams }: ArticlePageProps) {
  // Await dynamic parameters as recommended by Next.js 15
  const { articlesId } = await params;

  const resolvedSearchParams = await searchParams ? await searchParams : {};
  const lang = typeof resolvedSearchParams?.lang === "string" ? resolvedSearchParams.lang : "en";

  if (!resolvedSearchParams?.lang) redirect(`/articles/${articlesId}?lang=en`);

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
