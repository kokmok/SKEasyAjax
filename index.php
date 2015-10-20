<!DOCTYPE html>
<html>
    <head>
        <title>SKEasyAjax Example</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
    </head>
    <body>
        <a href="#" class="ajax_action" data-action="defaultAction" data-params="<?php echo htmlentities(json_encode(['param'=>'value']));?>" data-url="serverFile.php" data-callBack="callBackFunction" data-token="myToken">SKEasyAjax Link</a>

        <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
        <script type="text/javascript" src="js/jquery.SKEasyAjax.min.js"></script>
        <script type="text/javascript" src="js/custom.js"></script>
    </body>
</html>
