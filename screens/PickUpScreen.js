import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [delivery, setDelivery] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const deliveryTime = ["2-3 Days", "3-4 Days", "4-5 Days", "5-6 Days", "Tomorrow"];
  const times = ["11:00 PM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
  const navigation = useNavigation();

  const proceedToCart = () => {
    if (!selectedDate || !selectedTime || !delivery) {
      Alert.alert("Empty or invalid", "Please select all the fields", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else {
      navigation.replace("Cart", {
        pickUpDate: selectedDate,
        selectedTime: selectedTime,
        no_Of_days: delivery,
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.label}>Enter Address</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Pick Up Date</Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date("2023-02-01")}
          endDate={new Date("2023-02-28")}
          initialSelectedDate={new Date("2020-08-22")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />

        <Text style={styles.label}>Select Time</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item)}
              style={[
                styles.pressable,
                selectedTime === item ? styles.selectedPressable : styles.unselectedPressable,
              ]}
            >
              <Text>{item}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={styles.label}>Delivery Date</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
          {deliveryTime.map((item, i) => (
            <Pressable
              key={i}
              style={[
                styles.pressable,
                delivery === item ? styles.selectedPressable : styles.unselectedPressable,
              ]}
              onPress={() => setDelivery(item)}
            >
              <Text>{item}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </SafeAreaView>

      {total !== 0 && (
        <Pressable style={styles.totalContainer} onPress={proceedToCart}>
          <View>
            <Text style={styles.totalText}>{cart.length} items | $ {total}</Text>
            <Text style={styles.conditions}>Extra charges might apply</Text>
          </View>

          <Text style={styles.proceedBtn}>Proceed to Cart</Text>
        </Pressable>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    marginTop: 50,
  },
  safeArea: {
    paddingHorizontal: 10,
    backgroundColor: "#f0f4f0",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 10,
  },
  input: {
    padding: 10,
    borderColor: "gray",
    borderWidth: 0.7,
    borderRadius: 9,
    margin: 10,
  },
  scrollContainer: {
    flexDirection: "row",
  },
  pressable: {
    margin: 10,
    borderRadius: 7,
    padding: 15,
    borderColor: "gray",
    borderWidth: 0.7,
  },
  selectedPressable: {
    borderColor: "red",
  },
  unselectedPressable: {
    borderColor: "gray",
  },
  totalContainer: {
    backgroundColor: "#088F8F",
    marginTop: "auto",
    padding: 10,
    marginBottom: 40,
    margin: 15,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
  },
  conditions: {
    fontSize: 10,
    fontWeight: "400",
    color: "white",
    marginVertical: 6,
  },
  proceedBtn: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
    margin: 10,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "red",
    fontSize: 17,
  },
});

export default PickUpScreen;
