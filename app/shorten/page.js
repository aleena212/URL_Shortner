"use client";

import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!url || !shortUrl) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          shorturl: shortUrl,
        }),
      });

      const result = await response.json();

      setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
      setUrl("");
      setShortUrl("");

      alert(result.message);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generated);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="max-w-xl mx-auto mt-16 bg-white shadow-xl rounded-xl p-8">
      <h1 className="text-3xl font-bold text-center text-purple-700">
        BitLinks URL Shortener
      </h1>

      <p className="text-center text-gray-500 mt-2 mb-8">
        Enter a long URL and create your own custom short link.
      </p>

      <div className="space-y-5">
        <div>
          <label className="block mb-2 font-semibold">Original URL</label>

          <input
            type="text"
            value={url}
            placeholder="https://example.com"
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Custom Short URL</label>

          <input
            type="text"
            value={shortUrl}
            placeholder="my-link"
            onChange={(e) => setShortUrl(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          onClick={generate}
          disabled={loading}
          className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg transition duration-300 disabled:bg-gray-400"
        >
          {loading ? "Generating..." : "Generate Short URL"}
        </button>
      </div>

      {generated && (
        <div className="mt-8 p-5 bg-green-100 border border-green-300 rounded-lg">
          <h2 className="text-lg font-bold text-green-700">
            ✅ Your Short URL
          </h2>

          <Link
            href={generated}
            target="_blank"
            className="block mt-3 text-blue-600 underline break-all"
          >
            {generated}
          </Link>

          <button
            onClick={copyLink}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
          >
            Copy Link
          </button>
        </div>
      )}
    </div>
  );
};

export default Shorten;
