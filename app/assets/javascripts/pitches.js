var sessionId = '2_MX4yMDE5ODExMX5-U2F0IFNlcCAwOCAxNzo0NTo1OSBQRFQgMjAxMn4wLjUwOTk2OTk1fg';
var apiKey = '20198111';
var token = 'T1==cGFydG5lcl9pZD0yMDE5ODExMSZzaWc9MTQ5MDYwOTJhYjQxMzM0ZDRjMTU1MTI3ZTBiYzRkNjMzMjY3YjA4NTpzZXNzaW9uX2lkPTJfTVg0eU1ERTVPREV4TVg1LVUyRjBJRk5sY0NBd09DQXhOem8wTlRvMU9TQlFSRlFnTWpBeE1uNHdMalV3T1RrMk9UazFmZyZjcmVhdGVfdGltZT0xMzQ3MTUxNTY1JmV4cGlyZV90aW1lPTEzNDk3NDM1NjUmcm9sZT1tb2RlcmF0b3ImY29ubmVjdGlvbl9kYXRhPSZub25jZT00NjcwMw==';
var archive;
var archiveId;


var session;
var publisher;
var subscribers = {};

//var player;
//var recImgData;

var VIDEO_HEIGHT = 240;
var VIDEO_WIDTH = 320;

TB.setLogLevel(TB.DEBUG);
TB.addEventListener('exception', exceptionHandler);

function init() {
    session = TB.initSession(sessionId);
    session.addEventListener('sessionConnected', sessionConnectedHandler);
    session.connect(apiKey, token);

    //createRecorder();
}

function sessionConnectedHandler(event) {
    session.addEventListener('archiveCreated', archiveCreatedHandler);
    console.log('session connected');

    archive = event.archives[0];
    console.log(archive, event);
    //session.createArchive(apiKey, 'perStream');
}

function archiveCreatedHandler(event) {
    archive = event.archives[0];
    archiveId = archive.archiveId;
    //alert("Archive created.");
}


function startButtonClickHandler() {
    console.log('startButtonClickHandler', archive);
    session.addEventListener('sessionRecordingStarted', sessionRecordingStartedHandler);
    //session.startRecording(archive);
}

var publisher;

function sessionRecordingStartedHandler(event) {
    // Publish my webcam stream and put it in a div
    publisher = session.publish('myPublisherDiv');
}

/*function createRecorder() {
    var recDiv = document.createElement('div');
    recDiv.setAttribute('id', 'recorderElement');
    document.getElementById('recorderContainer').appendChild(recDiv);

    recorder = recorderManager.displayRecorder(token, recDiv.id);

    recorder.addEventListener('recordingStarted', recStartedHandler);
    recorder.addEventListener('archiveSaved', archiveSavedHandler);
} */


function recStartedHandler(event)
{
    alert('event.archives[0].archiveId;');
    alert(event.archives[0].archiveId);

    recImgData = recorder.getImgData();
}

function archiveSavedHandler(event)
{
   console.log('saved');
}

function exceptionHandler(event) {
    alert('Exception: ' + event.code + '::' + event.message);
}

$(function() {
    init();
});