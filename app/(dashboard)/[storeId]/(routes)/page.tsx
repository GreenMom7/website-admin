import { prisma } from "@/lib/db";

interface DashboardPageProps {
  params: Promise<{ storeId: string }>;
}

const DashboarPage = async ({ params }: DashboardPageProps) => {
  const resolvedparams = await params;
  const store = await prisma.store.findFirst({
    where: {
      id: resolvedparams.storeId,
    },
  });
  return (
    <div className="m-9 text-base font-mono">Active Store : {store?.name}</div>
  );
};

export default DashboarPage;
