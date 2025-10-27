const jwt = require('jsonwebtoken') ;


 const decoded = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9oaXR0IiwiaWF0IjoxNzYxNTM5MDU5LCJleHAiOjE3NjE1MzkwNTl9.ewC9kFOp3n4wlM_mosDb2DIuMryVuRLF2dq487J9enk' , 'this_is_secret') ;

 console.log(decoded)