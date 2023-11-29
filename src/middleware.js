export { default } from "next-auth/middleware";

//apapun setelah path /users akan diarahkan ke halaman login
// [cara:1]
// export const config = { matcher: ["/users(.*)"] };
// [cara:2] apapun setelah path /users akan diarahkan ke halaman login
export const config = { matcher: ["/users/:path*"] };
