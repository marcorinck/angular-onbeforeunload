#angular-onbeforeunload

> angular directive to handle window.onbeforeunload event in angularJS forms


This directive uses angular form.$dirty feature to check if user made any unsaved changes to inputs on a page. If angularJS
 set $dirty flag and user tries to navigate away from page, the browser displays a warning and user can choose to stay or
 navigate away.

Because of usage of $dirty flag, this module must only be set on forms:

````
   <form name="test" onbeforeunload>

   		<label>
   			Message text
   			<input type="text" ng-model="message">
   		</label>

   	</form>
````

The module tries to do i18n of the message that is shown by the browser with angular-translate service if its present.
If its prsent it looks for a translate key "onbeforeunload".

Attention: Please be aware that browsers still behave very differently when handling the onbeforeunload event. Some browsers
 don't even accept any custom message, some add your message to their own messages and some only show your own message!