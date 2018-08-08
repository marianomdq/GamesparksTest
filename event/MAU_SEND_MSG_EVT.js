// ====================================================================================================
//
// Cloud Code for MAU_SEND_MSG_EVT, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

//The short code of your script message.
var message = Spark.message("MAU_MSG");

var messageData = {
    "msg_title" : Spark.getData().MSG_TITLE,
    "msg_body" : Spark.getData().MSG_BODY,
    "sender_display_name:" : Spark.getData().SENDER_DISPLAY_NAME,
    "src" : Spark.getPlayer().getPlayerId()
};

//Add Data to the events attributes - note the Attributes Short codes being used to identify your data.
message.setMessageData({"sendTo":Spark.getData().PLAYER_ID_TO,"data": messageData });

//Send the message to a player id - in my case, the PLAYER_TO_ID attribute
message.setPlayerIds(Spark.getData().PLAYER_ID_TO);

message.send();