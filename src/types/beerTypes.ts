export interface IBeer {
    id: string,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string,
    ingredients: IIngredients

}

export interface IIngredients {
    malt: string
}