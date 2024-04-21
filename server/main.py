import os
import cv2
import cvzone
from cvzone.ClassificationModule import Classifier

# Initialize classifier
classifier = Classifier('Resources/Model/keras_model.h5', 'Resources/Model/labels.txt')

# Load waste and bin images
imgWasteList = [cv2.imread(os.path.join('Resources/Waste', path), cv2.IMREAD_UNCHANGED) for path in os.listdir('Resources/Waste')]
imgBinsList = [cv2.imread(os.path.join('Resources/Bins', path), cv2.IMREAD_UNCHANGED) for path in os.listdir('Resources/Bins')]

# Mapping of waste class to bin class
classDic = {0: None, 1: 0, 2: 0, 3: 3, 4: 3, 5: 1, 6: 1, 7: 2, 8: 2}

# Main loop
cap = cv2.VideoCapture(0)  # Initialize video capture object
imgArrow = cv2.imread('Resources/arrow.png', cv2.IMREAD_UNCHANGED)  # Load arrow image

while True:
    _, img = cap.read()  # Capture a frame from the video
    imgResize = cv2.resize(img, (454, 340))
    imgBackground = cv2.imread('Resources/background.jpg')

    # Get prediction from classifier
    predection = classifier.getPrediction(img)
    classID = predection[1]

    # Overlay waste image and arrow if class is not recyclable
    if classID != 0:
        imgBackground = cvzone.overlayPNG(imgBackground, imgWasteList[classID - 1], (909, 127))
        imgBackground = cvzone.overlayPNG(imgBackground, imgArrow, (978, 320))
        classIDBin = classDic[classID]

    # Overlay bin image
    imgBackground = cvzone.overlayPNG(imgBackground, imgBinsList[classIDBin], (895, 374))

    # Overlay resized input image
    imgBackground[148:148 + 340, 159:159 + 454] = imgResize

    # Display output
    cv2.imshow("Output", imgBackground)
    cv2.waitKey(1)
