"use client"

import { useBoardStore } from "@/store/BoardStore"
import { RadioGroup } from "@headlessui/react"
import { CheckCircleIcon } from "@heroicons/react/16/solid"

const types = [
    {
        id: "todo",
        name: "Todo",
        description: "A new task to be completed",
        color: "bg-red-500",
    },
    {
        id: "inprogress",
        name: "In Progress",
        description: "A task that is currently being worked on",
        color: "bg-yellow-500",
    },
    {
        id: "done",
        name: "Done",
        description: "A task that has been completed",
        color: "bg-green-500",
    }
]

const Radio = () => {
    const [setNewTaskType, newTaskType] = useBoardStore((state) => [
        state.setNewTaskType,
        state.newTaskType,
    ]);

  return (
    <div className="w-full py-5">
        <div className="mx-auto w-full max-w-md">
        <RadioGroup 
            value={newTaskType}
            onChange={(e) => {
                setNewTaskType(e)
            }}
        >
            <div className="space-y-2">
            {types.map((type) => (
        <RadioGroup.Option key={type.id} value={type.id}
            className={({ active, checked }) => (
                `${
                    active
                        ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                        : ""
                }
                ${
                    checked
                        ? `${type.color} bg-opacity-75 text-white`
                        : "bg-white"
                }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
              )}
        >
          {({ active, checked }) => (
            <>
                <form className="w-full flex items-center justify-between">
                    <ul className="flex items-center">
                        <li className="text-sm">
                            <RadioGroup.Label
                                as="p"
                                className={`font-medium ${
                                    checked ? "text-white" : "text-gray-900"
                                }`}
                            >
                                {type.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                                as="span"
                                className={`inline ${
                                    checked ? "text-white" : "text-gray-500"
                                }`}
                            >
                                <span>{type.description}</span>
                            </RadioGroup.Description>
                        </li>
                    </ul>
                    {checked && (
                        <div className="shrink-0 text-white">
                            <CheckCircleIcon className="size-6"/>
                        </div>
                    )}
                </form>
            </>
          )}
        </RadioGroup.Option>
      ))}
            </div>
        </RadioGroup>
        </div>
    </div>
  )
}

export default Radio
