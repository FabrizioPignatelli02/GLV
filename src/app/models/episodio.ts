export interface Episodio {
    episode_id: number
    type: string
    title: string
    duration: number
    explicit: boolean
    show_id: number
    author_id: number
    image_url: string
    image_original_url: string
    image_transformation: string
    published_at: string
    download_enabled: boolean
    stream_id: null
    waveform_url: string
    site_url: string
    download_url: string
    playback_url: string
}
