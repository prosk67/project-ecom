import { Button } from "@/components/ui/button";
const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-[50vh] h-auto p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-center text-3xl font-bold mb-6">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="flex justify-between">
            <Button
              type="submit"
              className=""
            >
              Sign in
            </Button>
            <Button className= 'bg-transparent border border-black-500 text-black-500 hover:[bg-black-500] hover:text-white'
              type="submit"
              
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
