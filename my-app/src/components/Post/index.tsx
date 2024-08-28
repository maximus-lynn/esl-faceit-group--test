"use client";

import { useEffect, useState } from "react";
import {
  Avatar,
  Author,
  ContainerArticle,
  ContainerTitle,
  Title,
} from "./style";
import { getUser, IUser } from "@/app/actions/posts";

export interface IPost {
  id?: number;
  userId: number;
  title: string;
  body: string;
}

export default function Post({ title, body, userId }: IPost) {
  const [user, setUser] = useState<IUser>();
  const trimBody = body.substring(0, 100) + "...";
  // Need to think of a way to not call again if there is a duplicate
  // Possibly redux would resole this issue.

  useEffect(() => {
    const fetchUser = async () => {
      const image = await getUser(userId);
      setUser(image);
    };

    fetchUser();
  }, [userId]);

  return (
    <ContainerArticle>
      <ContainerTitle>
        {user?.image && <Avatar src={user.image} />}
        <div>
          <Title>{title}</Title>
          <Author>
            {user?.firstName} {user?.lastName}
          </Author>
        </div>
      </ContainerTitle>
      <p>{trimBody}</p>
    </ContainerArticle>
  );
}
