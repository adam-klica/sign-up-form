import "./App.css";
import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Select,
  Grid,
  GridItem,
  Input,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { sampleData } from "./sampleData";
import { useState, useContext } from "react";
import monkey from "./assets/monkey.png";
import monkeyDance from "./assets/monkeydance.gif";
import en from "./assets/en.png";
import sr from "./assets/sr.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  firstNameValidator,
  lastNameValidator,
  usernameValidtor,
  emailValidator,
  dateValidator,
  genderValidator,
  passwordValidator,
  passwordConfirmValidator,
  phoneValidator,
  addressValidator,
  cityValidator,
  countryCodeValidator,
} from "./validators";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Translator, Translate } from "react-auto-translate";
import { UserContext } from "./userContext";

const Page = () => {
  const {
    username1,
    fname1,
    lname1,
    email1,
    date1,
    gender1,
    password1,
    passwrodConf1,
    phone1,
    address1,
    city1,
  } = useContext(UserContext);

  const [username, setUsername] = username1;
  const [fname, setFname] = fname1;
  const [lname, setLname] = lname1;
  const [email, setEmail] = email1;
  const [date, setDate] = date1;
  const [gender, setGender] = gender1;
  const [password, setPassword] = password1;
  const [passwrodConf, setPasswordConf] = passwrodConf1;
  const [phone, setPhone] = phone1;
  const [address, setAddress] = address1;
  const [city, setCity] = city1;
  const [countryCode, setCountryCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [firstLng, setFirstLng] = useState("");
  const [seccondLng, setSeccondLng] = useState("");
  const [isLangClicked, setIsLangClicked] = useState(false);

  const { nextStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const content1 = (
    <Flex py={2}>
      <Text>Basic Informations</Text>
    </Flex>
  );

  const content2 = (
    <Flex py={2}>
      <Text>Additional Informations</Text>
    </Flex>
  );

  const steps = [
    { label: "Step 1", content: content1 },
    { label: "Step 2", content: content2 },
  ];
  const stepHandler = () => {
    if (activeStep === steps.length) {
      setIsFirstStep(true);
      setUsername("");
      setFname("");
      setLname("");
      setEmail("");
      setDate("");
      setGender("");
      setPassword("");
      setPasswordConf("");
      setPhone("");
      setAddress("");
      setCity("");
      setCountryCode("");
      reset();
      return;
    }
    if (
      isFirstStep &&
      usernameValidtor(username) != false &&
      firstNameValidator(fname) != false &&
      lastNameValidator(lname) != false &&
      emailValidator(email) != false &&
      dateValidator(date) != false &&
      genderValidator(gender) != false &&
      passwordValidator(password) != false &&
      passwordConfirmValidator(password, passwrodConf) != false
    ) {
      setIsLoading(true);
      setTimeout(function () {
        nextStep();
        setIsFirstStep(false);
      }, 3000);
      setTimeout(function () {
        setIsLoading(false);
      }, 3200);
    }

    if (
      !isFirstStep &&
      phoneValidator(phone) != false &&
      addressValidator(address) != false &&
      cityValidator(city) != false &&
      countryCodeValidator(countryCode) != false
    ) {
      nextStep();
    }
  };

  const cacheProvider = {
    get: (language, key) =>
      ((JSON.parse(localStorage.getItem("translations")) || {})[key] || {})[
        language
      ],
    set: (language, key, value) => {
      const existing = JSON.parse(localStorage.getItem("translations")) || {
        [key]: {},
      };
      existing[key] = { ...existing[key], [language]: value };
      localStorage.setItem("translations", JSON.stringify(existing));
    },
  };

  return (
    <Box
      className="app"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Translator
        cacheProvider={cacheProvider}
        from={isLangClicked === false ? "" : firstLng}
        to={isLangClicked === false ? "" : seccondLng}
        googleApiKey=""
      >
        <Box
          backgroundColor="white"
          width={800}
          height={700}
          borderWidth="3px"
          borderColor="blue.400"
          borderTopRadius={40}
          position="relative"
        >
          <Box position="relative">
            <img className="monkey" src={monkey}></img>
          </Box>

          <Box className="steps">
            <Steps orientation="vertical" activeStep={activeStep}>
              {steps.map(({ label, content }, index) => (
                <Step
                  width="100%"
                  label={label}
                  key={label}
                  color="whiteAlpha.900"
                >
                  <Text>{content}</Text>
                </Step>
              ))}
            </Steps>
          </Box>
          <Box
            paddingTop={4}
            paddingBottom={4}
            backgroundColor="#7b953b"
            ml="-0.5"
            mr="-0.5"
            mt="-0.5"
            borderRadius={40}
            position="relative"
          >
            <Box
              position="absolute"
              right="14"
              onClick={() => {
                if (!isLangClicked) {
                  setIsLangClicked(true);
                }
                if (firstLng === "en") {
                  setFirstLng("sr");
                } else setFirstLng("en");
                if (seccondLng === "sr") {
                  setSeccondLng("en");
                } else setSeccondLng("sr");
              }}
            >
              {!isLangClicked && (
                <Box>
                  <img src={en} width="50" className="language"></img>
                </Box>
              )}
              {firstLng === "sr" && (
                <Box>
                  <img src={en} width="50" className="language"></img>
                </Box>
              )}
              {firstLng === "en" && (
                <Box>
                  <img src={sr} width="55" className="language"></img>
                </Box>
              )}
            </Box>
            <Text
              textAlign="center"
              fontSize="3xl"
              fontWeight="thin"
              color="white"
            >
              <Translate>Sign Up Form</Translate>
            </Text>
          </Box>
          {isFirstStep && (
            <Center>
              <Grid
                paddingTop={35}
                paddingBottom={35}
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={4}
              >
                {sampleData.fields.map((obj) => {
                  if (obj.code == "fname") {
                    return (
                      <GridItem>
                        <FormControl
                          isRequired={obj.required}
                          width={270}
                          bg="gray.50"
                          paddingLeft={3}
                          paddingRight={3}
                          paddingTop={1}
                          paddingBottom={1}
                          borderRadius={10}
                          borderWidth={2}
                        >
                          <FormLabel>
                            <Translate>{obj.name}</Translate>
                          </FormLabel>
                          <Input
                            variant="flushed"
                            placeholder={obj.name}
                            onChange={(e) => {
                              setFname(e.target.value);
                            }}
                          />
                        </FormControl>
                      </GridItem>
                    );
                  }
                  if (obj.code == "lname") {
                    return (
                      <GridItem>
                        <FormControl
                          isRequired={obj.required}
                          width={270}
                          bg="gray.50"
                          paddingLeft={3}
                          paddingRight={3}
                          paddingTop={1}
                          paddingBottom={1}
                          borderRadius={10}
                          borderWidth={2}
                        >
                          <FormLabel>
                            <Translate>{obj.name}</Translate>
                          </FormLabel>
                          <Input
                            variant="flushed"
                            placeholder={obj.name}
                            onChange={(e) => {
                              setLname(e.target.value);
                            }}
                          />
                        </FormControl>
                      </GridItem>
                    );
                  }
                  if (obj.code == "username") {
                    return (
                      <GridItem colSpan={2}>
                        <FormControl
                          isRequired={obj.required}
                          htmlSize={66}
                          width="auto"
                          bg="gray.50"
                          paddingLeft={3}
                          paddingRight={3}
                          paddingTop={1}
                          paddingBottom={1}
                          borderRadius={10}
                          borderWidth={2}
                        >
                          <FormLabel>
                            <Translate>{obj.name}</Translate>
                          </FormLabel>
                          <Input
                            variant="flushed"
                            placeholder={obj.name}
                            htmlSize={66}
                            width="auto"
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                          />
                        </FormControl>
                      </GridItem>
                    );
                  }
                  if (obj.code == "email") {
                    return (
                      <GridItem>
                        <FormControl
                          isRequired={obj.required}
                          width={270}
                          bg="gray.50"
                          paddingLeft={3}
                          paddingRight={3}
                          paddingTop={1}
                          paddingBottom={1}
                          borderRadius={10}
                          borderWidth={2}
                        >
                          <FormLabel>{obj.name}</FormLabel>
                          <Input
                            variant="flushed"
                            placeholder={obj.name}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </FormControl>
                      </GridItem>
                    );
                  }
                  if (obj.code == "birthdate") {
                    return (
                      <GridItem>
                        <FormControl
                          isRequired={obj.required}
                          width={270}
                          bg="gray.50"
                          paddingLeft={3}
                          paddingRight={3}
                          paddingTop={1}
                          paddingBottom={1}
                          borderRadius={10}
                          borderWidth={2}
                        >
                          <FormLabel>
                            <Translate>Birth Date</Translate>
                          </FormLabel>
                          <Input
                            type="date"
                            variant="flushed"
                            placeholder={obj.name}
                            onChange={(e) => {
                              setDate(e.target.value);
                            }}
                          />
                        </FormControl>
                      </GridItem>
                    );
                  }
                  if (obj.code == "gender") {
                    return (
                      <GridItem colSpan={2}>
                        <FormControl
                          isRequired={obj.required}
                          bg="gray.50"
                          paddingLeft={3}
                          paddingRight={3}
                          paddingTop={1}
                          paddingBottom={1}
                          borderRadius={10}
                          borderWidth={2}
                          htmlSize={66}
                          width="auto"
                        >
                          <FormLabel htmlFor="gender">
                            <Translate>Gender</Translate>
                          </FormLabel>
                          <Select
                            id="gender"
                            placeholder={
                              <Translate>Select your gender</Translate>
                            }
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                          >
                            {obj.valueList.map((item) => {
                              return (
                                <option key={item.name}>
                                  <Translate>{item.name}</Translate>
                                </option>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </GridItem>
                    );
                  }
                  if (obj.code == "password") {
                    return (
                      <GridItem>
                        <FormControl
                          isRequired={obj.required}
                          width={270}
                          bg="gray.50"
                          paddingLeft={3}
                          paddingRight={3}
                          paddingTop={1}
                          paddingBottom={1}
                          borderRadius={10}
                          borderWidth={2}
                        >
                          <FormLabel>
                            <Translate>{obj.name}</Translate>
                          </FormLabel>
                          <Input
                            type="password"
                            variant="flushed"
                            placeholder={obj.name}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </FormControl>
                      </GridItem>
                    );
                  }
                  if (obj.code == "password_confirm") {
                    return (
                      <GridItem>
                        <FormControl
                          isRequired={obj.required}
                          width={270}
                          bg="gray.50"
                          paddingLeft={3}
                          paddingRight={3}
                          paddingTop={1}
                          paddingBottom={1}
                          borderRadius={10}
                          borderWidth={2}
                        >
                          <FormLabel>
                            <Translate>{obj.name}</Translate>
                          </FormLabel>
                          <Input
                            type="password"
                            variant="flushed"
                            placeholder={obj.name}
                            onChange={(e) => {
                              setPasswordConf(e.target.value);
                            }}
                          />
                        </FormControl>
                      </GridItem>
                    );
                  }
                })}
              </Grid>
            </Center>
          )}
          {!isFirstStep && activeStep !== steps.length && (
            <Center>
              <Grid
                paddingTop={35}
                paddingBottom={35}
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={4}
              >
                {sampleData.fields.map((obj) => {
                  if (obj.code == "phone") {
                    return (
                      <GridItem>
                        <FormControl
                          isRequired={obj.required}
                          width={270}
                          bg="gray.50"
                          paddingLeft={3}
                          paddingRight={3}
                          paddingTop={1}
                          paddingBottom={1}
                          borderRadius={10}
                          borderWidth={2}
                        >
                          <FormLabel>
                            <Translate>{obj.name}</Translate>
                          </FormLabel>
                          <Input
                            variant="flushed"
                            placeholder={obj.name}
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                          />
                        </FormControl>
                      </GridItem>
                    );
                  }
                  if (obj.code == "address") {
                    return (
                      <GridItem>
                        <FormControl
                          isRequired={obj.required}
                          width={270}
                          bg="gray.50"
                          paddingLeft={3}
                          paddingRight={3}
                          paddingTop={1}
                          paddingBottom={1}
                          borderRadius={10}
                          borderWidth={2}
                        >
                          <FormLabel>
                            <Translate>{obj.name}</Translate>
                          </FormLabel>
                          <Input
                            variant="flushed"
                            placeholder={obj.name}
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                          />
                        </FormControl>
                      </GridItem>
                    );
                  }
                  if (obj.code == "city") {
                    return (
                      <GridItem>
                        <FormControl
                          isRequired={obj.required}
                          width={270}
                          bg="gray.50"
                          paddingLeft={3}
                          paddingRight={3}
                          paddingTop={1}
                          paddingBottom={1}
                          borderRadius={10}
                          borderWidth={2}
                        >
                          <FormLabel>
                            <Translate>{obj.name}</Translate>
                          </FormLabel>
                          <Input
                            variant="flushed"
                            placeholder={obj.name}
                            onChange={(e) => {
                              setCity(e.target.value);
                            }}
                          />
                        </FormControl>
                      </GridItem>
                    );
                  }
                  if (obj.code == "countrycode") {
                    return (
                      <GridItem>
                        <FormControl
                          isRequired={obj.required}
                          bg="gray.50"
                          paddingLeft={3}
                          paddingRight={3}
                          paddingTop={1}
                          paddingBottom={1}
                          borderRadius={10}
                          borderWidth={2}
                          htmlSize={66}
                          width="auto"
                        >
                          <FormLabel htmlFor="country">
                            <Translate>Country code</Translate>
                          </FormLabel>
                          <Select
                            id="gender"
                            placeholder="Select country code"
                            onChange={(e) => {
                              setCountryCode(e.target.value);
                            }}
                          >
                            {obj.valueList.map((item) => {
                              return (
                                <option key={item.name} value={item.value}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </GridItem>
                    );
                  }
                })}
              </Grid>
            </Center>
          )}
          {activeStep === steps.length && (
            <Box pt="7">
              <Center>
                <img src={monkeyDance}></img>
              </Center>
              <Text textAlign="center" fontWeight="semibold" fontSize="2xl">
                <Translate> Thank you for your time :)</Translate>
              </Text>
            </Box>
          )}
          <Center>
            <Box paddingBottom="5" position="absolute" bottom="1">
              <Button
                isLoading={isLoading}
                size="lg"
                onClick={stepHandler}
                variant="outline"
                colorScheme="green"
                rightIcon={
                  activeStep === steps.length ? "" : <ArrowForwardIcon />
                }
              >
                {activeStep === steps.length ? (
                  <Translate>Reset</Translate>
                ) : (
                  <Translate>Next</Translate>
                )}
              </Button>
            </Box>
          </Center>
        </Box>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Translator>
    </Box>
  );
};

export default Page;
