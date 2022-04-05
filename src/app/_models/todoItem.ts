export interface TodoItem {
    id: number;
    title: string;
    date: Date;
    important: boolean;
    check: boolean;
    todoCardId: number;
}