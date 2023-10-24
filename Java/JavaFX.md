# JavaFX

**What is the purpose of JavaFX?**
JavaFx is a software platform for creating and delivering desktop applications, as well as rich internet applications (RIAs) that can run across a wide variety of devices. JavaFX is intended to replace Swing as the standard GUI library for Java SE, but both will be included for the foreseeable future.

**The basic structure of JavaFx:**
- **Application:** The main class for a JavaFX application. The start() method is the main entry point for all JavaFX applications.
- **Stage:** The top-level JavaFX container. The primary stage is constructed by the platform.
- **Scene:** The container for all content. The JavaFX Scene class is the container for all content in a scene graph. The background of the scene is filled as specified by the fill property.
- **Nodes:** Nodes are the elements that make up a scene graph. Nodes can be one of two types: a leaf node or a branch node.

**The basic steps to build a JavaFx application:**
1. Create a class that extends Application.
2. Override the start() method.
3. Create a stage and a scene.
4. Add nodes to the scene.
5. Show the stage.

## How to get started with JavaFX
- **import:** Import the necessary JavaFX packages, including javafx.application.Application, javafx.stage.Stage, javafx.scene.Scene, and javafx.scene.control.Button.
- + **Application:** The main class for all JavaFX applications.
- + **Stage:** The top-level container that hosts a scene.
- + **Scene:** The container for all content.
- + **Button:** A control that triggers an event when clicked.

```java
package testjavafx;

import javafx.application.Application; 
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.Pane;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Circle;
import javafx.stage.Stage;

public class TestJavaFx extends Application{
	
	public void start(Stage stage) {
		// Define a circle(Node)
		Circle circle = new Circle();
		circle.setRadius(50);
		circle.setFill(Color.CYAN);
		
		// Define a label(Node)
		Label label = new Label("JavaFX");
		
		// Define the layout(Pane)
		Pane rootpane = new StackPane();
		// Add nodes to layout
		rootpane.getChildren().add(circle);
		rootpane.getChildren().add(label);
		
		// Define the scene and add the layout to the scene
		Scene scene = new Scene(rootpane, 400, 400);
		
		stage.setTitle("My first JavaFx");
		stage.setScene(scene);
		stage.show();
		
	}
	
	public static void main(String[] args) {
		launch(args);
	}

}
```

