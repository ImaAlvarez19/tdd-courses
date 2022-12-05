describe("<> method", () => {

  it("Test A", () => {
    expect(asRomanString(1)).toEqual('I');
  });

  it("Test B", () => {
    expect(asRomanString(2)).toEqual("II");
  });

  it("Test C", () => {
    expect(asRomanString(3)).toEqual("III");
  });

  it("Test D", () => {
    expect(asRomanString(4)).toEqual("IV");
  });

  it("Test E", () => {
    expect(asRomanString(5)).toEqual("V");
  });

  it("Test F", () => {
    expect(asRomanString(6)).toEqual("VI");
  });

  it("Test G", () => {
    expect(asRomanString(7)).toEqual("VII");
  });

  it("Test H", () => {
    expect(asRomanString(8)).toEqual("VIII");
  });

  it("Test I", () => {
    expect(asRomanString(9)).toEqual("IX");
  });

  it("Test J", () => {
    expect(asRomanString(10)).toEqual("X");
  });

  it("Test K", () => {
    expect(asRomanString(11)).toEqual("XI");
    expect(asRomanString(12)).toEqual("XII");
    expect(asRomanString(13)).toEqual("XIII");
  });

  it("Test L", () => {
    expect(asRomanString(14)).toEqual("XIV");
    expect(asRomanString(15)).toEqual("XV");
    expect(asRomanString(16)).toEqual("XVI");
    expect(asRomanString(17)).toEqual("XVII");
    expect(asRomanString(18)).toEqual("XVIII");
    expect(asRomanString(19)).toEqual("XIX");
  });

  it("Test M", () => {
    expect(asRomanString(20)).toEqual("XX");
  });

  it("Test N", () => {
    expect(asRomanString(21)).toEqual("XXI");
    expect(asRomanString(22)).toEqual("XXII");
    expect(asRomanString(23)).toEqual("XXIII");
    expect(asRomanString(24)).toEqual("XXIV");
    expect(asRomanString(25)).toEqual("XXV");
    expect(asRomanString(26)).toEqual("XXVI");
    expect(asRomanString(27)).toEqual("XXVII");
    expect(asRomanString(28)).toEqual("XXVIII");
    expect(asRomanString(29)).toEqual("XXIX");
  });

  it("Test O", () => {
    expect(asRomanString(30)).toEqual("XXX");
    expect(asRomanString(34)).toEqual("XXXIV");
    expect(asRomanString(39)).toEqual("XXXIX");
  });



  function asRomanString(numberToConvert) {

    if (numberToConvert >= 1 && numberToConvert <= 9) return convertDigit(numberToConvert)

    const tens = numberToConvert / 10;
    const units = numberToConvert % 10;
    if (numberToConvert >= 10 && numberToConvert <= 19) return 'X' + convertDigit(units);
    if (numberToConvert === 14) return 'X' + 'IV';
    if (numberToConvert >= 15 && numberToConvert < 19) return "X" + "V" + repeatINTimes(numberToConvert - 15);
    if (numberToConvert == 19) return "X" + "IX";
    if (numberToConvert >= 20 && numberToConvert <= 23) return "XX" + repeatINTimes(numberToConvert - 20);
    if (numberToConvert == 24) return "XXIV";
    if (numberToConvert >= 25 && numberToConvert <= 28) return "XXV" + repeatINTimes(numberToConvert - 25);
    if (numberToConvert == 29) return "XXIX";
  }

  function repeatINTimes(int){
    return "I".repeat(int);
  }

  function convertDigit(numberToConvert){
    if (numberToConvert >= 1 && numberToConvert <= 3) return repeatINTimes(numberToConvert);
    if (numberToConvert === 4) return 'IV';
    if (numberToConvert >= 5 && numberToConvert <= 8) return 'V' + repeatINTimes(numberToConvert - 5);
    if (numberToConvert === 9) return 'IX';
  }

});