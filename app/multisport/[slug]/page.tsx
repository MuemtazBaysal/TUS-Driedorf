import { redirect } from "next/navigation";

type LegacyMultisportPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyMultisportPage({ params }: LegacyMultisportPageProps) {
  const { slug } = await params;
  redirect(`/breitensport/${slug}`);
}