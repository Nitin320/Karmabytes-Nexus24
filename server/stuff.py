from cvzone.ClassificationModule import Classifier
import cv2

cap = cv2.VideoCapture(0)  # Initialize video capture
path = "./Resources/Model"
maskClassifier = Classifier(f'{path}/keras_model.h5', f'{path}/labels.txt')

while True:
    _, img = cap.read()  # Capture frame-by-frame
    prediction = maskClassifier.getPrediction(img)
    cv2.imshow("Image", img)
    if(prediction[1]==0):
        print("Nothing")
    elif(prediction[1]==1):
        print("Zip-top cans - Non Biodegradable")
    elif(prediction[1]==2):
        print("Newspaper")
    elif(prediction[1]==3):
        print("Old shoes")
    elif(prediction[1]==4):
        print("Watercolor pen")
    elif(prediction[1]==5):
        print("Disinfectant")
    elif(prediction[1]==6):
        print("Battery")
    elif(prediction[1]==7):
        print("Vegetable leaf")
    cv2.waitKey(1)  # Wait for a key press