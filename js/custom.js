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
                    defaultAjaxTargetUrl:''
                }
            );

    }
);

function callBackFunction(params)
{
    console.log('callBack');
    console.log(params);
}

function ajaxStart()
{
    console.log('start');
}
function ajaxComplete()
{
    console.log('complete');
}
function ajaxError(error)
{
    console.log(error);
}


