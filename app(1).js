angular.module('starter', ['ionic'])
    .controller('AppCtrl', function ($scope, ParseHttpService) {

        $scope.currentUser = null;
        $scope.apiResponseData = {};
        $scope.uiData = {};

        function _alertHandler(_error) {
            alert("ERROR " + JSON.stringify(_error, null, 2));
        }
        /**
         * logs the user into the application
         */
        $scope.doLogin = function () {
            return ParseHttpService.login().then(function (_response) {
                $scope.currentUser = _response;
                $scope.apiResponseData = _response;
            }, _alertHandler);
        }
 var authenticationHeaders = {
        "x-parse-application-id": "UPGKMUAEcNZQVRiXAKxG7F4Ga6za02RjnBeYw3ad",
        "x-parse-rest-api-key": "1MYsnIpcvfGE405veQA0lSZRpUzLqwhF1ApAkAst"
    };
    var defaultSettings = {
        "async": true,
        "crossDomain": true,
        headers: authenticationHeaders,
    };
    /**
     * gets the LIST of stuff from the database.. it returns a list
     * because there is no specific id specified in the request
     */
    function getStuffList() {
        // copies the object...
        var settings = $.extend({}, defaultSettings);
        // sets the specific URL for the ajax call, this
        // information would be specified in the API documentation
        settings.url = "https://api.parse.com/1/classes/stuff";
        // sets the appropriate REST VERB for tha API call, this
        // information would be specified in the API documentation
        settings.method = "GET";
        // makes the call using http client for jQuery $.ajax
        $.ajax(settings).done(function(response) {
            console.log(response);
            $("#responseText").html(JSON.stringify(response, null, 2));
        });
    }
    /**
     * deletes stuff from the database.. it deletes a specific
     * item based on the id specified
     */
    function deleteStuff() {
        var _id = prompt('enter id of object to delete');
        // copies the object...
        var settings = $.extend({}, defaultSettings);
        // sets the specific URL for the ajax call, this
        // information would be specified in the API documentation
        settings.url = "https://api.parse.com/1/classes/stuff/" + _id;
        // sets the appropriate REST VERB for tha API call, this
        // information would be specified in the API documentation
        settings.method = "DELETE";
        // makes the call using http client for jQuery $.ajax
        $.ajax(settings).done(function(response) {
            console.log(response);
            $("#responseText").html(JSON.stringify(response, null, 2));
        });
    }
    /**
     * gets stuff from the database.. it returns a specific
     * item based on the id specified
     */
    function getStuff() {
        var _id = prompt('enter id of object to get');
        // copies the object...
        var settings = $.extend({}, defaultSettings);
        // sets the specific URL for the ajax call, this
        // information would be specified in the API documentation
        settings.url = "https://api.parse.com/1/classes/stuff/" + _id;
        // sets the appropriate REST VERB for tha API call, this
        // information would be specified in the API documentation
        settings.method = "GET";
        // makes the call using http client for jQuery $.ajax
        $.ajax(settings).done(function(response) {
            console.log(response);
            $("#responseText").html(JSON.stringify(response, null, 2));
        });
    }
    /**
     * used as the error handler for the login function to
     * show that you can use anonymous function or regular 
     * functions as callbacks.. See below
     */
    function loginErrorHandler(_errorResponse) {
        alert(JSON.stringify(res_errorResponseponse));
    }
    /**
     * you need to login to the platform before doing anything.
     * I created a sample user manually using the interface provided
     * by Parse.com
     *
     * You should create the user as soon as you create the application
     */
    function login() {
        // copies the object...
        var settings = {
            "async": true,
            //"crossDomain": true,
            "headers": authenticationHeaders,
            "url": "https://api.parse.com/1/login",
            "method": "GET",
            "data": {
                "username": "admin",
                "password": "test"
            }
        }
        /*
        // sets the specific URL for the ajax call, this
        // information would be specified in the API documentation
        settings.url = "https://api.parse.com/1/login";
        // sets the appropriate REST VERB for tha API call, this
        // information would be specified in the API documentation
        settings.method = "GET";
        // sets the appropriate parameters for the API call, this
        // information would be specified in the API documentation
        //
        // since this is a get request, the data will be added to the 
        // query string creating a url that looks like this
        //
        // https://api.parse.com/1/login?username=admin&password=test
        //
        settings.data = {
            "username": "admin",
            "password": "test"
        };
        */
        // this is the http client
        $.ajax(settings)
            // success callback function implemented as an
            // anonymous function
            .success(function(_successResponse) {
                //alert(JSON.stringify(_successResponse));
            })
            // error callback function referenced as a defined
            // function above
            .error(function(_errorResponse) {
                alert(JSON.stringify(res_errorResponseponse));
            })
            // done handler is called irregardless of an error or success
            // this is a catch all
            .done(function(response) {
                console.log("DONE - " + JSON.stringify(response));
                $("#responseText").html(JSON.stringify(response, null, 2));
            });
    }
    
    /**
     * Save to data base
     */
    function putStuff() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "headers": authenticationHeaders,
            // sets the specific URL for the ajax call, this
            // information would be specified in the API documentation
            "url": "https://api.parse.com/1/classes/stuff/" + $("#stuff_id_update").val(),
            // sets the appropriate REST VERB for tha API call, this
            // information would be specified in the API documentation
            "method": "PUT",
            // sets the appropriate parameters for the API call, this
            // information would be specified in the API documentation
            //
            // since this is a PUT request, the data will be added to the 
            // request body NOT the url   
            // data needs to be converted to a string to be processed
            "data": JSON.stringify({
                "name": $("#stuff_name_update").val(),
                "room": $("#stuff_room_update").val()
            })
        };
        $.ajax(settings).done(function(response) {
            console.log(response);
            $("#responseText").html(JSON.stringify(response, null, 2));
        });
    }
    /**
     * Save to data base
     */
    function postStuff() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "headers": authenticationHeaders,
            // sets the specific URL for the ajax call, this
            // information would be specified in the API documentation
            "url": "https://api.parse.com/1/classes/stuff/",
            // sets the appropriate REST VERB for tha API call, this
            // information would be specified in the API documentation
            "method": "POST",
            // sets the appropriate parameters for the API call, this
            // information would be specified in the API documentation
            //
            // since this is a POST request, the data will be added to the 
            // request body NOT the url   
            // data needs to be converted to a string to be processed
            "data": JSON.stringify({
                "name": $("#stuff_name_create").val(),
                "room": $("#stuff_room_create").val()
            })
        };
        $.ajax(settings).done(function(response) {
            console.log(response);
            $("#responseText").html(JSON.stringify(response, null, 2));
        });
    }
