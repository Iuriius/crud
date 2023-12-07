import EditBtn from "./EditBtn";
import RemoveBtn from "./RemoveBtn";

const getTopics = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/topics")
        cache: "no-store";
        if (!response.ok) {
            throw new Error("Failed to fetch data")
        }
        return response.json();

    } catch (error) {
        console.log("Error loading Topics:", error);

    }
}


export default async function TopicsList() {

    const { topics } = await getTopics();

    return (
    <>
            {topics.map((topic) => (
                < div className="my-4 p-4 border border-slate-300 rounded-lg flex justify-between items-start" >
                    <div className="max-w-md">
                        <h2 className="font-bold text-2xl text-white p-2">{topic.title}</h2>
                        <p className="p-2">{topic.description}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda nostrum culpa expedita vero atque nulla sit temporibus, est dolorem ut velit aliquid omnis laborum hic excepturi alias dolores vitae!
                        </p>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <EditBtn />
                        <RemoveBtn />
                    </div>))}
                </>
            )}
