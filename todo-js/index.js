import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する機能
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
}
  
  //未完了リストから指定の要素を削除 共通化して関数にする
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
    
  };
  
  //未完了リストに追加する関数
  const createIncompleteList = (text) => {
    //div生成
    const div = document.createElement("div");
    div.className = "list-row";
    
    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
  
    //ボタンの完了タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click",() => {
      //未完了todoから削除して完了todoへ
      deleteFromIncompleteList(completeButton.parentNode);
      //完了リストへ
      const addTarget = completeButton.parentNode;
  
      //todo内容テキストを取得
      const text = addTarget.firstElementChild.innerText;
  
      //div以下を初期化
      addTarget.textContent = null;
      //liタグを生成
      const li = document.createElement("li");
      li.innerText = text;
      
      //ボタン生成
      const backButton = document.createElement("button");
      backButton.innerText = "戻す";
      backButton.addEventListener("click", () => {
        //押された戻るボタンの親タグを完了リストから削除
        const deleteTarget = backButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);
  
        //テキスト取得
        const text = backButton.parentNode.firstElementChild.innerText;
        createIncompleteList(text);
      })
  
      //divタグの子要素に各要素を設定
      addTarget.appendChild(li);
      addTarget.appendChild(backButton);
  
      //完了リストに追加
      document.getElementById("complete-list").appendChild(addTarget);
  
      
  
    });
    
    //ボタンの削除タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click",() => {
      //押された親要素ごと削除
      deleteFromIncompleteList(deleteButton.parentNode);
    });
  
    //divの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
  
    //未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(div);
  };




document
    .getElementById("add-button")
    .addEventListener("click",() => onClickAdd());
