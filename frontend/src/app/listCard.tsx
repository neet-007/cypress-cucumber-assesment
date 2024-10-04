"use client"
export type ListCardProps = {
  cardTitle: string;
  cardContent: string;
};

export default function ListCard({ cardTitle, cardContent }: ListCardProps) {
  return (
    <article className="p-4 bg-white rounded-lg shadow-md transition hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-2 text-black title-class">{cardTitle}</h3>
      <p className="text-gray-700 content-class">{cardContent}</p>
    </article>
  );
}
