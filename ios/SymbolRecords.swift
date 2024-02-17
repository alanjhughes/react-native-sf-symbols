import ExpoModulesCore


enum SymbolScale: String, Enumerable {
  case `default`
  case unspecified
  case small
  case medium
  case large
  
  func imageSymbolScale() -> UIImage.SymbolScale {
    switch self {
    case .default:
      return .default
    case .small:
      return .small
    case .medium:
      return .medium
    case .large:
      return .large
    case .unspecified:
      return .unspecified
    }
  }
}

enum SymbolWeight: String, Enumerable {
  case unspecified
  case ultraLight
  case thin
  case light
  case regular
  case medium
  case semibold
  case bold
  case heavy
  case black
  
  func imageSymbolWeight() -> UIImage.SymbolWeight {
    switch self {
    case .unspecified:
      return .unspecified
    case .ultraLight:
      return .ultraLight
    case .thin:
      return .thin
    case .light:
      return .light
    case .regular:
      return .regular
    case .medium:
      return .medium
    case .semibold:
      return .semibold
    case .bold:
      return .bold
    case .heavy:
      return .heavy
    case .black:
      return .black
    }
  }
}

enum SymbolContentMode: String, Enumerable {
  case scaleToFill
  case scaleAspectFit
  case scaleAspectFill
  case redraw
  case center
  case top
  case bottom
  case left
  case right
  case topLeft
  case topRight
  case bottomLeft
  case bottomRight
  
  func toContentMode() -> UIView.ContentMode {
    switch self {
    case .scaleToFill:
      return .scaleToFill
    case .scaleAspectFit:
      return .scaleAspectFit
    case .scaleAspectFill:
      return .scaleAspectFill
    case .redraw:
      return .redraw
    case .center:
      return .center
    case .top:
      return .top
    case .bottom:
      return .bottom
    case .left:
      return .left
    case .right:
      return .right
    case .topLeft:
      return .topLeft
    case .topRight:
      return .topRight
    case .bottomLeft:
      return .bottomLeft
    case .bottomRight:
      return .bottomRight
    }
  }
}

internal struct AnimationSpec: Record {
  @Field
  var type: AnimationType = .bounce
  @Field
  var repeating: Bool?
  @Field 
  var repeatCount: Int?
  @Field
  var speed: Double?
}

enum SymbolType: String, Enumerable {
  case monochrome 
  case hierarchical
  case palette
  case multicolor
}

enum AnimationType: String, Enumerable {
  case variableColor
  case bounce
  case pulse
  case scale
  
  @available(iOS 17.0, *)
  func toSymbolEffect() -> any SymbolEffect {
    switch self {
    case .bounce:
      return .bounce
    case .pulse:
      return .pulse
    case .scale:
      return .scale
    case .variableColor:
      return .variableColor
    }
  }
}
