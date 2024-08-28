import { Avatar, ContainerArticle } from "./style";

interface IPost {
  image: string;
  name: string;
  description: string;
}

export default function Post({ image, name, description }: IPost) {
  return (
    <ContainerArticle>
      <div>
        <Avatar src={image} />
        {name}
      </div>
      <p>{description}</p>
    </ContainerArticle>
  );
}
