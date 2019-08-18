const { NlpManager } = require('node-nlp');
const fs = require('fs')
const manager = new NlpManager({ languages: ['en'] });



manager.load()

async function data() {
    const response = await manager.process('en', 'hi');
    console.log(response)

}
data()