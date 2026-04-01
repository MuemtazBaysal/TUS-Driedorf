import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";
import { siteContent } from "@/content/siteContent";

export default function NotFound() {
  return (
    <SubpageLayout title={siteContent.ui.notFoundTitle} intro={siteContent.ui.notFoundText}>
      <Link href="/" className="inline-flex rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-700">
        {siteContent.ui.backHome}
      </Link>
    </SubpageLayout>
  );
}