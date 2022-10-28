// @ts-ignore
import rethinkdbdash from 'rethinkdbdash'

export const db = rethinkdbdash({
    db: 'training',
    host: 'localhost',
    port: '28015'
})