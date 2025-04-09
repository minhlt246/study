const MONGODB_URI = 'mongodb+srv://minhle-dev:70r0XEb42AikA77n@cluster0-minhledev.duoukip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-minhledev';

//minh-dev-hune-stack
const DATABASE_NAME = 'minh-dev-hune-stack'

import {MongoClient, ServerApiVersion} from 'mongodb'

let ClientminhdevhunestackInstance = null;

const MongoClientIstance = new MongoClient(MONGODB_URI, {
    tls: true,
    serverSelectionTimeoutMS: 3000,
    autoSelectFamily: false
});

export const CONNECT_DB = async ()=>{
    await MongoClientIstance.connect()

    ClientminhdevhunestackInstance = MongoClientIstance.db(DATABASE_NAME);

}
export const GET_DB =()=>{
    if(!ClientminhdevhunestackInstance) throw new Error('No clientminhdevhunestack instance found.');
    return ClientminhdevhunestackInstance;
}