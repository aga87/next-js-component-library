import { type Metadata } from "next";
import {
  ActionsPlayground,
  BrandingPlayground,
  DataDisplayPlayground,
  FeedbackPlayground,
  NavigationPlayground,
  OverlaysPlayground,
  TypographyPlayground,
} from "./features";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Component Library",
    description: "Component Library",
    alternates: {
      canonical: `/`,
    },
  };
}

export default async function Playground() {
  return (
    <main className="py-10 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Playground</h1>
      <TypographyPlayground />
      <BrandingPlayground />
      <DataDisplayPlayground />

      <NavigationPlayground />
      <ActionsPlayground />

      <OverlaysPlayground />
      <FeedbackPlayground />
    </main>
  );
}
