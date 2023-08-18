import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function AddTask({
    tasks,
    setTasks,
    thisList,
}: {
    tasks: { list: string; name: string; id: string }[];
    setTasks: React.Dispatch<
        React.SetStateAction<{ list: string; name: string; id: string }[]>
    >;
    thisList: string;
}) {
    const [newItem, setAddNewItem] = useState("");

    function handleSubmit() {
        if (newItem !== "") {
            setTasks([
                ...tasks,
                {
                    list: thisList,
                    name: newItem,
                    id: uuidv4(),
                },
            ]);
            setAddNewItem("");
        }
    }

    return (
        <div className="tasks">
            <input
                type="text"
                onChange={(e) => setAddNewItem(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
                value={newItem}
            />
            <button onClick={() => handleSubmit()}>Add Item</button>
        </div>
    );
}
