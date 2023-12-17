import EditTopicForm from "@/components/EditTopicForm";

interface Topic {
  title: string;
  description: string;
}

const getTopicById = async (id: string): Promise<Topic> => {
  try {
    const res = await fetch(`https://crud-iuriius-projects.vercel.app/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

interface EditTopicProps {
  params: {
    id: string;
  };
}

export default async function EditTopic({ params }: EditTopicProps) {
  const { id } = params;
  const { title, description } = await getTopicById(id);
  return <EditTopicForm id={id} title={title} description={description} />;
}
