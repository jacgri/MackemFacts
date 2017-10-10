'use strict'
const Alexa = require('alexa-sdk')

const APP_ID = 'amzn1.ask.skill.31d3517b-b7b0-44f5-8ee6-cafaad2cb4bf'

const SKILL_NAME = 'Mackem Facts'
const GET_FACT_MESSAGE = "Here's your fact: "
const HELP_MESSAGE = 'You can say give me a Mackem fact, or, you can say exit... What can I help you with?'
const HELP_REPROMPT = 'What can I help you with?'
const STOP_MESSAGE = 'Goodbye!'

const data = [
  'Gadgie means Man. As in Look at that gadgie with the git big hat on',
  'Nettie means toilet. As in am off to the Nettie',
  'Plodge means to wade in the sea. As in look at that lass plodging in the sea',
  'Clarty means muddy or dirty. As in shes proper clarty',
  'Ket means sweets. As in pass us some ket marra',
  'Knack means to cause them some sort of physical pain. As in I will knack yee ya nar',
  'Clays means clothes. As in am wearing me best clays',
  'Marra means friend. As in how ya deein marra',
  'Sun lun means Sunderland. As in Sun lun is the greatest place on earth',
  'Haway means come on. As in Howay man lets go',
  'Bewk means book. As in am reading me bewk man',
  'Tak means take. As in haway and tak me picture man',
  'Git means very. As in thats a git big dog that like',
  'Pund means pound. As in gis a pund marra',
  'Spelk means splinter. As in Ive got a spelk in me finger and it knacks',
  'Radgie means a violent or agressive person. As in hes a right radgie him like',
  'lush means lovely. As in shes proper lush her like',
  'Mar means mother. As in yer mar is',
  'Dar means Father. As in thats not what ya dar said',
  'kerry means curry. As in Id proper love a chicken kerry now like'
]

exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context)
  alexa.appId = APP_ID
  alexa.registerHandlers(handlers)
  alexa.execute()
}

const handlers = {
  'LaunchRequest': function () {
    this.emit('GetNewFactIntent')
  },
  'GetNewFactIntent': function () {
    const factArr = data
    const factIndex = Math.floor(Math.random() * factArr.length)
    const randomFact = factArr[factIndex]
    const speechOutput = GET_FACT_MESSAGE + randomFact

    this.response.cardRenderer(SKILL_NAME, randomFact)
    this.response.speak(speechOutput)
    this.emit(':responseReady')
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = HELP_MESSAGE
    const reprompt = HELP_REPROMPT

    this.response.speak(speechOutput).listen(reprompt)
    this.emit(':responseReady')
  },
  'AMAZON.CancelIntent': function () {
    this.response.speak(STOP_MESSAGE)
    this.emit(':responseReady')
  },
  'AMAZON.StopIntent': function () {
    this.response.speak(STOP_MESSAGE)
    this.emit(':responseReady')
  }
}
