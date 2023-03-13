/**
 * swr実行用fetcherです
 * 【注意】以前SWRにはfetcherが用意されていたが、SWR2系からfetcherは存在せずfetcherを省略できない
 */
export const fetcher = async url => await fetch(url).then(res => {
  if(!res.ok) {
    throw new Error("エラーが発生したため、データの取得に失敗しました");
  }
  return res.json()}
);