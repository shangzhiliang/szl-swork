(function($){
	
	$.validator.addMethod("alphanumeric", function(value, element) {
		return this.optional(element) || /^\w+$/i.test(value);
	}, "Letters, numbers or underscores only please");
	
	$.validator.addMethod("lettersonly", function(value, element) {
		return this.optional(element) || /^[a-z]+$/i.test(value);
	}, "Letters only please"); 
	
	$.validator.addMethod("phone", function(v, element) {
	    v = v.replace(/\s+/g, ""); 
		return this.optional(element) || v.match(/^[0-9 \(\)]{7,30}$/);
	}, "Please specify a valid phone number");
	
	$.validator.addMethod("postcode", function(v, element) {
	    v = v.replace(/\s+/g, ""); 
		return this.optional(element) || v.match(/^[0-9 A-Za-z]{5,20}$/);
	}, "Please specify a valid postcode");
	
	$.validator.addMethod("date", function(v, element) {
	    v = v.replace(/\s+/g, ""); 
		return this.optional(element) || v.match(/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/);
	});

	//判断数字value是否大于0
	$.validator.addMethod("isNumGtZero", function(v, element) { 
		 v=parseFloat(v);  
	     return this.optional(element) || v>0;
	}, "请输入大于0的数字");
	
	//判断数字value是否大于0
	$.validator.addMethod("isNumGtOEZero", function(v, element) { 
		 v=parseFloat(v);  
	     return this.optional(element) || v>=0;
	}, "请输入大于等于0的数字");
	$.validator.addClassRules({
		date: {date: false},
		alphanumeric: { alphanumeric: true },
		lettersonly: { lettersonly: true },
		phone: { phone: true },
		isNumGtZero: {isNumGtZero: true},
		postcode: {postcode: true}
	});
	
	$.validator.setDefaults({
		errorElement : "span"
	});
	
	if($.metadata){
		$.metadata.setType("attr", "validate");
	}
	
})(jQuery);
