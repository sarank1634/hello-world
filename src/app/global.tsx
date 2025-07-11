"use client";
import "./globals.css"
export default function GlobalError() {
    return (
        <html lang="en">
            <body className="bg-gray-100">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <h2 className="text-3xl font-bold text-red-600 m-4">Something went wrong!</h2>
                    <button
                        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        onClick={() => window.location.reload()}
                    >
                        Refresh
                    </button>
                </div>
            </body>
        </html>
    )
}