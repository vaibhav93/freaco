(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Appuser
 * @header lbServices.Appuser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Appuser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Appuser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/appusers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Appuser#prototype$__findById__accessTokens
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/appusers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/appusers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#prototype$__updateById__accessTokens
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/appusers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Appuser.customers.findById() instead.
        "prototype$__findById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/appusers/:id/customers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Appuser.customers.destroyById() instead.
        "prototype$__destroyById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/appusers/:id/customers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Appuser.customers.updateById() instead.
        "prototype$__updateById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/appusers/:id/customers/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#prototype$__get__accessTokens
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Queries accessTokens of appuser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/appusers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#prototype$__create__accessTokens
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/appusers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#prototype$__delete__accessTokens
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/appusers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#prototype$__count__accessTokens
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Counts accessTokens of appuser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/appusers/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Appuser.customers() instead.
        "prototype$__get__customers": {
          isArray: true,
          url: urlBase + "/appusers/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Appuser.customers.create() instead.
        "prototype$__create__customers": {
          url: urlBase + "/appusers/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Appuser.customers.destroyAll() instead.
        "prototype$__delete__customers": {
          url: urlBase + "/appusers/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use Appuser.customers.count() instead.
        "prototype$__count__customers": {
          url: urlBase + "/appusers/:id/customers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#create
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/appusers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#createMany
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/appusers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#upsert
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/appusers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#exists
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/appusers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#findById
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/appusers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#find
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/appusers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#findOne
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/appusers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#updateAll
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/appusers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#deleteById
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/appusers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#count
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/appusers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#prototype$updateAttributes
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/appusers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#createChangeStream
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/appusers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#login
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/appusers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#logout
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/appusers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#confirm
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/appusers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#resetPassword
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/appusers/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#processQR
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `customer` – `{object=}` - 
         *
         *  - `enabled` – `{object=}` - 
         */
        "processQR": {
          url: urlBase + "/appusers/scanQR",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#redeem
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `uid` – `{string=}` - 
         */
        "redeem": {
          url: urlBase + "/appusers/redeem",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#notify
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "notify": {
          url: urlBase + "/appusers/notify",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#getpushOffers
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `offers` – `{Array=}` - 
         */
        "getpushOffers": {
          url: urlBase + "/appusers/pushOffers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#loginWithAccessTokenfb
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `accessToken` – `{string=}` - 
         *
         *  - `email` – `{string=}` - 
         *
         *  - `userId` – `{number=}` - 
         *
         *  - `user` – `{object=}` - 
         */
        "loginWithAccessTokenfb": {
          url: urlBase + "/appusers/loginWithFb",
          method: "POST"
        },

        // INTERNAL. Use Customer.appuser() instead.
        "::get::customer::appuser": {
          url: urlBase + "/customers/:id/appuser",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Appuser#getCurrent
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/appusers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Appuser#updateOrCreate
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Appuser#update
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Appuser#destroyById
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Appuser#removeById
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Appuser#getCachedCurrent
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Appuser#login} or
         * {@link lbServices.Appuser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Appuser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Appuser#isAuthenticated
         * @methodOf lbServices.Appuser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Appuser#getCurrentId
         * @methodOf lbServices.Appuser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Appuser#modelName
    * @propertyOf lbServices.Appuser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Appuser`.
    */
    R.modelName = "Appuser";

    /**
     * @ngdoc object
     * @name lbServices.Appuser.customers
     * @header lbServices.Appuser.customers
     * @object
     * @description
     *
     * The object `Appuser.customers` groups methods
     * manipulating `Customer` instances related to `Appuser`.
     *
     * Call {@link lbServices.Appuser#customers Appuser.customers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Appuser#customers
         * @methodOf lbServices.Appuser
         *
         * @description
         *
         * Queries customers of appuser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::appuser::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Appuser.customers#count
         * @methodOf lbServices.Appuser.customers
         *
         * @description
         *
         * Counts customers of appuser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.customers.count = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::count::appuser::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Appuser.customers#create
         * @methodOf lbServices.Appuser.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.create = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::create::appuser::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Appuser.customers#createMany
         * @methodOf lbServices.Appuser.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.createMany = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::createMany::appuser::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Appuser.customers#destroyAll
         * @methodOf lbServices.Appuser.customers
         *
         * @description
         *
         * Deletes all customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroyAll = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::delete::appuser::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Appuser.customers#destroyById
         * @methodOf lbServices.Appuser.customers
         *
         * @description
         *
         * Delete a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroyById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::destroyById::appuser::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Appuser.customers#findById
         * @methodOf lbServices.Appuser.customers
         *
         * @description
         *
         * Find a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.findById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::findById::appuser::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Appuser.customers#updateById
         * @methodOf lbServices.Appuser.customers
         *
         * @description
         *
         * Update a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.updateById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::updateById::appuser::customers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Customer
 * @header lbServices.Customer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Customer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Customer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/customers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Customer.appuser() instead.
        "prototype$__get__appuser": {
          url: urlBase + "/customers/:id/appuser",
          method: "GET"
        },

        // INTERNAL. Use Customer.business() instead.
        "prototype$__get__business": {
          url: urlBase + "/customers/:id/business",
          method: "GET"
        },

        // INTERNAL. Use Customer.activities.findById() instead.
        "prototype$__findById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/activities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.activities.destroyById() instead.
        "prototype$__destroyById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/activities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.activities.updateById() instead.
        "prototype$__updateById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/activities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.visits.findById() instead.
        "prototype$__findById__visits": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/visits/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.visits.destroyById() instead.
        "prototype$__destroyById__visits": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/visits/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.visits.updateById() instead.
        "prototype$__updateById__visits": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/visits/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.customerOffers.findById() instead.
        "prototype$__findById__customerOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/customerOffers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.customerOffers.destroyById() instead.
        "prototype$__destroyById__customerOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/customerOffers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.customerOffers.updateById() instead.
        "prototype$__updateById__customerOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/customerOffers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.activities() instead.
        "prototype$__get__activities": {
          isArray: true,
          url: urlBase + "/customers/:id/activities",
          method: "GET"
        },

        // INTERNAL. Use Customer.activities.create() instead.
        "prototype$__create__activities": {
          url: urlBase + "/customers/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Customer.activities.destroyAll() instead.
        "prototype$__delete__activities": {
          url: urlBase + "/customers/:id/activities",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.activities.count() instead.
        "prototype$__count__activities": {
          url: urlBase + "/customers/:id/activities/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.visits() instead.
        "prototype$__get__visits": {
          isArray: true,
          url: urlBase + "/customers/:id/visits",
          method: "GET"
        },

        // INTERNAL. Use Customer.visits.create() instead.
        "prototype$__create__visits": {
          url: urlBase + "/customers/:id/visits",
          method: "POST"
        },

        // INTERNAL. Use Customer.visits.destroyAll() instead.
        "prototype$__delete__visits": {
          url: urlBase + "/customers/:id/visits",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.visits.count() instead.
        "prototype$__count__visits": {
          url: urlBase + "/customers/:id/visits/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.customerOffers() instead.
        "prototype$__get__customerOffers": {
          isArray: true,
          url: urlBase + "/customers/:id/customerOffers",
          method: "GET"
        },

        // INTERNAL. Use Customer.customerOffers.create() instead.
        "prototype$__create__customerOffers": {
          url: urlBase + "/customers/:id/customerOffers",
          method: "POST"
        },

        // INTERNAL. Use Customer.customerOffers.destroyAll() instead.
        "prototype$__delete__customerOffers": {
          url: urlBase + "/customers/:id/customerOffers",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.customerOffers.count() instead.
        "prototype$__count__customerOffers": {
          url: urlBase + "/customers/:id/customerOffers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#create
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/customers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#createMany
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/customers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#upsert
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/customers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#exists
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/customers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#findById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/customers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#find
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/customers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#findOne
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/customers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#updateAll
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/customers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#deleteById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/customers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#count
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/customers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#prototype$updateAttributes
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/customers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#createChangeStream
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/customers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Appuser.customers.findById() instead.
        "::findById::appuser::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/appusers/:id/customers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Appuser.customers.destroyById() instead.
        "::destroyById::appuser::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/appusers/:id/customers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Appuser.customers.updateById() instead.
        "::updateById::appuser::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/appusers/:id/customers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Appuser.customers() instead.
        "::get::appuser::customers": {
          isArray: true,
          url: urlBase + "/appusers/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Appuser.customers.create() instead.
        "::create::appuser::customers": {
          url: urlBase + "/appusers/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Appuser.customers.createMany() instead.
        "::createMany::appuser::customers": {
          isArray: true,
          url: urlBase + "/appusers/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Appuser.customers.destroyAll() instead.
        "::delete::appuser::customers": {
          url: urlBase + "/appusers/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use Appuser.customers.count() instead.
        "::count::appuser::customers": {
          url: urlBase + "/appusers/:id/customers/count",
          method: "GET"
        },

        // INTERNAL. Use Business.customers.findById() instead.
        "::findById::business::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/customers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.customers.destroyById() instead.
        "::destroyById::business::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/customers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.customers.updateById() instead.
        "::updateById::business::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/customers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.customers() instead.
        "::get::business::customers": {
          isArray: true,
          url: urlBase + "/businesses/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Business.customers.create() instead.
        "::create::business::customers": {
          url: urlBase + "/businesses/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Business.customers.createMany() instead.
        "::createMany::business::customers": {
          isArray: true,
          url: urlBase + "/businesses/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Business.customers.destroyAll() instead.
        "::delete::business::customers": {
          url: urlBase + "/businesses/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use Business.customers.count() instead.
        "::count::business::customers": {
          url: urlBase + "/businesses/:id/customers/count",
          method: "GET"
        },

        // INTERNAL. Use Activity.customer() instead.
        "::get::activity::customer": {
          url: urlBase + "/activities/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use Visit.customer() instead.
        "::get::visit::customer": {
          url: urlBase + "/visits/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use CustomerOffer.customer() instead.
        "::get::customerOffer::customer": {
          url: urlBase + "/customerOffers/:id/customer",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Customer#updateOrCreate
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#update
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#destroyById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#removeById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Customer#modelName
    * @propertyOf lbServices.Customer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Customer`.
    */
    R.modelName = "Customer";


        /**
         * @ngdoc method
         * @name lbServices.Customer#appuser
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Fetches belongsTo relation appuser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Appuser` object.)
         * </em>
         */
        R.appuser = function() {
          var TargetResource = $injector.get("Appuser");
          var action = TargetResource["::get::customer::appuser"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer#business
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Fetches belongsTo relation business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.business = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::get::customer::business"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.activities
     * @header lbServices.Customer.activities
     * @object
     * @description
     *
     * The object `Customer.activities` groups methods
     * manipulating `Activity` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#activities Customer.activities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#activities
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries activities of customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::get::customer::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.activities#count
         * @methodOf lbServices.Customer.activities
         *
         * @description
         *
         * Counts activities of customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.activities.count = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::count::customer::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.activities#create
         * @methodOf lbServices.Customer.activities
         *
         * @description
         *
         * Creates a new instance in activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.create = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::create::customer::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.activities#createMany
         * @methodOf lbServices.Customer.activities
         *
         * @description
         *
         * Creates a new instance in activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.createMany = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::createMany::customer::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.activities#destroyAll
         * @methodOf lbServices.Customer.activities
         *
         * @description
         *
         * Deletes all activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activities.destroyAll = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::delete::customer::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.activities#destroyById
         * @methodOf lbServices.Customer.activities
         *
         * @description
         *
         * Delete a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activities.destroyById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::destroyById::customer::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.activities#findById
         * @methodOf lbServices.Customer.activities
         *
         * @description
         *
         * Find a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.findById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::findById::customer::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.activities#updateById
         * @methodOf lbServices.Customer.activities
         *
         * @description
         *
         * Update a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.updateById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::updateById::customer::activities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.visits
     * @header lbServices.Customer.visits
     * @object
     * @description
     *
     * The object `Customer.visits` groups methods
     * manipulating `Visit` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#visits Customer.visits()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#visits
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries visits of customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        R.visits = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::get::customer::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.visits#count
         * @methodOf lbServices.Customer.visits
         *
         * @description
         *
         * Counts visits of customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.visits.count = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::count::customer::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.visits#create
         * @methodOf lbServices.Customer.visits
         *
         * @description
         *
         * Creates a new instance in visits of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        R.visits.create = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::create::customer::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.visits#createMany
         * @methodOf lbServices.Customer.visits
         *
         * @description
         *
         * Creates a new instance in visits of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        R.visits.createMany = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::createMany::customer::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.visits#destroyAll
         * @methodOf lbServices.Customer.visits
         *
         * @description
         *
         * Deletes all visits of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.visits.destroyAll = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::delete::customer::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.visits#destroyById
         * @methodOf lbServices.Customer.visits
         *
         * @description
         *
         * Delete a related item by id for visits.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for visits
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.visits.destroyById = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::destroyById::customer::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.visits#findById
         * @methodOf lbServices.Customer.visits
         *
         * @description
         *
         * Find a related item by id for visits.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for visits
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        R.visits.findById = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::findById::customer::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.visits#updateById
         * @methodOf lbServices.Customer.visits
         *
         * @description
         *
         * Update a related item by id for visits.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for visits
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        R.visits.updateById = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::updateById::customer::visits"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.customerOffers
     * @header lbServices.Customer.customerOffers
     * @object
     * @description
     *
     * The object `Customer.customerOffers` groups methods
     * manipulating `CustomerOffer` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#customerOffers Customer.customerOffers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#customerOffers
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries customerOffers of customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        R.customerOffers = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::get::customer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customerOffers#count
         * @methodOf lbServices.Customer.customerOffers
         *
         * @description
         *
         * Counts customerOffers of customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.customerOffers.count = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::count::customer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customerOffers#create
         * @methodOf lbServices.Customer.customerOffers
         *
         * @description
         *
         * Creates a new instance in customerOffers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        R.customerOffers.create = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::create::customer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customerOffers#createMany
         * @methodOf lbServices.Customer.customerOffers
         *
         * @description
         *
         * Creates a new instance in customerOffers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        R.customerOffers.createMany = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::createMany::customer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customerOffers#destroyAll
         * @methodOf lbServices.Customer.customerOffers
         *
         * @description
         *
         * Deletes all customerOffers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customerOffers.destroyAll = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::delete::customer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customerOffers#destroyById
         * @methodOf lbServices.Customer.customerOffers
         *
         * @description
         *
         * Delete a related item by id for customerOffers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customerOffers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customerOffers.destroyById = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::destroyById::customer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customerOffers#findById
         * @methodOf lbServices.Customer.customerOffers
         *
         * @description
         *
         * Find a related item by id for customerOffers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customerOffers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        R.customerOffers.findById = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::findById::customer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.customerOffers#updateById
         * @methodOf lbServices.Customer.customerOffers
         *
         * @description
         *
         * Update a related item by id for customerOffers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customerOffers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        R.customerOffers.updateById = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::updateById::customer::customerOffers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Business
 * @header lbServices.Business
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Business` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Business",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/businesses/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Business.customers.findById() instead.
        "prototype$__findById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/customers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.customers.destroyById() instead.
        "prototype$__destroyById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/customers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.customers.updateById() instead.
        "prototype$__updateById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/customers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.activities.findById() instead.
        "prototype$__findById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/activities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.activities.destroyById() instead.
        "prototype$__destroyById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/activities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.activities.updateById() instead.
        "prototype$__updateById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/activities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.offers.findById() instead.
        "prototype$__findById__offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/offers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.offers.destroyById() instead.
        "prototype$__destroyById__offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/offers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.offers.updateById() instead.
        "prototype$__updateById__offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/offers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.codes.findById() instead.
        "prototype$__findById__codes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/codes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.codes.destroyById() instead.
        "prototype$__destroyById__codes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/codes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.codes.updateById() instead.
        "prototype$__updateById__codes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/codes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.vendor() instead.
        "prototype$__get__vendor": {
          url: urlBase + "/businesses/:id/vendor",
          method: "GET"
        },

        // INTERNAL. Use Business.visits.findById() instead.
        "prototype$__findById__visits": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/visits/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.visits.destroyById() instead.
        "prototype$__destroyById__visits": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/visits/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.visits.updateById() instead.
        "prototype$__updateById__visits": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/visits/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.businessSecurities() instead.
        "prototype$__get__businessSecurities": {
          url: urlBase + "/businesses/:id/businessSecurities",
          method: "GET"
        },

        // INTERNAL. Use Business.businessSecurities.create() instead.
        "prototype$__create__businessSecurities": {
          url: urlBase + "/businesses/:id/businessSecurities",
          method: "POST"
        },

        // INTERNAL. Use Business.businessSecurities.update() instead.
        "prototype$__update__businessSecurities": {
          url: urlBase + "/businesses/:id/businessSecurities",
          method: "PUT"
        },

        // INTERNAL. Use Business.businessSecurities.destroy() instead.
        "prototype$__destroy__businessSecurities": {
          url: urlBase + "/businesses/:id/businessSecurities",
          method: "DELETE"
        },

        // INTERNAL. Use Business.pushOffers.findById() instead.
        "prototype$__findById__pushOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/pushOffers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.pushOffers.destroyById() instead.
        "prototype$__destroyById__pushOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/pushOffers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.pushOffers.updateById() instead.
        "prototype$__updateById__pushOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/pushOffers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.customers() instead.
        "prototype$__get__customers": {
          isArray: true,
          url: urlBase + "/businesses/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Business.customers.create() instead.
        "prototype$__create__customers": {
          url: urlBase + "/businesses/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Business.customers.destroyAll() instead.
        "prototype$__delete__customers": {
          url: urlBase + "/businesses/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use Business.customers.count() instead.
        "prototype$__count__customers": {
          url: urlBase + "/businesses/:id/customers/count",
          method: "GET"
        },

        // INTERNAL. Use Business.activities() instead.
        "prototype$__get__activities": {
          isArray: true,
          url: urlBase + "/businesses/:id/activities",
          method: "GET"
        },

        // INTERNAL. Use Business.activities.create() instead.
        "prototype$__create__activities": {
          url: urlBase + "/businesses/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Business.activities.destroyAll() instead.
        "prototype$__delete__activities": {
          url: urlBase + "/businesses/:id/activities",
          method: "DELETE"
        },

        // INTERNAL. Use Business.activities.count() instead.
        "prototype$__count__activities": {
          url: urlBase + "/businesses/:id/activities/count",
          method: "GET"
        },

        // INTERNAL. Use Business.offers() instead.
        "prototype$__get__offers": {
          isArray: true,
          url: urlBase + "/businesses/:id/offers",
          method: "GET"
        },

        // INTERNAL. Use Business.offers.create() instead.
        "prototype$__create__offers": {
          url: urlBase + "/businesses/:id/offers",
          method: "POST"
        },

        // INTERNAL. Use Business.offers.destroyAll() instead.
        "prototype$__delete__offers": {
          url: urlBase + "/businesses/:id/offers",
          method: "DELETE"
        },

        // INTERNAL. Use Business.offers.count() instead.
        "prototype$__count__offers": {
          url: urlBase + "/businesses/:id/offers/count",
          method: "GET"
        },

        // INTERNAL. Use Business.codes() instead.
        "prototype$__get__codes": {
          isArray: true,
          url: urlBase + "/businesses/:id/codes",
          method: "GET"
        },

        // INTERNAL. Use Business.codes.create() instead.
        "prototype$__create__codes": {
          url: urlBase + "/businesses/:id/codes",
          method: "POST"
        },

        // INTERNAL. Use Business.codes.destroyAll() instead.
        "prototype$__delete__codes": {
          url: urlBase + "/businesses/:id/codes",
          method: "DELETE"
        },

        // INTERNAL. Use Business.codes.count() instead.
        "prototype$__count__codes": {
          url: urlBase + "/businesses/:id/codes/count",
          method: "GET"
        },

        // INTERNAL. Use Business.visits() instead.
        "prototype$__get__visits": {
          isArray: true,
          url: urlBase + "/businesses/:id/visits",
          method: "GET"
        },

        // INTERNAL. Use Business.visits.create() instead.
        "prototype$__create__visits": {
          url: urlBase + "/businesses/:id/visits",
          method: "POST"
        },

        // INTERNAL. Use Business.visits.destroyAll() instead.
        "prototype$__delete__visits": {
          url: urlBase + "/businesses/:id/visits",
          method: "DELETE"
        },

        // INTERNAL. Use Business.visits.count() instead.
        "prototype$__count__visits": {
          url: urlBase + "/businesses/:id/visits/count",
          method: "GET"
        },

        // INTERNAL. Use Business.pushOffers() instead.
        "prototype$__get__pushOffers": {
          isArray: true,
          url: urlBase + "/businesses/:id/pushOffers",
          method: "GET"
        },

        // INTERNAL. Use Business.pushOffers.create() instead.
        "prototype$__create__pushOffers": {
          url: urlBase + "/businesses/:id/pushOffers",
          method: "POST"
        },

        // INTERNAL. Use Business.pushOffers.destroyAll() instead.
        "prototype$__delete__pushOffers": {
          url: urlBase + "/businesses/:id/pushOffers",
          method: "DELETE"
        },

        // INTERNAL. Use Business.pushOffers.count() instead.
        "prototype$__count__pushOffers": {
          url: urlBase + "/businesses/:id/pushOffers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Business#create
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/businesses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Business#createMany
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/businesses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Business#upsert
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/businesses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Business#exists
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/businesses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Business#findById
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/businesses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Business#find
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/businesses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Business#findOne
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/businesses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Business#updateAll
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/businesses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Business#deleteById
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/businesses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Business#count
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/businesses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Business#prototype$updateAttributes
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/businesses/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Business#createChangeStream
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/businesses/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Business#validateMPIN
         * @methodOf lbServices.Business
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `success` – `{object=}` - 
         */
        "validateMPIN": {
          url: urlBase + "/businesses/validate",
          method: "POST"
        },

        // INTERNAL. Use Customer.business() instead.
        "::get::customer::business": {
          url: urlBase + "/customers/:id/business",
          method: "GET"
        },

        // INTERNAL. Use Activity.business() instead.
        "::get::activity::business": {
          url: urlBase + "/activities/:id/business",
          method: "GET"
        },

        // INTERNAL. Use Offer.business() instead.
        "::get::offer::business": {
          url: urlBase + "/offers/:id/business",
          method: "GET"
        },

        // INTERNAL. Use Codes.business() instead.
        "::get::codes::business": {
          url: urlBase + "/codes/:id/business",
          method: "GET"
        },

        // INTERNAL. Use Vendor.businesses() instead.
        "::get::vendor::businesses": {
          url: urlBase + "/vendors/:id/businesses",
          method: "GET"
        },

        // INTERNAL. Use Vendor.businesses.create() instead.
        "::create::vendor::businesses": {
          url: urlBase + "/vendors/:id/businesses",
          method: "POST"
        },

        // INTERNAL. Use Vendor.businesses.createMany() instead.
        "::createMany::vendor::businesses": {
          isArray: true,
          url: urlBase + "/vendors/:id/businesses",
          method: "POST"
        },

        // INTERNAL. Use Vendor.businesses.update() instead.
        "::update::vendor::businesses": {
          url: urlBase + "/vendors/:id/businesses",
          method: "PUT"
        },

        // INTERNAL. Use Vendor.businesses.destroy() instead.
        "::destroy::vendor::businesses": {
          url: urlBase + "/vendors/:id/businesses",
          method: "DELETE"
        },

        // INTERNAL. Use Visit.business() instead.
        "::get::visit::business": {
          url: urlBase + "/visits/:id/business",
          method: "GET"
        },

        // INTERNAL. Use BusinessSecurity.business() instead.
        "::get::BusinessSecurity::business": {
          url: urlBase + "/BusinessSecurities/:id/business",
          method: "GET"
        },

        // INTERNAL. Use PushOffer.business() instead.
        "::get::pushOffer::business": {
          url: urlBase + "/pushOffers/:id/business",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Business#updateOrCreate
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Business#update
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Business#destroyById
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Business#removeById
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Business#modelName
    * @propertyOf lbServices.Business
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Business`.
    */
    R.modelName = "Business";

    /**
     * @ngdoc object
     * @name lbServices.Business.customers
     * @header lbServices.Business.customers
     * @object
     * @description
     *
     * The object `Business.customers` groups methods
     * manipulating `Customer` instances related to `Business`.
     *
     * Call {@link lbServices.Business#customers Business.customers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Business#customers
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Queries customers of business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::business::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.customers#count
         * @methodOf lbServices.Business.customers
         *
         * @description
         *
         * Counts customers of business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.customers.count = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::count::business::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.customers#create
         * @methodOf lbServices.Business.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.create = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::create::business::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.customers#createMany
         * @methodOf lbServices.Business.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.createMany = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::createMany::business::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.customers#destroyAll
         * @methodOf lbServices.Business.customers
         *
         * @description
         *
         * Deletes all customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroyAll = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::delete::business::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.customers#destroyById
         * @methodOf lbServices.Business.customers
         *
         * @description
         *
         * Delete a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroyById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::destroyById::business::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.customers#findById
         * @methodOf lbServices.Business.customers
         *
         * @description
         *
         * Find a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.findById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::findById::business::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.customers#updateById
         * @methodOf lbServices.Business.customers
         *
         * @description
         *
         * Update a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.updateById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::updateById::business::customers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Business.activities
     * @header lbServices.Business.activities
     * @object
     * @description
     *
     * The object `Business.activities` groups methods
     * manipulating `Activity` instances related to `Business`.
     *
     * Call {@link lbServices.Business#activities Business.activities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Business#activities
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Queries activities of business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::get::business::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.activities#count
         * @methodOf lbServices.Business.activities
         *
         * @description
         *
         * Counts activities of business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.activities.count = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::count::business::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.activities#create
         * @methodOf lbServices.Business.activities
         *
         * @description
         *
         * Creates a new instance in activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.create = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::create::business::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.activities#createMany
         * @methodOf lbServices.Business.activities
         *
         * @description
         *
         * Creates a new instance in activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.createMany = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::createMany::business::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.activities#destroyAll
         * @methodOf lbServices.Business.activities
         *
         * @description
         *
         * Deletes all activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activities.destroyAll = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::delete::business::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.activities#destroyById
         * @methodOf lbServices.Business.activities
         *
         * @description
         *
         * Delete a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activities.destroyById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::destroyById::business::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.activities#findById
         * @methodOf lbServices.Business.activities
         *
         * @description
         *
         * Find a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.findById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::findById::business::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.activities#updateById
         * @methodOf lbServices.Business.activities
         *
         * @description
         *
         * Update a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.updateById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::updateById::business::activities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Business.offers
     * @header lbServices.Business.offers
     * @object
     * @description
     *
     * The object `Business.offers` groups methods
     * manipulating `Offer` instances related to `Business`.
     *
     * Call {@link lbServices.Business#offers Business.offers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Business#offers
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Queries offers of business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R.offers = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::get::business::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.offers#count
         * @methodOf lbServices.Business.offers
         *
         * @description
         *
         * Counts offers of business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.offers.count = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::count::business::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.offers#create
         * @methodOf lbServices.Business.offers
         *
         * @description
         *
         * Creates a new instance in offers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R.offers.create = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::create::business::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.offers#createMany
         * @methodOf lbServices.Business.offers
         *
         * @description
         *
         * Creates a new instance in offers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R.offers.createMany = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::createMany::business::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.offers#destroyAll
         * @methodOf lbServices.Business.offers
         *
         * @description
         *
         * Deletes all offers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.offers.destroyAll = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::delete::business::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.offers#destroyById
         * @methodOf lbServices.Business.offers
         *
         * @description
         *
         * Delete a related item by id for offers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.offers.destroyById = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::destroyById::business::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.offers#findById
         * @methodOf lbServices.Business.offers
         *
         * @description
         *
         * Find a related item by id for offers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R.offers.findById = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::findById::business::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.offers#updateById
         * @methodOf lbServices.Business.offers
         *
         * @description
         *
         * Update a related item by id for offers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R.offers.updateById = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::updateById::business::offers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Business.codes
     * @header lbServices.Business.codes
     * @object
     * @description
     *
     * The object `Business.codes` groups methods
     * manipulating `Codes` instances related to `Business`.
     *
     * Call {@link lbServices.Business#codes Business.codes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Business#codes
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Queries codes of business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        R.codes = function() {
          var TargetResource = $injector.get("Codes");
          var action = TargetResource["::get::business::codes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.codes#count
         * @methodOf lbServices.Business.codes
         *
         * @description
         *
         * Counts codes of business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.codes.count = function() {
          var TargetResource = $injector.get("Codes");
          var action = TargetResource["::count::business::codes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.codes#create
         * @methodOf lbServices.Business.codes
         *
         * @description
         *
         * Creates a new instance in codes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        R.codes.create = function() {
          var TargetResource = $injector.get("Codes");
          var action = TargetResource["::create::business::codes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.codes#createMany
         * @methodOf lbServices.Business.codes
         *
         * @description
         *
         * Creates a new instance in codes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        R.codes.createMany = function() {
          var TargetResource = $injector.get("Codes");
          var action = TargetResource["::createMany::business::codes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.codes#destroyAll
         * @methodOf lbServices.Business.codes
         *
         * @description
         *
         * Deletes all codes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.codes.destroyAll = function() {
          var TargetResource = $injector.get("Codes");
          var action = TargetResource["::delete::business::codes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.codes#destroyById
         * @methodOf lbServices.Business.codes
         *
         * @description
         *
         * Delete a related item by id for codes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for codes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.codes.destroyById = function() {
          var TargetResource = $injector.get("Codes");
          var action = TargetResource["::destroyById::business::codes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.codes#findById
         * @methodOf lbServices.Business.codes
         *
         * @description
         *
         * Find a related item by id for codes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for codes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        R.codes.findById = function() {
          var TargetResource = $injector.get("Codes");
          var action = TargetResource["::findById::business::codes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.codes#updateById
         * @methodOf lbServices.Business.codes
         *
         * @description
         *
         * Update a related item by id for codes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for codes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        R.codes.updateById = function() {
          var TargetResource = $injector.get("Codes");
          var action = TargetResource["::updateById::business::codes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business#vendor
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Fetches belongsTo relation vendor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        R.vendor = function() {
          var TargetResource = $injector.get("Vendor");
          var action = TargetResource["::get::business::vendor"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Business.visits
     * @header lbServices.Business.visits
     * @object
     * @description
     *
     * The object `Business.visits` groups methods
     * manipulating `Visit` instances related to `Business`.
     *
     * Call {@link lbServices.Business#visits Business.visits()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Business#visits
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Queries visits of business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        R.visits = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::get::business::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.visits#count
         * @methodOf lbServices.Business.visits
         *
         * @description
         *
         * Counts visits of business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.visits.count = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::count::business::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.visits#create
         * @methodOf lbServices.Business.visits
         *
         * @description
         *
         * Creates a new instance in visits of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        R.visits.create = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::create::business::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.visits#createMany
         * @methodOf lbServices.Business.visits
         *
         * @description
         *
         * Creates a new instance in visits of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        R.visits.createMany = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::createMany::business::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.visits#destroyAll
         * @methodOf lbServices.Business.visits
         *
         * @description
         *
         * Deletes all visits of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.visits.destroyAll = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::delete::business::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.visits#destroyById
         * @methodOf lbServices.Business.visits
         *
         * @description
         *
         * Delete a related item by id for visits.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for visits
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.visits.destroyById = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::destroyById::business::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.visits#findById
         * @methodOf lbServices.Business.visits
         *
         * @description
         *
         * Find a related item by id for visits.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for visits
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        R.visits.findById = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::findById::business::visits"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.visits#updateById
         * @methodOf lbServices.Business.visits
         *
         * @description
         *
         * Update a related item by id for visits.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for visits
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        R.visits.updateById = function() {
          var TargetResource = $injector.get("Visit");
          var action = TargetResource["::updateById::business::visits"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Business.businessSecurities
     * @header lbServices.Business.businessSecurities
     * @object
     * @description
     *
     * The object `Business.businessSecurities` groups methods
     * manipulating `BusinessSecurity` instances related to `Business`.
     *
     * Call {@link lbServices.Business#businessSecurities Business.businessSecurities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Business#businessSecurities
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Fetches hasOne relation businessSecurities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        R.businessSecurities = function() {
          var TargetResource = $injector.get("BusinessSecurity");
          var action = TargetResource["::get::business::businessSecurities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.businessSecurities#create
         * @methodOf lbServices.Business.businessSecurities
         *
         * @description
         *
         * Creates a new instance in businessSecurities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        R.businessSecurities.create = function() {
          var TargetResource = $injector.get("BusinessSecurity");
          var action = TargetResource["::create::business::businessSecurities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.businessSecurities#createMany
         * @methodOf lbServices.Business.businessSecurities
         *
         * @description
         *
         * Creates a new instance in businessSecurities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        R.businessSecurities.createMany = function() {
          var TargetResource = $injector.get("BusinessSecurity");
          var action = TargetResource["::createMany::business::businessSecurities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.businessSecurities#destroy
         * @methodOf lbServices.Business.businessSecurities
         *
         * @description
         *
         * Deletes businessSecurities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.businessSecurities.destroy = function() {
          var TargetResource = $injector.get("BusinessSecurity");
          var action = TargetResource["::destroy::business::businessSecurities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.businessSecurities#update
         * @methodOf lbServices.Business.businessSecurities
         *
         * @description
         *
         * Update businessSecurities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        R.businessSecurities.update = function() {
          var TargetResource = $injector.get("BusinessSecurity");
          var action = TargetResource["::update::business::businessSecurities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Business.pushOffers
     * @header lbServices.Business.pushOffers
     * @object
     * @description
     *
     * The object `Business.pushOffers` groups methods
     * manipulating `PushOffer` instances related to `Business`.
     *
     * Call {@link lbServices.Business#pushOffers Business.pushOffers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Business#pushOffers
         * @methodOf lbServices.Business
         *
         * @description
         *
         * Queries pushOffers of business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        R.pushOffers = function() {
          var TargetResource = $injector.get("PushOffer");
          var action = TargetResource["::get::business::pushOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.pushOffers#count
         * @methodOf lbServices.Business.pushOffers
         *
         * @description
         *
         * Counts pushOffers of business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.pushOffers.count = function() {
          var TargetResource = $injector.get("PushOffer");
          var action = TargetResource["::count::business::pushOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.pushOffers#create
         * @methodOf lbServices.Business.pushOffers
         *
         * @description
         *
         * Creates a new instance in pushOffers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        R.pushOffers.create = function() {
          var TargetResource = $injector.get("PushOffer");
          var action = TargetResource["::create::business::pushOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.pushOffers#createMany
         * @methodOf lbServices.Business.pushOffers
         *
         * @description
         *
         * Creates a new instance in pushOffers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        R.pushOffers.createMany = function() {
          var TargetResource = $injector.get("PushOffer");
          var action = TargetResource["::createMany::business::pushOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.pushOffers#destroyAll
         * @methodOf lbServices.Business.pushOffers
         *
         * @description
         *
         * Deletes all pushOffers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.pushOffers.destroyAll = function() {
          var TargetResource = $injector.get("PushOffer");
          var action = TargetResource["::delete::business::pushOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.pushOffers#destroyById
         * @methodOf lbServices.Business.pushOffers
         *
         * @description
         *
         * Delete a related item by id for pushOffers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for pushOffers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.pushOffers.destroyById = function() {
          var TargetResource = $injector.get("PushOffer");
          var action = TargetResource["::destroyById::business::pushOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.pushOffers#findById
         * @methodOf lbServices.Business.pushOffers
         *
         * @description
         *
         * Find a related item by id for pushOffers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for pushOffers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        R.pushOffers.findById = function() {
          var TargetResource = $injector.get("PushOffer");
          var action = TargetResource["::findById::business::pushOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Business.pushOffers#updateById
         * @methodOf lbServices.Business.pushOffers
         *
         * @description
         *
         * Update a related item by id for pushOffers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for pushOffers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        R.pushOffers.updateById = function() {
          var TargetResource = $injector.get("PushOffer");
          var action = TargetResource["::updateById::business::pushOffers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Activity
 * @header lbServices.Activity
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Activity` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Activity",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/activities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Activity.business() instead.
        "prototype$__get__business": {
          url: urlBase + "/activities/:id/business",
          method: "GET"
        },

        // INTERNAL. Use Activity.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/activities/:id/customer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#create
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/activities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#createMany
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/activities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#upsert
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/activities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#exists
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/activities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#findById
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/activities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#find
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/activities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#findOne
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/activities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#updateAll
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/activities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#deleteById
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/activities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#count
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/activities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#prototype$updateAttributes
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/activities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#createChangeStream
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/activities/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Customer.activities.findById() instead.
        "::findById::customer::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/activities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.activities.destroyById() instead.
        "::destroyById::customer::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/activities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.activities.updateById() instead.
        "::updateById::customer::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/activities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.activities() instead.
        "::get::customer::activities": {
          isArray: true,
          url: urlBase + "/customers/:id/activities",
          method: "GET"
        },

        // INTERNAL. Use Customer.activities.create() instead.
        "::create::customer::activities": {
          url: urlBase + "/customers/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Customer.activities.createMany() instead.
        "::createMany::customer::activities": {
          isArray: true,
          url: urlBase + "/customers/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Customer.activities.destroyAll() instead.
        "::delete::customer::activities": {
          url: urlBase + "/customers/:id/activities",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.activities.count() instead.
        "::count::customer::activities": {
          url: urlBase + "/customers/:id/activities/count",
          method: "GET"
        },

        // INTERNAL. Use Business.activities.findById() instead.
        "::findById::business::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/activities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.activities.destroyById() instead.
        "::destroyById::business::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/activities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.activities.updateById() instead.
        "::updateById::business::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/activities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.activities() instead.
        "::get::business::activities": {
          isArray: true,
          url: urlBase + "/businesses/:id/activities",
          method: "GET"
        },

        // INTERNAL. Use Business.activities.create() instead.
        "::create::business::activities": {
          url: urlBase + "/businesses/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Business.activities.createMany() instead.
        "::createMany::business::activities": {
          isArray: true,
          url: urlBase + "/businesses/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Business.activities.destroyAll() instead.
        "::delete::business::activities": {
          url: urlBase + "/businesses/:id/activities",
          method: "DELETE"
        },

        // INTERNAL. Use Business.activities.count() instead.
        "::count::business::activities": {
          url: urlBase + "/businesses/:id/activities/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Activity#updateOrCreate
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Activity#update
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Activity#destroyById
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Activity#removeById
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Activity#modelName
    * @propertyOf lbServices.Activity
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Activity`.
    */
    R.modelName = "Activity";


        /**
         * @ngdoc method
         * @name lbServices.Activity#business
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Fetches belongsTo relation business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.business = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::get::activity::business"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity#customer
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::activity::customer"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Offer
 * @header lbServices.Offer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Offer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Offer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/offers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Offer.business() instead.
        "prototype$__get__business": {
          url: urlBase + "/offers/:id/business",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Offer#create
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/offers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Offer#createMany
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/offers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Offer#upsert
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/offers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Offer#exists
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/offers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Offer#findById
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/offers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Offer#find
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/offers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Offer#findOne
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/offers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Offer#updateAll
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/offers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Offer#deleteById
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/offers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Offer#count
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/offers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Offer#prototype$updateAttributes
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/offers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Offer#createChangeStream
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/offers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Business.offers.findById() instead.
        "::findById::business::offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/offers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.offers.destroyById() instead.
        "::destroyById::business::offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/offers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.offers.updateById() instead.
        "::updateById::business::offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/offers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.offers() instead.
        "::get::business::offers": {
          isArray: true,
          url: urlBase + "/businesses/:id/offers",
          method: "GET"
        },

        // INTERNAL. Use Business.offers.create() instead.
        "::create::business::offers": {
          url: urlBase + "/businesses/:id/offers",
          method: "POST"
        },

        // INTERNAL. Use Business.offers.createMany() instead.
        "::createMany::business::offers": {
          isArray: true,
          url: urlBase + "/businesses/:id/offers",
          method: "POST"
        },

        // INTERNAL. Use Business.offers.destroyAll() instead.
        "::delete::business::offers": {
          url: urlBase + "/businesses/:id/offers",
          method: "DELETE"
        },

        // INTERNAL. Use Business.offers.count() instead.
        "::count::business::offers": {
          url: urlBase + "/businesses/:id/offers/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Offer#updateOrCreate
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Offer#update
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Offer#destroyById
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Offer#removeById
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Offer#modelName
    * @propertyOf lbServices.Offer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Offer`.
    */
    R.modelName = "Offer";


        /**
         * @ngdoc method
         * @name lbServices.Offer#business
         * @methodOf lbServices.Offer
         *
         * @description
         *
         * Fetches belongsTo relation business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.business = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::get::offer::business"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Codes
 * @header lbServices.Codes
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Codes` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Codes",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/codes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Codes.business() instead.
        "prototype$__get__business": {
          url: urlBase + "/codes/:id/business",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Codes#create
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/codes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Codes#createMany
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/codes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Codes#upsert
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/codes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Codes#exists
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/codes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Codes#findById
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/codes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Codes#find
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/codes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Codes#findOne
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/codes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Codes#updateAll
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/codes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Codes#deleteById
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/codes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Codes#count
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/codes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Codes#prototype$updateAttributes
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/codes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Codes#createChangeStream
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/codes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Business.codes.findById() instead.
        "::findById::business::codes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/codes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.codes.destroyById() instead.
        "::destroyById::business::codes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/codes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.codes.updateById() instead.
        "::updateById::business::codes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/codes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.codes() instead.
        "::get::business::codes": {
          isArray: true,
          url: urlBase + "/businesses/:id/codes",
          method: "GET"
        },

        // INTERNAL. Use Business.codes.create() instead.
        "::create::business::codes": {
          url: urlBase + "/businesses/:id/codes",
          method: "POST"
        },

        // INTERNAL. Use Business.codes.createMany() instead.
        "::createMany::business::codes": {
          isArray: true,
          url: urlBase + "/businesses/:id/codes",
          method: "POST"
        },

        // INTERNAL. Use Business.codes.destroyAll() instead.
        "::delete::business::codes": {
          url: urlBase + "/businesses/:id/codes",
          method: "DELETE"
        },

        // INTERNAL. Use Business.codes.count() instead.
        "::count::business::codes": {
          url: urlBase + "/businesses/:id/codes/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Codes#updateOrCreate
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Codes#update
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Codes#destroyById
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Codes#removeById
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Codes` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Codes#modelName
    * @propertyOf lbServices.Codes
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Codes`.
    */
    R.modelName = "Codes";


        /**
         * @ngdoc method
         * @name lbServices.Codes#business
         * @methodOf lbServices.Codes
         *
         * @description
         *
         * Fetches belongsTo relation business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.business = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::get::codes::business"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Vendor
 * @header lbServices.Vendor
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Vendor` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Vendor",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/vendors/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Vendor#prototype$__findById__accessTokens
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/vendors/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/vendors/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#prototype$__updateById__accessTokens
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/vendors/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Vendor.businesses() instead.
        "prototype$__get__businesses": {
          url: urlBase + "/vendors/:id/businesses",
          method: "GET"
        },

        // INTERNAL. Use Vendor.businesses.create() instead.
        "prototype$__create__businesses": {
          url: urlBase + "/vendors/:id/businesses",
          method: "POST"
        },

        // INTERNAL. Use Vendor.businesses.update() instead.
        "prototype$__update__businesses": {
          url: urlBase + "/vendors/:id/businesses",
          method: "PUT"
        },

        // INTERNAL. Use Vendor.businesses.destroy() instead.
        "prototype$__destroy__businesses": {
          url: urlBase + "/vendors/:id/businesses",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#prototype$__get__accessTokens
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Queries accessTokens of vendor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/vendors/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#prototype$__create__accessTokens
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/vendors/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#prototype$__delete__accessTokens
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/vendors/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#prototype$__count__accessTokens
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Counts accessTokens of vendor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/vendors/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#create
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/vendors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#createMany
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/vendors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#upsert
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/vendors",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#exists
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/vendors/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#findById
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/vendors/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#find
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/vendors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#findOne
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/vendors/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#updateAll
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/vendors/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#deleteById
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/vendors/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#count
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/vendors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#prototype$updateAttributes
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/vendors/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#createChangeStream
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/vendors/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#login
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/vendors/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#logout
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/vendors/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#confirm
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/vendors/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#resetPassword
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/vendors/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#pushOffer
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` - 
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `response` – `{object=}` - 
         *
         *  - `enabled` – `{object=}` - 
         */
        "pushOffer": {
          url: urlBase + "/vendors/pushOffer",
          method: "POST"
        },

        // INTERNAL. Use Business.vendor() instead.
        "::get::business::vendor": {
          url: urlBase + "/businesses/:id/vendor",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vendor#getCurrent
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/vendors" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Vendor#updateOrCreate
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Vendor#update
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Vendor#destroyById
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Vendor#removeById
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vendor` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Vendor#getCachedCurrent
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Vendor#login} or
         * {@link lbServices.Vendor#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Vendor instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Vendor#isAuthenticated
         * @methodOf lbServices.Vendor
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Vendor#getCurrentId
         * @methodOf lbServices.Vendor
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Vendor#modelName
    * @propertyOf lbServices.Vendor
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Vendor`.
    */
    R.modelName = "Vendor";

    /**
     * @ngdoc object
     * @name lbServices.Vendor.businesses
     * @header lbServices.Vendor.businesses
     * @object
     * @description
     *
     * The object `Vendor.businesses` groups methods
     * manipulating `Business` instances related to `Vendor`.
     *
     * Call {@link lbServices.Vendor#businesses Vendor.businesses()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Vendor#businesses
         * @methodOf lbServices.Vendor
         *
         * @description
         *
         * Fetches hasOne relation businesses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.businesses = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::get::vendor::businesses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vendor.businesses#create
         * @methodOf lbServices.Vendor.businesses
         *
         * @description
         *
         * Creates a new instance in businesses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.businesses.create = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::create::vendor::businesses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vendor.businesses#createMany
         * @methodOf lbServices.Vendor.businesses
         *
         * @description
         *
         * Creates a new instance in businesses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.businesses.createMany = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::createMany::vendor::businesses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vendor.businesses#destroy
         * @methodOf lbServices.Vendor.businesses
         *
         * @description
         *
         * Deletes businesses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.businesses.destroy = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::destroy::vendor::businesses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vendor.businesses#update
         * @methodOf lbServices.Vendor.businesses
         *
         * @description
         *
         * Update businesses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.businesses.update = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::update::vendor::businesses"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Visit
 * @header lbServices.Visit
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Visit` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Visit",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/visits/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Visit.business() instead.
        "prototype$__get__business": {
          url: urlBase + "/visits/:id/business",
          method: "GET"
        },

        // INTERNAL. Use Visit.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/visits/:id/customer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Visit#create
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/visits",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Visit#createMany
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/visits",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Visit#upsert
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/visits",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Visit#exists
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/visits/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Visit#findById
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/visits/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Visit#find
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/visits",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Visit#findOne
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/visits/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Visit#updateAll
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/visits/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Visit#deleteById
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/visits/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Visit#count
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/visits/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Visit#prototype$updateAttributes
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/visits/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Visit#createChangeStream
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/visits/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Customer.visits.findById() instead.
        "::findById::customer::visits": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/visits/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.visits.destroyById() instead.
        "::destroyById::customer::visits": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/visits/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.visits.updateById() instead.
        "::updateById::customer::visits": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/visits/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.visits() instead.
        "::get::customer::visits": {
          isArray: true,
          url: urlBase + "/customers/:id/visits",
          method: "GET"
        },

        // INTERNAL. Use Customer.visits.create() instead.
        "::create::customer::visits": {
          url: urlBase + "/customers/:id/visits",
          method: "POST"
        },

        // INTERNAL. Use Customer.visits.createMany() instead.
        "::createMany::customer::visits": {
          isArray: true,
          url: urlBase + "/customers/:id/visits",
          method: "POST"
        },

        // INTERNAL. Use Customer.visits.destroyAll() instead.
        "::delete::customer::visits": {
          url: urlBase + "/customers/:id/visits",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.visits.count() instead.
        "::count::customer::visits": {
          url: urlBase + "/customers/:id/visits/count",
          method: "GET"
        },

        // INTERNAL. Use Business.visits.findById() instead.
        "::findById::business::visits": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/visits/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.visits.destroyById() instead.
        "::destroyById::business::visits": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/visits/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.visits.updateById() instead.
        "::updateById::business::visits": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/visits/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.visits() instead.
        "::get::business::visits": {
          isArray: true,
          url: urlBase + "/businesses/:id/visits",
          method: "GET"
        },

        // INTERNAL. Use Business.visits.create() instead.
        "::create::business::visits": {
          url: urlBase + "/businesses/:id/visits",
          method: "POST"
        },

        // INTERNAL. Use Business.visits.createMany() instead.
        "::createMany::business::visits": {
          isArray: true,
          url: urlBase + "/businesses/:id/visits",
          method: "POST"
        },

        // INTERNAL. Use Business.visits.destroyAll() instead.
        "::delete::business::visits": {
          url: urlBase + "/businesses/:id/visits",
          method: "DELETE"
        },

        // INTERNAL. Use Business.visits.count() instead.
        "::count::business::visits": {
          url: urlBase + "/businesses/:id/visits/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Visit#updateOrCreate
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Visit#update
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Visit#destroyById
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Visit#removeById
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Visit` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Visit#modelName
    * @propertyOf lbServices.Visit
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Visit`.
    */
    R.modelName = "Visit";


        /**
         * @ngdoc method
         * @name lbServices.Visit#business
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Fetches belongsTo relation business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.business = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::get::visit::business"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Visit#customer
         * @methodOf lbServices.Visit
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::visit::customer"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.BusinessSecurity
 * @header lbServices.BusinessSecurity
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BusinessSecurity` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "BusinessSecurity",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/BusinessSecurities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use BusinessSecurity.business() instead.
        "prototype$__get__business": {
          url: urlBase + "/BusinessSecurities/:id/business",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#create
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/BusinessSecurities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#createMany
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/BusinessSecurities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#upsert
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/BusinessSecurities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#exists
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/BusinessSecurities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#findById
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/BusinessSecurities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#find
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/BusinessSecurities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#findOne
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/BusinessSecurities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#updateAll
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/BusinessSecurities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#deleteById
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/BusinessSecurities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#count
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/BusinessSecurities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#prototype$updateAttributes
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/BusinessSecurities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#createChangeStream
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/BusinessSecurities/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Business.businessSecurities() instead.
        "::get::business::businessSecurities": {
          url: urlBase + "/businesses/:id/businessSecurities",
          method: "GET"
        },

        // INTERNAL. Use Business.businessSecurities.create() instead.
        "::create::business::businessSecurities": {
          url: urlBase + "/businesses/:id/businessSecurities",
          method: "POST"
        },

        // INTERNAL. Use Business.businessSecurities.createMany() instead.
        "::createMany::business::businessSecurities": {
          isArray: true,
          url: urlBase + "/businesses/:id/businessSecurities",
          method: "POST"
        },

        // INTERNAL. Use Business.businessSecurities.update() instead.
        "::update::business::businessSecurities": {
          url: urlBase + "/businesses/:id/businessSecurities",
          method: "PUT"
        },

        // INTERNAL. Use Business.businessSecurities.destroy() instead.
        "::destroy::business::businessSecurities": {
          url: urlBase + "/businesses/:id/businessSecurities",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#updateOrCreate
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#update
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#destroyById
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#removeById
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessSecurity` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.BusinessSecurity#modelName
    * @propertyOf lbServices.BusinessSecurity
    * @description
    * The name of the model represented by this $resource,
    * i.e. `BusinessSecurity`.
    */
    R.modelName = "BusinessSecurity";


        /**
         * @ngdoc method
         * @name lbServices.BusinessSecurity#business
         * @methodOf lbServices.BusinessSecurity
         *
         * @description
         *
         * Fetches belongsTo relation business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.business = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::get::BusinessSecurity::business"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Template
 * @header lbServices.Template
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Template` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Template",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Templates/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Template#create
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Template` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Templates",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Template#createMany
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Template` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Templates",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Template#upsert
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Template` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Templates",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Template#exists
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Templates/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Template#findById
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Template` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Templates/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Template#find
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Template` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Templates",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Template#findOne
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Template` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Templates/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Template#updateAll
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Templates/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Template#deleteById
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Template` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Templates/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Template#count
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Templates/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Template#prototype$updateAttributes
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Template` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Templates/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Template#createChangeStream
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Templates/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Template#updateOrCreate
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Template` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Template#update
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Template#destroyById
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Template` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Template#removeById
         * @methodOf lbServices.Template
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Template` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Template#modelName
    * @propertyOf lbServices.Template
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Template`.
    */
    R.modelName = "Template";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.PushOffer
 * @header lbServices.PushOffer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PushOffer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "PushOffer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/pushOffers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use PushOffer.business() instead.
        "prototype$__get__business": {
          url: urlBase + "/pushOffers/:id/business",
          method: "GET"
        },

        // INTERNAL. Use PushOffer.customerOffers.findById() instead.
        "prototype$__findById__customerOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pushOffers/:id/customerOffers/:fk",
          method: "GET"
        },

        // INTERNAL. Use PushOffer.customerOffers.destroyById() instead.
        "prototype$__destroyById__customerOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pushOffers/:id/customerOffers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use PushOffer.customerOffers.updateById() instead.
        "prototype$__updateById__customerOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pushOffers/:id/customerOffers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use PushOffer.customerOffers() instead.
        "prototype$__get__customerOffers": {
          isArray: true,
          url: urlBase + "/pushOffers/:id/customerOffers",
          method: "GET"
        },

        // INTERNAL. Use PushOffer.customerOffers.create() instead.
        "prototype$__create__customerOffers": {
          url: urlBase + "/pushOffers/:id/customerOffers",
          method: "POST"
        },

        // INTERNAL. Use PushOffer.customerOffers.destroyAll() instead.
        "prototype$__delete__customerOffers": {
          url: urlBase + "/pushOffers/:id/customerOffers",
          method: "DELETE"
        },

        // INTERNAL. Use PushOffer.customerOffers.count() instead.
        "prototype$__count__customerOffers": {
          url: urlBase + "/pushOffers/:id/customerOffers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#create
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/pushOffers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#createMany
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/pushOffers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#upsert
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/pushOffers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#exists
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/pushOffers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#findById
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/pushOffers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#find
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/pushOffers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#findOne
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/pushOffers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#updateAll
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/pushOffers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#deleteById
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/pushOffers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#count
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/pushOffers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#prototype$updateAttributes
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/pushOffers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#createChangeStream
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/pushOffers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Business.pushOffers.findById() instead.
        "::findById::business::pushOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/pushOffers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.pushOffers.destroyById() instead.
        "::destroyById::business::pushOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/pushOffers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.pushOffers.updateById() instead.
        "::updateById::business::pushOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/businesses/:id/pushOffers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.pushOffers() instead.
        "::get::business::pushOffers": {
          isArray: true,
          url: urlBase + "/businesses/:id/pushOffers",
          method: "GET"
        },

        // INTERNAL. Use Business.pushOffers.create() instead.
        "::create::business::pushOffers": {
          url: urlBase + "/businesses/:id/pushOffers",
          method: "POST"
        },

        // INTERNAL. Use Business.pushOffers.createMany() instead.
        "::createMany::business::pushOffers": {
          isArray: true,
          url: urlBase + "/businesses/:id/pushOffers",
          method: "POST"
        },

        // INTERNAL. Use Business.pushOffers.destroyAll() instead.
        "::delete::business::pushOffers": {
          url: urlBase + "/businesses/:id/pushOffers",
          method: "DELETE"
        },

        // INTERNAL. Use Business.pushOffers.count() instead.
        "::count::business::pushOffers": {
          url: urlBase + "/businesses/:id/pushOffers/count",
          method: "GET"
        },

        // INTERNAL. Use CustomerOffer.pushOffer() instead.
        "::get::customerOffer::pushOffer": {
          url: urlBase + "/customerOffers/:id/pushOffer",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.PushOffer#updateOrCreate
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#update
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#destroyById
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.PushOffer#removeById
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.PushOffer#modelName
    * @propertyOf lbServices.PushOffer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `PushOffer`.
    */
    R.modelName = "PushOffer";


        /**
         * @ngdoc method
         * @name lbServices.PushOffer#business
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Fetches belongsTo relation business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.business = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::get::pushOffer::business"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.PushOffer.customerOffers
     * @header lbServices.PushOffer.customerOffers
     * @object
     * @description
     *
     * The object `PushOffer.customerOffers` groups methods
     * manipulating `CustomerOffer` instances related to `PushOffer`.
     *
     * Call {@link lbServices.PushOffer#customerOffers PushOffer.customerOffers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.PushOffer#customerOffers
         * @methodOf lbServices.PushOffer
         *
         * @description
         *
         * Queries customerOffers of pushOffer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        R.customerOffers = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::get::pushOffer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PushOffer.customerOffers#count
         * @methodOf lbServices.PushOffer.customerOffers
         *
         * @description
         *
         * Counts customerOffers of pushOffer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.customerOffers.count = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::count::pushOffer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PushOffer.customerOffers#create
         * @methodOf lbServices.PushOffer.customerOffers
         *
         * @description
         *
         * Creates a new instance in customerOffers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        R.customerOffers.create = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::create::pushOffer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PushOffer.customerOffers#createMany
         * @methodOf lbServices.PushOffer.customerOffers
         *
         * @description
         *
         * Creates a new instance in customerOffers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        R.customerOffers.createMany = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::createMany::pushOffer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PushOffer.customerOffers#destroyAll
         * @methodOf lbServices.PushOffer.customerOffers
         *
         * @description
         *
         * Deletes all customerOffers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customerOffers.destroyAll = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::delete::pushOffer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PushOffer.customerOffers#destroyById
         * @methodOf lbServices.PushOffer.customerOffers
         *
         * @description
         *
         * Delete a related item by id for customerOffers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customerOffers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customerOffers.destroyById = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::destroyById::pushOffer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PushOffer.customerOffers#findById
         * @methodOf lbServices.PushOffer.customerOffers
         *
         * @description
         *
         * Find a related item by id for customerOffers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customerOffers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        R.customerOffers.findById = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::findById::pushOffer::customerOffers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PushOffer.customerOffers#updateById
         * @methodOf lbServices.PushOffer.customerOffers
         *
         * @description
         *
         * Update a related item by id for customerOffers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customerOffers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        R.customerOffers.updateById = function() {
          var TargetResource = $injector.get("CustomerOffer");
          var action = TargetResource["::updateById::pushOffer::customerOffers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CustomerOffer
 * @header lbServices.CustomerOffer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CustomerOffer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CustomerOffer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/customerOffers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CustomerOffer.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/customerOffers/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use CustomerOffer.pushOffer() instead.
        "prototype$__get__pushOffer": {
          url: urlBase + "/customerOffers/:id/pushOffer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#create
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/customerOffers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#createMany
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/customerOffers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#upsert
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/customerOffers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#exists
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/customerOffers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#findById
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/customerOffers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#find
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/customerOffers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#findOne
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/customerOffers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#updateAll
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/customerOffers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#deleteById
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/customerOffers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#count
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/customerOffers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#prototype$updateAttributes
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/customerOffers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#createChangeStream
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/customerOffers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Customer.customerOffers.findById() instead.
        "::findById::customer::customerOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/customerOffers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.customerOffers.destroyById() instead.
        "::destroyById::customer::customerOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/customerOffers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.customerOffers.updateById() instead.
        "::updateById::customer::customerOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/customers/:id/customerOffers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.customerOffers() instead.
        "::get::customer::customerOffers": {
          isArray: true,
          url: urlBase + "/customers/:id/customerOffers",
          method: "GET"
        },

        // INTERNAL. Use Customer.customerOffers.create() instead.
        "::create::customer::customerOffers": {
          url: urlBase + "/customers/:id/customerOffers",
          method: "POST"
        },

        // INTERNAL. Use Customer.customerOffers.createMany() instead.
        "::createMany::customer::customerOffers": {
          isArray: true,
          url: urlBase + "/customers/:id/customerOffers",
          method: "POST"
        },

        // INTERNAL. Use Customer.customerOffers.destroyAll() instead.
        "::delete::customer::customerOffers": {
          url: urlBase + "/customers/:id/customerOffers",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.customerOffers.count() instead.
        "::count::customer::customerOffers": {
          url: urlBase + "/customers/:id/customerOffers/count",
          method: "GET"
        },

        // INTERNAL. Use PushOffer.customerOffers.findById() instead.
        "::findById::pushOffer::customerOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pushOffers/:id/customerOffers/:fk",
          method: "GET"
        },

        // INTERNAL. Use PushOffer.customerOffers.destroyById() instead.
        "::destroyById::pushOffer::customerOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pushOffers/:id/customerOffers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use PushOffer.customerOffers.updateById() instead.
        "::updateById::pushOffer::customerOffers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pushOffers/:id/customerOffers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use PushOffer.customerOffers() instead.
        "::get::pushOffer::customerOffers": {
          isArray: true,
          url: urlBase + "/pushOffers/:id/customerOffers",
          method: "GET"
        },

        // INTERNAL. Use PushOffer.customerOffers.create() instead.
        "::create::pushOffer::customerOffers": {
          url: urlBase + "/pushOffers/:id/customerOffers",
          method: "POST"
        },

        // INTERNAL. Use PushOffer.customerOffers.createMany() instead.
        "::createMany::pushOffer::customerOffers": {
          isArray: true,
          url: urlBase + "/pushOffers/:id/customerOffers",
          method: "POST"
        },

        // INTERNAL. Use PushOffer.customerOffers.destroyAll() instead.
        "::delete::pushOffer::customerOffers": {
          url: urlBase + "/pushOffers/:id/customerOffers",
          method: "DELETE"
        },

        // INTERNAL. Use PushOffer.customerOffers.count() instead.
        "::count::pushOffer::customerOffers": {
          url: urlBase + "/pushOffers/:id/customerOffers/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#updateOrCreate
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#update
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#destroyById
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#removeById
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomerOffer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CustomerOffer#modelName
    * @propertyOf lbServices.CustomerOffer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CustomerOffer`.
    */
    R.modelName = "CustomerOffer";


        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#customer
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::customerOffer::customer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CustomerOffer#pushOffer
         * @methodOf lbServices.CustomerOffer
         *
         * @description
         *
         * Fetches belongsTo relation pushOffer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PushOffer` object.)
         * </em>
         */
        R.pushOffer = function() {
          var TargetResource = $injector.get("PushOffer");
          var action = TargetResource["::get::customerOffer::pushOffer"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
