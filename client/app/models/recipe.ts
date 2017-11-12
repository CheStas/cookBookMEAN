export interface IRecipe {
    _id: string;
    title: string;
    description: string;
    date: Date;
    history?: [
        {
            date: Date;
            discription: string;
            title: string;
        }
    ];
}
