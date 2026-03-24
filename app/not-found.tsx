import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";
import { siteContent } from "@/content/siteContent";

export default function NotFound() {
  return (
    <SubpageLayout title={siteContent.ui.notFoundTitle} intro={siteContent.ui.notFoundText}>
      <Link href="/" className="inline-flex rounded-full bg-glow px-6 py-3 text-sm font-semibold text-shell shadow-lg shadow-glow/20">
        {siteContent.ui.backHome}
      </Link>
    </SubpageLayout>
  );
}