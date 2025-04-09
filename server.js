import express from 'express'
import {CONNECT_DB,GET_DB} from '~/config/mongodb'

const START_SERVER = ()=>{
    const app = express()

    const hostname = 'localhost'
    const port = 6969

    app.get('/', (req, res) => {
        // Test Absolute import mapOrder
        // console.log(await GET_DB().listCollections().toArray())

        res.end('<h1>Nhin deo gi </h1><hr>')
    })

    app.listen(port, hostname, () => {
        // eslint-disable-next-line no-console
        console.log(`3 Hello minh-dev-hune-stack, I am running at ${ hostname }:${ port }/`)
    })
}
(async () => {
    try {
        console.log('1 connecting to the server')
        await CONNECT_DB();
        console.log('2 Connected to MongoDB');
        START_SERVER()
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
})()