angular.module('angular-onbeforeunload', []);
angular.module("angular-onbeforeunload").directive("onbeforeunload", ["$window", function ($window) {
	"use strict";
	var forms = [];

	function handleOnbeforeUnload() {
		var i, form, s = "test", isDirty = false;

		for (i = 0; i < forms.length; i++) {
			form = forms[i];

			if (form.scope[form.name].$dirty) {
				isDirty = true;
				break;
			}
		}

		if (isDirty) {
			return s;
		} else {
			return undefined;
		}
	}

	return function ($scope, $element, $attrs) {
		if ($element[0].localName !== 'form') {
			throw new Error("onbeforeunload directive must only be set on a angularjs form!");
		}

		forms.push({
			"name": $element[0].name,
			"scope": $scope
		});

		$window.onbeforeunload = handleOnbeforeUnload;

//        $element.bind("tap", function (event) {
//            var confirmMessage = $attrs.confirmMessage;
//            if (confirmMessage) {
//                if ($window.confirm(localizationService.translate(confirmMessage))) {
//                    $scope.$apply($attrs.tap);
//                }
//            } else {
//                $scope.$apply($attrs.tap);
//            }
//            event.stopPropagation();
//            event.preventDefault();
//        });
	};

}

])
;
