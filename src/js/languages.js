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

const korean = {
	index: {
		language: "언어"
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

export default {
	English: english,
	Spanish: spanish,
	Korean: korean
}