const fs=require ('fs');

fs.writeFileSync('./.env',`API=${proc.env.API}\n`)