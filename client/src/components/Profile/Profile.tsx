import { useEffect } from "react";
import ComingSoon from "../ComingSoon/Coming-soon";

export default function Component() {

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const username = localStorage.getItem("username");
        if (!username) {
          throw new Error("Username not found in localStorage");
        }

        // const response = await fetch(`${BACKEND_URL}/profile/${username}`, {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });

        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }

        // const responseData = await response.json();
        // setUserData(responseData.user);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    //   <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    //     <Sidebar />
    //     <div className="flex flex-col h-screen">
    //       <MobileSidebar />
    //       <div className="flex-1 flex items-center justify-center p-4">
    //         <Card className="w-full max-w-md">
    //           <CardHeader className="flex flex-col items-center space-y-4">
    //             {userData?.image ? (
    //               <img
    //                 src={userData.image}
    //                 alt={`${userData.firstname} ${userData.lastname}`}
    //                 width={128}
    //                 height={128}
    //                 className="rounded-full"
    //               />
    //             ) : (
    //               <Skeleton className="w-32 h-32 rounded-full" />
    //             )}
    //             <div className="flex flex-col items-center space-y-1 text-center">
    //               <div className="font-semibold">
    //                 {userData?.firstname} {userData?.lastname}
    //               </div>
    //               <div className="text-sm text-muted-foreground">
    //                 @{userData?.username}
    //               </div>
    //               <div className="text-sm text-muted-foreground">
    //                 {userData?.email}
    //               </div>
    //             </div>
    //           </CardHeader>
    //           <div className="px-6">
    //             <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[2px] w-full mb-6" />
    //             <CardContent>
    //               <div className="text-center">
    //                 {userData?.bio ? (
    //                   <p className="text-sm text-muted-foreground border border-neutral-200 dark:border-neutral-700 rounded-md p-4 bg-neutral-50 dark:bg-neutral-900">
    //                     {userData.bio}
    //                   </p>
    //                 ) : (
    //                   <Skeleton className="w-full h-20 mx-auto" />
    //                 )}
    //               </div>
    //             </CardContent>
    //           </div>
    //         </Card>
    //       </div>
    //     </div>
    //   </div>
    // <div className="flex items-center justify-center h-full">
    //   <div className="text-center">
    //     <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
    //     <p className="text-lg text-muted-foreground">
    //   This page is still under development. Stay tuned!
    //     </p>
    //   </div>
    // </div>
    <>
      <ComingSoon />
    </>
  );
}
