export type GenreItemType={
    label_name: string;
    change_state_function:()=>void
}
export type SongItemType={
    song_name:string;
    song_path:string;
    thumbnail_path:string;
    song_length:number;
    genre:string;
}