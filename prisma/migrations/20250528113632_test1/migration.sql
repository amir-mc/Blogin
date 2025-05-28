-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "blockquote" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image" (
    "id" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "Postid" TEXT,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_Postid_fkey" FOREIGN KEY ("Postid") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
