import { createEffect } from 'effector';


export const fetchTasks = createEffect(async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: 'read book', completed: false},
                { id: 2, text: 'buy book', completed: false},
            ]);
        }, 1000)
    });
});