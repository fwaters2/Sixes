
import Firestore from "../../Utils/Firebase";

const Updates = [];
Firestore.firestore()
  .collection("Updates")
  .onSnapshot(snapshot => {
    snapshot.forEach(x => {
      Updates.push(x.data().Text);
    });
  });


  {
    title: "Updates",
    bodyIntro: "Most recent updates at the top",
    items: Updates
  },