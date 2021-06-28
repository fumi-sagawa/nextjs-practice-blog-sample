import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export type PostData = {
  id: string;
  title: string;
  date: string;
};

//process.cwd()でカレントディレクトリを入手。joinで結合
const postsDirectory = path.join(process.cwd(), "posts");

export const getSortedPostsData = () => {
  // /posts配下のファイル名を取得する
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName: string): PostData => {
    const id = fileName.replace(/\.md$/, "");

    //マークダウンファイルを文字列として入手
    const fullPath = path.join(postsDirectory, fileName);
    //めも：readFileSyncは同期処理が可能
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 投稿のメタデータ部分を解析するために gray-matter を使う
    const matterResult = matter(fileContents);
    const PostData = {
      id,
      ...matterResult.data,
    };
    return PostData as PostData;
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

type PostID = {
  params: { id: string };
};

export const getAllPostIds = (): PostID[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: { id: fileName.replace(/\.md$/, "") },
    };
  });
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // 投稿のメタデータ部分を解析するために gray-matter を使う
  const matterResult = matter(fileContents);

  // remarkを使用しマークダウンをHTML文字列に
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // データを id と組み合わせる
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};
