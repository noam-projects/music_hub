import { SongItemType } from '../utils/Types'
import chill_abstract from './songs/abstract/chill_abstract.mp3'
import chill_abstract_pic from './songs_thumbnails/chill_abstract.jpg'
import jazzy_abstract_beat from './songs/abstract/jazzy_abstract_beat.mp3'
import jazzy_abstract_beat_pic from './songs_thumbnails/jazzy_abstract_beat.jpg'
import order from './songs/abstract/order.mp3'
import order_pic from './songs_thumbnails/order.jpg'
import leonell_cassio_the_blackest_bouquet from './songs/epic/leonell_cassio_the_blackest_bouquet.mp3'
import leonell_cassio_the_blackest_bouquet_pic from './songs_thumbnails/leonell_cassio_the_blackest_bouquet.jpg'
import price_of_freedom from './songs/epic/price_of_freedom.mp3'
import price_of_freedom_pic from './songs_thumbnails/price_of_freedom.jpg'
import the_introvert_michael_kobrin from './songs/epic/the_introvert_michael_kobrin.mp3'
import the_introvert_michael_kobrin_pic from './songs_thumbnails/the_introvert_michael_kobrin.jpg'
import cinematic_documentary from './songs/nature/cinematic_documentary.mp3'
import cinematic_documentary_pic from './songs_thumbnails/cinematic_documentary.jpg'
import lofi_study from './songs/nature/lofi_study.mp3'
import lofi_study_pic from './songs_thumbnails/lofi_study.jpg'
import melody_of_nature_main from './songs/nature/melody_of_nature_main.mp3'
import melody_of_nature_main_pic from './songs_thumbnails/melody_of_nature_main.jpg'
export const database: SongItemType[] = [
    { song_name: 'chill abstract', song_path: chill_abstract, thumbnail_path: chill_abstract_pic, song_length: 88 },
    { song_name: 'jazzy abstract beat', song_path: jazzy_abstract_beat, thumbnail_path: jazzy_abstract_beat_pic, song_length: 88 },
    { song_name: 'order', song_path: order, thumbnail_path: order_pic, song_length: 104 },
    { song_name: 'leonell cassio the blackest', song_path: leonell_cassio_the_blackest_bouquet, thumbnail_path: leonell_cassio_the_blackest_bouquet_pic, song_length: 221 },
    { song_name: 'price of freedom', song_path: price_of_freedom, thumbnail_path: price_of_freedom_pic, song_length: 307 },
    { song_name: 'the introvert michael', song_path: the_introvert_michael_kobrin, thumbnail_path: the_introvert_michael_kobrin_pic, song_length: 139 },
    { song_name: 'cinematic documentary', song_path: cinematic_documentary, thumbnail_path: cinematic_documentary_pic, song_length: 131 },
    { song_name: 'lofi study', song_path: lofi_study, thumbnail_path: lofi_study_pic, song_length: 147 },
    { song_name: 'melody of nature main', song_path: melody_of_nature_main, thumbnail_path: melody_of_nature_main_pic, song_length: 181 }
]