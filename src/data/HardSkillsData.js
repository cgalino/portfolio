

const imgs = {
	"html": 'img/hardSkills/FRONTEND/html.svg',
	"css": 'img/hardSkills/FRONTEND/css.svg',
	"js": 'img/hardSkills/FRONTEND/js.svg',
	"react": 'img/hardSkills/FRONTEND/react.svg',
	"vue": 'img/hardSkills/FRONTEND/vue.svg',
	"tailwind": 'img/hardSkills/FRONTEND/tailwind.svg',
	"jquery": 'img/hardSkills/FRONTEND/jquery.webp',
	"material": 'img/hardSkills/FRONTEND/material.svg',
	"bootstrap": 'img/hardSkills/FRONTEND/bootstrap.png',
	"node": 'img/hardSkills/BACKEND/node.svg',
	"express": 'img/hardSkills/BACKEND/express.svg',
	"python": 'img/hardSkills/BACKEND/python.png',
	"java": 'img/hardSkills/BACKEND/java.svg',
	"vite": 'img/hardSkills/TOOLS/vite.png',
	"git": 'img/hardSkills/TOOLS/git.svg',
	"npm": 'img/hardSkills/TOOLS/npm.webp',
	"vscode": 'img/hardSkills/TOOLS/vscode.png',
	"jenkins": 'img/hardSkills/TOOLS/jenkins.png',
	"db2": 'img/hardSkills/DATABASE/db2.svg',
	"mongo": 'img/hardSkills/DATABASE/mongo.svg',
	"mysql": 'img/hardSkills/DATABASE/mysql.svg',
	"sqlite": 'img/hardSkills/DATABASE/sqlite.png'
}



const data = [{
	id: 1,
	name: 'FRONTEND',
	title: 'Frontend',
	desc: 'Ámbito con el que cuento con mas experiencia y conocimiento, tanto en el desarrollo de aplicaciones web como en el diseño de interfaces',
	images: [
		{ img: imgs.html, text: 'HTML' },
		{ img: imgs.css, text: 'CSS' },
		{ img: imgs.js, text: 'JavaScript' },
		{ img: imgs.react, text: 'React' },
		{ img: imgs.tailwind, text: 'Tailwind' },
		{ img: imgs.bootstrap, text: 'Bootstrap' },
		{ img: imgs.jquery, text: 'Jquery' },
	]
}, {
	id: 2,
	name: 'BACKEND',
	title: 'Backend',
	desc: 'He trabajado con distintos lenguajes de programación y frameworks para el backend, tanto en entornos de desarrollo como de producción',
	images: [
		{ img: imgs.node, text: 'NodeJS' },
		{ img: imgs.express, text: 'Express' },
		{ img: imgs.java, text: 'Java' },
		{ img: imgs.python, text: 'Python' },
	],
},
{
	id: 3,
	name: 'TOOLS',
	title: 'Herramientas',
	desc: 'Uso las herramientas más comunes y me informo de las novedades para estar siempre al dia.',
	images: [
		{ img: imgs.git, text: 'Git' },
		{ img: imgs.vite, text: 'Vite' },
		{ img: imgs.npm, text: 'NPM' },
		{ img: imgs.jenkins, text: 'Jenkins' },
	],
},
{
	id: 4,
	name: 'DATABASE',
	title: 'Bases de datos',
	desc: 'Tengo experiencia con distintas bases de datos, tanto relacionales como no relacionales',
	images: [
		{ img: imgs.db2, text: 'DB2' },
		{ img: imgs.mongo, text: 'MongoDB' },
		{ img: imgs.mysql, text: 'MySql' },
		{ img: imgs.sqlite, text: 'SQLite' }
	],
}];


export default data;