import { z } from 'zod';

export const createTaskSchema = z.object({
    title: z.string({
        required_error: "Title is required"
    }),
    description: z.string({
        required_error: "Description must be a string"
    }).min(1, { message: "Descriptium must have 1 character" }),
    date: z.string().datetime().optional()
})