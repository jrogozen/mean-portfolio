'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

    function isAdmin() {
      var user = _this._data.user;
      
      if(_.contains(user.roles, 'admin')) {
        return true;
      }

      return false;
    }

		return {
      isAdmin: isAdmin,
      auth: _this._data
    };
	}
]);