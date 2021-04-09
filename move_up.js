Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
        "type": "move_up",
        "message0": "move up %1",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 20,
        "tooltip": "",
        "helpUrl": ""
      }
  ]);

  Blockly.JavaScript['move_up'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'goup();';
    return code;
  };