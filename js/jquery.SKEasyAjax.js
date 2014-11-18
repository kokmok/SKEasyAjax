(function($) {

    $.skEasyAjax = function(element, options) {

        
        var defaults = {
            defaultAjaxTargetUrl :'',
            onStart: function() {},
            onComplete: function() {},
            onError: function(error) {}
        };


        var plugin = this;
        plugin.callBackFunction = '';

        plugin.settings = {}

        var $element = $(element),  
             element = element;

        plugin.init = function() {
        
            plugin.settings = $.extend({}, defaults, options);
            skEasyAjaxBinder();
        };

        
        var skEasyAjaxBinder = function() {
            
            $element.bind('click',skEasyAjaxHandler);
        };
        var ajaxUIRefresh = function() {
            
            $element.unbind('click',skEasyAjaxHandler);
            skEasyAjaxBinder();
        };
        
        var skEasyAjaxHandler = function(e)
        {
            
            plugin.settings.onStart();
            
            var params = $element.data('params');
            

            if ($element.attr('data-callBack') != undefined)
            {
                
                plugin.callBackFunction = $element.attr('data-callBack');
                
            }

            if ($element.data('url') != undefined)
            {
                var ajaxUrl = $element.data('url');
            }
            else
            {
                var ajaxUrl = plugin.settings.defaultAjaxTargetUrl;
            }

            var ajaxData = {params:JSON.stringify(params)};
            
            if ($element.data('token') != undefined)
            {
                ajaxData.token = $element.data('token');
            }
            
            ajaxData.action= $element.data('action');
            

    
            $.ajax
            ({
                url : ajaxUrl,
                type : "post",
                data : ajaxData,
                success : function(response)
                {
                    plugin.settings.onComplete();
                    skEasyAjaxOnSuccess(response);
                    

                },
                error : function(e)
                {
                    plugin.settings.onComplete();
                    plugin.settings.onError(e);
                    
                   

                }

            });
        };
        
        
        var skEasyAjaxOnSuccess = function(json_params)
        {
            if (typeof(json_params) == 'object')
            {
                var params = json_params;
            }
            else 
            {
                var params = JSON.parse(json_params);
            }
            
            

            if (params.status ==0 )
            {
               plugin.settings.onError(params);
            }
            
            if (typeof window[plugin.callBackFunction] == 'function')
            {
                if (params.callBackParams)
                {
                    window[plugin.callBackFunction](params.callBackParams);
                }
                else
                {
                    window[plugin.callBackFunction]();
                }

            }
            else
            {
                $(window).trigger(plugin.callBackFunction);
            }

            ajaxUIRefresh();
            
        };
        
        plugin.init();

    };

    
    $.fn.skEasyAjax = function(options) {

        
        return this.each(function() {

            
            if (undefined == $(this).data('skEasyAjax')) {

               
                var plugin = new $.skEasyAjax(this, options);

               
                $(this).data('skEasyAjax', plugin);

            }

        });

    };

})(jQuery);

