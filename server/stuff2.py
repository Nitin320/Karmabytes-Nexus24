from cvzone.ClassificationModule import Classifier
import cv2

cap = cv2.VideoCapture(0)  # Initialize video capture
path = "./Resources2/Model"
maskClassifier = Classifier(f'{path}/keras_model.h5', f'{path}/labels.txt')

while True:
    _, img = cap.read()  # Capture frame-by-frame
    prediction = maskClassifier.getPrediction(img)
    if prediction == "Apple":
        print("Biodegradable")
    elif prediction == "Vegetable leaf":
        print("Biodegradable")
    cv2.imshow("Image", img)
    cv2.waitKey(1)  # Wait for a key press