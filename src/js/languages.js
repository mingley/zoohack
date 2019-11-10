const english = {
	index: {
		language: "Language"
	},
	login: {
		greeting: "Welcome",
		email: "Email Address",
		password: "Password",
		login: "Login"
	},
	dashboard: {
		location: "City/Location you will be in",
		searchTerm: "Search term",
		expiration: "Valid through",
		submit: "Submit",
		notification: "Notice: Matching operation found, please contact {name} at {email} for more information."
	}
}

const spanish = {
	index: {
		language: "Idioma"
	},
	login: {
		greeting: "Bienvenidos",
		email: "Email",
		password: "Contraseña",
		login: "Login"
	},
	dashboard: {
		location: "Ciudad / ubicación en la que estará",
		searchTerm: "Término de búsqueda",
		expiration: "Válido hasta el",
		submit: "Presentar",
		notification: "Aviso: Se encontró una operación coincidente, comuníquese con {name} a {email} para obtener más información."
	}
}
const zulu = {
	index: {
		language: "Ulimi",
		login: {
			greeting: "Wamukelekile",
			email: "Ikheli le-imeyili",
			password: "Iphasiwedi",
			login: "Ngena ngemvume",
		},
		dashboard: {
			location: "Indawo ozoba kuyo",
			searchTerm: "Igama lokusesha",
			expiration: "Ivumelekile",
			submit: "Hambisa",
			notification: "Qaphela: Ukuqondanisa okutholakele kutholakala, sicela uxhumane no - {name} ku {email} ukuthola eminye imininingwane."
		}
	}
};
const portugese = {
	index: {
		language: "Idioma",
		login: {
			greeting: "Welcome",
			email: "Endereço de email",
			password: "Senha",
			login: "Fazer login",
		},
		dashboard: {
			location: "Destino",
			searchTerm: "Nome da pesquisa",
			expiration: "permitido",
			submit: "Enviar",
			notification: "Observação: para corresponder aos resultados encontrados, entre em contato com {name} em {email} para obter mais informações."
		}
	}
}
const chinese = {
	index: {
		language:"语言",
		login:{
			greeting:"欢迎",
			email:"电子邮件地址",
			password: "密码",
			login:"登录",
		},
	dashboard:{
		location: "目的地",
		searchTerm: "搜索名称",
		expiration: "允许",
		submit: "提交",
		notification: "注意：要匹配找到的结果，请通过{ email }与{ name }联系以获取更多信息。"
		}
	}
}


export default {
	中文 : chinese,
	English: english,
	Español: spanish,
	IsiZulu: zulu,
	Português: portugese,
	
}