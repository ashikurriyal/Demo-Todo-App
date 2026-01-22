import { AddUserModal } from "@/components/module/users/AddUserModal";
// import UserCard from "@/components/module/users/UserCard";


export default function User() {
  
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Users</h1>
        <AddUserModal />
      </div>
      <div className="space-y-5 mt-5 grid grid-cols-3">
        {/* {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))} */}
      </div>
    </div>
  );
}
