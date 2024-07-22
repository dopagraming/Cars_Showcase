"use client";
import { useEffect } from "react";
import { useAppDispatch } from "../rtk/hooks";
import { auth } from "@/firebase";
import { setUser } from "@/rtk/features/user/user";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return children;
};
export default RequireAuth;
