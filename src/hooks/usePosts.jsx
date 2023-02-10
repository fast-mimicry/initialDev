import useSWR from "swr";

//swr2.x用のAPI実行用フックスです
export const usePosts = (API_URL) => {

    //SWR2系からfetcherを省略できない
    //ex.)
    //  const fetcher = async url => await fetch(url).then(res => res.json);
    //  const { data, error } = useSWR(`${URL}`, fetcher);
  
    //fetcherをコールバック関数として宣言し、useSWR内で呼び出すも動作しない。
    //この為、fetcher内の構文をuseSWR内に直で書き込みます
    const { data, error } = useSWR(`${API_URL}`, 
        async (url) => 
            await fetch(url)
                .then(res => {
                      //fetcherをオーバーライドし、エラー処理を追加
                      if(!res.ok) {
                        throw new Error("エラーが発生したため、データの取得に失敗しました");
                      }
                      return res.json();
                })
    );
    return { 
      data, 
      error,
      isLoading: !data && !error,
      isEmpty: data && data.length <= 0  
    };
 };
 