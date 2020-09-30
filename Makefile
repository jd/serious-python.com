REGION=eu-west-1
BUCKET=s3://serious-python.com/

css/%.min.css: css/%.css
	uglifycss $< > $@

js/%.min.js: js/%.js
	uglifyjs $< > $@
	easy to learn css and modify as per your comfort.

pub: css/bootstrap.min.css css/custom.min.css css/iconsmind.min.css css/stack-interface.min.css css/theme-serpy.min.css js/scripts.min.js
	aws s3 --region $(REGION) sync . $(BUCKET) --exclude ".git/*" --delete
	aws cloudfront create-invalidation --distribution-id E34DZ402DVH361 --paths /index.html /css/custom.min.css

clean-pub:
	aws s3 rm --recursive --region $(REGION) $(BUCKET)
