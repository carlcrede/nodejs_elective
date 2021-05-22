import bcrypt from 'bcrypt';

const saltRounds = 12;
const plainTextPassword = 'keapass123';
const hashedPassword = '$2b$12$QLiG7dfZGMGTZh/eFPEruuVPpG4XFifEHNwAUOOf72FpQVaDZvQVW';


bcrypt.hash(plainTextPassword, saltRounds, (err, encrypted) => {
    console.log(encrypted);
});

bcrypt.compare(plainTextPassword, hashedPassword, (err, same) => {
    console.log(same);
});

export default {};