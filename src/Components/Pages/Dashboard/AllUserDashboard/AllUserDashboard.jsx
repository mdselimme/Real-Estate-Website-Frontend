import Swal from "sweetalert2";
import useAllUsers from "../../../Shared/useAllUsers/useAllUsers";
import useAxiosSecure from "../../../Shared/useAxiosSecure/useAxiosSecure";
import useAdmin from "../../../Shared/useAdmin/useAdmin";

const AllUserDashboard = () => {
  const { users, refetch } = useAllUsers();
  const { axiosLinker } = useAxiosSecure();

  const withOutAdmins = users.filter((user) => user.admin !== "true");

  const { admin } = useAdmin();

  console.log(admin);

  const deleteCartProduct = (id, email, name) => {
    console.log(id, email, name);
  };

  const makeAdminUsers = (id, email) => {
    console.log(id, email);
    axiosLinker.patch(`/make/admin?email=${email}&status=true`).then((res) => {
      if (res.data.matchedCount) refetch();
      Swal.fire({
        title: "Admin Created Successfully.",
        icon: "success",
        draggable: true,
      });
    });
  };

  const deleteAdminUsers = (id, email) => {
    console.log(id, email);
    /* axiosLinker.patch(`/make/admin?email=${email}`).then((res) => {
      if (res.data.matchedCount)
        Swal.fire({
          title: "Admin Created Successfully.",
          icon: "success",
          draggable: true,
        });
    }); */
  };

  return (
    <div>
      <div>
        <div className="bg-emerald-200 p-5 text-center">
          <h1 className="text-2xl font-extrabold text-black">All Users </h1>
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
                {withOutAdmins.map((users, index) => (
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
                        onClick={() =>
                          deleteCartProduct(
                            users?._id,
                            users?.email,
                            users?.name
                          )
                        }
                        className="bg-primary px-3 py-2 mr-2 font-semibold text-white rounded-full"
                      >
                        Delete
                      </button>
                      {users?.admin === "true" ? (
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

export default AllUserDashboard;
