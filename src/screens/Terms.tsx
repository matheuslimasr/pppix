import { useNavigation } from "@react-navigation/native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Checkbox, View, Alert, Center, VStack, HStack, Box } from "native-base";
import React, { useState } from "react";
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
import { useTogglePasswordVisibility } from "../components/useTogglePasswordVisibility";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "../components/Button";

export function Terms() {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.headerText}>Política de Privacidade</Text>
          <PPP width={60} height={70} />
        </View>
      </View>

      <ScrollView
          contentContainerStyle={{
            paddingTop: 20, paddingBottom: 20
          }}
        >
            <View style={styles.formStyle}>
                <Text style={styles.formText}>
        Todas as suas informações pessoais recolhidas serão usadas para ajudar a tornar a sua visita no nosso site e aplicativo uma experiência mais agradável possível e para nos ajudar a atender da melhor forma todos os interessados em nosso conteúdo.
        A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é muito importante para nós Todas as informações pessoais relativas a clientes e/ou visitantes que usem a plataforma do nosso site ppp.app.br serão tratadas em concordância com a Lei Geral de Proteção de Dados Pessoais (LGPD ou LGPDP), Lei no 13.709/2018.
        As informações pessoais recolhidas podem incluir seu nome, e-mail, número de telefone, cidade, estado e/ou números de documentos pessoais, caso seja necessário informá-los.
        O uso de nosso aplicativo PPP-S.O.S pressupõe a aceitação deste Acordo de privacidade.
        A equipe da PPP-S.O.S reserva-se ao direito de alterar este acordo sem aviso prévio. Assim, recomendamos que consulte a nossa política de privacidade com regularidade de forma a estar sempre atualizado.
        <Text style={styles.titles}>{'\n\n'}SEÇÃO 1 - Recursos de Rastreio{'\n\n'}</Text>
        O Rastreamento utiliza a coleta dados de localização para permitir o rastreamento do seu smartphone de modo On-line ou Off-line, ou ainda mesmo quando o aplicativo está fechado ou for a de uso.
        <Text style={styles.titles}>{'\n\n'}SEÇÃO 1 - O QUE FAREMOS COM ESTA INFORMAÇÃO?{'\n\n'}</Text>
        Os dados de latitude, longitude e velocidade são enviados ao sistema de rastreamento para que você mesmo ou outro usuário devidamente liberado passa acompanhar seu percurso em caso de eventual emergência.
        Mesmo que o seu celular esteja com o aplicativo fechado e/ou fora da área de cobertura GSM, o aparelho enviará os mesmos dados na próxima conexão disponível.
        <Text style={styles.titles}>{'\n\n'}SEÇÃO 2 - CONSENTIMENTO?{'\n\n'}</Text>
        Quando você fornece informaçõ es pessoais como nome, telefone, localização e endereço, apó s a realizaçã o de ações entendemos que você está de acordo com a coleta de dados para serem utilizados pela nossa empresa. E caso você queira retirar seu consentimento, como proceder?
        Se apó s você nos fornecer seus dados, você mudar de ideia, você pode retirar o seu consentimento para que possamosentraremcontato,paraacoleçãodedadoscontiń ua,usooudivulgaçãodesuasinformações,a qualquer momento, entrando em contato conosco em contato@ppp.app.br.
        Podemos divulgar suas informações pessoais caso sejamos obrigados pela lei para fazê-lo ou se você violar nossos Termos de Serviços.
        <Text style={styles.titles}>{'\n\n'}SEÇÃO 4 - SERVIÇOS DE TERCEIROS?{'\n\n'}</Text>
        Não vendemos, divulgamos ou disponibilizamos dados coletados a terceiros ou a parceiros, todos os dados apenas podem ser consultados no nosso sistema ou em busca vai integração com os devidos acessos restritos e seguros com SSL.
        A nossa política de privacidade não é aplicada a sites de terceiros, por isso, caso visite outro site a partir do nosso deverá ler a política de privacidade do mesmo. Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses mesmos sites.
        <Text style={styles.titles}>{'\n\n'}SEÇÃO 5 - SEGURANÇA{'\n\n'}</Text>
        Para proteger suas informaçõ es pessoais, tomamos precauçõ es razoá veis e seguimos as melhores prá ticas da indú stria para nos certificar que elas nã o serã o perdidas inadequadamente, usurpadas, acessadas, divulgadas, alteradasoudestruid́ as.
        Embora nenhum mé todo de transmissã o pela Internet ou armazenamento eletrô nico é 100% seguro, nó s seguimos todos os requisitos da PCI-DSS e implementamos padrõ es adicionais geralmente aceitos pela indú stria.
        <Text style={styles.titles}>{'\n\n'}SEÇÃO 6 - SISTEMA DE APLICATIVO{'\n\n'}</Text>
        Nosso sistema respeita a privacidade e sigilo total das informações compartilhadas pelo aplicativo ou nosso próprio hardware, todas as informações trafegam com SSL/HTTPS seguro e estão conforme as leis locais de tratamento de dados.
        Estas informações ficam armazenadas em local seguro e não são divulgadas ao público geral, apenas aos usuários que contratam a plataforma, com seus devidos acessos restritos.
        <Text style={styles.titles}>{'\n\n'}SEÇÃO 7 - ALTERAÇÕES PARA ESSA POLÍTICA DE PRIVACIDADE{'\n\n'}</Text>
        Reservamos o direito de modificar essa polit́ ica de privacidade a qualquer momento, entã o por favor, revise-a com frequê ncia. Alteraçõ es e esclarecimentos vã o surtir efeito imediatamente apó s sua publicaçã o. Se fizermos alterações de materiais para essa polit́ ica, iremos notificá-lo aqui que eles foram atualizados, para que você tenha ciência sobre quais informações coletamos, como as usamos, e sob que circunstâncias, se alguma, usamos e/ou divulgamos elas.
        Se nossa loja for adquirida ou fundida com outra empresa, suas informaçõ es podem ser transferidas para os novos proprietá rios para que possamos continuar a vender produtos para você .
        <Text style={styles.titles}>{'\n\n'}Seção 8 - Formulários{'\n\n'}</Text>
        Tal como outros websites, coletamos e utilizamos informação fornecida nos formulários, incluindo o seu endereço IP (Internet Protocol), dados pessoais que você disponibilize (CPF, RG, Endereço completo com CEP e outras informações que se façam necessárias para efetivar seu cadastro e/ou contato, além do tempo da sua visita e que páginas visitou dentro do nosso aplicativo.
        <Text style={styles.titles}>{'\n\n'}Seção 9 - Cookies{'\n\n'}</Text>
        Usamos cookies para oferecer uma melhor experiência de navegação, analisar o tráfego do site, publicidade, personalizar o conteúdo e para redirecionamento da página. O tratamento ocorrerá com base no Consentimento, sendo que não compartilhamos as informações coletadas com terceiros para finalidade diversa. Para saber mais sobre os dados coletados pelos cookies acesse nossa Política de Privacidade.
                </Text>
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
