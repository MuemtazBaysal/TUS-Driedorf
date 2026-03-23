import { redirect } from "next/navigation";

type ClubPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ClubPage({ params }: ClubPageProps) {
  const { slug } = await params;
  redirect(`/ueber-uns/${slug}`);
}
