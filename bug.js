const unsubscribe = onAuthStateChanged(auth, (user) => {  if (user) {    // User is signed in, see docs for a list of available properties
    const uid = user.uid;    // ...
  } else {    // User is signed out
    // ...
  }  //This is important.  If you don't unsubscribe, memory leaks will occur.
  return () => unsubscribe(); // this will cause an error because unsubscribe is already defined as a const
});