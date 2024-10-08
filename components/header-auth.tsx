"use client";

import React from "react";

import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import * as action from "@/actions";

export default function HeaderAuth() {
  const session = useSession();

  const authContent: React.ReactNode = session.data?.user ? (
    <Popover placement="left">
      <PopoverTrigger>
        <Avatar src={session.data?.user?.image || ""} />
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-4">
          <form action={action.signOut}>
            <Button type="submit">Sign Out</Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  ) : (
    <>
      <NavbarItem>
        <form action={action.signIn}>
          <Button type="submit" color="secondary">
            Sign In
          </Button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form action={action.signIn}>
          <Button type="submit" color="primary" variant="flat">
            Sign Up
          </Button>
        </form>
      </NavbarItem>
    </>
  );
  return authContent;
}
