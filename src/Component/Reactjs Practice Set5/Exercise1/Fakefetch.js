
export const Fakefetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users/status") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            users: [
              { name: "Raju", Status: "Online" },
              { name: "Pankaj", Status: "Offline" },
              { name: "Sakshi", Status: "Offline" },
              { name: "Kishore", Status: "Offline" }
            ],
          },
        });
      } else{
        reject({
            status: 404,
            message: "No user Found"
        })
      }
    }, 2000);
  });
};
