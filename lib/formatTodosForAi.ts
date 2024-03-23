const formatTodosForAi = (board: Board) => {
    const todos = Array.from(board.columns.entries());

    const flatArray = todos.reduce((map, [key, value]) => {
        map[key] = value.todos;
        return map
    }, {} as { [key in TypedColum]: Todo[] });

    const flatArrayCounted = Object.entries(flatArray).reduce(
        (map, [key, value]) => {
            map[key as TypedColum] = value.length;
            return map;
        },
        {} as { [key in TypedColum]: number }
    );

    return flatArrayCounted;
}

export default formatTodosForAi;