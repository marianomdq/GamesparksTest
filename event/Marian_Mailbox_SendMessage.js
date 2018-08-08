// ====================================================================================================
//
// Cloud Code for Marian_Maibox_SendMessage, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

var requestData = Spark.getData();
var ourTestData = requestData.MessageEventTest;

Spark.getLog().debug(ourTestData);