define(function(){
    return {
        pageGroups: [{"id":"f057b692-50e2-0133-2fe2-6a5a932a8c7b","name":"Default group","pages":[{"id":"958b01b5-63de-a0b1-ed56-7fc3747f6c0e","name":"Главная страница"},{"id":"cbf5ab2b-d8a3-4057-2bef-8638e53f4850","name":"Объект каталога"},{"id":"0c40ddc7-1d4a-93a0-d57e-19969f732cae","name":"Помощь при покупке"},{"id":"4aa55b1a-0288-8737-3f92-2dc94c428f9e","name":"Ипотека"},{"id":"54fbf7ce-2d6b-b90a-ed0e-7b030ae923bd","name":"Застройщики"},{"id":"b50510d7-3ccd-1d62-a076-0fc7b6e4307e","name":"Застройщик"},{"id":"39ff0b3e-d0f7-8a28-f5ae-8886e0d60ae9","name":"Новости"},{"id":"0ec3a6e6-0b52-dea3-8786-9b3cae0fb350","name":"Помощь - типовая страница"},{"id":"1ee8e5bc-50be-dbd3-ce3c-8b3c270759eb","name":"Экскрусии"},{"id":"7705ca56-74a2-6795-92c4-4d937affdc23","name":"Контакты"},{"id":"655fb614-3821-55fa-5072-8d5b1d6a37a3","name":"Новость"},{"id":"4347767e-1c40-eb54-d64e-8f7642bdfbc8","name":"Отзывы"}]}],
        downloadLink: "//services.ninjamock.com/html/htmlExport/download?shareCode=BNR6G&projectName=Застройщики Барнаула",
        startupPageId: 0,

        forEachPage: function(func, thisArg){
        	for (var i = 0, l = this.pageGroups.length; i < l; ++i){
                var group = this.pageGroups[i];
                for (var j = 0, k = group.pages.length; j < k; ++j){
                    var page = group.pages[j];
                    if (func.call(thisArg, page) === false){
                    	return;
                    }
                }
            }
        },
        findPageById: function(pageId){
        	var result;
        	this.forEachPage(function(page){
        		if (page.id === pageId){
        			result = page;
        			return false;
        		}
        	});
        	return result;
        }
    }
});
