;(function(window) {
    function ViewUrlManager(){
        ViewUrlManager.EVENT_TABLE_DATA_UPDATED = "ViewUrlManager.EVENT_TABLE_DATA_UPDATED";
        
        var self = this;
        
        appExample.on(ViewUrlManager.EVENT_TABLE_DATA_UPDATED, function(model){
            self.renderUrlTableBody();
        });
        
//        appExample.loadModel('ModelUrlGroup', function(model){
//            appExample.trigger(ViewUrlManager.EVENT_TABLE_DATA_UPDATED);
//        },function(e){console.log('error',e);});

        function __construct(){} 
        __construct();
    }
    
    ViewUrlManager.prototype.show = function(){
        $(appExample.EL_ROOT).html( this.render() );
    }
    
    ViewUrlManager.prototype.render = function(){
        var buttonCreateUrl = new ButtonCreateUrl();
        var html  = '';
        html += '<div class="jumbotron">';
        html += '   <p style="font-size:32px;">Manage Urls ';
        html +=         buttonCreateUrl.render();
        html += '   </p>';
        html += '   <div id="urlTable" style="width:100%">';
        html += '   <table class="table">';
        html += '       <thead>';
        html += '           <tr>';
        html += '               <th>Url</th>';
        html += '               <th>Status</th>';
        html += '               <th>Action</th>';
        html += '           </tr>';
        html += '       </thead>';
        html += '       <tbody id="urlTableBody">';
        html += '           <tr><td colspan=4>Loading Records...</td></tr>';
        html += '       </tbody>';
        html += '   </table>';
        html += '   </div>';
        html += '</div>';
        html += '<div id="modal_createNewUrl_parent"><div>';
        return html;
    }
    
    ViewUrlManager.prototype.renderUrlTableBody = function(){
        var model = appExample.getModel('ModelUrlGroup');
        var html = '';
        for(key in model.urls){
            var modelUrl = $.extend(new ModelUrl(), model.urls[key]);

            html += '    <tr style="height:8px;"></tr>';
            html += '    <tr style="background-color: #F78D3F;">';
            html += '      <td><strong>' + modelUrl.getHref() + '</strong></td>';
            html += '      <td>Status</td>';
            html += '      <td>';
            html += '            <button style="font-size:10px;" type="button" class="btn btn-primary" data-url="' + modelUrl.getHref() + '" data-urlid="' + key + '" id="addEvent_' + key + '">Add Event</button>';
            html += '            <button style="font-size:10px;" type="button" class="btn btn-primary" data-url="' + modelUrl.getHref() + '" data-urlid="' + key + '" id="editUrl_' + key + '">Edit</button>';
            html += '            <button style="font-size:10px;" type="button" class="btn btn-primary" data-url="' + modelUrl.getHref() + '" data-urlid="' + key + '" id="deleteUrl_' + key + '">Delete</button>';
            html += '      </td>';
            html += '    </tr>';
        }
        $('#urlTableBody').html( html );
    }

    window.ViewUrlManager = ViewUrlManager;
}(window));