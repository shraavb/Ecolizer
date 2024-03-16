#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include "yl69.h"
#include "DHT.h"

#define SCREEN_WIDTH 128 
#define SCREEN_HEIGHT 64 
#define OLED_RESET     -1 
#define DHTPIN 4
#define DHTTYPE DHT22

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

const int SensorPin = A0;
int soilMoistureValue = 0;
int soilmoisturepercent=0;
float hic = 0;
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  if(!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
    Serial.println(F("SSD1306 allocation failed"));
    for(;;);                         
  }
}

void loop() {
    #temperatureviadht22
    float t = dht.readTemperature();

    if (isnan(h) || isnan(t) || isnan(f)) {
        Serial.println(F("Failed to read from DHT sensor!"));
        return;
    }

    float hic = dht.computeHeatIndex(t, h, false);

    Serial.print(F("Temperature (%): "));
    Serial.print(t);
    Serial.print(F("°C "));

    display.setCursor(45,0);
    display.setTextSize(2);
    display.setTextColor(WHITE);
    display.println("Temperature");
    display.setCursor(20,15);  
    display.setTextSize(2);
    display.setTextColor(WHITE);
    display.println("(%)");
    
    display.setCursor(30,40);
    display.setTextSize(3);
    display.setTextColor(WHITE);
    display.println(hic);
    display.setCursor(70,40);
    display.setTextSize(3);
    display.println(" %");
    display.display();

    soilMoistureValue = analogRead(SensorPin);
    soilmoisturepercent = (100 - ((sensor_analog/4095.00) * 100 ));
    Serial.print(soilmoisturepercent);
    Serial.println("%");
    
    display.setCursor(45,0);
    display.setTextSize(2);
    display.setTextColor(WHITE);
    display.println("Soil");
    display.setCursor(20,15);  
    display.setTextSize(2);
    display.setTextColor(WHITE);
    display.println("Moisture");
    
    display.setCursor(30,40);
    display.setTextSize(3);
    display.setTextColor(WHITE);
    display.println(soilmoisturepercent);
    display.setCursor(70,40);
    display.setTextSize(3);
    display.println(" %");
    display.display();

    delay(5000);
    display.clearDisplay();
}
