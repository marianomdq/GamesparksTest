// ====================================================================================================
//
// Cloud Code for TestEvent, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

var playerId = Spark.getPlayer().getPlayerId();

var message = Spark.message("GenericMessage");

var msgStrg = JSON.stringify(message);

var messageData = {
    "a" : "probanding",
    "title" : "testTitle",
    "subtitle" : "testSubtitle",
    "body" : "testBody",
    "summary" : "testSummary"
};

// message.title = "testTitle";
// message.subtitle = "testSubtitle";
// message.summary = "testSummary";
// message.body = "testBody";

message.setMessageData(messageData);
// message.setPlayerIds([ "5b5351e280299a889b4a7b73"] );
message.setPlayerIds([ playerId ] );
message.send();
