<?php
header('Content-type: application/json');

if (isset($_POST['action']) && tokenValid())
{
    if (is_callable($_POST['action']))
    {
        
        $params = [];
        if (isset($_POST['params']))
        {
            $params = json_decode($_POST['params'],true);
        }
        call_user_func($_POST['action'],$params);
    }
    else
    {
        sendResponse( [] , 0 , ['message'=> 'function '.$_POST['action'].' does not exists']);
    }
    
}
else
{
    sendResponse( [] , 0 , ['message'=> 'Missing a valid function name (data-action) ']);
    
}

function tokenValid()
{
    //Token in $_POST['token']
    return true;
}


function defaultAction($params)
{
    sendResponse(['data'=>$params['param'].' response']);
}


function sendResponse($callBackParams,$status=1,$error = array())
{
    //In error you can add specific datas to send to your js. (wrong parameters,..)
    $response = ['status'=>$status,'callBackParams'=>$callBackParams,'error'=>$error];
    echo json_encode($response);
    
}
    

