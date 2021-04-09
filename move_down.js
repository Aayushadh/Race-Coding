Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
        "type": "move_down",
        "message0": "move down %1",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "",
        "helpUrl": ""
      }
  ]);

  Blockly.JavaScript['move_down'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'godown();';
    return code;
  };