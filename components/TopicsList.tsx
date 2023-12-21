import EditBtn from "./EditBtn";
import RemoveBtn from "./RemoveBtn";

const getTopics = async () => {
  try {
    const response = await fetch("https://crud-nine-alpha.vercel.app/api/topics", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (error) {
    console.log("Error loading Topics:", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <div className="flex flex-col justify-center items-center w-11/12">
      {topics.toReversed().map((topic: any) => (
        <div
          key={topic._id}
          className="flex m-4 p-4 border border-slate-300 rounded-lg justify-between items-start w-11/12 max-w-3xl "
        >
          <div>
            <h2 className="font-bold text-2xl text-white p-2">{topic.title}</h2>
            <p className="p-2">{topic.description}</p>
          </div>
          <div className="flex gap-2 flex-col">
            <EditBtn topic={topic} />
            <RemoveBtn id={topic._id} />
          </div>
        </div>
      ))}
    </div>
  );
}
