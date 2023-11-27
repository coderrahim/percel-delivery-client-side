import useDbUser from "../../../../hooks/useDbUser";
import useUser from "../../../../hooks/useUser";


const MyProfile = () => {
    const user = useUser()
    const dbUser = useDbUser()

    return (
        <div>

            <div className="h-screen  pt-12">

                <div className="max-w-md mx-auto py-10 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <div className="border-b px-4 pb-6">
                        <div className="text-center my-4">
                            {
                                user?.photoURL ?
                                <img className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                                src={user?.photoURL} alt="" />
                                :
                                <img className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                                src={dbUser[0]?.photo_url} alt="" />
                            }
                            <div className="py-2 mb-14">
                                {
                                    user?.displayName ?
                                    <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{user?.displayName}</h3>
                                    :
                                    <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{dbUser[0]?.name}</h3>
                                }
                                <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                                   {user?.email}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 px-2">
                            <button
                                className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                                Follow
                            </button>
                            <button
                                className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                                Message
                            </button>
                        </div>
                    </div>
                    <div className="px-4 py-4">
                        <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                            <svg className="h-6 w-6 text-gray-600 dark:text-gray-400" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className=""
                                    d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
                            </svg>
                            <span><strong className="text-black dark:text-white">12</strong> Followers you know</span>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- Card end --> */}

        </div>
    )
};

export default MyProfile;