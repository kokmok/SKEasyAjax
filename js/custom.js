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

function ajaxStart(target)
{
    console.log('start');
    console.log(target);
}
function ajaxComplete(target)
{
    console.log('complete');
    console.log(target);
}
function ajaxError(error)
{
    console.log(error);
}


