import PageContainer from "@/components/ui/dashboard/page-container";
import PageHeader from "@/components/ui/dashboard/page-header";
import { tools, ToolType } from "@/config/tools";
import { notFound } from "next/navigation";

const ToolPage = async({ params }: { params: Promise<{ tool: string }> }) => {
  const toolType = (await params).tool as ToolType;
  const tool =  tools[toolType];

  if (!tool) {
    return notFound();
  }

  const ToolComponent = tool.components;

  return (
    <PageContainer>
      <PageHeader title={tool.title} desctiption={tool.description} />
      <div className="max-w-2xl">
        <ToolComponent />
      </div>
    </ PageContainer>
  );
};

export default ToolPage;
