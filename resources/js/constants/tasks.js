export const TASK_PRIORITIES = [
    { id: 1, label: "Baja", value: "low" },
    { id: 2, label: "Media", value: "medium" },
    { id: 3, label: "Alta", value: "high" },
];

export const RULES = {
    name: [
        {
            required: true,
            message: "El nombre es obligatorio",
            trigger: "blur",
        },
        {
            min: 3,
            max: 50,
            message: "El nombre debe tener entre 3 y 50 caracteres",
            trigger: "blur",
        },
    ],
    description: [
        {
            max: 255,
            message: "La descripción no puede exceder 255 caracteres",
            trigger: "blur",
        },
    ],
    priority: [
        {
            required: true,
            message: "La prioridad es obligatoria",
            trigger: "change",
        },
    ],
};
