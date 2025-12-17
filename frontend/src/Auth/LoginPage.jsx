import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
 <button 
  onClick={() => loginWithRedirect({
    appState: { returnTo: window.location.pathname }
  })}
>
  Log In
</button>
    </div>
  );
};

export default LoginPage;
// import React, { useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

// const LoginPage = () => {
//   const { loginWithRedirect } = useAuth0();

//   useEffect(() => {
//     loginWithRedirect({
//       appState: { returnTo: window.location.pathname }
//     });
//   }, [loginWithRedirect]);

//   return null; // مش محتاج تعرض أي زرار
// };

// export default LoginPage;

