// The interface that every card will follow
export interface CardInterface {
    title:string,
    body_text:string,
    imageURL:string,
    links: Array<{link:string, linkText:string}>
}
