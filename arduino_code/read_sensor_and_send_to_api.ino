#include <WiFiNINA.h>

int PRINT_RESP = 0;
int counter = 0;
char SSID[] = "d_boi";
char PASSWORD[] = "RaduIsGay";
char USER_ID[] = "\"user_id\":\"arduin0\","; // This is "unique" for the device
WiFiClient client;

void setup() {
  Serial.begin(9600);
  Serial.println("Device starting...");
  connectToSensor();
  connectToWifi();
}

void connectToSensor() {
  Serial.println("Connecting to light sensor...");
}

void connectToWifi() {
  Serial.println("Connecting to WiFi...");
  while (WiFi.begin(SSID, PASSWORD) != WL_CONNECTED) {
    delay(1000);
    Serial.println("Still trying to connect to WiFi...");
  }
  Serial.println("Connected to WiFi!");
}

void loop() {
  int reading = getSensorReading();
  sendReadingToAPI(reading);
  delay(1000);
}

int getSensorReading() {
  int reading = analogRead(A0);
  Serial.print("Sensor value: ");
  Serial.println(reading);
  return reading;
}

void sendReadingToAPI(int reading) {
  if (counter < 30) {
    counter++;
    return;
  }
  counter = 0;
  if (client.connect("www.europe-west1-analog-delight-400119.cloudfunctions.net", 80)) {
    Serial.println("Connected to API");
    String json = "{";
    json += USER_ID;
    json += "\"reading\": \"" + String(reading) + "\"";
    json += "}";
    client.println("POST /push-data HTTP/1.1");
    client.println("Host: europe-west1-analog-delight-400119.cloudfunctions.net");
    client.println("Content-Type: application/json");
    client.print("Content-Length: ");
    client.println(json.length());
    client.println();
    client.println(json);
    delay(1000);
    while (client.available()) {
      char c = client.read();
      if (PRINT_RESP) 
        Serial.print(c);
    }
    client.stop();
    Serial.println("Disconnected from API");
  } else {
    Serial.println("Connection to API failed");
  }
}
