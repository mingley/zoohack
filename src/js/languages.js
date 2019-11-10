const english = {
	index: {
		language: "Language",
		logout: "Logout"
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
		language: "Idioma",
		logout: "Cerrar sesión"
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
		logout: "Phuma"
	},
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

};
const portugese = {
	index: {
		language: "Idioma",
		logout: "Sair"
	},
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

const chinese = {
	index: {
		language:"语言",
		logout: "登出"
	},
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

const korean = {
	index: {
		language: "언어",
		logout: "로그아웃"
	},
	login: {
		greeting: "환영합니다",
		email: "이메일",
		password: "비밀번호",
		login: "로그인"
	},
	dashboard: {
		location: "도시/위치",
		searchTerm: "검색어",
		expiration: "활동 기간",
		submit: "제출",
		notification: "알림: 유사한 액티비티가 이미 진행중입니다. 더 많은 정보를 원하시면 {email}을 통해 {name}에게 연락을 주십시오."
	}
}

const finnish = {
	index: {
		language: "Kieli",
		logout: "Kirjaudu ulos"
	},
	login: {
		greeting: "Tervetuloa!",
		email: "Sähköposti",
		password: "Salasana",
		login: "Käyttäjätunnus"
	},
	dashboard: {
		location: "Sijainti missä olet",
		searchTerm: "Kuvaus",
		expiration: "Päättyy kello",
		submit: "Lähetä",
		notification: "Huomaa: Löydetty vastaava toimenpide, ota yhteyttä {name} luona {email} lisätietoja."
	}
}


export default {
	English: english,
	中文 : chinese,
	Español: spanish,
	IsiZulu: zulu,
	Português: portugese,
	한국어: korean,
	Suomi: finnish,
}