"use client";

import { createBook } from "@/app/(main)/books/actions";
import BookForm from "@/app/(main)/books/BookForm";
import { BookValues } from "@/lib/validations";

export default function CreateBookPage() {
  const handleSubmit = async (data: BookValues) => {
    // Make sure data is a plain object
    const plainData = {
      title: data.title,
      author: data.author, 
      description: data.description,
      publishYear: data.publishYear,
      price: data.price,
      available: data.available
    };

    await createBook(plainData);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Add New Book</h1>
        <BookForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

