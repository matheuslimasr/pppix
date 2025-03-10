import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AskForContacts } from "../screens/AskForContacts";
import { CreateAccount } from "../screens/CreateAccount";

import ForgotPassword from "../screens/ForgetPassword/Index";
import PassLoading from "../screens/ForgetPassword/PassLoading";
import SuccessPassword from "../screens/ForgetPassword/Success/Index";
import VerifyPassword from "../screens/ForgetPassword/Verify/Index";
import { Login } from "../screens/Login";
import { Terms } from "../screens/Terms";

const Stack = createNativeStackNavigator();

export function AuthRoutesApp() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signIn" component={Login} />
      <Stack.Screen name="signUp" component={CreateAccount} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerifyPassword" component={VerifyPassword} />
      <Stack.Screen name="SuccessPassword" component={SuccessPassword} />
      <Stack.Screen name="PassLoading" component={PassLoading} />
      <Stack.Screen name="terms" component={Terms} />
    </Stack.Navigator>
  );
}