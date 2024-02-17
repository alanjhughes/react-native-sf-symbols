import ExpoModulesCore

class SymbolModuleView: ExpoView {
  let imageView = UIImageView()
  var name: String = ""
  
  // MARK: Properties
  var weight: UIImage.SymbolWeight = .unspecified
  var scale: UIImage.SymbolScale = .default
  var imageContentMode: UIView.ContentMode = .scaleToFill
  var symbolType: SymbolType = .monochrome
  var animationSpec: AnimationSpec?

  var palette = [UIColor]()
  var animated = false
  
  var colors: [UIColor?]? {
    didSet {
      palette = colors?.compactMap { $0 } ?? []
    }
  }
  
  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    addSubview(imageView)
  }
  
  override func layoutSubviews() {
    imageView.frame = bounds
  }
  
  func reloadSymbol() {
    let image = UIImage(systemName: name)
    imageView.image = image
    
    var config = UIImage.SymbolConfiguration(pointSize: UIFont.systemFontSize, weight: weight, scale: scale)
    
    switch symbolType {
    case .monochrome:
      if #available(iOS 16.0, *) {
        config = config.applying(UIImage.SymbolConfiguration.preferringMonochrome())
      }
    case .hierarchical:
      if #available(iOS 15, *) {
        config = config.applying(UIImage.SymbolConfiguration(hierarchicalColor: palette.first ?? .systemBlue))
      }
    case .palette:
      if #available(iOS 15, *) {
        if palette.count > 1 {
          config = config.applying(UIImage.SymbolConfiguration(paletteColors: palette))
        }
      }
    case .multicolor:
      if #available(iOS 15.0, *) {
        config = config.applying(UIImage.SymbolConfiguration.preferringMulticolor())
      }
    }
                                
    if #available(iOS 17.0, *) {
      imageView.removeAllSymbolEffects()
      if animated {
        addSymbolEffects()
      }
    }
    
    imageView.contentMode = imageContentMode
    imageView.preferredSymbolConfiguration = config
    
    if let colors {
      if palette.count == 1 {
        imageView.image = image?.withTintColor(palette[0], renderingMode: .alwaysOriginal)
      } else {
        imageView.image = image
      }
    } else {
      imageView.image = image
    }
  }
  
  @available(iOS 17.0, *)
  private func addSymbolEffects() {
    if let animationSpec {
      let repeating = animationSpec.repeating ?? false
      var options: SymbolEffectOptions = repeating ? .repeating : .nonRepeating
      
      if let repeatCount = animationSpec.repeatCount {
        options = options.repeat(abs(repeatCount))
      }
      if let speed = animationSpec.speed {
        options = options.speed(speed)
      }
      
      switch animationSpec.type {
      case .bounce:
        imageView.addSymbolEffect(.bounce, options: options)
      case .pulse:
        imageView.addSymbolEffect(.pulse, options: options)
      case .scale:
        imageView.addSymbolEffect(.scale, options: options)
      case .variableColor:
        imageView.addSymbolEffect(.variableColor.cumulative.reversing, options: options)
      }
    }
  }
}
