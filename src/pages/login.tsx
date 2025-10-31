import logo from "../assets/mono.jpg";
export default function Example() {
  return (
    <>
      {/* Asegúrate de que tu <html> y <body> permitan altura completa:
          <html class="h-full">
          <body class="h-full">
      */}
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-12">
        {/* Card centrada */}
        <div className="w-full max-w-md bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
            <img alt="Your Company" src={logo} className="mx-auto h-40 w-40" />
            <h2 className="mt-6 text-center text-2xl leading-9 font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm leading-6 font-medium text-gray-100"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm leading-6 font-medium text-gray-100"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-400 hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>

              {/* Botón "Regresar" justo debajo de Sign in */}
              <div>
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="mt-2 flex w-full justify-center rounded-md border border-gray-600 bg-transparent px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none"
                >
                  Regresar
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">Not a member?</p>

              {/* Botón "Registrarse" en gris */}
              <div className="mt-3">
                <button
                  type="button"
                  className="w-full rounded-md bg-gray-500 px-4 py-2 text-sm font-semib       old text-white hover:bg-gray-400 focus:outline-none"
                >
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
