import { useNavigation } from "@react-navigation/native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Checkbox, View, Alert, Center, VStack, HStack, Box } from "native-base";
import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import PPP from "../assets/logoPPP.svg";
import ContactsImg from "../assets/contacticon.svg";
import { useTogglePasswordVisibility } from "../components/useTogglePasswordVisibility";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "../components/Button";
import { useContacts } from "../hooks/useContacts";

export function AskForContacts() {
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    async function handleLogin() {
        setLoading(true);
        navigation.reset({
          index: 0,
          routes: [
            { name: 'signIn' }
          ],
        })
        setLoading(false);
    }

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.headerText}>Contatos</Text>
                <PPP width={60} height={70} />
            </View>
        </View>

        <ScrollView
            contentContainerStyle={{
                paddingTop: 20, paddingBottom: 20
            }}
        >
            <View style={styles.formStyle}>
                <ContactsImg width={340} height={200} style={styles.imgContact} />
                <Text style={styles.formText}>
                  {'\n\n'}
                    PPPIX coleta dados de contato para enviar informações de localização do seu smartphone de modo On-line ou Off-line, ou ainda mesmo quando o aplicativo está fechado ou fora de uso.{'\n\n'}
                    Estes dados são enviados aos seus contatos previamente selecionados, para que os mesmos possam acompanhar seu percurso em caso de eventual emergência.
                </Text>
                <Button
                    title="Avançar"
                    onPress={handleLogin}
                    isLoading={loading}
                    mt={5}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = EStyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: "2rem",
    backgroundColor: "#5372ef",
    height: "8.4rem",
  },
  content: {
    marginTop: "0.7rem",
  },
  logoImage: {
    width: "4rem",
    height: "4rem",
  },
  headerText: {
    fontSize: "1.5rem",
    color: "#fff",
    fontWeight: "bold",
    marginTop: "0.5rem",
  },
  titles: {
    fontSize: "1.5rem",
    color: "#888888",
    fontWeight: "bold",
    marginTop: "0.5rem",
  },
  formStyle: {
    paddingHorizontal: "2rem",
    marginTop: "1.5rem",
    justifyContent: 'center',
    alignItems: 'center'
  },
  formText: {
    fontSize: "1rem",
    color: "#9e9898",
  },
  formSenha: {
    marginTop: "1rem",
    borderWidth: 1,
    borderColor: "#c0d3ff",
    borderRadius: 30,
    paddingHorizontal: "1.5rem",
    width: "100%",
    height: 50,
  },
  formEmail: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#c0d3ff",
    borderRadius: 30,
    paddingHorizontal: 20,
    width: "100%",
    height: 50,
  },
  formForgot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  formCheckboxText: {
    fontSize: 14,
    fontWeight: "300",
  },
  passwordText: {
    color: "#b058d7",
    fontSize: 15,
  },
  rememberText: {
    fontSize: 18,
    fontWeight: "300",
  },
  imgContact: {
    alignItems: "center",
    justifyContent: "center"
  },
  formCreateAccount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: "1rem",
  },
  registerText: {
    color: "#b058d7",
    fontSize: 14,
  },
  noAccountText: {
    fontSize: 15,
    marginRight: "0.7rem",
    fontWeight: "300",
  },
  warningText: {
    fontSize: 9,
    marginRight: "0.7rem",
    fontWeight: "300",
  },
  containerButton: {
    width: "100%",
    borderRadius: 30,
    marginTop: 30,
    backgroundColor: "#7aa2ff",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
