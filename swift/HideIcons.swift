import Cocoa
import Quartz

if CommandLine.argc < 2 {
    print("Please pass a filename")
    exit(1)
}

let imagePath = CommandLine.arguments[1]

let screenSize: CGRect = CGDisplayBounds(CGMainDisplayID())

let screenWidth = screenSize.width
let screenHeight = screenSize.height

func createWindow () {
  let window = NSWindow(contentRect: NSMakeRect(0, 0, screenWidth, screenHeight+1600),
                        styleMask: .titled,
                        backing: .buffered,
                        defer: true)

  window.level = NSWindow.Level(Int(CGWindowLevelForKey(CGWindowLevelKey.desktopIconWindow)))
  window.collectionBehavior = .stationary
  window.orderFrontRegardless()
  window.styleMask = .borderless
  window.setFrame(NSMakeRect(0, 0, screenWidth, screenHeight), display: true)

  let imageView = NSImageView(frame: window.contentView!.frame)
  imageView.imageScaling = .scaleAxesIndependently
  imageView.image = NSImage(contentsOfFile: imagePath)
  window.contentView!.addSubview(imageView)

  NSApp.run()
}

func notificationRecieved (n: Notification) {
  createWindow()
}

NSWorkspace.shared.notificationCenter.addObserver(forName: NSWorkspace.activeSpaceDidChangeNotification, object: nil, queue: nil, using: notificationRecieved)

createWindow()
