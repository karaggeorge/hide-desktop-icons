import Cocoa

let arguments = CommandLine.arguments.dropFirst()

if arguments.isEmpty {
  print("Please pass a filename")
  exit(1)
}

let imagePath = arguments.first!
let screenSize = CGDisplayBounds(CGMainDisplayID())
let screenWidth = screenSize.width
let screenHeight = screenSize.height

func createWindow() {
  let window = NSWindow(
    contentRect: CGRect(x: 0, y: 0, width: screenWidth, height: screenHeight),
    styleMask: .titled,
    backing: .buffered,
    defer: true
  )

  window.level = NSWindow.Level(Int(CGWindowLevelForKey(.desktopIconWindow)))
  window.collectionBehavior = .stationary
  window.orderFrontRegardless()
  window.styleMask = .borderless
  window.setFrame(CGRect(x: 0, y: 0, width: screenWidth, height: screenHeight), display: true)

  let view = window.contentView!
  let imageView = NSView(frame: view.frame)

  // Get the image to fill the view
  imageView.layer = CALayer()
  imageView.layer?.contentsGravity = kCAGravityResizeAspectFill
  imageView.layer?.contents = NSImage(contentsOfFile: imagePath)
  imageView.wantsLayer = true

  view.addSubview(imageView)

  NSApp.run()
}

createWindow()
