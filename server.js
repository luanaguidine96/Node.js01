import Fastify from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = Fastify()
const database = new DatabaseMemory()


server.post('/videos', (request) => {
    const videoId = database.create(request.body)
    //request.body é oque eu mandei
    //que logo é armazenado no banco de dados
    //e fica dentro da variável videoId que é retornada para o cliente pelo console.log
    //request: representa a requisição recebida do cliente.
    console.log(database.listen(videoId))
    return database.listen(videoId)
})


server.get('/videos', () => {
    return 'hello'
})

server.put('/videos/:id', () => {
    return 'put'
})

server.delete('/videos/:id', () => {
    return 'delete'
})


server.listen({
    port: 3333
})