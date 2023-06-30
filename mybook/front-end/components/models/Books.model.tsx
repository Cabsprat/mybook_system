export interface booksType{
    slice(arg0: number, maxCards: number): unknown;
    id: number,
    isbn: string,
    author: string,
    title: string
}