// --------- Настройки программы -----------------

// необходимые библиотеки устанавливаются через npm
const golos = require("golos-classic-js")
const request = require("request")
//const GOLOSNODE = "wss://golos.lexai.host/ws" // public node
const GOLOSNODE = "ws://192.168.1.210:8091" // local node
golos.config.set('websocket', GOLOSNODE)

const from = "jackvote" // delegate
const key = "5Qm..."    // wif


function getUrl() {
    request("https://expertgroup.org/get_feed.php", async function (err, res) {
//    console.log(res.body)
        try {
            let obj=JSON.parse(res.body)
            console.log(obj)
            let exchange_rate=JSON.parse('{"base":"'+obj.FEED+' GBG","quote":"1.000 GOLOS"}')
            console.log("Ok")
            feed(exchange_rate)
        } catch(e) {
            console.log(">>>", e.message);
//      process.exit(0);
            return
        }
    })
}

function feed(base) {
        golos.broadcast.feedPublish(key,from,base,function(err,result){
            if (err) {
                console.log("Проблемы", base)
            }
            if (result) {
                console.log("Опубликовали", base)
            }
        })
}

/// Основной цикл
const startCheck = () => {

    timerCheckOn = setInterval(()=>{
        getUrl()
    }, 24*60*60*1000) // раз в сутки

}

const startBot = () => {
    getUrl()
    startCheck()
}

startBot() // запуск скрипта
