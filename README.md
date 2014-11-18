SKEasyAjax
==========

# jQuery plugin for easily set your ajax applications

## Quick example

in your html file :
import jquery and the SKEasyAjax plugin
```
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="jsFolderPath/jquery.SKEasyAjax.js"></script>
```
set your links like this :
```
<a href="#" class="ajax_action" data-action="customActionToSendToServer" data-params="{&quot;paramName&quot;:&quot;value&quot;}" data-url="urlToYourFile.php" data-callBack="callBackFunction">Link</a>
```

in your custom js script :
```
$(document).ready
(
    function()
    {
        $('.ajax_action')
            .skEasyAjax
            (
                {
                    onStart : ajaxStart,
                    onComplete : ajaxComplete,
                    onError : ajaxError,
                    defaultAjaxTargetUrl:'test.php'
                }
            );

    }
);

function callBackFunction(params)
{
    console.log('callBack'+params);
}

function ajaxStart()
{
    /*
    * triggered when ajax request starts.
    * Here you can show a loader or something
    */
}
function ajaxComplete()
{
    /*
    * triggered when ajax request is complete.
    * Here you can hide a loader or something
    */
    
}
function ajaxError(error)
{
    /*
    * triggered when $.ajax triggers onError() event 
    * or when you respond with status false or 0
    */
}
```

## How it works

The plugin uses lots of data atributes.

`data-action=""` is used to ask a specific action to the server.

`data-params=""` is used to send your data to the server . it's an array json encoded. (in php `json_encode(array());` )

`data-url=""` is the path for your server request. So you can use different path for your requests. You can alternativly use a direct plugin option if you have only one ajax path. This data attribute override the plugin option.

`data-callBack=""` is the name of the callback function you want to call when request succeed. 


And it has got also some options.

```
defaultAjaxTargetUrl :'', // The default ajax tarhet path (can be overrided by data-url attribute
onStart: function() {}, //Called when the ajax request starts
onComplete: function() {}, //Called when the ajax request ends
onError: function(error) {} //Called when an error is triggered ( $.ajax onError function or when plugin receive a status 0 in response )
```