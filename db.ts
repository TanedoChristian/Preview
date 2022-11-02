// @ts-ignore
import rethinkdbdash from 'rethinkdbdash'

export const db = rethinkdbdash({
    db: 'crud',
    host: 'localhost',
    port: '28015'
}) 