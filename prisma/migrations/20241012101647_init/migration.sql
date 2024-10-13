-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Resumes" (
    "resume_id" TEXT NOT NULL,
    "Profile" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Resumes_pkey" PRIMARY KEY ("resume_id")
);

-- CreateTable
CREATE TABLE "Interview" (
    "interview_id" TEXT NOT NULL,
    "profile" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "yoe" TEXT NOT NULL,
    "resume_id" TEXT NOT NULL,

    CONSTRAINT "Interview_pkey" PRIMARY KEY ("interview_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Resumes" ADD CONSTRAINT "Resumes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "Resumes"("resume_id") ON DELETE RESTRICT ON UPDATE CASCADE;
