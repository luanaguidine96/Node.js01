import { randomUUID } from 'node:crypto'

export class DatabaseMemory {

    #videos = new Map()

    listen(videoId) {
        return this.#videos.get(videoId)
    }

    create(video) {
        const videoId = randomUUID()
        this.#videos.set(videoId, video)

        return videoId
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }

}