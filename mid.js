const createError=require('http-errors');
module.exports = (app)=>{

	app.use((req,res,next)=>{
		next(createError(404));
	});
	app.use((err,req,res,next)=>{
		res.locals.error = err;
		res.locals.error.status = err.status || 500;
		res.render('error',{layout:''});
	});

};