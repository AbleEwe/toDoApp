import formatTodosForAi from "./formatTodosForAi";

const fetchSuggestion = async (board: Board) => {
    try {
        const todos = formatTodosForAi(board);

        const res = await fetch("/api/generateSummary", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ todos })
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }

        const GPTdata = await res.json();
        const content  = GPTdata;

        console.log("Response content:", content);

        return content;
    } catch (error) {

        console.error("Fetch suggestion error:", error);
        throw error;
    }
};

export default fetchSuggestion;