const user = {
   email: 'jdoe@gmail.com',
};

try {
   // Produce a ReferenceError
   //    myFunc();
   // Produce a TypeError
   //    null.myFunc();
   // Will produce SyntaxError
   //    eval('Hello world!!!');
   // Will produce a URIError
   //    decodeURIComponent('%');

   if (!user.name) {
      //   throw 'User has no name!';
      throw new SyntaxError('User has no name!');
   }
} catch (e) {
   console.log('Full Info - ', e);
   //    console.log('Message - ', e.message);
   //    console.log('Error Name - ', e.name);
   //    console.log('Instanse of - ', e instanceof ReferenceError);
} finally {
   console.log('Finally runs reguardless of result...');
}

console.log('Program continues...');
