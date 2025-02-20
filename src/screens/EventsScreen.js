import React from "react";
import { FlatList, RefreshControl, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Events from "../Components/Events";

const data = [
  {
    id: 1,
    img: require("../Assets/event1.jpg"),
    date: "2021-06-29 16:08:00",
    title: "Just Thoughts: A Trail Show by Rueben Kaduskar",
    subtitle: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    caption: "Lorem Ipsum is simply dummy text of the printing ",
    location: "Nayadhalli",
    intrestedpersons: "1 Intrested",
  },
  {
    id: 2,
    img: require("../Assets/event1.jpg"),
    date: "2021-06-29 16:08:00",
    title: "Just Thoughts: A Trail Show by Rueben Kaduskar",
    subtitle: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    caption: "Lorem Ipsum is simply dummy text of the printing ",
    location: "Nayadhalli",
    intrestedpersons: "1 Intrested",
  },
  {
    id: 3,
    img: require("../Assets/event1.jpg"),
    date: "2021-06-29 16:08:00",
    title: "Just Thoughts: A Trail Show by Rueben Kaduskar",
    subtitle: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    caption: "Lorem Ipsum is simply dummy text of the printing ",
    location: "Nayadhalli",
    intrestedpersons: "1 Intrested",
  },
];

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function EventsScreen() {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({ item }) => (
          <Events
            img={item.img}
            date={item.date}
            title={item.title}
            subtitle={item.subtitle}
            caption={item.caption}
            location={item.location}
            intrestedpersons={item.intrestedpersons}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 6,
  },
});
