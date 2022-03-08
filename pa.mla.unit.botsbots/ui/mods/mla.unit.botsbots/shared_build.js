var newBuild = {

    "/pa/units/addon/double_ant/double_ant.json": ["vehicle", 0, { row: 1, column: 6 }],
    "/pa/units/addon/thumper/thumper.json": ["utility", 0, { row: 1, column: 1 }],
    "/pa/units/addon/javelin/javelin.json": ["bot", 0, { row: 1, column: 6 }],
    "/pa/units/addon/falarica/falarica.json": ["bot", 0, { row: 1, column: 5 }],
    "/pa/units/addon/hierophant/hierophant.json": ["a", 0, { row: 1, column: 1 }]
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}