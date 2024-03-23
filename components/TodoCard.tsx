'use client'

import { useBoardStore } from "@/store/BoardStore";
import { DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps } from "@hello-pangea/dnd"
import { XCircleIcon } from "@heroicons/react/16/solid";

type Props = {
    todo: Todo;
    index: number;
    id: TypedColum;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

const TodoCard = ({todo, index, id, innerRef, draggableProps, dragHandleProps}: Props) => {
  const deleteTask = useBoardStore((state) => state.deleteTask);
  
  return (
    <div
    className="bg-white rounded-md space-y-2 drop-shadow-sm"
    {...dragHandleProps}
    {...draggableProps}
    ref={innerRef}
    >
        <div className="flex justify-between items-center p-5">
            <p>{todo.title}</p>
            <button onClick={() => deleteTask(index, todo, id)} className="text-red-500 hover:text-red-600">
                <XCircleIcon className="ml-5 size-8"/>
            </button>
        </div>
        
    </div>
  )
}

export default TodoCard
