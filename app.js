angular
  .module("colorMeApp", ["ngRoute"])
  .controller("ColorsIndexController", ColorsIndexController)
  .controller("ColorsShowController", ColorsShowController)
  .config(config);

config.$inject = ["$routeProvider", "$locationProvider"];
function config(   $routeProvider,   $locationProvider  ) {
  // Setup Routes
  $routeProvider
    .when('/', {
      templateUrl: '/templates/colors/index.html',
      controller: 'ColorsIndexController',
      controllerAs: 'colorsCtrl'
    })
    .when('/colors/:index', {
      templateUrl: '/templates/colors/show.html',
      controller: 'ColorsShowController',
      controllerAs: 'colorCtrl'
    })

  // using html5Mode means we don't have /#/colors in our URL
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}

ColorsIndexController.$inject = [];
function ColorsIndexController() {
  this.colors = COLORS;

}

ColorsShowController.$inject = ["$routeParams"];
function ColorsShowController(  $routeParams   ){
  var vm = this;

  console.log('$routeParams.index is', $routeParams.index);

  vm.color = COLORS[$routeParams.index];

}



















// DO NOT TOUCH



var COLORS = [
    {name: "Black", hex: "000000"},
    {name: "Navy", hex: "000080"},
    {name: "DarkBlue", hex: "00008B"},
    {name: "MediumBlue", hex: "0000CD"},
    {name: "Blue", hex: "0000FF"},
    {name: "DarkGreen", hex: "006400"},
    {name: "Green", hex: "008000"},
    {name: "Teal", hex: "008080"},
    {name: "DarkCyan", hex: "008B8B"},
    {name: "DeepSkyBlue", hex: "00BFFF"},
    {name: "DarkTurquoise", hex: "00CED1"},
    {name: "MediumSpringGreen", hex: "00FA9A"},
    {name: "Lime", hex: "00FF00"},
    {name: "SpringGreen", hex: "00FF7F"},
    {name: "Aqua", hex: "00FFFF"},
    {name: "Cyan", hex: "00FFFF"},
    {name: "MidnightBlue", hex: "191970"},
    {name: "DodgerBlue", hex: "1E90FF"},
    {name: "LightSeaGreen", hex: "20B2AA"},
    {name: "ForestGreen", hex: "228B22"},
    {name: "SeaGreen", hex: "2E8B57"},
    {name: "DarkSlateGray", hex: "2F4F4F"},
    {name: "LimeGreen", hex: "32CD32"},
    {name: "MediumSeaGreen", hex: "3CB371"},
    {name: "Turquoise", hex: "40E0D0"},
    {name: "RoyalBlue", hex: "4169E1"},
    {name: "SteelBlue", hex: "4682B4"},
    {name: "DarkSlateBlue", hex: "483D8B"},
    {name: "MediumTurquoise", hex: "48D1CC"},
    {name: "Indigo", hex: "4B0082"},
    {name: "DarkOliveGreen", hex: "556B2F"},
    {name: "CadetBlue", hex: "5F9EA0"},
    {name: "CornflowerBlue", hex: "6495ED"},
    {name: "RebeccaPurple", hex: "663399"},
    {name: "MediumAquaMarine", hex: "66CDAA"},
    {name: "DimGray", hex: "696969"},
    {name: "DimGrey", hex: "696969"},
    {name: "SlateBlue", hex: "6A5ACD"},
    {name: "OliveDrab", hex: "6B8E23"},
    {name: "SlateGray", hex: "708090"},
    {name: "LightSlateGray", hex: "778899"},
    {name: "MediumSlateBlue", hex: "7B68EE"},
    {name: "LawnGreen", hex: "7CFC00"},
    {name: "Chartreuse", hex: "7FFF00"},
    {name: "Aquamarine", hex: "7FFFD4"},
    {name: "Maroon", hex: "800000"},
    {name: "Purple", hex: "800080"},
    {name: "Olive", hex: "808000"},
    {name: "Gray", hex: "808080"},
    {name: "Grey", hex: "808080"},
    {name: "SkyBlue", hex: "87CEEB"},
    {name: "LightSkyBlue", hex: "87CEFA"},
    {name: "BlueViolet", hex: "8A2BE2"},
    {name: "DarkRed", hex: "8B0000"},
    {name: "DarkMagenta", hex: "8B008B"},
    {name: "SaddleBrown", hex: "8B4513"},
    {name: "DarkSeaGreen", hex: "8FBC8F"},
    {name: "LightGreen", hex: "90EE90"},
    {name: "MediumPurple", hex: "9370DB"},
    {name: "DarkViolet", hex: "9400D3"},
    {name: "PaleGreen", hex: "98FB98"},
    {name: "DarkOrchid", hex: "9932CC"},
    {name: "YellowGreen", hex: "9ACD32"},
    {name: "Sienna", hex: "A0522D"},
    {name: "Brown", hex: "A52A2A"},
    {name: "DarkGray", hex: "A9A9A9"},
    {name: "LightBlue", hex: "ADD8E6"},
    {name: "GreenYellow", hex: "ADFF2F"},
    {name: "PaleTurquoise", hex: "AFEEEE"},
    {name: "LightSteelBlue", hex: "B0C4DE"},
    {name: "PowderBlue", hex: "B0E0E6"},
    {name: "FireBrick", hex: "B22222"},
    {name: "DarkGoldenRod", hex: "B8860B"},
    {name: "MediumOrchid", hex: "BA55D3"},
    {name: "RosyBrown", hex: "BC8F8F"},
    {name: "DarkKhaki", hex: "BDB76B"},
    {name: "Silver", hex: "C0C0C0"},
    {name: "MediumVioletRed", hex: "C71585"},
    {name: "IndianRed", hex: "CD5C5C"},
    {name: "Peru", hex: "CD853F"},
    {name: "Chocolate", hex: "D2691E"},
    {name: "Tan", hex: "D2B48C"},
    {name: "LightGray", hex: "D3D3D3"},
    {name: "Thistle", hex: "D8BFD8"},
    {name: "Orchid", hex: "DA70D6"},
    {name: "GoldenRod", hex: "DAA520"},
    {name: "PaleVioletRed", hex: "DB7093"},
    {name: "Crimson", hex: "DC143C"},
    {name: "Gainsboro", hex: "DCDCDC"},
    {name: "Plum", hex: "DDA0DD"},
    {name: "BurlyWood", hex: "DEB887"},
    {name: "LightCyan", hex: "E0FFFF"},
    {name: "Lavender", hex: "E6E6FA"},
    {name: "DarkSalmon", hex: "E9967A"},
    {name: "Violet", hex: "EE82EE"},
    {name: "PaleGoldenRod", hex: "EEE8AA"},
    {name: "LightCoral", hex: "F08080"},
    {name: "Khaki", hex: "F0E68C"},
    {name: "AliceBlue", hex: "F0F8FF"},
    {name: "HoneyDew", hex: "F0FFF0"},
    {name: "Azure", hex: "F0FFFF"},
    {name: "SandyBrown", hex: "F4A460"},
    {name: "Wheat", hex: "F5DEB3"},
    {name: "Beige", hex: "F5F5DC"},
    {name: "WhiteSmoke", hex: "F5F5F5"},
    {name: "MintCream", hex: "F5FFFA"},
    {name: "GhostWhite", hex: "F8F8FF"},
    {name: "Salmon", hex: "FA8072"},
    {name: "AntiqueWhite", hex: "FAEBD7"},
    {name: "Linen", hex: "FAF0E6"},
    {name: "LightGoldenRodYellow", hex: "FAFAD2"},
    {name: "OldLace", hex: "FDF5E6"},
    {name: "Red", hex: "FF0000"},
    {name: "Fuchsia", hex: "FF00FF"},
    {name: "Magenta", hex: "FF00FF"},
    {name: "DeepPink", hex: "FF1493"},
    {name: "OrangeRed", hex: "FF4500"},
    {name: "Tomato", hex: "FF6347"},
    {name: "HotPink", hex: "FF69B4"},
    {name: "Coral", hex: "FF7F50"},
    {name: "DarkOrange", hex: "FF8C00"},
    {name: "LightSalmon", hex: "FFA07A"},
    {name: "Orange", hex: "FFA500"},
    {name: "LightPink", hex: "FFB6C1"},
    {name: "Pink", hex: "FFC0CB"},
    {name: "Gold", hex: "FFD700"},
    {name: "PeachPuff", hex: "FFDAB9"},
    {name: "NavajoWhite", hex: "FFDEAD"},
    {name: "Moccasin", hex: "FFE4B5"},
    {name: "Bisque", hex: "FFE4C4"},
    {name: "MistyRose", hex: "FFE4E1"},
    {name: "BlanchedAlmond", hex: "FFEBCD"},
    {name: "PapayaWhip", hex: "FFEFD5"},
    {name: "LavenderBlush", hex: "FFF0F5"},
    {name: "SeaShell", hex: "FFF5EE"},
    {name: "Cornsilk", hex: "FFF8DC"},
    {name: "LemonChiffon", hex: "FFFACD"},
    {name: "FloralWhite", hex: "FFFAF0"},
    {name: "Snow", hex: "FFFAFA"},
    {name: "Yellow", hex: "FFFF00"},
    {name: "LightYellow", hex: "FFFFE0"},
    {name: "Ivory", hex: "FFFFF0"},
    {name: "White", hex: "FFFFFF"}
];
