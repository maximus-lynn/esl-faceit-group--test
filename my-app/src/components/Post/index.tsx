"use client";

import { useEffect, useState } from "react";
import { Avatar, ContainerArticle, ContainerTitle } from "./style";
import { getUserImage } from "@/app/actions/posts";

export interface IPost {
  id?: number;
  userId: number;
  title: string;
  body: string;
}

export default function Post({ title, body, userId }: IPost) {
  const [userImage, setUserImage] = useState("");
  const trimBody = body.substring(0, 100) + "...";
  // Need to think of a way to not call again if there is a duplicate
  // Possibly redux would resole this issue.
  useEffect(() => {
    const fetchImage = async () => {
      const image = await getUserImage(userId);
      setUserImage(image);
    };

    fetchImage();
  }, [userId]);

  return (
    <ContainerArticle>
      <ContainerTitle>
        <Avatar src={userImage} />
        <h1>{title}</h1>
      </ContainerTitle>
      <p>{trimBody}</p>
    </ContainerArticle>
  );
}
