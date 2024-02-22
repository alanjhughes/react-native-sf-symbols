import ExpoModulesCore

public class SymbolModule: Module {
  public func definition() -> ModuleDefinition {
    Name("SymbolModule")
    
    AsyncFunction("getSymbolNamesAsync") { () -> [String]? in
      if let bundle = Bundle(identifier: "com.apple.CoreGlyphs") {
        if let resource = bundle.url(forResource: "symbol_search", withExtension: "plist") {
          let plist = NSDictionary(contentsOf: resource)
          if let keys = plist?.allKeys as? [String] {
            return keys
          }
        }
      }
      return []
    }
    
    View(SymbolView.self) {
      Prop("name") { (view, name: String) in
        view.name = name
      }
      
      Prop("type") { (view, type: SymbolType?) in
        view.symbolType = type ?? .monochrome
      }
      
      Prop("scale") { (view, scale: SymbolScale?) in
        view.scale = scale?.imageSymbolScale() ?? .unspecified
      }
      
      Prop("tint") { (view, color: UIColor?) in
        view.tint = color
      }
      
      Prop("animated") { (view, animated: Bool?) in
        view.animated = animated ?? false
      }
      
      Prop("weight") { (view, weight: SymbolWeight?) in
        view.weight = weight?.imageSymbolWeight() ?? .regular
      }
      
      Prop("colors") { (view, color: [UIColor]?) in
        view.colors = color
      }
      
      Prop("resizeMode") { (view, resizeMode: SymbolContentMode?) in
        view.imageContentMode = resizeMode?.toContentMode() ?? .scaleToFill
      }
      
      Prop("animationSpec") { (view, spec: AnimationSpec?) in
        view.animationSpec = spec
      }
      
      OnViewDidUpdateProps { view in
        view.reloadSymbol()
      }
    }
  }
}
