CREATE TABLE "blog" (
	"blogId" serial NOT NULL,
	"blogName" varchar(255) NOT NULL,
	"blogContent" TEXT NOT NULL,
	"createdAt" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "blog_pk" PRIMARY KEY ("blogId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tag" (
	"tagId" serial NOT NULL,
	"tagName" varchar(255) NOT NULL,
	CONSTRAINT "tag_pk" PRIMARY KEY ("tagId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "blogTag" (
	"blogId" serial NOT NULL,
	"tagId" serial NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "image" (
	"imageId" serial NOT NULL,
	"image" bytea NOT NULL,
	"blogId" serial NOT NULL,
	CONSTRAINT "image_pk" PRIMARY KEY ("imageId")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "blogTag" ADD CONSTRAINT "blogTag_fk0" FOREIGN KEY ("blogId") REFERENCES "blog"("blogId");
ALTER TABLE "blogTag" ADD CONSTRAINT "blogTag_fk1" FOREIGN KEY ("tagId") REFERENCES "tag"("tagId");

ALTER TABLE "image" ADD CONSTRAINT "image_fk0" FOREIGN KEY ("blogId") REFERENCES "blog"("blogId");
