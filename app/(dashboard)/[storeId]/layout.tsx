import Navbar from "@/components/Navbar";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboardlayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ storeId: string }>;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("sign-in");
  }

  const resolvedParams = await params;
  const store = await prisma.store.findFirst({
    where: {
      id: resolvedParams.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
