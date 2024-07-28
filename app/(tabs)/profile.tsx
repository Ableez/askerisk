import { ThemedView } from "@/components/ThemedView";
import AsteriskIcon from "@/components/asterisk";
import PostItem from "@/components/post-item";
import ProfileHeader from "@/components/profile-header";
import SignoutSheet from "@/components/signout-sheet";
import Button from "@/components/ui/button";
import { currentUser } from "@/utils/mockAuth";
import { postData } from "@/utils/new-data";
import { PostType } from "@/utils/th";
import { UserType } from "@/utils/user";
import { useAuth, useSession, useUser } from "@clerk/clerk-expo";
import {
  BottomSheetModal,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { ArrowLeft, Asterisk } from "lucide-react-native";
import React, { useCallback, useRef, useState } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const ProfileScreen = (props: Props) => {
  const posts = postData.filter((p) => currentUser.posts.includes(p.id));
  const { isSignedIn } = useSession();
  const router = useRouter();
  const { dark } = useTheme();
  const { signOut } = useAuth();
  const { user } = useUser();
  // const [collectUserInfo, setCollectUserInfo] = useState(false);
  const personaDetailsRef = useRef<BottomSheetModal>(null);
  const [sheetIndex, setSheetIndex] = useState(-1);
  const [personalDetails, setPersonalDetails] = useState({
    username: "",
    firstName: "",
    lastName: "",
  });
  const [bio, setBio] = useState("");

  const keyExtractor = (item: PostType) => item.id + "_POST-ITEM";

  const renderItems = useCallback(
    ({ item }: { item: PostType; index: number }) => {
      const user = currentUser;
      return <PostItem item={item} user={user as UserType} />;
    },
    []
  );

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const isPersonalDetailsComplete = () => {
    return (
      personalDetails.username &&
      personalDetails.firstName &&
      personalDetails.lastName
    );
  };

  const isBioComplete = () => {
    return bio.trim().length > 0;
  };

  const handleNext = () => {
    if (sheetIndex === -1 && isPersonalDetailsComplete()) {
      setSheetIndex(0);
    } else if (sheetIndex === 0 && isBioComplete()) {
      Alert.alert(
        "Profile Updated",
        "Your profile has been successfully updated."
      );
    }
  };

  const renderPersonalDetails = () => (
    <View style={{ gap: 48 }}>
      <View>
        <Text
          variant="headlineLarge"
          style={{ fontWeight: "800", textAlign: "center" }}
        >
          Edit Profile
        </Text>
        <Text variant="bodyMedium" style={{ textAlign: "center" }}>
          Customize your Asterisk profile
        </Text>
      </View>
      <View>
        <View style={[styles.inputContainer, styles.firstInputContainer]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Username</Text>
            <BottomSheetTextInput
              style={styles.input}
              cursorColor={"#000"}
              placeholder="@ableez"
              value={personalDetails.username}
              onChangeText={(text) =>
                setPersonalDetails({ ...personalDetails, username: text })
              }
            />
          </View>
          <Asterisk size={32} color={dark ? "#ccc" : "#999"} />
        </View>
        <View style={styles.inputContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Firstname</Text>
            <BottomSheetTextInput
              style={styles.input}
              cursorColor={"#000"}
              placeholder="Abdullahi"
              value={personalDetails.firstName}
              onChangeText={(text) =>
                setPersonalDetails({ ...personalDetails, firstName: text })
              }
            />
          </View>
        </View>
        <View style={[styles.inputContainer, styles.lastInputContainer]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Lastname</Text>
            <BottomSheetTextInput
              style={styles.input}
              cursorColor={"#000"}
              placeholder="Ahmed"
              value={personalDetails.lastName}
              onChangeText={(text) =>
                setPersonalDetails({ ...personalDetails, lastName: text })
              }
            />
          </View>
        </View>
      </View>
    </View>
  );

  const renderBio = () => (
    <View>
      <View style={[styles.inputContainer, { borderRadius: 16 }]}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Bio</Text>
          <BottomSheetTextInput
            style={styles.input}
            cursorColor={"#000"}
            multiline
            numberOfLines={3}
            placeholder="Tell us a little about yourself"
            value={bio}
            onChangeText={setBio}
          />
        </View>
      </View>
    </View>
  );

  const isButtonDisabled = () => {
    return sheetIndex === -1 ? !isPersonalDetailsComplete() : !isBioComplete();
  };

  if (!isSignedIn) {
    return (
      <SafeAreaView>
        <ThemedView
          style={{
            height: Dimensions.get("window").height,
            padding: 16,
            gap: 24,
            paddingTop: 84,
          }}
        >
          <AsteriskIcon />
          <Text
            variant="displayMedium"
            style={{ textAlign: "center", fontWeight: "700" }}
          >
            Sign in to your account
          </Text>

          <Button
            onPress={() => {
              router.navigate("/login");
              signOut();
            }}
            title="Sign in"
            style={{ marginTop: 32 }}
          />
        </ThemedView>
      </SafeAreaView>
    );
  }

  if (!user?.firstName && !user?.lastName && !user?.username) {
    return (
      <SafeAreaView>
        <BottomSheetModal
          ref={personaDetailsRef}
          animationConfigs={{
            mass: 0.4,
          }}
          index={0}
          snapPoints={["90%", "95%"]}
          onChange={handleSheetChanges}
          animateOnMount={true}
          enablePanDownToClose={true}
          style={styles.bottomSheet}
          footerComponent={() => {
            return sheetIndex === 0 ? (
              <Pressable
                onPress={() => setSheetIndex(-1)}
                style={styles.backButton}
              >
                <ArrowLeft size={20} color={"#333"} />
              </Pressable>
            ) : null;
          }}
        >
          <BottomSheetView style={{ flex: 1 }}>
            <View style={styles.container}>
              <View style={styles.iconContainer}>
                <Asterisk
                  size={80}
                  strokeWidth={2.6}
                  color={dark ? "#fff" : "#000"}
                />
              </View>

              {sheetIndex === -1 ? renderPersonalDetails() : null}
              {sheetIndex === 0 ? renderBio() : null}

              <Button
                onPress={handleNext}
                disabled={isButtonDisabled()}
                style={{
                  opacity: isButtonDisabled() ? 0.4 : 1,
                }}
                title={sheetIndex === -1 ? "Next" : "Submit"}
              />
            </View>
          </BottomSheetView>
        </BottomSheetModal>

        <ThemedView
          style={{
            padding: 16,
            height: Dimensions.get("window").height,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            gap: 54,
          }}
        >
          <Text>{user?.emailAddresses[0]?.emailAddress}</Text>
          <Text
            variant="headlineLarge"
            style={{ fontWeight: "700", textAlign: "center" }}
          >
            You're new here, finish setting up your profile
          </Text>
          <Button
            title="Create profile"
            onPress={() => personaDetailsRef.current?.present()}
          />

          <View style={{ marginTop: 62, width: "100%" }}>
            <SignoutSheet />
          </View>
        </ThemedView>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <FlatList
            data={posts}
            keyExtractor={keyExtractor}
            renderItem={renderItems}
            ListHeaderComponent={() => (
              <View
                style={{ borderBottomWidth: 0.2, borderBottomColor: "#ccc" }}
              >
                <ProfileHeader />
                <Text
                  variant="titleLarge"
                  style={{ fontWeight: "700", padding: 16 }}
                >
                  Posts
                </Text>
              </View>
            )}
            contentContainerStyle={{
              paddingBottom: 16,
            }}
          />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: "#222",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  container: {
    gap: 38,
    padding: 16,
    paddingTop: 42,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderWidth: 0.4,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  lastInputContainer: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  firstInputContainer: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  label: {
    color: "#444",
    fontSize: 12,
  },
  input: {
    fontSize: 17,
  },
  backButton: {
    padding: 12,
    borderRadius: 100,
    position: "absolute",
    top: 8,
    left: 16,
    backgroundColor: "#fff",
  },
});
