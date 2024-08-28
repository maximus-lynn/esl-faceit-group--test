"use client";

import styled from "styled-components";

export const ContainerArticle = styled.article`
  padding: 1rem;
  border-bottom: 1px solid grey;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  display: inline-block;
  margin-right: 1rem;
  width: 64px;
  height: 64px;
`;

export const Author = styled.p`
  font-weight: 500;
  font-size: 12px;
`;

export const Title = styled.h1`
  margin-bottom: 0.5rem;
`;
