import useAllUsers from "../../../Shared/useAllUsers/useAllUsers";

const ManageAdminUsers = () => {
  const { users } = useAllUsers();

  const admins = users.filter((admin) => admin.admin === true);

  return (
    <div>
      <div>
        <div className="bg-emerald-200 p-5 text-center">
          <h1 className="text-2xl font-extrabold text-black">
            Manage All Admins
          </h1>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-black font-bold capitalize text-lg text-center">
                    No.
                  </th>
                  <th className="text-black font-bold capitalize text-lg text-center">
                    Image
                  </th>
                  <th className="text-black font-bold capitalize text-lg text-center">
                    Name
                  </th>
                  <th className="text-black font-bold capitalize text-lg text-center">
                    Email
                  </th>
                  <th className="text-black font-bold capitalize text-lg text-center">
                    Last Log In
                  </th>
                  <th className="text-black font-bold capitalize text-lg text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {admins.map((users, index) => (
                  <tr key={index + 3} className="text-center">
                    <th>{index + 1}</th>
                    <td>
                      <img
                        className="w-14 mx-auto rounded-md"
                        src={users?.image}
                        alt=""
                      />
                    </td>
                    <td>{users?.name}</td>
                    <td>{users?.email}</td>
                    <td>
                      {users?.lastLoggedInTime
                        ? users?.lastLoggedInTime
                        : "No status"}
                    </td>

                    <td>
                      <button
                        // onClick={() =>
                        //   deleteCartProduct(
                        //     users?._id,
                        //     users?.email,
                        //     users?.name
                        //   )
                        // }
                        className="bg-primary px-3 py-2 mr-2 font-semibold text-white rounded-full"
                      >
                        Delete
                      </button>
                      {/* {users?.admin ? (
                        <button
                          onClick={() =>
                            deleteAdminUsers(users?._id, users?.email)
                          }
                          className="bg-accent px-3 py-2 font-semibold text-white rounded-full"
                        >
                          Delete Admin
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            makeAdminUsers(users?._id, users?.email)
                          }
                          className="bg-accent px-3 py-2 font-semibold text-white rounded-full"
                        >
                          Make Admin
                        </button>
                      )} */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAdminUsers;
