const unsubscribe = onAuthStateChanged(auth, (user) => {  if (user) {    // User is signed in, see docs for a list of available properties
    const uid = user.uid;    // ...
  } else {    // User is signed out
    // ...
  }  //This is important.  If you don't unsubscribe, memory leaks will occur.
});

// Cleanup function
const cleanup = () => {
  unsubscribe();
}

// Example of how to use the cleanup function (e.g., in componentWillUnmount)
export const cleanupAuthListener = () => {
  cleanup();
} 