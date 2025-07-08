-- CreateTable
CREATE TABLE "Tryurl" (
    "url" TEXT NOT NULL,
    "shorturl" TEXT NOT NULL,

    CONSTRAINT "Tryurl_pkey" PRIMARY KEY ("url")
);

-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("username")
);
