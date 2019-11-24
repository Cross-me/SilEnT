//页面加载时，生成随机验证码
			window.onload = function() {
				createCode(4);
			}

			//生成验证码的方法
			function createCode(length) {
				var code = "";
				var codeLength = parseInt(length); //验证码的长度
				var checkCode = document.getElementById("checkCode");
				////所有候选组成验证码的字符，当然也可以用中文的
				var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
					'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
					'x', 'y', 'z',
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
					'X', 'Y', 'Z');
				//循环组成验证码的字符串
				for (var i = 0; i < codeLength; i++) {
					//获取随机验证码下标
					var charNum = Math.floor(Math.random() * 62);
					//组合成指定字符验证码
					code += codeChars[charNum];
				}
				if (checkCode) {
					//为验证码区域添加样式名
					checkCode.className = "code";
					//将生成验证码赋值到显示区
					checkCode.innerHTML = code;
				}
			}

			//检查验证码是否正确
			function validateCode() {
				var user = document.getElementById("user");
				if (user.value == "") {
					alert("请输入用户名！");
					document.myform.user.focus();
					return false;
				}
							
				var password1 = document.getElementById("password1");
				if (password1.value == "") {
					alert("请输入密码！");
					document.myform.user.focus();
					return false;
				}
							
				var password2 = document.getElementById("password2");
				if (password2.value == "") {
					alert("请确认密码！");
					document.myform.user.focus();
					return false;
				}
				//获取显示区生成的验证码
				var checkCode = document.getElementById("checkCode").innerHTML;
				//获取输入的验证码
				var inputCode = document.getElementById("inputCode").value;
				console.log(checkCode);
				console.log(inputCode);
				if (inputCode.length <= 0) {
					alert("请输入验证码！");
				} else if (inputCode.toUpperCase() != checkCode.toUpperCase()) {
					alert("验证码输入有误！");
					createCode(4);
				} 
				
				var password1 = document.getElementById("password1").value;
				var password2 = document.getElementById("password2").value;
				if (password1 == password2 && inputCode.toUpperCase() == checkCode.toUpperCase()) {
					//document.getElementById("tishi").innerHTML="<font color='green'>两次密码相同</font>";
					alert("注册成功!")
					//document.getElementById("submit").disabled = false;
					window.setTimeout("window.location='login.html'", 1000);
				}
				else if(password1 != password2){
					//document.getElementById("tishi").innerHTML="<font color='red'>两次密码不相同</font>";
					alert("输入的两次密码不一致!")
					//document.getElementById("submit").disabled = true;
				}
			}