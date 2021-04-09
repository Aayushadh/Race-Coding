Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
        "type": "move_left",
        "message0": "move left %1",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
      }
  ]);

  Blockly.JavaScript['move_left'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'goleft();';
    return code;
  };