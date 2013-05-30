/*
 * taskboard.js - should be loaded while rendering taskboard for each project
 * Uses Knockout.js to monitor changes in DOM
 *
 */

(function(window, document, ko){
	//my extension for knockout 
	var dragitem = null;

	//actual ko code
	ko.utils.extend(ko.bindingHandlers, {
		cardext : {
			init : function(element, valueAccessor){
				var value = ko.utils.unwrapObservable(valueAccessor()),
					name = value.name;

				ko.utils.registerEventHandler(element, 'dragstart', function (event) {
					//set the source container
					//console.log("starting drag");
					//console.log(event.target);
					dragitem = event.target;
				});
			}
		},
		boxext : {
			init : function(element, valueAccessor){
				var value = ko.utils.unwrapObservable(valueAccessor()),
					name = value.name;

				ko.utils.registerEventHandler(element, 'dragenter', function (event) {
					//console.log("dragenter");
					event.stopPropagation();
					event.preventDefault();
				});


				ko.utils.registerEventHandler(element, 'dragover', function (event) {
					//console.log("dragover");
					event.stopPropagation();
					event.preventDefault();
				});


				ko.utils.registerEventHandler(element, 'dragleave', function (event) {
					//console.log("dragleave");
					event.stopPropagation();
					event.preventDefault();
				});


				ko.utils.registerEventHandler(element, 'drop', function (event) {
					//handle drop event
					//get source container n event.target returns the current target container
					event.stopPropagation();
					if (event.stopPropagation) {
							event.stopPropagation(); // stops the browser from redirecting.
					}

					var flag = 1;
  		
  					if(dragitem.parentNode === event.target){flag = 0;}
  					if(flag) {
  						flag = 0;
						if(event.target.getAttribute("data-bind").match(/boxext/).length > 0) flag=1; 
  					}
  					if(flag) {
  						event.target.appendChild(dragitem);
  					}

				});
			}
		}
	});

	ko.applyBindings();

})(window, window.document ,ko);