import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
import { Trash2, User } from "lucide-react";

interface IProps {
  user: IUser;
}

export default function UserCard({ user }: IProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between rounded-md border px-4 py-3 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <User size={18} />
        </div>
        <p className="font-medium">{user.name}</p>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="text-red-500 hover:bg-red-50"
        onClick={() => dispatch(removeUser(user.id))}
      >
        <Trash2 size={18} />
      </Button>
    </div>
  );
}
