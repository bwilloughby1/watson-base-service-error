import { IamAuthenticator } from "ibm-watson/auth";
import SpeechToTextV1 from "ibm-watson/speech-to-text/v1";

const watsonTest = () => {
  const authenticator = new IamAuthenticator({
    apikey: "<Any Key>"
  });

  const stt = new SpeechToTextV1({
    authenticator,
    serviceUrl: "<Any WSS URL>"
  });
};

watsonTest();
