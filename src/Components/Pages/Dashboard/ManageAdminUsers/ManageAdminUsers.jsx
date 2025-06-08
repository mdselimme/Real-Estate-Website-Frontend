import Swal from "sweetalert2";
import useAllUsers from "../../../Shared/useAllUsers/useAllUsers";
import useAxiosSecure from "../../../Shared/useAxiosSecure/useAxiosSecure";

const ManageAdminUsers = () => {
  const { users, refetch } = useAllUsers();
  const { axiosLinker } = useAxiosSecure();

  const admins = users.filter((admin) => admin.admin === "true");

  const removeAsAdmin = (email) => {
    axiosLinker.patch(`/make/admin?email=${email}&status=false`).then((res) => {
      if (res.data.matchedCount) refetch();
      Swal.fire({
        title: "Admin Deleted Successfully.",
        icon: "success",
        draggable: true,
      });
    });
  };

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
                      {users?.masterAdmin ? (
                        ""
                      ) : (
                        <button
                          onClick={() => removeAsAdmin(users?.email)}
                          className="bg-accent px-3 py-2 font-semibold text-white rounded-full"
                        >
                          Remove As Admin
                        </button>
                      )}
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
