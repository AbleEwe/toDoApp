interface Board {
    columns: Map<TypedColum, Column>
}

type TypedColum = "todo" | "inprogress" | "done"

interface Column {
    id: TypedColum;
    todos: Todo[];
}

interface Todo {
    $id: string;
    $createdAt: string;
    title: string;
    status: TypedColum;
    image?: Image;
}

interface Image {
    buckedId: string;
    fileId: string;
}