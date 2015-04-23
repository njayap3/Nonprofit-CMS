module.exports = function(config, mongoose) {
	var
  		express = require("express"),
  		galleryRouter = express.Router(),
  		fs = require("fs");

	var gallerySchema = mongoose.Schema({
	    filename: String,
	    type: String,
	    data: Buffer
  	});

	var GalleryModel = mongoose.model("gallery", gallerySchema);

	  galleryRouter.route("/gallerys")
	  .get(function(req, res){
	    GalleryModel.find({}, function(err, gallerys){

	      if(err){
	        console.log(err);
	        res.status(500).json(err);
	        return;
	      }

	      res.json(gallerys);
	    });
  	});

	  galleryRouter.route("/gallery")
		  .post(function(req, res){

		    fs.readFile(req.files["file_0"].path, function(err, data){
		      var fileMeta = {};
		      fileMeta.filename = req.files["file_0"].originalname;
		      fileMeta.type = req.files["file_0"].extension;
		      fileMeta.data = data;

		      var t = new GalleryModel(fileMeta);
		      t.save(function(err, gallery){

		        if(err){
		          console.log(err);
		          res.status(500).json(err);
		          return;
		        }
		        res.json(gallery);
		      });
		    });

  		});

		  return galleryRouter;

};