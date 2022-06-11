var newBuild = {

    "/pa/units/addon/double_ant/double_ant.json": ["vehicle", 0, { row: 1, column: 6 }],

    "/pa/units/addon/thumper/thumper.json": ["utility", 0, { row: 1, column: 1 }],

    "/pa/units/addon/thumper_adv/thumper_adv.json": ["utility", 0, { row: 0, column: 1 }],

    "/pa/units/addon/long_ant/long_ant.json": ["vehicle", 0, { row: 1, column: 5 }],

    "/pa/units/addon/strong_ant/strong_ant.json": ["vehicle", 0, { row: 0, column: 1 }],

    "/pa/units/addon/grenadier_ant/grenadier_ant.json": ["vehicle", 0, { row: 0, column: 2 }],

    "/pa/units/addon/titan_cannon_ant/titan_cannon_ant.json": ["combat", 0, { row: 0, column: 1 }],
    
    "/pa/units/addon/gatling_ant/gatling_ant.json": ["vehicle", 0, { row: 0, column: 2 }],


    
    "/pa/units/addon/tree_base/tree_base.json": ["utility", 0, { row: 1, column: 0 }],
    
    "/pa/units/addon/tree_base_energy_build/tree_base_energy_build.json": ["basic", 0, { row: 2, column: 1 }],

    "/pa/units/addon/tier_1_rocket_build/tier_1_rocket_build.json": ["rocket", 0, { row: 2, column: 0 }],

    "/pa/units/addon/tree_hardpoint_base_build/tree_hardpoint_base_build.json": ["basic", 0, { row: 2, column: 2 }],
    
    "/pa/units/addon/tier_1_machine_gun_build/tier_1_machine_gun_build.json": ["mg1", 0, { row: 2, column: 0 }],

    "/pa/units/addon/tier_2_machine_gun_build/tier_2_machine_gun_build.json": ["mg2", 0, { row: 2, column: 0 }],

    "/pa/units/addon/tier_2_gatling_build/tier_2_gatling_build.json": ["mg4", 0, { row: 2, column: 1 }],

    "/pa/units/addon/tree_rocket_base_build/tree_rocket_base_build.json": ["basic", 0, { row: 2, column: 3 }],
    
    "/pa/units/addon/tier_3_machine_gun_build/tier_3_machine_gun_build.json": ["mg4", 0, { row: 2, column: 2 }],

    "/pa/units/addon/tier_3_beamer_build/tier_3_beamer_build.json": ["cannon", 0, { row: 2, column: 1 }],

    "/pa/units/addon/tier_1_cannon_build/tier_1_cannon_build.json": ["beam", 0, { row: 2, column: 0 }],

    "/pa/units/addon/tier_2_auto_cannon_build/tier_2_auto_cannon_build.json": ["cannon", 0, { row: 2, column: 0 }],

    "/pa/units/addon/thicc_ant/thicc_ant.json": ["factory", 0, { row: 0, column: 1 }],
    
    "/pa/units/addon/flying_ant/flying_ant.json": ["air", 0, { row: 0, column: 1 }]
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}
