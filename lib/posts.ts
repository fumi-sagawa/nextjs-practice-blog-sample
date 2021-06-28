import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
