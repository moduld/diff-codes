function showChat(agent)
    {
            if (agent.modalIsNotOpened){
                agent.modalIsNotOpened = false;
                var $modalScope = $scope.$new(true);
                $modalScope.agent = agent;
                var modal = modalFactory.open("assets/views/chatWindowTmpl.html", $modalScope);
                $modalScope.closeChatWindow = function ()
                {
                    modal();
                    agent.modalIsNotOpened = true;
                }
            }
    }
    
// сервис для компилирования шаблона с новым скоупом    
    
    
angular.module('app')
    .service('modalFactory', modalFactory);

function modalFactory($compile, $templateRequest)
{

        this.open = function  (uri, modalScope)
        {
            var modalElement;

            function close()
            {
                modalElement && modalElement.parentNode.removeChild(modalElement);
            }

            modalScope.close = close;

            $templateRequest(uri, true).then(function (templateHtml)
            {
                modalElement = $compile(templateHtml)(modalScope)[0];
                document.body.appendChild(modalElement);
            }, function () {
                console.error('Can\'t load modal template');
            });

            return close;
        }


}
