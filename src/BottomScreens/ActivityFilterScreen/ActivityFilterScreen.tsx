import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import ActivityHeader from "../ActivityHeader/ActivityHeader";
import { AntDesign } from "@expo/vector-icons";
//@ts-ignore
import Icon from "../../assets/images/Icon.png";
//@ts-ignore
import ActivityAvatarOne from "../../assets/images/ActivityAvatarOne.png";
//@ts-ignore
import ActivityAvatarTwo from "../../assets/images/ActivityAvatarTwo.png";
import CustomTextInput from "../../TextInput/CustomTextInput";
import {
  ButtonPressesFilter,
  DashboardFilters,
  EntriesWithNotesFilter,
  EventNoteFilter,
  FlaggedEntriesFilter,
} from "../../DashboardFilters/dashboard";
import { Caption1 } from "../../common/Text";
import FilterTag from "../../DashboardFilters/FilterTag";
import { Size } from "../../theme/Size";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
interface Props {
  // filters: DashboardFilters;
  // onJournalEntriesTagPress(value: EventNoteFilter): void;
  // onEntriesWithNotesTagPress(value: EntriesWithNotesFilter): void;
  // onFlaggedEntriesTagPress(value: FlaggedEntriesFilter): void;
  // onButtonPressesTagPress(value: ButtonPressesFilter): void;
  // onSearchTextChanged(value: string): void;
}

const ActivityFilterScreen = (props: Props) => {
  const [showTimeFrame, setShowTimeFrame] = React.useState(false);
  const [showHouseHoldMembers, setShowHouseHoldMembers] = React.useState(false);
  const [showButtons, setShowButtons] = React.useState(false);
  const [showContext, setShowContext] = React.useState(false);
  const [showFilters, setShowFilters] = React.useState(false);

  const buttonData = [
    { id: 1, title: "Select All", color: "#6AD1E3" },
    { id: 2, title: "De-select ALL", color: "#6AD1E3" },
    { id: 3, title: "Accidental Interaction", color: "#6AD1E3" },
    { id: 4, title: "Asking Questions", color: "#6AD1E3" },
    { id: 5, title: "Experiment", color: "#6AD1E3" },
    { id: 6, title: "Narrate", color: "#6AD1E3" },
    { id: 7, title: "Studying Buttons", color: "#6AD1E3" },
    { id: 8, title: "Others", color: "#6AD1E3" },
  ];

  const renderButtons = () => {
    return buttonData.map((button) => (
      <TouchableOpacity
        key={button.id}
        style={[
          styles.button,
          { backgroundColor: button.color, width: button.title.length * 10 },
        ]}
      >
        <Text style={styles.buttonText}>{button.title}</Text>
      </TouchableOpacity>
    ));
  };

  const renderContextButtons = () => {
    return buttonData.map((button) => (
      <TouchableOpacity
        key={button.id}
        style={[
          styles.button,
          { backgroundColor: button.color, width: button.title.length * 10 },
        ]}
      >
        <Text style={styles.buttonText}>{button.title}</Text>
      </TouchableOpacity>
    ));
  };
  const renderFilterButtons = (filterTitle: any) => {
    const buttons = [
      { title: "Show", color: "#6AD1E3" },
      { title: "Hide", color: "#6AD1E3" },
      { title: `Show with ${filterTitle}`, color: "#6AD1E3" },
    ];

    return buttons.map((button, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.filterbutton, { backgroundColor: button.color }]}
      >
        <Text style={styles.FilterbuttonText}>{button.title}</Text>
      </TouchableOpacity>
    ));
  };
  const renderButtonPresses = () => {
    const buttons = [
      { title: "All", color: "#6AD1E3" },
      { title: "Single Button ", color: "#6AD1E3" },
      { title: `Multi Button`, color: "#6AD1E3" },
    ];

    return buttons.map((button, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.filterbutton, { backgroundColor: button.color }]}
      >
        <Text style={styles.FilterbuttonText}>{button.title}</Text>
      </TouchableOpacity>
    ));
  };
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleBackFilter = () => {
    navigation.navigate("Activity");
  };
  return (
    <View style={styles.container}>
      <ActivityHeader
        title={"Activity Filter"}
        icon="arrow-left"
        onBackPress={handleBackFilter}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
          <View style={styles.sectionContainerStyle}>
            <View style={styles.sectionStyle}>
              <Text style={styles.settingText}>Timeframe</Text>
              <TouchableOpacity
                onPress={() => setShowTimeFrame(!showTimeFrame)}
              >
                {showTimeFrame ? (
                  <AntDesign name="down" size={20} color="black" />
                ) : (
                  <AntDesign name="up" size={20} color="black" />
                )}
              </TouchableOpacity>
            </View>
            {showTimeFrame && (
              <>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.label}>Start Date</Text>
                  <CustomTextInput placeholder="DD/MM/YYYY" image={Icon} />
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.label}>End Date</Text>
                  <CustomTextInput placeholder="DD/MM/YYYY" image={Icon} />
                </View>
              </>
            )}
          </View>
          <View style={styles.sectionContainerStyle}>
            <View style={styles.sectionStyle}>
              <Text style={styles.settingText}>HouseHold Members</Text>
              <TouchableOpacity
                onPress={() => setShowHouseHoldMembers(!showHouseHoldMembers)}
              >
                {showHouseHoldMembers ? (
                  <AntDesign name="down" size={20} color="black" />
                ) : (
                  <AntDesign name="up" size={20} color="black" />
                )}
              </TouchableOpacity>
            </View>
            {showHouseHoldMembers && (
              <>
                <View style={{ marginTop: 20 }}>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image source={ActivityAvatarOne} />
                    <View style={{ flexDirection: "column" }}>
                      <Text style={styles.name}>Floyd Miles</Text>
                      <Text style={styles.professionStyle}>Teacher</Text>
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: 20 }}>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image source={ActivityAvatarTwo} />
                    <View style={{ flexDirection: "column" }}>
                      <Text style={styles.name}>Cookie</Text>
                      <Text style={styles.professionStyle}>Learner</Text>
                    </View>
                  </View>
                </View>
              </>
            )}
          </View>
          <View style={styles.sectionContainerStyle}>
            <View style={styles.sectionStyle}>
              <Text style={styles.settingText}>Buttons</Text>
              <TouchableOpacity onPress={() => setShowButtons(!showButtons)}>
                {showButtons ? (
                  <AntDesign name="down" size={20} color="black" />
                ) : (
                  <AntDesign name="up" size={20} color="black" />
                )}
              </TouchableOpacity>
            </View>
            {showButtons && (
              <>
                <View style={styles.buttonContainer}>{renderButtons()}</View>
              </>
            )}
          </View>
          <View style={styles.sectionContainerStyle}>
            <View style={styles.sectionStyle}>
              <Text style={styles.settingText}>Context</Text>
              <TouchableOpacity onPress={() => setShowContext(!showContext)}>
                {showContext ? (
                  <AntDesign name="down" size={20} color="black" />
                ) : (
                  <AntDesign name="up" size={20} color="black" />
                )}
              </TouchableOpacity>
            </View>
            {showContext && (
              <>
                <View style={styles.buttonContainer}>
                  {renderContextButtons()}
                </View>
              </>
            )}
          </View>
          <View style={styles.sectionContainerStyle}>
            <View style={styles.sectionStyle}>
              <Text style={styles.settingText}>More Filters</Text>
              <TouchableOpacity onPress={() => setShowFilters(!showFilters)}>
                {showFilters ? (
                  <AntDesign name="down" size={20} color="black" />
                ) : (
                  <AntDesign name="up" size={20} color="black" />
                )}
              </TouchableOpacity>
            </View>
            {showFilters && (
              <>
                <View>
                  <View style={styles.searchContainer}>
                    <AntDesign
                      name="search1"
                      size={20}
                      color="black"
                      style={styles.searchIcon}
                    />
                    <View style={styles.textInputContainer}>
                      <TextInput
                        autoCapitalize="none"
                        placeholder="Search..."
                        style={styles.textInput}
                      />
                    </View>
                  </View>

                  <View style={styles.filterTitleContainer}>
                    <Text style={styles.filterTitle}>Journal Entries</Text>
                    <View style={styles.buttonContainer}>
                      {renderFilterButtons("Journal Entries")}
                    </View>
                  </View>
                  <View style={styles.filterTitleContainer}>
                    <Text style={styles.filterTitle}>Entries with notes</Text>
                    <View style={styles.buttonContainer}>
                      {renderFilterButtons("Entries w/ notes")}
                    </View>
                  </View>
                  <View style={styles.filterTitleContainer}>
                    <Text style={styles.filterTitle}>Flagged Entries</Text>
                    <View style={styles.buttonContainer}>
                      {renderFilterButtons("Flagged Entries")}
                    </View>
                  </View>
                  <View style={styles.filterTitleContainer}>
                    <Text style={styles.filterTitle}>Button Presses</Text>
                    <View style={styles.buttonContainer}>
                      {renderButtonPresses()}
                    </View>
                  </View>
                </View>
              </>
            )}
          </View>
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity
              style={[styles.bottomButton, styles.resetButton]}
              // onPress={handleReset}
            >
              <Text style={styles.bottomResetText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.bottomButton, styles.saveButton]}
              // onPress={handleSave}
            >
              <Text style={styles.bottomButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ActivityFilterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2F3FB",
    flex: 1,
    position: "relative",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    margin: 0,
    padding: 20,
    width: "auto",
    height: "100%",
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
  },
  settingText: { color: "#006271", fontSize: 16, fontWeight: "bold" },
  sectionStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#666666",
  },
  sectionContainerStyle: {
    marginTop: 25,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#007180",
    marginLeft: 20,
  },
  professionStyle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 20,
  },

  button: {
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  filterTitleContainer: {
    marginBottom: 10,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#666666",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  FilterbuttonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  filterbutton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  textInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
  },
  bottomButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bottomButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 46,
    borderRadius: 8,
  },
  resetButton: {
    backgroundColor: "#F0F0F0",
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "#006271",
    marginLeft: 10,
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  bottomResetText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#006271",
  },
});
