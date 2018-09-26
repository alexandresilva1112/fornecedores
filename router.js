module.exports=(app)=>{
	
	app.get('/',(req,res)=>{
		res.render('login',{layout:''});
	});

	app.post('/login',(req,res)=>{
		res.render('main',req.body);
	});
}