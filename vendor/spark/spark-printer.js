/**
 * Created by michael on 2/5/15.
 */



var sparkPrint = function () {

	var serverUrl = "http://alpha.spark.autodesk.com/api/v1/"
	/**
	 * Return the factory object
	 */
	return {


		registerPrinter: function (memberID,token,printerName,callback,errorCallback) {
			//Make sure token is still valid
			sparkAuth.checkTokenValidity(function (response) {
				if (response) {

					var headers = {
						"X-Member-id":memberID,
						"Content-type": "application/x-www-form-urlencoded"
					}

					var url = serverUrl + "print/printers/register/" + token
					Util.xhr(url, 'POST', "printer_name="+printerName, headers, callback,errorCallback);
				}else{
					callback(false);
				}
			});
		},


		getAllPrinters: function (memberID,callback) {
			//Make sure token is still valid
			sparkAuth.checkTokenValidity(function (response) {
				if (response) {
					var headers = {
						"X-Member-id":memberID,
						"Content-type": "application/x-www-form-urlencoded"
					}
					Util.xhr(serverUrl + 'print/printers', 'GET', '', headers, callback);
				}else{
					callback(false);
				}
			});
		},

		printJob: function (memberID,fileUrl, printerId,settings,callback,errorCallback) {
			//Make sure token is still valid
			sparkAuth.checkTokenValidity(function (response) {
				if (response) {

					var params =JSON.stringify( {file_url:fileUrl,settings:settings});
					console.log(params);
					var headers = {
						"X-Member-id":memberID,
						"Content-type": "application/json"
					}
					var url = serverUrl + 'print/printers/'+printerId+"/jobs";
					Util.xhr(url, 'POST', params, headers, callback,errorCallback);
				}else{
					callback(false);
				}
			});
		},

		/**
		 * Create a new asset
		 * @param assetPost
		 */
		getJobsStatusByPrinter: function (memberID,printerId,callback) {
			//Make sure token is still valid
			sparkAuth.checkTokenValidity(function (response) {
				if (response) {
					var headers = {
						"X-Member-id":memberID,
						"Content-type": "application/x-www-form-urlencoded"
					}
					Util.xhr(serverUrl + 'print/printers/' + printerId + "/jobs", 'GET', '', headers, callback);
				}else{
					callback(false);
				}
			});
		},

		log : function (textArea_id, data) {
			console.log(data);
			var txt = $("#" + textArea_id);
			txt.val(txt.val() + "\n" + data);
			txt.scrollTop(txt[0].scrollHeight);
		}
	}


}();
