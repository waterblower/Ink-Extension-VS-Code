import { StoryAST } from "../compiler.ts";

export const test_story: StoryAST = {
    "type": "Story",
    "content": [
        {
            "type": "Text",
            "text": 'VAR current_location = "Hotel"',
            "line": 0,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": 'VAR time_of_day = "Day" // Day, Night',
            "line": 1,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR money = 20000",
            "line": 2,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR massage_skill = 1",
            "line": 3,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR observation_skill = 1",
            "line": 4,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR nth_day = 1",
            "line": 5,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "LIST StoryStage = Act1, Act2, Act3, Act4",
            "line": 10,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR current_stage = Act1",
            "line": 11,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text":
                "LIST A_Company_Investigation = 0_time, 1_time, 2_times, 3_times",
            "line": 14,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR a_company_investigation_stage = 0_time",
            "line": 15,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR has_rented_basic_massage_room = false",
            "line": 19,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "LIST massage_bed = (none), basic, premium",
            "line": 21,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "LIST massage_chair = (basic), premium",
            "line": 22,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text":
                "LIST Relationship = unmet, met, know_name, acquaintance, situationship, lover",
            "line": 30,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_relationship = unmet",
            "line": 33,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_affection = 0        //洛洛对玩家的好感",
            "line": 34,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_obedience = 0        //洛洛对玩家的顺从",
            "line": 35,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_respect = 0          //洛洛对玩家的尊重",
            "line": 36,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_asked_about_woman  = false",
            "line": 37,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_asked_about_injury = false",
            "line": 38,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_xiaomanman_1st_encounter_solved = false",
            "line": 39,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR yuwei_relationship = unmet",
            "line": 42,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR yuwei_love = 0",
            "line": 43,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR yuwei_obedience = 0",
            "line": 44,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR suna_met = false",
            "line": 47,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR suna_name_known = false",
            "line": 48,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR suna_affection = 0",
            "line": 50,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR suna_respect = 0",
            "line": 51,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR suna_obedience = 0",
            "line": 52,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR suna_aichat = false",
            "line": 54,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR yunshu_met = false",
            "line": 57,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR ali_relationship = unmet",
            "line": 60,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR linchen_has_opened_massage_studio = false",
            "line": 12,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        {
            "type": "Text",
            "text": "VAR visited_cheap_shop = false",
            "line": 15,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        {
            "type": "Text",
            "text": "VAR visited_premium_shop = false",
            "line": 16,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        {
            "type": "Text",
            "text": "VAR budget_tier = 0",
            "line": 20,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        {
            "type": "Text",
            "text": 'VAR current_location = "Hotel"',
            "line": 0,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": 'VAR time_of_day = "Day" // Day, Night',
            "line": 1,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR money = 20000",
            "line": 2,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR massage_skill = 1",
            "line": 3,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR observation_skill = 1",
            "line": 4,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR nth_day = 1",
            "line": 5,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "LIST StoryStage = Act1, Act2, Act3, Act4",
            "line": 10,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR current_stage = Act1",
            "line": 11,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text":
                "LIST A_Company_Investigation = 0_time, 1_time, 2_times, 3_times",
            "line": 14,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR a_company_investigation_stage = 0_time",
            "line": 15,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR has_rented_basic_massage_room = false",
            "line": 19,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "LIST massage_bed = (none), basic, premium",
            "line": 21,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "LIST massage_chair = (basic), premium",
            "line": 22,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text":
                "LIST Relationship = unmet, met, know_name, acquaintance, situationship, lover",
            "line": 30,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_relationship = unmet",
            "line": 33,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_affection = 0        //洛洛对玩家的好感",
            "line": 34,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_obedience = 0        //洛洛对玩家的顺从",
            "line": 35,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_respect = 0          //洛洛对玩家的尊重",
            "line": 36,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_asked_about_woman  = false",
            "line": 37,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_asked_about_injury = false",
            "line": 38,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR luoluo_xiaomanman_1st_encounter_solved = false",
            "line": 39,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR yuwei_relationship = unmet",
            "line": 42,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR yuwei_love = 0",
            "line": 43,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR yuwei_obedience = 0",
            "line": 44,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR suna_met = false",
            "line": 47,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR suna_name_known = false",
            "line": 48,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR suna_affection = 0",
            "line": 50,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR suna_respect = 0",
            "line": 51,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR suna_obedience = 0",
            "line": 52,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR suna_aichat = false",
            "line": 54,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR yunshu_met = false",
            "line": 57,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
        {
            "type": "Text",
            "text": "VAR ali_relationship = unmet",
            "line": 60,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\vars.ink",
        },
    ],
    "options": [
        {
            "type": "Option",
            "text": "从Intro开始 -> intro",
            "content": [],
            "line": 11,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
        },
        {
            "type": "Option",
            "text": "从world开始 ->world",
            "content": [],
            "line": 12,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
        },
        {
            "type": "Option",
            "text": "[程雨薇躲雨闯入按摩店] ->yuwei_avoid_rain",
            "content": [],
            "line": 13,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
        },
    ],
    "knots": {
        "world": {
            "type": "Knot",
            "name": "world",
            "content": [
                {
                    "type": "Text",
                    "text": '{ time_of_day == "Night":',
                    "line": 17,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
                {
                    "type": "Divert",
                    "target": "night",
                    "line": 18,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
                {
                    "type": "Text",
                    "text": "- else:",
                    "line": 19,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
                {
                    "type": "Divert",
                    "target": "time_day",
                    "line": 20,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
                {
                    "type": "Text",
                    "text": "}",
                    "line": 21,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
            ],
            "options": [],
            "stitches": [
                {
                    "type": "Stitch",
                    "name": "time_day",
                    "content": [
                        {
                            "type": "Text",
                            "text": '~ time_of_day = "Day"',
                            "line": 24,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "world-map.png",
                            "line": 25,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "城市在喧嚣中运转。",
                            "line": 26,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "{ not linchen_has_opened_massage_studio:",
                            "line": 29,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [酒店房间]",
                            "line": 31,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "hotel_room",
                            "line": 33,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ { suna_met } [前往兴华房产 (CBD)]",
                            "line": 35,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "location",
                            "value": "commercial_district",
                            "line": 36,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "character",
                            "value": "suna",
                            "line": 37,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "苏娜说过有两处房源可以看。",
                            "line": 38,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "arrive_at_agency",
                            "line": 39,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ { not suna_met } [寻找铺面 (CBD)]",
                            "line": 41,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "location",
                            "value": "commercial_district",
                            "line": 42,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "需要找一家房产中介，看看这片区域有没有合适的铺面。",
                            "line": 43,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "arrive_at_agency",
                            "line": 44,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [等到晚上]",
                            "line": 46,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "night",
                            "line": 47,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "- else:",
                            "line": 49,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [大学校园 (体育舞蹈系)]",
                            "line": 53,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "location",
                            "value": "school",
                            "line": 54,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "character",
                            "value": "luoluo",
                            "line": 55,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "唐洛洛应该正在进行高强度的舞蹈训练。",
                            "line": 56,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "这个充满活力的二次元少女，或许能帮我的按摩馆做做新媒体营销。",
                            "line": 57,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "unit6_luolu_story",
                            "line": 58,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "+ { yuwei_relationship >= know_name } [商务写字楼 (行政部)]",
                            "line": 60,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "程雨薇在那间办公室里，为了体面的生活拼命熬夜。",
                            "line": 61,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她那双 36 码的优美双足，今天是否又被 8 厘米的高跟鞋折磨着？",
                            "line": 62,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "unit_yuwei_visit",
                            "line": 63,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [房产中介公司 (CBD)]",
                            "line": 65,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "arrive_at_agency",
                            "line": 66,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "+ { massage_skill >= 3 } [高档公寓区 (沈园)]",
                            "line": 68,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "location",
                            "value": "premium_apartment",
                            "line": 69,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "character",
                            "value": "yunshu",
                            "line": 70,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "房东太太沈云舒。",
                            "line": 71,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "对于历经千帆的她，普通的关心毫无意义。只有深层的内功按摩，才能击穿她的壁垒。",
                            "line": 72,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "unit_yunshu_residence",
                            "line": 73,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [等到晚上]",
                            "line": 75,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "night",
                            "line": 76,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "}",
                            "line": 78,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                    ],
                    "options": [],
                    "line": 23,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
                {
                    "type": "Stitch",
                    "name": "night",
                    "content": [
                        {
                            "type": "Text",
                            "text": '~ time_of_day = "Night"',
                            "line": 82,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "map-night.png",
                            "line": 83,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '夜幕低垂，白天的地方大多已经关门，但另一些地方，才刚刚开始热闹。城市换上了另一副面孔，是处理"私事"的好时机。',
                            "line": 84,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [酒街]",
                            "line": 86,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "wine_street",
                            "line": 87,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [A集团]",
                            "line": 89,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "A_Company",
                            "line": 90,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [回去休息]",
                            "line": 92,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "hotel_room_night",
                            "line": 93,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                    ],
                    "options": [],
                    "line": 81,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
                {
                    "type": "Stitch",
                    "name": "wine_street",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "wine-street.jpg",
                            "line": 97,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "酒街的灯光把夜空都染成了暖色。",
                            "line": 98,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "这一带的店大多是前厅酒吧、里头KTV的格局，吃的喝的唱的连成一片，烟火气和霓虹混在一起，是这座城市入夜后最真实的地方。",
                            "line": 99,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [进一家酒吧坐坐]",
                            "line": 101,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "club",
                            "line": 102,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [离开酒街]",
                            "line": 104,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "night",
                            "line": 105,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                        },
                    ],
                    "options": [],
                    "line": 96,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
            ],
            "line": 15,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
        },
        "advance_time": {
            "type": "Knot",
            "name": "advance_time",
            "content": [
                {
                    "type": "Text",
                    "text": '~ time_of_day = "Day"',
                    "line": 109,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
                {
                    "type": "Text",
                    "text": "~ nth_day += 1",
                    "line": 110,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
                {
                    "type": "Text",
                    "text": "一夜过去，新的挑战在等待着。",
                    "line": 111,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
                {
                    "type": "Divert",
                    "target": "world",
                    "line": 112,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
            ],
            "options": [],
            "stitches": [],
            "line": 108,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
        },
        "unit6_luolu_story": {
            "type": "Knot",
            "name": "unit6_luolu_story",
            "content": [
                {
                    "type": "Text",
                    "text": "（开发中）唐洛洛的剧情尚未实装。",
                    "line": 120,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
                {
                    "type": "Text",
                    "text": "+ [返回地图] -> world",
                    "line": 121,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
            ],
            "options": [],
            "stitches": [],
            "line": 119,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
        },
        "unit_yuwei_visit": {
            "type": "Knot",
            "name": "unit_yuwei_visit",
            "content": [
                {
                    "type": "Text",
                    "text": "（开发中）程雨薇的拜访剧情尚未实装。",
                    "line": 124,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
                {
                    "type": "Text",
                    "text": "+ [返回地图] -> world",
                    "line": 125,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
            ],
            "options": [],
            "stitches": [],
            "line": 123,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
        },
        "unit_suna_encounter": {
            "type": "Knot",
            "name": "unit_suna_encounter",
            "content": [
                {
                    "type": "Text",
                    "text": "（开发中）苏娜的后续剧情尚未实装。",
                    "line": 128,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
                {
                    "type": "Text",
                    "text": "+ [返回地图] -> world",
                    "line": 129,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
            ],
            "options": [],
            "stitches": [],
            "line": 127,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
        },
        "unit_yunshu_residence": {
            "type": "Knot",
            "name": "unit_yunshu_residence",
            "content": [
                {
                    "type": "Text",
                    "text": "（开发中）沈云舒的剧情尚未实装。",
                    "line": 132,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
                {
                    "type": "Text",
                    "text": "+ [返回地图] -> world",
                    "line": 133,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
                },
            ],
            "options": [],
            "stitches": [],
            "line": 131,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink",
        },
        "club": {
            "type": "Knot",
            "name": "club",
            "content": [
                {
                    "type": "Tag",
                    "name": "audio",
                    "value": "club_ambience.mp3",
                    "line": 1,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "bar.jpg",
                    "line": 2,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text": "我走进了酒吧，",
                    "line": 3,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text": "{",
                    "line": 4,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text": "- luoluo_relationship < met:",
                    "line": 5,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Divert",
                    "target": "club_first_visit",
                    "line": 6,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text": "- else:",
                    "line": 7,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Divert",
                    "target": "club_regular",
                    "line": 8,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text": "}",
                    "line": 9,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
            ],
            "options": [],
            "stitches": [
                {
                    "type": "Stitch",
                    "name": "club_first_visit",
                    "content": [
                        {
                            "type": "Text",
                            "text":
                                "没什么特别的目的。就是想让脑子静一静，顺便听听周围人都在说什么——这种地方，什么消息都会有。",
                            "line": 13,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "走廊尽头传来动静——不像是闹着玩的那种。",
                            "line": 15,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[过去看看]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "luoluo_in_trouble",
                                    "line": 18,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 17,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "line": 11,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "club_regular",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "bar.jpg",
                            "line": 21,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "推门进去，还是熟悉的喧嚣。",
                            "line": 22,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "club.club_bar",
                            "line": 23,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 20,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "club_bar",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "bar.jpg",
                            "line": 26,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "调酒师在灯下晃着酒杯，几个陌生面孔靠在吧台边低声说话。里侧包厢方向传来断断续续的歌声，混着笑声，又混着酒气。",
                            "line": 27,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我在吧台的位子坐了下来。",
                            "line": 29,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[和调酒师搭话]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text": "~ ali_relationship = met",
                                    "line": 32,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "talk_with_barttender_1st_time",
                                    "line": 33,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        "+ {ali_relationship == met} [和调酒师搭话]",
                                    "line": 36,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "talk_with_barttender",
                                    "line": 37,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        "+ {ali_relationship >= know_name} [和阿黎搭话]",
                                    "line": 40,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "talk_with_barttender",
                                    "line": 41,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "+ [随便喝一杯，散散心]",
                                    "line": 43,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "~ ali_relationship = met",
                                    "line": 44,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "drink_alone",
                                    "line": 45,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "+ [今晚不是来喝酒的，先走]",
                                    "line": 47,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "world.wine_street",
                                    "line": 48,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 31,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "line": 25,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "talk_with_barttender",
                    "content": [],
                    "options": [
                        {
                            "type": "Option",
                            "text":
                                "{luoluo_xiaomanman_1st_encounter_solved} [你认识刚才那个带了一堆保镖的女孩吗？]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text":
                                        "我看着她：“你认识刚才走廊里那个带了一堆保镖的女人吗？”",
                                    "line": 54,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "阿黎擦着玻璃杯的手停了一下。",
                                    "line": 56,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        "她抬起眼皮看了我一眼，眼神里多了一点似笑非笑的深意：“原来刚才走廊里的动静是你搞出来的。我还在想，这条街上谁有这么大的胆子，连‘龙哥’的人都敢拦。”",
                                    "line": 58,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "我：“龙哥？”",
                                    "line": 60,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        "阿黎放下杯子，身体微微前倾，压低了声音。西装领口下的阴影随着她的动作若隐若现：“那个女人叫孙曼，自己算不上什么人物，充其量就是个喜欢用满钻戒指武装自己的虚荣丫头。但她身后那几个穿西装的，是黑龙的保镖。”",
                                    "line": 62,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "她顿了顿，目光落在我的手上。",
                                    "line": 64,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        "“你刚才露的那一手‘点穴锁骨’的功夫，保镖回去肯定会报给黑龙。黑龙这阵子正在四处网罗能打的、懂传统手法的硬茬子，据说是在为一个什么‘按摩比赛’做准备。”",
                                    "line": 66,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        "听到“按摩比赛”几个字，我的眼神微不可察地敛了一下 。",
                                    "line": 68,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "这正是我来江城要找的线索 。",
                                    "line": 70,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        "阿黎敏锐地捕捉到了空气中张力的变化，她退后半步，重新拿起吧匙，在加了冰块的酒杯里搅动了一下，发出清脆的碰撞声。",
                                    "line": 72,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        "“不过，你在他的地盘扫了那女人的面子，难保他下面的人不会找你麻烦。”她把酒杯推到我面前，“最近晚上走夜路，最好多回头看看。”",
                                    "line": 74,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "我端起杯子抿了一口：“谢了。”",
                                    "line": 76,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        "她勾起嘴角，转身去招呼其他客人了:“算是还你刚才给我治手腕的人情。”",
                                    "line": 78,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "club.club_bar",
                                    "line": 79,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "+ [没什么想说的]",
                                    "line": 81,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "club.club_bar",
                                    "line": 82,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 52,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "line": 50,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "talk_with_barttender_1st_time",
                    "content": [
                        {
                            "type": "Text",
                            "text": "我坐在吧台前，看着对面的女调酒师。",
                            "line": 86,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她穿着一件黑色真丝小吊带，外面披着剪裁利落的黑西装。长条吧匙在她修长的手指间转动，冰块撞击玻璃杯，发出清脆的声响。",
                            "line": 88,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她注意到了我的视线。",
                            "line": 90,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她嘴角勾起一个好看的弧度，眼神里带着那种见惯了男人搭讪的从容:“怎么，酒不合胃口？还是说，我比酒好看？”",
                            "line": 92,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我看着她的左手：“你的左手手腕，刚才在搅冰的时候，停顿了大概零点二秒。”",
                            "line": 94,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她嘴角的笑意微微一顿。",
                            "line": 96,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我语气平淡：“长年拿摇酒壶和冰桶留下的腱鞘炎。现在只是偶尔滞涩，再过半年，阴雨天的时候你会连这个玻璃杯都端不稳。”",
                            "line": 98,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她眯起眼睛打量我，眼里的调笑收敛了几分：“看得很准啊。医生？”",
                            "line": 100,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我把手放在吧台上，掌心朝上:“算是吧。手给我。”",
                            "line": 102,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她挑了挑眉，似乎在评估我是不是在玩什么高级的套路。但几秒后，她还是带着一点挑衅和好奇，把手腕搭在了我的手里。",
                            "line": 104,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她的皮肤很凉。",
                            "line": 106,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我的拇指精准地切入她手腕内侧的“大陵穴”，带着一点寸劲，往下一压。",
                            "line": 108,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她：“嘶——”",
                            "line": 110,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她猛地吸了一口凉气，原本靠在吧台上的身体瞬间绷紧，另一只手下意识地抓住了台面。",
                            "line": 112,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我没有松手，保持着力道揉开了那处粘连的筋膜，然后撤开手。",
                            "line": 114,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我：“现在转一下试试。”",
                            "line": 116,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她皱着眉，半信半疑地转动了一下左手手腕。紧接着，她眼里的警惕被一种真切的不可思议取代了——那种折磨了她很久的、隐秘的酸痛感，消失了。",
                            "line": 118,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她重新看向我。这一次，她收起了那种对付普通酒客的营业式笑容。",
                            "line": 120,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她拿过一瓶没开封的威士忌，往我的空杯子里倒了一指深的酒液，推到我面前。",
                            "line": 122,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ ali_relationship = know_name",
                            "line": 124,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她压低了声音，身体微微前倾，西装领口下的风景若隐若现：“我叫阿黎（名字待定）。这杯算我的。”",
                            "line": 125,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "club_bar",
                            "line": 126,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 84,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "drink_alone",
                    "content": [
                        {
                            "type": "Text",
                            "text":
                                '调酒师瞥了我一眼，把手里的酒杯放下："来点什么？"',
                            "line": 130,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[威士忌，加冰]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "drink_whiskey",
                                    "line": 133,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 132,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[本地啤酒，随便一瓶]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "drink_beer",
                                    "line": 135,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 134,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[随便调一杯，你看着来]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "drink_cocktail",
                                    "line": 138,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 137,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "line": 128,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "drink_whiskey",
                    "content": [
                        {
                            "type": "Text",
                            "text":
                                "调酒师点了点头，利落地取了杯子，倒酒，推过来。",
                            "line": 142,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "冰块沉进琥珀色的液体里，发出一声轻响。",
                            "line": 144,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我端起来抿了一口。",
                            "line": 146,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "酒液带着烟熏味，顺着喉咙慢慢烧下去，在胸口散开，像是什么东西在里头化掉了一点。",
                            "line": 148,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "吧台对面的镜子里映着我的脸，还有身后那些模糊的人影、晃动的灯光。",
                            "line": 150,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "嘈杂声还在，离我很远，又离我很近。",
                            "line": 152,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "drink_alone_end",
                            "line": 154,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 140,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "drink_beer",
                    "content": [
                        {
                            "type": "Text",
                            "text":
                                "调酒师从冰柜里摸出一瓶，拧开盖子，推到我面前。",
                            "line": 158,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我没用杯子，直接拿起瓶子喝了一口。",
                            "line": 160,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "凉的，有点苦，气泡在喉咙里撞了一下。",
                            "line": 162,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "比威士忌实在，也比威士忌没意思。",
                            "line": 164,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "就这样，挺好。",
                            "line": 165,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我把瓶子放回吧台，听着周围的喧嚣，脑子慢慢空下来。",
                            "line": 167,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "drink_alone_end",
                            "line": 169,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 156,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "drink_cocktail",
                    "content": [
                        {
                            "type": "Text",
                            "text": "调酒师看了我一眼，没多问，转身开始调。",
                            "line": 172,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "冰、酒、不知道什么的东西，摇了几下，倒进杯子里，推过来。",
                            "line": 174,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "颜色是淡淡的橙红，上面浮着一片薄薄的柠檬皮。",
                            "line": 176,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我端起来喝了一口。",
                            "line": 177,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "微酸，回甘，尾调有点烈。",
                            "line": 179,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "不难喝。",
                            "line": 181,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '调酒师正擦着吧台，头也不抬："合口味？"',
                            "line": 183,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '我："还行。"',
                            "line": 185,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "drink_alone_end",
                            "line": 186,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 171,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "drink_alone_end",
                    "content": [
                        {
                            "type": "Text",
                            "text": "就这样喝了一会儿。",
                            "line": 190,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "没什么人来搭话。",
                            "line": 192,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "吧台的灯光是暖黄色的，照得人有点昏昏的，脑子里乱的东西渐渐沉下去，不是想清楚了，只是暂时不想了。",
                            "line": 194,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[喝完这杯]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "club_bar",
                                    "line": 196,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 195,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "line": 188,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
            ],
            "line": 0,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
        },
        "luoluo_in_trouble": {
            "type": "Knot",
            "name": "luoluo_in_trouble",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "luoluo-surrounded-by-xiaomanman.jpg",
                    "line": 203,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "走廊拐角处，一群人把另一间包厢的门口堵得严严实实。",
                    "line": 205,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "领头的是个浓妆艳抹的年轻女人，穿着一身名牌，手指上戴着好几枚宽边金戒指，姿态懒散，眼神却很冷。她身后站着三四个西装男，不说话，只是站在那里。",
                    "line": 207,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "被堵着的，是包厢里的几个大学生模样的女孩——其中一个站在最前面，个子不高。",
                    "line": 209,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "她穿着黑色的短款机车夹克和高腰百褶裙，脚上踩着一双带点金属扣的厚底马丁靴，是现在年轻女孩里很常见的“甜酷”打扮。",
                    "line": 210,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "留着一头微卷的红发，脸颊还带着年轻人喝了点酒之后特有的那种薄红。",
                    "line": 211,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "她攥着手，下巴微微扬着，眼神里有气，但腿在微微发抖。",
                    "line": 212,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "浓妆女人的声音不高，反而很平静，平静得像在说一件已经定下来的事：",
                    "line": 214,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '"就是你，刚才在大厅用那种眼神看我。现在跟我道歉，道歉了，这事就算了。"',
                    "line": 216,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text": "~ luoluo_relationship = met",
                    "line": 218,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '年轻女孩的声音有一点点抖："我就是随便扫了一眼，我根本没有——"',
                    "line": 219,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '"随便扫了一眼？"浓妆女人打断她，慢条斯理地笑了一下，"我不喜欢别人用那种眼神看我。道歉。"',
                    "line": 221,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "她身后的一个西装男往前踏了半步，包厢里的其他女孩发出一声压抑的惊呼。",
                    "line": 223,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text": "就在这时，洛洛身后传来一个压低了的声音。",
                    "line": 225,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "是她的朋友——一个扎着马尾的女生，凑到洛洛耳边，声音带着明显的慌张：",
                    "line": 227,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text": '"洛洛，你就道个歉吧，就一句话的事，别搞大了……"',
                    "line": 229,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text": "洛洛猛地转过头，眼神里闪过一道受伤的光。",
                    "line": 231,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '"我没做错任何事。"她的声音压得很低，但每个字都很硬。',
                    "line": 233,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '马尾女生往那几个西装男的方向瞥了一眼，缩了缩脖子，继续劝："我知道你没错，但是你看他们那架势……我们今晚就想出来玩一下，犯不着，真的犯不着……"',
                    "line": 235,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text": "洛洛没有再说话。",
                    "line": 237,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "她重新转过脸，直视着浓妆女人。但我看见她的眼眶红了——不是怕，是委屈。",
                    "line": 239,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "是那种被自己人推着往后退、却又不得不独自撑着的委屈。",
                    "line": 241,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": "[继续] -> observe_situation",
                    "content": [],
                    "line": 243,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
            ],
            "stitches": [
                {
                    "type": "Stitch",
                    "name": "observe_situation",
                    "content": [
                        {
                            "type": "Text",
                            "text": "我没有动，先把情况看清楚。",
                            "line": 246,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "浓妆女人，名牌包，金戒指，一身东西加起来不便宜——但更值得注意的是她身后那几个人。西装笔挺，站位分散，不是普通的跟班。",
                            "line": 248,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "这不是普通的女人在撒泼。",
                            "line": 250,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她背后有人。",
                            "line": 252,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "被堵的年轻女孩显然也意识到了这一点——她已经不怎么说话了，只是站在那里咬着嘴唇，眼眶开始泛红，却死撑着不让眼泪掉下来。",
                            "line": 254,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她的朋友们缩在她身后，有人已经悄悄在摸手机，但被旁边的西装男用眼神压了回去。",
                            "line": 256,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [走过去] -> intervene_choice",
                            "line": 258,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 245,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "intervene_choice",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "ktv_confrontation-1.jpg",
                            "line": 261,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '我走了过去，在人群边缘站定，开口："这边怎么了？"',
                            "line": 263,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "浓妆女人侧过头，打量了我一眼，眉毛微微一挑。",
                            "line": 265,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "西装男们也把视线移了过来。",
                            "line": 267,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "被堵着的年轻女孩愣了一下，用一种茫然又带着一点希望的眼神看着我。",
                            "line": 269,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '浓妆女人慢悠悠开了口："朋友，这是我们自己的事，你最好别——"',
                            "line": 271,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[用气场压制，让她自己退]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "approach_aura",
                                    "line": 274,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 273,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[直接动手，让他们掂量清楚]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "approach_fight",
                                    "line": 277,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 276,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[激将她，让她当众出丑]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "approach_taunt",
                                    "line": 280,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 279,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "line": 260,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "approach_aura",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "ktv_confrontation-1.jpg",
                            "line": 283,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我没有说话。",
                            "line": 285,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "只是往前走了一步，在浓妆女人和那个年轻女孩之间站定，然后，静静地看着她。",
                            "line": 287,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "不说话，不解释，不争辩。",
                            "line": 289,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "只是看着她。",
                            "line": 291,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "按摩这门手艺，讲究的是「力从根起，意在先行」。真正的内劲，不需要出手，只需要站在那里，对方就能感受到。",
                            "line": 293,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "浓妆女人的笑容僵了一下。",
                            "line": 295,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她身后的一个西装男往前动了一下。",
                            "line": 297,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '我连眼神都没有偏，只是把手插进口袋，用一种随意到极点的姿势开了口："你们老板叫什么名字？"',
                            "line": 299,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "空气忽然沉了一下。",
                            "line": 301,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "西装男停住了。",
                            "line": 303,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "浓妆女人脸上的笑容完全消失了，她重新打量了我一眼，这一次，她的眼神里多了一点东西——不确定。",
                            "line": 305,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '浓妆女人:"你认识……"',
                            "line": 307,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '我说:"不认识。就是想知道个名字。"',
                            "line": 309,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '我顿了一下："出了事，方便说清楚。"',
                            "line": 311,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "这句话的意思，在场所有人都听懂了。",
                            "line": 313,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "aura_result",
                            "line": 315,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 282,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "aura_result",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "ktv_confrontation-2.jpg",
                            "line": 318,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "浓妆女人沉默了几秒。",
                            "line": 320,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她是个聪明人——跟着有钱有势的男人混，聪明是基本条件。她能感觉到眼前这个人不好惹，但她又不清楚他的底细，这种不确定本身，就是最大的风险。",
                            "line": 322,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '浓妆女人用指甲轻轻刮了一下掌心，最终慢慢笑了："行，今天心情不好，懒得计较。"',
                            "line": 324,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '浓妆女人扫了一眼那个年轻女孩，语气漫不经心："下次注意点眼神。"',
                            "line": 326,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "manman-leaving.jpg",
                            "line": 328,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "然后，她带着人，转身走了。",
                            "line": 329,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "高跟鞋踩在大理石地面上，声音一下一下，走远了。",
                            "line": 331,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ luoluo_affection += 1",
                            "line": 333,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ luoluo_respect += 3",
                            "line": 334,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "luoluo_first_reaction",
                            "line": 336,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 317,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "approach_fight",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "linchen_fight.jpg",
                            "line": 339,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我没有说话，直接走到最近的那个西装男面前，停下来。",
                            "line": 341,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "对方比我高半个头，膀大腰圆，往这儿一站就是个堵路的架势。他低头看了我一眼，嘴角扯了一下，刚要开口——",
                            "line": 343,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我动了。",
                            "line": 345,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "不是那种影视里大开大合的打法。就是一个极其简单的动作：右手扣住他的手腕，拇指精准地压进腕骨内侧的穴位，同时身子侧转，借着他自己的重心，将他的整条手臂反锁向后。",
                            "line": 347,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "他还没反应过来，膝盖就已经软了，整个人被迫弯下腰，额头险些磕上走廊的墙壁。",
                            "line": 349,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "全程不到两秒。",
                            "line": 351,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "走廊里的空气凝住了。",
                            "line": 353,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "另外两个西装男下意识往前动了一步，我抬起眼看过去，平静地说：",
                            "line": 355,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '"穴位锁法。我再用一点力，他这条手臂三个月不能动。"',
                            "line": 357,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我顿了一下。",
                            "line": 359,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '"当然，也可以现在松开，当什么事都没发生过。"',
                            "line": 361,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "两个西装男对视了一眼，停在原地，没有再动。",
                            "line": 363,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "浓妆女人的脸色彻底变了。她没想到事情会走到这一步——她的人从来没有在她面前这样被制住过。",
                            "line": 365,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她的嘴唇动了一下，最终，用一种压低了的、但控制不住变调的声音说：",
                            "line": 367,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"放开他。"',
                            "line": 369,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '"当然。"我松了手，往旁边退了一步，语气没有任何起伏，"那边的女孩，你们不认识，今晚什么事都没有。"',
                            "line": 371,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "不是疑问句。",
                            "line": 373,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "浓妆女人咬了咬牙，最终，冷冷地扫了那年轻女孩一眼，转身拂袖而去。",
                            "line": 375,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '西装男们跟上，其中一个经过我身边时，放慢了脚步，低声说了一个字："记住了。"',
                            "line": 377,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我没有回应。",
                            "line": 379,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "[唐洛洛好感+4]",
                            "line": 381,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "[唐洛洛尊重+5]",
                            "line": 382,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ luoluo_affection += 4",
                            "line": 383,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ luoluo_respect += 5",
                            "line": 384,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "luoluo_first_reaction",
                            "line": 386,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 338,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "approach_taunt",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "linchen_smirk.jpg",
                            "line": 389,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我在浓妆女人身边找了个空位，靠着墙站好，环顾了一下四周，然后开口，语气很轻松：",
                            "line": 391,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"这里的监控应该拍得到走廊吧。"',
                            "line": 393,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "浓妆女人一愣。",
                            "line": 395,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '我继续说："几个人堵着几个女孩要她们道歉，这画面录下来，发出去，挺好看的。"',
                            "line": 397,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"你——"',
                            "line": 399,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '"当然，"我打断她，微笑着看她，"如果只是普通朋友之间的误会，那就当我没说。大家都是成年人，私下解决，出了这个门谁也不认识谁，多好。"',
                            "line": 401,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我说的每一个字，都踩在一条线上——既没有直接威胁她，也没有给她任何台阶可以踩着找回场子。",
                            "line": 403,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她要发作，就要在镜头下发作。",
                            "line": 405,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "浓妆女人脸色铁青，胸口起伏了一下。",
                            "line": 407,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "旁边一个西装男俯身在她耳边低声说了两句。",
                            "line": 409,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '她闭了闭眼，最终，冷冷地看了那年轻女孩一眼："走。"',
                            "line": 411,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "带着人，走了，这一次，走得很快。",
                            "line": 413,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "包厢门口重新安静下来。",
                            "line": 415,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "[唐洛洛好感+5]",
                            "line": 417,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "[唐洛洛顺从+1]",
                            "line": 418,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ luoluo_affection += 5",
                            "line": 419,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ luoluo_obedience += 1",
                            "line": 420,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "luoluo_first_reaction",
                            "line": 422,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 388,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "luoluo_first_reaction",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "luoluo_stunned.jpg",
                            "line": 425,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "包厢里的几个女孩呆了好几秒，才慢慢反应过来。",
                            "line": 427,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '有人捂着胸口说"我的天"，有人直接腿软坐回了沙发。',
                            "line": 429,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "站在最前面的那个女孩——她一直没动。",
                            "line": 431,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "等她的朋友们都缓过神来，吵吵嚷嚷地围过去关心她，她还站在原地，大眼睛直盯着我，神情里有一种刚从绷紧的弦上松开的茫然。",
                            "line": 433,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "过了一会儿，她朋友拉了她一把，她才像是回神了，转过头应了一声，然后重新看向我。",
                            "line": 435,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '她开口，声音比我预想的稳，只是尾音有一点轻："你……谢谢你。"',
                            "line": 437,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '停顿了一下，她补了一句，语气里带着点刚缓过来的倔强："不过我也没打算就这么道歉的。"',
                            "line": 439,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我看着她，没说话。",
                            "line": 441,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '她在我的注视下，脸颊慢慢红了，把视线移开，轻声说："……就是，谢谢。"',
                            "line": 443,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "info_exchange",
                            "line": 445,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 424,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "info_exchange",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "ktv_corridor_chat.jpg",
                            "line": 448,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她的朋友们七嘴八舌地道谢了一轮，陆续退回了包厢。",
                            "line": 450,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "走廊里渐渐只剩我们两个人。",
                            "line": 452,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她整理了一下被挤乱的发梢，重新站直，用一种认真的眼神看着我——不是刚才那种茫然，是下了决心的那种。",
                            "line": 454,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ luoluo_relationship = know_name",
                            "line": 456,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '"我叫唐洛洛。"她主动开口，语气很直接，"在江城大学念大二。"',
                            "line": 457,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "info_exchange_questions",
                            "line": 459,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 447,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "info_exchange_questions",
                    "content": [
                        {
                            "type": "Text",
                            "text":
                                "+ {luoluo_asked_about_woman == false} [问她刚才那个女人是什么来头]",
                            "line": 463,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '我问："刚才那个女人，你认识？"',
                            "line": 464,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '唐洛洛摇了摇头："不认识，就是在大厅等朋友的时候扫了她一眼，结果她直接叫人来堵我们。"',
                            "line": 466,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '她皱了皱眉，声音压低了一点："听我朋友说，她好像是我们学校的一个太妹，跟着这一片某个老板的，具体什么来头不清楚。"',
                            "line": 468,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '她抬起头，看了我一眼："你……好像不太怕她们。"',
                            "line": 470,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ luoluo_asked_about_woman = true",
                            "line": 472,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "info_exchange_questions",
                            "line": 474,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "+ {luoluo_asked_about_injury == false} [问她有没有受伤]",
                            "line": 476,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '我看了她一眼："没事吧？"',
                            "line": 477,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '唐洛洛愣了一下，像是没想到我会问这个，随即摇了摇头："没事，就是……腿有点软。"',
                            "line": 479,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她说完，自己也笑了，笑得有点不好意思，把脸侧开：",
                            "line": 481,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"别笑我。"',
                            "line": 483,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"没笑你。"',
                            "line": 485,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "[唐洛洛好感+1]",
                            "line": 487,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ luoluo_affection += 1",
                            "line": 488,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ luoluo_asked_about_injury = true",
                            "line": 489,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "info_exchange_questions",
                            "line": 491,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text":
                                "{luoluo_asked_about_woman && luoluo_asked_about_injury} [点头，递出名片]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "give_name_card",
                                    "line": 494,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 493,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "line": 461,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "give_name_card",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "name_card_exchange.jpg",
                            "line": 497,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我从口袋里摸出一张名片，递给她。",
                            "line": 499,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她接过去，低头看了一眼。",
                            "line": 501,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "名片正面：林辰，按摩师，传统武学第十二代传承人。",
                            "line": 503,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她抬起头，眼神里带着一点意外，又有一点说不清的好奇。",
                            "line": 505,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"按摩师？"',
                            "line": 507,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"嗯。"',
                            "line": 509,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她又低头看了一眼名片，捏在手里，过了一拍，抬起眼重新打量我：",
                            "line": 511,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"你……为什么帮我？"',
                            "line": 513,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": '["路过，顺手的事。"]',
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "response_practical",
                                    "line": 516,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 515,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Option",
                            "text": '["看不惯仗势欺人的家伙"]',
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "response_chivalrous",
                                    "line": 519,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 518,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[耸了耸肩，没说话]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "response_silent",
                                    "line": 522,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                                },
                            ],
                            "line": 521,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "line": 496,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "response_practical",
                    "content": [
                        {
                            "type": "Text",
                            "text": '"路过。"我说，"顺手的事，没什么特别的。"',
                            "line": 525,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "唐洛洛盯着我看了一秒，然后噗地笑了一下，又马上憋回去，把脸侧开。",
                            "line": 527,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"……有你这么说话的吗。"',
                            "line": 529,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她低着头，用拇指摩挲了一下名片的边角，声音轻了下来：",
                            "line": 531,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"不管怎样……谢谢。"',
                            "line": 533,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "[唐洛洛好感+2]",
                            "line": 535,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ luoluo_affection += 2",
                            "line": 536,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "luoluo_departure",
                            "line": 538,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 524,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "response_chivalrous",
                    "content": [
                        {
                            "type": "Text",
                            "text":
                                '"看不惯仗势欺人的家伙。"我说，"碰巧你撞上了，碰巧我也在。"',
                            "line": 541,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "唐洛洛盯着我看了好几秒，嘴角慢慢弯起来，把脸别过去。",
                            "line": 543,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"……哼，那我运气还不错嘛。"',
                            "line": 545,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她捏着名片，停顿了一拍，声音带着点笑意：",
                            "line": 547,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"谢谢你，林辰。"',
                            "line": 549,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "[唐洛洛好感+3]",
                            "line": 551,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ luoluo_affection += 3",
                            "line": 552,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "luoluo_departure",
                            "line": 554,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 540,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "response_silent",
                    "content": [
                        {
                            "type": "Text",
                            "text": "我耸了耸肩，没有开口。",
                            "line": 557,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "唐洛洛等了两秒，发现我真的没有下文，不由得笑出了声，又捂住嘴，忍笑忍得很辛苦。",
                            "line": 559,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '"你这个人好奇怪。"她嘟囔了一句，声音很轻。',
                            "line": 561,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "然后，她把名片小心地插进钱包最里层的夹层，认认真真地冲我鞠了一躬。",
                            "line": 563,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"谢谢你。"',
                            "line": 565,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "[唐洛洛好感+4]",
                            "line": 567,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ luoluo_affection += 4",
                            "line": 568,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "luoluo_departure",
                            "line": 570,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 556,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "luoluo_departure",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "ktv_corridor_after.jpg",
                            "line": 573,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她的朋友们在包厢门口七嘴八舌地道谢，有两个女生还激动地拉着我的手说了一堆话。",
                            "line": 575,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "唐洛洛站在她们中间，没跟着起哄，只是安静地看着我，眼神里有一种若有所思的东西。",
                            "line": 577,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "送走她们之后，我重新往自己的包厢走。",
                            "line": 579,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "走了几步，身后传来一声：",
                            "line": 581,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"林辰。"',
                            "line": 583,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我回过头。",
                            "line": 585,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "唐洛洛站在走廊里，朋友们已经先进包厢了，走廊里只剩她一个人。昏黄的灯光打在她脸上，她举着那张名片，表情努力维持着漫不经心，但眼神出卖了她。",
                            "line": 587,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '"你的按摩馆……"她停顿了一下，"真的在石榴街？"',
                            "line": 589,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"嗯。"',
                            "line": 591,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"哦。"',
                            "line": 593,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她低下头，把名片重新收好，转身走进包厢，带上了门。",
                            "line": 595,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "门缝合上之前，我隐约看见她脸上露出了一个很小的、藏起来的笑。",
                            "line": 597,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我转过身，重新往吧台方向走。",
                            "line": 599,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "~ luoluo_xiaomanman_1st_encounter_solved = true",
                            "line": 600,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "club.club_bar",
                            "line": 601,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 572,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
                {
                    "type": "Stitch",
                    "name": "club_leave_night",
                    "content": [
                        {
                            "type": "Text",
                            "text":
                                "我把最后一口酒咽下去，把杯子推回吧台，起身走向门口。",
                            "line": 605,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "夜风从门缝里透进来，带着一点夜市那边传来的油烟气。",
                            "line": 607,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我推开门，走进了夜里。",
                            "line": 609,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "world.wine_street",
                            "line": 611,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                        },
                    ],
                    "options": [],
                    "line": 603,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
                },
            ],
            "line": 202,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Club\\club.ink",
        },
        "arrive_at_agency": {
            "type": "Knot",
            "name": "arrive_at_agency",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "xinghua-real-estate.jpeg",
                    "line": 26,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Tag",
                    "name": "audio",
                    "value": "hazy_afternoon_bloom.mp3",
                    "line": 27,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "兴华房产是CBD上一家门面不大但装修整洁的中介公司，橱窗上贴着各类楼盘广告，价格数字印得很大。",
                    "line": 29,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "+ [推开玻璃门进去]",
                    "line": 31,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Divert",
                    "target": "inside",
                    "line": 32,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "options": [],
            "stitches": [
                {
                    "type": "Stitch",
                    "name": "inside",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "xinghua-real-estate-suna-sitting.jpeg",
                            "line": 35,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "前台坐着一个男的，正低头刷手机。里头两张工位，其中一张空着，另一张的坐着一位女士。",
                            "line": 37,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [继续]",
                            "line": 39,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "{",
                            "line": 40,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "- suna_met == false:",
                            "line": 41,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "s00",
                            "line": 42,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "- suna_met == true:",
                            "line": 43,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "visit_suna_office_regular",
                            "line": 44,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "}",
                            "line": 45,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "options": [],
                    "line": 34,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Stitch",
                    "name": "s00",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "xinghua-real-estate-suna-walk-1.jpeg",
                            "line": 48,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "里面的女士站起身来，朝我走过来。",
                            "line": 49,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她二十八九岁的样子，身形笔直，穿一件黑色的职业西装，配铅笔裙，脚上是一双细跟的黑色高跟鞋，鞋尖已经有了细微的磨痕。",
                            "line": 50,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她走过来时脸上带着一点职业性的笑。",
                            "line": 52,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ suna_met = true",
                            "line": 53,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[继续]->s000",
                            "content": [],
                            "line": 55,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 47,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Stitch",
                    "name": "s000",
                    "content": [
                        {
                            "type": "Text",
                            "text":
                                '她在我面前站定，不动声色，眼神扫了我一下，伸出手："您好，我是苏娜，兴华房产的高级客户经理。先生您是想找住房还是商用的？"',
                            "line": 58,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ suna_name_known = true",
                            "line": 59,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[商住两用]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text": '我："商住两用的。"',
                                    "line": 62,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '她微笑着，侧身做了个请的手势："好的，您先进来坐坐，我来帮您看看。"',
                                    "line": 64,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "-",
                                    "line": 65,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 61,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[继续]->suna_sit_down",
                            "content": [],
                            "line": 66,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 57,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Stitch",
                    "name": "suna_sit_down",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "suna-office-sit-talk-1.png",
                            "line": 69,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我跟着她走到她刚才坐着的那张办公桌前，在对面的椅子上坐下。",
                            "line": 70,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "桌上摆着一台电脑、一个文件夹、一只笔筒、少许几个潮玩盲盒娃娃。",
                            "line": 72,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她在对面坐下，把椅子稍微往里收了一点，双手放在桌上。",
                            "line": 74,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "suna_sit_down_observe_option",
                            "line": 75,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "options": [],
                    "line": 68,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Stitch",
                    "name": "suna_sit_down_observe_option",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "suna-office-sit-talk-1.png",
                            "line": 78,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[看她的脸]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text":
                                        "近了之后才看清楚，她五官生得真好。",
                                    "line": 80,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        "眉骨稍高，眼睛细长，眼尾微微上挑。",
                                    "line": 82,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        "妆画得很淡，眼角有一点细纹，几乎看不出来。不但不显老，反而让她显得成熟干练。",
                                    "line": 84,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "suna_sit_down_observe_option",
                                    "line": 86,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 79,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[看她的手]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text": "她的手上没有戒指。",
                                    "line": 89,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "suna_sit_down_observe_option",
                                    "line": 91,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 88,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[往桌下看]",
                            "content": [
                                {
                                    "type": "Tag",
                                    "name": "image",
                                    "value": "office-suna-feet-boat-socks.jpg",
                                    "line": 94,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "桌遮住了大半，但还是能看到一截。",
                                    "line": 95,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        "细跟黑色高跟鞋，鞋面很窄，把脚背绷得很直。脚踝交叠，脚尖朝下。",
                                    "line": 97,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        "她的脚线条很细，皮肤白，一动不动，像摆在那里的。",
                                    "line": 98,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "suna_sit_down_observe_option",
                                    "line": 100,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 93,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[看桌上的盲盒]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text":
                                        "三个盲盒小娃娃，排成一排，为严肃死板的办公环境增加了一些趣味。",
                                    "line": 103,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "suna_sit_down_observe_option",
                                    "line": 105,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 102,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[等她开口]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "suna_talk_at_desk",
                                    "line": 108,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 107,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 77,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Stitch",
                    "name": "suna_talk_at_desk",
                    "content": [
                        {
                            "type": "Text",
                            "text":
                                '她拿起桌上的笔，浏览者电脑屏幕，看了我一眼："商住两用这块，我们手上有几处。您先说说，打算做什么类型的店？好让我帮您筛一下。"',
                            "line": 111,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[一个传统中医按摩店]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text": '我："一个传统中医按摩店。"',
                                    "line": 115,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '她点了一下头，没有停顿，直接记下来："按摩店——好，这个对格局有要求，要安静，最好有独立出入口。"',
                                    "line": 117,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "** [（继续）]",
                                    "line": 119,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "suna_ask_size",
                                    "line": 120,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 113,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[美甲美睫，带个小仓库]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text": '我："美甲美睫，带仓库。"',
                                    "line": 124,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '她在纸上记了一下："储藏需求不大的话，一般带独立隔间就够了。面积要多少？"',
                                    "line": 126,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "** [（继续）]",
                                    "line": 128,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "suna_ask_size",
                                    "line": 129,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 122,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[还没定，先看看行情]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text": '我："还没完全定下来，想先看看。"',
                                    "line": 133,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '她没有催，把笔放在纸上搭着："没关系，先聊聊您的条件，我帮您对一下我们手上的房源，看哪个方向合适。"',
                                    "line": 135,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '我："最好安静一点、有独立出入口。"',
                                    "line": 137,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '她一边记录，一边查阅着电脑："嗯，这几个房源已经符合了。"',
                                    "line": 139,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "suna_ask_size",
                                    "line": 141,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 131,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 110,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Stitch",
                    "name": "suna_ask_size",
                    "content": [
                        {
                            "type": "Text",
                            "text": '她抬起头："面积大概要多少？"',
                            "line": 144,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[七十到一百平，我打算住在店里。]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text":
                                        '我："七十到一百平左右。我打算直接住在店里。"',
                                    "line": 148,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '她继续写："住商一体，那隔断得看房子本身的条件。预算呢？"',
                                    "line": 150,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "face_to_face_budget_choice",
                                    "line": 152,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 146,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[不确定，看房子条件再说。]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text":
                                        '我："面积不太确定，要看具体条件。"',
                                    "line": 156,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '她点点头："那我先按中等面积给你筛，看了再调。预算呢？"',
                                    "line": 158,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "face_to_face_budget_choice",
                                    "line": 160,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 154,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 143,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Stitch",
                    "name": "face_to_face_budget_choice",
                    "content": [],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[3千以内]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text": "~ budget_tier = 1",
                                    "line": 165,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": '我："月租3千以内。"',
                                    "line": 166,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '她顿了一下，视线在屏幕上停了一秒："这个预算，选择不多。我手上有一处合适的，位置一般，条件基本够用。"',
                                    "line": 168,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '她视线离开电脑，专项我："还有一处条件好很多，但价格超出你的预算一截。要不要一起看，做个参照？"',
                                    "line": 170,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "** [都看看，心里有个数]",
                                    "line": 172,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": '我："都看看，心里有个数。"',
                                    "line": 173,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": '苏娜："好。"',
                                    "line": 175,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "face_to_face_end",
                                    "line": 176,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "** [不用，就看预算内的]",
                                    "line": 178,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": '我："不用，就看预算内的。"',
                                    "line": 179,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "她点了一下头，没有多说什么。",
                                    "line": 181,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "face_to_face_end",
                                    "line": 182,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 164,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[3千到5千]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text": "~ budget_tier = 2",
                                    "line": 185,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "~ suna_respect += 3",
                                    "line": 186,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '我："月租3千到5千，条件好的可以多一点上，不超过5千。"',
                                    "line": 187,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '她语气里有一点松动："这个范围好操作。我手上有两处，条件和价格都在你的范围里，你来看看再定。"',
                                    "line": 189,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "face_to_face_end",
                                    "line": 190,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 184,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 162,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Stitch",
                    "name": "face_to_face_end",
                    "content": [
                        {
                            "type": "Text",
                            "text":
                                '她拿起手机，起身向门口走去："两处都在附近，走路能到。"',
                            "line": 194,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[跟上去]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "walk_with_suna",
                                    "line": 197,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 196,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 192,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "line": 24,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        "walk_with_suna": {
            "type": "Knot",
            "name": "walk_with_suna",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "suna_street_walking.jpg",
                    "line": 201,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "她走路的速度很快，高跟鞋踩在人行道上的声音节奏均匀、没有拖沓。",
                    "line": 203,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "我跟在她半步后侧，没有主动说话。",
                    "line": 205,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "她的肩线是平的——左右没有高低差，不是久坐的人。",
                    "line": 207,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "但脚步里有一丁点的节奏断层，大约每隔二三十步，右脚的落地会稍微轻一点点，像是下意识在减轻某处的压力。",
                    "line": 209,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "大概是职业病，长期穿高跟鞋带客看房的代价。",
                    "line": 211,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Tag",
                    "name": "speech",
                    "value": "suna_walking_talk.mp3",
                    "line": 213,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": '她忽然开口："你是第一次来江城？"',
                    "line": 214,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": "[对，刚到。]",
                    "content": [
                        {
                            "type": "Text",
                            "text": '"对，刚到。"',
                            "line": 218,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": '苏娜："哪里人？"',
                            "line": 220,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": '** "外省。"',
                            "line": 222,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "-",
                            "line": 223,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她没有追问。",
                            "line": 224,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "arrive_first_location",
                            "line": 226,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 216,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Option",
                    "text": "[来过几次，这次打算长住]",
                    "content": [
                        {
                            "type": "Text",
                            "text": '我："来过几次，这次打算长住。"',
                            "line": 230,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她嗯了一声，语气里没有特别的反应。",
                            "line": 232,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '她走了几步之后忽然开口："江城的商铺租金这两年涨得快，你的预算卡得比较紧，选址不能太凑合，否则客流很难做起来。"',
                            "line": 234,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ suna_respect += 1",
                            "line": 236,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "** [继续] -> arrive_first_location",
                            "line": 238,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 228,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "stitches": [],
            "line": 199,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        "arrive_first_location": {
            "type": "Knot",
            "name": "arrive_first_location",
            "content": [],
            "options": [
                {
                    "type": "Option",
                    "text": "[继续]",
                    "content": [
                        {
                            "type": "Text",
                            "text": "-",
                            "line": 242,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "alley_shop_exterior.jpg",
                            "line": 243,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她在一条安静的小巷入口停下来。",
                            "line": 244,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "巷子不宽，铺着青石板，两侧是老式的居民楼，底层偶尔有几家小店。",
                            "line": 246,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "靠近巷子中段，有一间门面空着，卷帘门拉到一半，光线照了进去。",
                            "line": 247,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 241,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Option",
                    "text": "[继续]",
                    "content": [
                        {
                            "type": "Text",
                            "text": "-",
                            "line": 249,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "{",
                            "line": 250,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "- budget_tier == 1:",
                            "line": 251,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '苏娜语气平直："第一处，七十二平米，朝北，独立出入，水电独立，月租2800，押一付三。在你预算里，这片能找到的条件就这样。"',
                            "line": 252,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "- budget_tier == 2:",
                            "line": 253,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '苏娜语气平直："先看这处打个底，七十二平米，朝北，月租两千二，押一付三。位置一般，但您有了对比再看第二处，感受会更清楚。"',
                            "line": 254,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "}",
                            "line": 255,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ visited_cheap_shop = true",
                            "line": 256,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 248,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Option",
                    "text": "[继续]",
                    "content": [
                        {
                            "type": "Text",
                            "text": "-",
                            "line": 259,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": '她走上前，拉开卷帘门："进去看看。"',
                            "line": 260,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 258,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Option",
                    "text": "[继续] -> inspect_cheap_shop_intro",
                    "content": [],
                    "line": 262,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "stitches": [],
            "line": 240,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        "inspect_cheap_shop_intro": {
            "type": "Knot",
            "name": "inspect_cheap_shop_intro",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "alley_shop_interior-suna.png",
                    "line": 266,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "房子七十多平，格局是两段式。",
                    "line": 267,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "前半段是开阔的方厅，地面是普通的瓷砖，墙壁刷着白漆，有几处磕碰的痕迹，但结构完好。光线从卷帘门透进来，够亮，通风也还行。",
                    "line": 269,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "后半段用一道推拉门隔开，里头是一个独立的生活区——有独立卫生间，还有一个小厨房台面。",
                    "line": 271,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "门旁边有一个老式的储物柜，留着没搬走。",
                    "line": 272,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "苏娜站在推拉门边，靠着框，等我自己看。",
                    "line": 274,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Divert",
                    "target": "inspection_options",
                    "line": 275,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "options": [],
            "stitches": [
                {
                    "type": "Stitch",
                    "name": "inspection_options",
                    "content": [],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[问苏娜问题]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "ask_suna_cheap",
                                    "line": 279,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 278,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[这里看得差不多了，去看第二处]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "transit_to_premium",
                                    "line": 282,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 281,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 277,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Stitch",
                    "name": "ask_suna_cheap",
                    "content": [
                        {
                            "type": "Text",
                            "text":
                                "苏娜还站在推拉门边，看着手机，但目光偶尔会扫过来。",
                            "line": 286,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "ask_suna_cheap_options",
                            "line": 287,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "options": [],
                    "line": 285,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Stitch",
                    "name": "ask_suna_cheap_options",
                    "content": [],
                    "options": [
                        {
                            "type": "Option",
                            "text": '["附近的人流怎么样？"]',
                            "content": [
                                {
                                    "type": "Text",
                                    "text": '我："附近的人流怎么样？"',
                                    "line": 292,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Tag",
                                    "name": "speech",
                                    "value": "suna_answer_traffic.mp3",
                                    "line": 294,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '苏娜向门口走了两步，抬了抬下巴："这条巷子通往后面的居民区，早晚各有一波固定人流。不是商业街那种随机客，但周边住了不少上班族。"',
                                    "line": 295,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "~ suna_respect += 1",
                                    "line": 297,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "ask_suna_cheap_options",
                                    "line": 299,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 290,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Option",
                            "text": '"前租客是做什么的？"',
                            "content": [
                                {
                                    "type": "Tag",
                                    "name": "speech",
                                    "value": "suna_answer_previous_tenant.mp3",
                                    "line": 304,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '苏娜："足浴。做了三年，没做起来，就空着了。"',
                                    "line": 305,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '她顿了一顿："电路没有问题，上下水前年都翻新过——做过足浴的地方，水路通常比普通商铺强。"',
                                    "line": 307,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "~ suna_respect += 1",
                                    "line": 309,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "ask_suna_cheap_options",
                                    "line": 311,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 301,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Option",
                            "text": '["住在店里有没有什么问题？"]',
                            "content": [
                                {
                                    "type": "Text",
                                    "text": '"住在店里，这一片有没有限制？"',
                                    "line": 315,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Tag",
                                    "name": "speech",
                                    "value": "suna_answer_living.mp3",
                                    "line": 317,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '苏娜："居民区底层，没有明文限制。左右邻居都是住户，只要你不在夜里大声营业，不会有人来找麻烦。"',
                                    "line": 318,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text":
                                        '她补了一句，语气平缓："之前那家足浴，老板也住在后头。没出过问题。"',
                                    "line": 320,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Text",
                                    "text": "~ suna_respect += 1",
                                    "line": 322,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "ask_suna_cheap_options",
                                    "line": 324,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 313,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Option",
                            "text": '["好，我大概了解了，去看第二处吧。"]',
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "transit_to_premium",
                                    "line": 327,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                                },
                            ],
                            "line": 326,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 289,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "line": 265,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        "transit_to_premium": {
            "type": "Knot",
            "name": "transit_to_premium",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "suna_street_walking_2.png",
                    "line": 336,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "我们重新走回了街上。",
                    "line": 338,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "这次走的方向不一样——苏娜带我往CBD的主干道走去，周围的店面开始变得整洁，招牌也做得更精致。",
                    "line": 340,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "{",
                    "line": 342,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "- budget_tier == 1:",
                    "line": 343,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '苏娜边走边说："第二处在前面的公寓楼底层，月租1万，押一付三。超出你说的预算，但你说要做参考，所以带你过去看看。"',
                    "line": 344,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "- budget_tier == 2:",
                    "line": 345,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '苏娜边走边说："第二处在前面的公寓楼底层，月租1万，押一付三。房东是一位大业主，对租客有要求，但房东素质高，合同稳。"',
                    "line": 346,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "}",
                    "line": 347,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": '"房东是什么人？"',
                    "content": [
                        {
                            "type": "Tag",
                            "name": "speech",
                            "value": "suna_about_yunshu.mp3",
                            "line": 351,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '苏娜侧头看了我一眼，表情没什么变化："这片区域有多处产业都在其名下。"',
                            "line": 352,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '她停顿了一下，补了一句："不太好打交道，但合同一旦签了就不会随便涨价。那边看的主要是租客本身。她对业态有要求。"',
                            "line": 354,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "** [继续] -> arrive_premium_location",
                            "line": 356,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 349,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Option",
                    "text": "[沉默地跟着走]",
                    "content": [
                        {
                            "type": "Divert",
                            "target": "arrive_premium_location",
                            "line": 359,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 358,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "stitches": [],
            "line": 334,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        "arrive_premium_location": {
            "type": "Knot",
            "name": "arrive_premium_location",
            "content": [
                {
                    "type": "Text",
                    "text": "~ visited_premium_shop = true",
                    "line": 367,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "premium_shop_exterior.png",
                    "line": 369,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Tag",
                    "name": "audio",
                    "value": "upscale_street_ambience.mp3",
                    "line": 370,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "公寓楼的外立面做了翻新，米白色的石材，线条干净。",
                    "line": 372,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '底层的商铺有两间，一间已经开着一家精品花店，另一间就是目标——落地玻璃门，门口挂了一张"招租"的小牌。',
                    "line": 373,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '苏娜在门口停了一下，掏出钥匙开了锁，推开落地玻璃门："进来吧。"',
                    "line": 375,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": "[进入]-> inspect_premium_shop",
                    "content": [],
                    "line": 376,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "stitches": [],
            "line": 366,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        "inspect_premium_shop": {
            "type": "Knot",
            "name": "inspect_premium_shop",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "premium_shop_interior.jpg",
                    "line": 380,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "九十五平，格局比第一处宽阔得多。",
                    "line": 382,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "工作区占了前三分之二，地面是磨砂灰色的石材，层高也更高，整个空间有一种被刻意打理过的克制感。墙面做了隔音处理，站在里头几乎听不到外面街道上的声音。",
                    "line": 384,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "进门处是宽敞的接待区，足够放一张长条桌、几把椅子，还留得出走道。",
                    "line": 385,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "靠里侧，一道实木门把里面的房间隔开隔开。",
                    "line": 387,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": "[继续]",
                    "content": [
                        {
                            "type": "Text",
                            "text": "-",
                            "line": 389,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "推开门——比第一处的生活区大了将近一半。独立卫浴，浴缸和淋浴都有；",
                            "line": 390,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "厨房区域是独立的，不是台面，是一个完整的小厨房；",
                            "line": 391,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "卧室区的窗户朝南，下午的光线会从这里斜进来。",
                            "line": 392,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 388,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Option",
                    "text": "[继续]",
                    "content": [
                        {
                            "type": "Text",
                            "text": "-",
                            "line": 394,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "suna-standing-good-shop-empty.jpg",
                            "line": 396,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '苏娜站在工作区中央，语气一如既往地平："水电齐全，宽带已接入，中央空调，前租客做过轻装修，没有动结构。"',
                            "line": 397,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "{",
                            "line": 399,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "- budget_tier == 1:",
                            "line": 400,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '她补了一句："比你预算贵了不少。但你要的住商两用，这里的生活区条件是第一处没法比的。"',
                            "line": 401,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "- budget_tier == 2:",
                            "line": 402,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '她补了一句："条件和价格都在您说的范围里。就是房东那边要过一关。"',
                            "line": 403,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "}",
                            "line": 404,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 393,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Option",
                    "text": "[这边的客群和巷子里那处差别大吗？]",
                    "content": [
                        {
                            "type": "Text",
                            "text": "我：这边的客群和巷子里那处差别大吗？",
                            "line": 407,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '苏娜："这边是商务区的边缘地带，上班族多，白领比例高，消费能力比居民区强一截。"',
                            "line": 409,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '她侧头看了我一眼："但这边的人对服务质量也挑得多。"',
                            "line": 411,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": '** ["好，我大概清楚了。"]',
                            "line": 413,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "calculate_budget",
                            "line": 414,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 406,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "stitches": [],
            "line": 378,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        "calculate_budget": {
            "type": "Knot",
            "name": "calculate_budget",
            "content": [
                {
                    "type": "Text",
                    "text": "苏娜没有催我，她靠着墙看手机，安静地等着。",
                    "line": 418,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": "[告诉苏娜，先租第一处]",
                    "content": [
                        {
                            "type": "Divert",
                            "target": "decide_cheap_shop",
                            "line": 421,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 420,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Option",
                    "text": "[再想想]",
                    "content": [
                        {
                            "type": "Text",
                            "text": '我:"我再想想"',
                            "line": 425,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '苏娜平淡地点了点头："房源随时有变，要定的话早点联系我。我将这两处房源的资料都发您爱信。"',
                            "line": 427,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ suna_aichat = true",
                            "line": 428,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "** [答谢，离开]",
                            "line": 430,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "谢谢，那我们微信联系。我先走了。",
                            "line": 431,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "world",
                            "line": 432,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 423,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "stitches": [],
            "line": 416,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        "decide_cheap_shop": {
            "type": "Knot",
            "name": "decide_cheap_shop",
            "content": [
                {
                    "type": "Text",
                    "text": '"先租第一处吧，"我说，"巷子里那间。"',
                    "line": 441,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "{",
                    "line": 443,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "- budget_tier == 1:",
                    "line": 444,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '苏娜从墙上直起身，把手机揣进口袋："好。押一付三，五千四。现在回去签合同，今天能定下来。"',
                    "line": 445,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "- budget_tier == 2:",
                    "line": 446,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '苏娜从墙上直起身，把手机揣进口袋："好。两千二，押一付三，六千六。"',
                    "line": 447,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '她停顿了一下，语气没有变化，但字句里有一点东西："第二处以后有机会再说。"',
                    "line": 448,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "}",
                    "line": 449,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": "[离开] 我：我们可以走了。",
                    "content": [
                        {
                            "type": "Text",
                            "text": "-",
                            "line": 453,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '走到门口，她回了头，看了一眼这间空置的铺子，又看了看我，语气还是那么平："这里先记着。"',
                            "line": 454,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 452,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Option",
                    "text": "[跟着她走出去]",
                    "content": [
                        {
                            "type": "Text",
                            "text": "回到兴华房产的门店，",
                            "line": 457,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "sign_contract",
                            "line": 458,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 456,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "stitches": [],
            "line": 439,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        "sign_contract": {
            "type": "Knot",
            "name": "sign_contract",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "suna-office-sit-talk-1.png",
                    "line": 467,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "苏娜把合同模板从抽屉里取出来，坐在对面。",
                    "line": 468,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '苏娜把需要填写的地方用笔一一圈出来，然后把笔推到我这边："租期建议签一年，你有什么问题现在提，签了之后再改麻烦。"',
                    "line": 470,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "她说话的时候没有抬头，目光一直在合同上，手指搭在桌面上轻轻敲了一下，指甲是干净的裸色。",
                    "line": 472,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "+ [仔细看合同内容]",
                    "line": 474,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "我把合同从头到尾看了一遍。条款清晰，没有隐性费用，押金退还条件也写得明白。",
                    "line": 475,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "苏娜没有催促，等我看完。",
                    "line": 477,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Divert",
                    "target": "pay_and_get_keys",
                    "line": 479,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "+ [直接签字]",
                    "line": 481,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Divert",
                    "target": "pay_and_get_keys",
                    "line": 482,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "options": [],
            "stitches": [],
            "line": 465,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        "pay_and_get_keys": {
            "type": "Knot",
            "name": "pay_and_get_keys",
            "content": [
                {
                    "type": "Text",
                    "text": "{",
                    "line": 487,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "- budget_tier == 1:",
                    "line": 488,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "~ money -= 5400",
                    "line": 489,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "- else:",
                    "line": 490,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "~ money -= 6600",
                    "line": 491,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "}",
                    "line": 492,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "钱转过去，苏娜把钥匙放在桌上推给我。",
                    "line": 495,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "两把，一把卷帘门的，一把里侧房门的，穿在一个普通的铁圈上。",
                    "line": 497,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '苏娜："房东那边我今天通知，{suna_respect >= 2:您|你}随时可以去收拾。"',
                    "line": 499,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '苏娜在合同上盖了章，把副本放进信封，递给我："有问题找我。"',
                    "line": 501,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "她把另一份合同收进抽屉，然后打开电脑，看来是准备处理下一件事了。",
                    "line": 503,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "~ has_rented_basic_massage_room = true",
                    "line": 507,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": "[站起来，拿起钥匙和合同]",
                    "content": [
                        {
                            "type": "Divert",
                            "target": "rent_complete",
                            "line": 510,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 509,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "stitches": [],
            "line": 485,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        "rent_complete": {
            "type": "Knot",
            "name": "rent_complete",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "alley-shop-inside-empty-sunset.jpg",
                    "line": 514,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Tag",
                    "name": "audio",
                    "value": "city_evening_ambience.mp3",
                    "line": 515,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "当天傍晚，我去巷子里的那间铺子转了一圈。",
                    "line": 517,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "钥匙插进去，门开了，空旷的屋子里有一点回声。",
                    "line": 519,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "我在工作区站了一会儿，在心里比量了一下动线——按摩椅放哪儿，接待区怎么隔，师父那幅对联挂哪面墙。",
                    "line": 521,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "然后推开后面的拉门，走进生活区。",
                    "line": 523,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "窗边有一道斜进来的黄昏光。",
                    "line": 525,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "还有很多事要做——买按摩椅，置办耗材，让人知道这里有一家按摩馆。",
                    "line": 531,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "但第一步，算是走出去了。",
                    "line": 533,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": "[继续]",
                    "content": [
                        {
                            "type": "Divert",
                            "target": "world.night",
                            "line": 536,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "line": 535,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "stitches": [],
            "line": 512,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        "visit_suna_office_regular": {
            "type": "Knot",
            "name": "visit_suna_office_regular",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "xinghua-real-estate-suna-sitting.jpeg",
                    "line": 541,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "{",
                    "line": 542,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "- has_rented_basic_massage_room == true:",
                    "line": 543,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Divert",
                    "target": "END",
                    "line": 544,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "- else:",
                    "line": 545,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Divert",
                    "target": "come_back_to_rent_the_basic_room",
                    "line": 546,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Text",
                    "text": "}",
                    "line": 547,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "options": [],
            "stitches": [
                {
                    "type": "Stitch",
                    "name": "come_back_to_rent_the_basic_room",
                    "content": [
                        {
                            "type": "Text",
                            "text": "苏娜坐在工位上，正低头看着电脑屏幕。",
                            "line": 550,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "听到动静，她抬起头，认出了我。",
                            "line": 552,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": '苏娜："回来了。"',
                            "line": 554,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [继续]",
                            "line": 556,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "-",
                            "line": 557,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '她把椅子稍微转过来一点，双手搭在桌上："上次的两处，还没定？"',
                            "line": 559,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": '+ ["对，还没定。"]',
                            "line": 561,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": '我："对，还在考虑。"',
                            "line": 563,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她点了点头，没有多说，直接转向电脑查了一眼。",
                            "line": 565,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '苏娜："两处都还在，没有新租客。你要的话，今天还能签。"',
                            "line": 567,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "regular_visit_options",
                            "line": 569,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": '+ ["那两处还在不在"]',
                            "line": 571,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": '我："想再来问问，那两处还在不在。"',
                            "line": 573,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": '苏娜："都还在。"',
                            "line": 575,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她的语气里没有什么特别的，但她顺手把椅子往桌边收了一点。",
                            "line": 577,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "regular_visit_options",
                            "line": 579,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "options": [],
                    "line": 549,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
                {
                    "type": "Stitch",
                    "name": "regular_visit_options",
                    "content": [
                        {
                            "type": "Text",
                            "text": "+ [告诉苏娜，租第一处]",
                            "line": 583,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我：“我要租第一处”",
                            "line": 584,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "苏娜：“好的，第一处确实更适合你现在地预算。押一付三，五千四。合同我已经准备好了。”",
                            "line": 586,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "sign_contract",
                            "line": 587,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [问苏娜，那两处房有没有什么变化]",
                            "line": 589,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": '我："这几天有没有什么新情况？"',
                            "line": 591,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '苏娜看了一眼屏幕："第一处没有动。第二处——"',
                            "line": 593,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '她停顿了一秒，"房东上周来看过一次，问了一下有没有合适的租客。"',
                            "line": 595,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '她看了我一眼，语气平："你如果有意思，我可以帮你约。"',
                            "line": 597,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "** [继续]",
                            "line": 599,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "regular_visit_options",
                            "line": 600,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "+ [先不定，以后再说]",
                            "line": 602,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": '我："我再想想，过几天再来。"',
                            "line": 604,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                '苏娜平静地点了下头："好。有变化我联系你。"',
                            "line": 606,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她转回去看电脑，没有送我。",
                            "line": 608,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "world",
                            "line": 610,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                        },
                    ],
                    "options": [],
                    "line": 581,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
                },
            ],
            "line": 539,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\rent.ink",
        },
        "intro": {
            "type": "Knot",
            "name": "intro",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "train_window_night.jpg",
                    "line": 2,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
                {
                    "type": "Tag",
                    "name": "video",
                    "value": "train_window_night.mp4",
                    "line": 3,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
                {
                    "type": "Tag",
                    "name": "audio",
                    "value": "train_ambience.mp3",
                    "line": 4,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
                {
                    "type": "Text",
                    "text": "车窗外，城市的灯火从黑暗中浮现出来。",
                    "line": 6,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "我叫林辰。30岁。从小跟着师父学传统武学，学了25年。",
                    "line": 9,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
                {
                    "type": "Text",
                    "text": "他使用武学演化而来的手法，替人按摩治病。",
                    "line": 11,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "表面上客人只以为他是一个优秀的按摩师，但在道上，都称他为顾神手。",
                    "line": 13,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
                {
                    "type": "Text",
                    "text": "三年前，师父死了。",
                    "line": 15,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": "[继续]",
                    "content": [
                        {
                            "type": "Divert",
                            "target": "intro_2",
                            "line": 18,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                    ],
                    "line": 17,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
            ],
            "stitches": [
                {
                    "type": "Stitch",
                    "name": "intro_2",
                    "content": [
                        {
                            "type": "Text",
                            "text": "死因，官方的说法是意外。",
                            "line": 22,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "但在那之前，师父曾经告诉我：有人找过他，要他在某场比赛里配合造假。他拒绝了。",
                            "line": 24,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text": "一个月后，他死于非命。",
                            "line": 26,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text": "那场比赛，叫世界按摩大赛。",
                            "line": 28,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "主办方背后的那个集团，我至今不知道名字，但一定和师父的死有关系。",
                            "line": 30,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text": "要接近那个集团，就得先进入那个圈子。",
                            "line": 33,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "要进入那个圈子，就得先在一座城市里站稳脚跟——有名气，有技术，有人知道我的名字。",
                            "line": 35,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "世界按摩大赛每三年在不同城市举办一次。下一届，在江城。",
                            "line": 37,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text": "所以我来了。",
                            "line": 39,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "这不是我的故乡。我在这里没有朋友，没有关系，没有铺面，没有客人。",
                            "line": 41,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text": "手里只剩两万块。够用，但不宽裕。",
                            "line": 43,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我从行李箱里拿出师父的那幅对联",
                            "line": 45,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text": '"心诚可贵，敬天爱人"',
                            "line": 46,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text": "用布裹着，一路带来的。",
                            "line": 47,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                        {
                            "type": "Text",
                            "text": "等我有了自己的地方，就把它挂上去。",
                            "line": 49,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[下车]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "intro_5",
                                    "line": 52,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                                },
                            ],
                            "line": 51,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                    ],
                    "line": 20,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
            ],
            "line": 0,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
        },
        "intro_5": {
            "type": "Knot",
            "name": "intro_5",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "train_station_arrival.jpg",
                    "line": 56,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
                {
                    "type": "Tag",
                    "name": "audio",
                    "value": "city_morning_ambience.mp3",
                    "line": 57,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
                {
                    "type": "Text",
                    "text": "出站的时候，已经是早上。",
                    "line": 59,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "江城的空气里有一股混合着尾气和早点摊的气味。人很多，步伐都很快。",
                    "line": 61,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
                {
                    "type": "Text",
                    "text": "我在手机里订了一间商务酒店，先住着。",
                    "line": 63,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": "[前往酒店]",
                    "content": [
                        {
                            "type": "Divert",
                            "target": "hotel_room_first_time",
                            "line": 66,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                        },
                    ],
                    "line": 65,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
                },
            ],
            "stitches": [],
            "line": 54,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\intro.ink",
        },
        "A_Company": {
            "type": "Knot",
            "name": "A_Company",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "A_company_outside.jpg",
                    "line": 1,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text": "{",
                    "line": 3,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text": "- a_company_investigation_stage <= none:",
                    "line": 4,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Divert",
                    "target": "A_Company_Investigation_1st_time",
                    "line": 5,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text": "- else:",
                    "line": 6,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": "[x] -> world",
                    "content": [
                        {
                            "type": "Text",
                            "text": "}",
                            "line": 8,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                    ],
                    "line": 7,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
            ],
            "stitches": [],
            "line": 0,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
        },
        "A_Company_Investigation_1st_time": {
            "type": "Knot",
            "name": "A_Company_Investigation_1st_time",
            "content": [
                {
                    "type": "Text",
                    "text": "1. 认识雨薇（如果是unmet）",
                    "line": 14,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text": "2. 增加好感度",
                    "line": 15,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text": "3. optional增加顺从度obedience",
                    "line": 16,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text": "4. 知道雨薇在A公司上班",
                    "line": 17,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text": "5. optional知道雨薇是A公司总裁秘书",
                    "line": 18,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text": "通过工牌",
                    "line": 19,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text": "optional打晕雨薇",
                    "line": 20,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text": "6. 成功安装监控",
                    "line": 21,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text": "1. 玉足福利",
                    "line": 23,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "A_company_outside.jpg",
                    "line": 24,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "A集团，师父最后留下的信息，直指这里。他当年似乎与A集团有来往。但是具体他的死是否与A集团有关。",
                    "line": 26,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text": "我需要一探究竟。",
                    "line": 27,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "A-corp-frontdesk-night.jpg",
                    "line": 30,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "走进大厅，一个值夜班的保安趴在前台睡着了。电梯前有类似地铁站的门禁。",
                    "line": 31,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": "[跳过去]",
                    "content": [],
                    "line": 33,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Option",
                    "text": "[从保安那里把门禁卡偷来]",
                    "content": [
                        {
                            "type": "Text",
                            "text": "-",
                            "line": 36,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "A-corp-1st-floor-elevator.jpg",
                            "line": 38,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我成功进入了门禁，来到电梯前。",
                            "line": 39,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                    ],
                    "line": 34,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Option",
                    "text": "[坐电梯上27楼]",
                    "content": [
                        {
                            "type": "Divert",
                            "target": "elevator",
                            "line": 42,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                    ],
                    "line": 41,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Option",
                    "text": "[走楼梯]",
                    "content": [
                        {
                            "type": "Divert",
                            "target": "stairs",
                            "line": 44,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                    ],
                    "line": 43,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
            ],
            "stitches": [
                {
                    "type": "Stitch",
                    "name": "elevator",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "A-corp-1st-floor-elevator.jpg",
                            "line": 47,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "电梯门合上。数字一层一层往上爬。",
                            "line": 49,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "到了10楼，门开了。",
                            "line": 51,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "一个女人走进来。",
                            "line": 53,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "{yuwei_relationship >= know_name:",
                            "line": 55,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "是她。",
                            "line": 56,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "程雨薇侧过脸看我，嘴角微微动了一下。不是笑，但也不是没笑。：你也在这栋楼？",
                            "line": 58,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她重新看向电梯门。香水的气味散过来——还是上次那个味道。",
                            "line": 60,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "- else:",
                            "line": 61,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她穿着一件深色的职业外套，手提包挂在手肘上。进来之后直接站到另一侧，没看我。",
                            "line": 62,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "电梯门关上。",
                            "line": 64,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "}",
                            "line": 65,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "数字继续往上。22楼，23楼，24楼——",
                            "line": 67,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "电梯猛地一震。",
                            "line": 69,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "灯灭了。",
                            "line": 71,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "整个轿厢停在半空，金属结构发出一声沉闷的响。",
                            "line": 73,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "yuwei-elevator.jpg",
                            "line": 75,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "程雨薇惊慌中叫出声来：啊！",
                            "line": 76,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她没说出话，身体已经朝我这边倒过来。",
                            "line": 78,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我下意识伸手，她整个人倒进我怀里。",
                            "line": 80,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "衣料的触感，发丝擦过我下颌，还有那股香甜的气味——近到几乎是直接灌进来的。",
                            "line": 82,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "沉默了两秒。",
                            "line": 84,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "{yuwei_relationship >= know_name:",
                            "line": 86,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "程雨薇：……对不起。",
                            "line": 87,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她声音很低，但没有马上站直。",
                            "line": 89,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "- else:",
                            "line": 90,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她僵了一下，调整呼吸，才慢慢撑着我的手臂站起来。",
                            "line": 91,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "}",
                            "line": 92,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "应急灯亮起来，昏黄的光打在狭小的空间里。",
                            "line": 94,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她退后一步，低头。",
                            "line": 96,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她：啊……",
                            "line": 98,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她慢慢蹲下去，右手捂住脚踝。",
                            "line": 100,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "{yuwei_relationship >= know_name:",
                            "line": 102,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "程雨薇：扭到了。",
                            "line": 103,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "- else:",
                            "line": 104,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她皱了一下眉，没说话。",
                            "line": 105,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "}",
                            "line": 106,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我蹲下来，看了一眼她捂着的位置。",
                            "line": 108,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "{yuwei_relationship >= know_name && yuwei_love >= 2:",
                            "line": 110,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "elevator_massage",
                            "line": 111,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "- else:",
                            "line": 112,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "elevator_first_comfort",
                            "line": 113,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "}",
                            "line": 114,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                    ],
                    "options": [],
                    "line": 46,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Stitch",
                    "name": "elevator_first_comfort",
                    "content": [
                        {
                            "type": "Text",
                            "text": "我：还好吗？",
                            "line": 118,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她抬起头，眼神扫了我一下。",
                            "line": 120,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她：没事。",
                            "line": 122,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "停了一拍。",
                            "line": 124,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她：谢谢你刚才……接住我。",
                            "line": 126,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她说这句话的时候，视线落在别处。地板，或者某一面墙。",
                            "line": 128,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "应急灯的光让她的轮廓很柔，但她的姿态是收的——膝盖并拢，手放在腿上。",
                            "line": 130,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我们就这样等着。",
                            "line": 132,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "elevator_end",
                            "line": 134,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                    ],
                    "options": [],
                    "line": 116,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Stitch",
                    "name": "elevator_seen_comfort",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "A-corp-elevator-blackout-sit.jpg",
                            "line": 137,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我：严重吗？",
                            "line": 139,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "程雨薇：应该不至于。",
                            "line": 141,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她试着动了动脚踝，轻轻吸了口气。",
                            "line": 143,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "程雨薇：等电梯来了走走看。",
                            "line": 145,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我没说什么。她也没再说话。",
                            "line": 147,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "应急灯把两个人的影子压在同一面墙上。",
                            "line": 149,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "elevator_end",
                            "line": 151,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                    ],
                    "options": [],
                    "line": 136,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Stitch",
                    "name": "elevator_massage",
                    "content": [
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "A-corp-elevator-blackout-sit.jpg",
                            "line": 154,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我：我看一下。",
                            "line": 156,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她没有拒绝。",
                            "line": 158,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我从口袋里取出那瓶精油——师父配的方子，随身带着的。瓶身很小，但味道一出来就能闻到，草本里带着一点辛。",
                            "line": 160,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "程雨薇：这是……",
                            "line": 162,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我：活血的。我来帮你揉一下。",
                            "line": 164,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她沉默了片刻，然后把脚伸过来。",
                            "line": 166,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Tag",
                            "name": "image",
                            "value": "A-corp-elevator-massage-feet.jpg",
                            "line": 168,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我把精油在掌心化开，从她的脚踝侧面开始，沿着肌腱的走向慢慢推。",
                            "line": 170,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她没出声。但我能感觉到她起初绷着，后来慢慢松了。",
                            "line": 172,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "程雨薇：……你很熟练。",
                            "line": 174,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我：学过一点。",
                            "line": 176,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "程雨薇：在哪学的？",
                            "line": 178,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我：师父教的。",
                            "line": 180,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她没有追问。只是重新把视线落到别处。应急灯的光打在她侧脸上，她抿着嘴，神情很难辨认。",
                            "line": 182,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ yuwei_love += 1",
                            "line": 184,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ yuwei_obedience += 1",
                            "line": 185,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "elevator_end",
                            "line": 187,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                    ],
                    "options": [],
                    "line": 153,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Stitch",
                    "name": "elevator_end",
                    "content": [
                        {
                            "type": "Text",
                            "text": "等了大概十分钟。",
                            "line": 191,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "电梯重新启动，灯亮起来，数字跳到27。",
                            "line": 193,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "门开了。",
                            "line": 195,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "{yuwei_relationship >= know_name:",
                            "line": 197,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "程雨薇先走出去，在门口停了一下，回头看我。",
                            "line": 198,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "程雨薇：谢谢。",
                            "line": 200,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "就两个字。然后她走了。",
                            "line": 202,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "- else:",
                            "line": 204,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她先走出去，没有回头。",
                            "line": 205,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "~ yuwei_relationship = met",
                            "line": 207,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "高跟鞋踩在地板上，脚步比进来的时候慢了一点。",
                            "line": 208,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "{yuwei_relationship < know_name:",
                            "line": 209,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我甚至还不知道她叫什么名字。",
                            "line": 210,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "}",
                            "line": 211,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Text",
                            "text": "}",
                            "line": 213,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "floor_27",
                            "line": 214,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                    ],
                    "options": [],
                    "line": 189,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Stitch",
                    "name": "stairs",
                    "content": [
                        {
                            "type": "Text",
                            "text": "我费力爬上了27楼",
                            "line": 218,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "world",
                            "line": 219,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                        },
                    ],
                    "options": [],
                    "line": 217,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
            ],
            "line": 11,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
        },
        "floor_27": {
            "type": "Knot",
            "name": "floor_27",
            "content": [
                {
                    "type": "Text",
                    "text": "我随后也走出电梯。",
                    "line": 223,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Text",
                    "text": "todo：补全",
                    "line": 224,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
                {
                    "type": "Divert",
                    "target": "world",
                    "line": 225,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
                },
            ],
            "options": [],
            "stitches": [],
            "line": 222,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\CBD\\A_Company.ink",
        },
        "massage_shop": {
            "type": "Knot",
            "name": "massage_shop",
            "content": [
                {
                    "type": "Text",
                    "text": "{",
                    "line": 1,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Text",
                    "text": "- yuwei_relationship < know_name:",
                    "line": 2,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Divert",
                    "target": "yuwei_avoid_rain",
                    "line": 3,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Text",
                    "text": "}",
                    "line": 4,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Text",
                    "text": "regular massage shop content",
                    "line": 5,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Divert",
                    "target": "world",
                    "line": 6,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
            ],
            "options": [],
            "stitches": [],
            "line": 0,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
        },
        "yuwei_avoid_rain": {
            "type": "Knot",
            "name": "yuwei_avoid_rain",
            "content": [
                {
                    "type": "Text",
                    "text": "1. 获取雨薇的名字",
                    "line": 11,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Text",
                    "text": "2. 增加好感度",
                    "line": 12,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Text",
                    "text": "3. optional增加顺从度obedience",
                    "line": 13,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Text",
                    "text": "4. 知道雨薇在A公司上班",
                    "line": 14,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Text",
                    "text": "1. 玉足福利",
                    "line": 16,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Text",
                    "text": "{",
                    "line": 17,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Text",
                    "text": "- yuwei_relationship >= know_name:",
                    "line": 18,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Text",
                    "text": "不应该出现的逻辑错误",
                    "line": 19,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Divert",
                    "target": "END",
                    "line": 20,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Text",
                    "text": "}",
                    "line": 21,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Text",
                    "text": "黄昏，外边下着暴雨。",
                    "line": 22,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Text",
                    "text": "一下午都没什么客人。",
                    "line": 23,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
            ],
            "options": [
                {
                    "type": "Option",
                    "text": "[关门，休息时间]",
                    "content": [
                        {
                            "type": "Text",
                            "text": "我到店门口，正要把招牌反过来。",
                            "line": 25,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                    ],
                    "line": 24,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Option",
                    "text": "[继续开着]",
                    "content": [
                        {
                            "type": "Text",
                            "text": "我坐在摇椅上，听着这雨声。",
                            "line": 27,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text": "-",
                            "line": 28,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text": "一个女生跑了进来。浑身都被淋湿了。",
                            "line": 29,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "{yuwei_relationship == met:我一看，这不就是那天在A集团电梯内遇到的那位女生吗？}",
                            "line": 30,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她穿着白色真丝衬衣，黑色包臀裙，黑色红底高跟鞋。她没有穿丝袜，而是穿着船袜。",
                            "line": 32,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text": "蕾丝内衣透过湿漉漉的衬衣，若隐若现。",
                            "line": 34,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她看到了我，一直时间因为自己的狼狈感到有些尴尬。",
                            "line": 36,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                    ],
                    "line": 26,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Option",
                    "text": "[关门了，赶走她]",
                    "content": [
                        {
                            "type": "Text",
                            "text": "我：不好意思，我们已经关门了。",
                            "line": 39,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她：老板，外面下着暴雨，你就让我避一避雨吧。",
                            "line": 40,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text": "** [不行]",
                            "line": 41,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我：实在不好意思，我们真的关门了。",
                            "line": 42,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她：你是按摩店吧？那我在这里消费还不行吗？",
                            "line": 43,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text": "*** [不行]",
                            "line": 44,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我：不好意思，我是真的关门了。你去别处吧？",
                            "line": 45,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text": "说着，我将她请了出去。",
                            "line": 46,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text": "她：你这个人好不近人情呀！",
                            "line": 47,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我将店门关上。",
                            "line": 48,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "看着如此娇美可人的女孩，淋着雨，着实有些可怜。",
                            "line": 49,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "她一脸无奈以及不可思议，四处张望看有没有别处可以避雨。跑起来，消失在视野里了。",
                            "line": 50,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text": "*** [好的]",
                            "line": 51,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我：好的。你可是我今天最后一个客人了。你先换鞋进来吧。",
                            "line": 52,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text": "我示意让她在玄关坐下。",
                            "line": 53,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Divert",
                            "target": "entryway",
                            "line": 54,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Text",
                            "text": "** []",
                            "line": 55,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                    ],
                    "line": 38,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
                {
                    "type": "Option",
                    "text": "[邀请她进来]",
                    "content": [],
                    "line": 56,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
            ],
            "stitches": [
                {
                    "type": "Stitch",
                    "name": "entryway",
                    "content": [
                        {
                            "type": "Text",
                            "text":
                                "她坐在玄关的长凳上。我将脱鞋递到了她脚前。",
                            "line": 59,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[递给她毛巾]",
                            "content": [],
                            "line": 60,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                        {
                            "type": "Option",
                            "text": "[给她倒一杯热茶]",
                            "content": [
                                {
                                    "type": "Text",
                                    "text": "*",
                                    "line": 62,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                                },
                                {
                                    "type": "Divert",
                                    "target": "world",
                                    "line": 64,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                                },
                            ],
                            "line": 61,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                        },
                    ],
                    "line": 58,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
                },
            ],
            "line": 8,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\massage-shop.ink",
        },
        "hotel_room_first_time": {
            "type": "Knot",
            "name": "hotel_room_first_time",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "hotel_room.jpg",
                    "line": 1,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Tag",
                    "name": "audio",
                    "value": "hotel_corridor_ambience.mp3",
                    "line": 2,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "推开房门，是标准的商务酒店格局：米白色的墙，一张双人床，窗帘拉着，缝隙里透进来一点午后的光。",
                    "line": 4,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "我把行李箱推进去，把师父的对联搁在床头柜上，还没拆包。",
                    "line": 6,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text": "坐了一会儿。",
                    "line": 8,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text": "落脚的事算是对付过去了。",
                    "line": 10,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text": "接下来是租铺。",
                    "line": 12,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "得找一家房产中介，看看附近有没有合适的商铺用来开按摩馆。",
                    "line": 13,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text":
                        '手机地图搜了一下"房产中介"，附近几家，最近一家叫兴华房产，在CBD，步行十分钟。',
                    "line": 15,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text": "+ [换件衣服，出门]",
                    "line": 17,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Divert",
                    "target": "world",
                    "line": 18,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text": "+ [先在房间里整理一下思路]",
                    "line": 20,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Divert",
                    "target": "think_in_room",
                    "line": 21,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
            ],
            "options": [],
            "stitches": [
                {
                    "type": "Stitch",
                    "name": "think_in_room",
                    "content": [
                        {
                            "type": "Text",
                            "text": "我坐在床边，把手机扣在桌上。",
                            "line": 25,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                        },
                        {
                            "type": "Text",
                            "text": "师父的事，不能急。",
                            "line": 27,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "黑道背后的那个集团，是世界按摩大赛的举办方。要接近他们，就要先在这个城市站稳脚跟，通过打响我作为按摩师的名气，拿到参加世界按摩大赛的资格。",
                            "line": 29,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "江城不是我的故乡，但接下来很长一段时间，这里就是我的地盘。",
                            "line": 31,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                        },
                        {
                            "type": "Text",
                            "text":
                                "我看着窗外。街上的人来来往往，每个人脚步都很快。",
                            "line": 33,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                        },
                    ],
                    "options": [
                        {
                            "type": "Option",
                            "text": "[换件衣服，出门]",
                            "content": [
                                {
                                    "type": "Divert",
                                    "target": "world",
                                    "line": 36,
                                    "col": 1,
                                    "file":
                                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                                },
                            ],
                            "line": 35,
                            "col": 1,
                            "file":
                                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                        },
                    ],
                    "line": 23,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
            ],
            "line": 0,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
        },
        "hotel_room": {
            "type": "Knot",
            "name": "hotel_room",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "hotel_room.jpg",
                    "line": 39,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text":
                        "行李箱还没有完全打开。在这座城市落脚，第一件事是找到一间铺面。",
                    "line": 40,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text": "+ [出去] ->world.time_day",
                    "line": 41,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
            ],
            "options": [],
            "stitches": [],
            "line": 38,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
        },
        "hotel_room_night": {
            "type": "Knot",
            "name": "hotel_room_night",
            "content": [
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "hotel-room-night.jpg",
                    "line": 44,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text": "今天已经做得够多了。养精蓄锐，明日再战。",
                    "line": 45,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text": "+ [睡觉]",
                    "line": 46,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text": '~ time_of_day = "Day"',
                    "line": 47,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text": "~ nth_day += 1",
                    "line": 48,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Tag",
                    "name": "image",
                    "value": "hotel_room.jpg",
                    "line": 49,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text": "一觉醒来，又是新的一天。",
                    "line": 50,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Divert",
                    "target": "hotel_room",
                    "line": 51,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
                {
                    "type": "Text",
                    "text": "+ [出去] ->world.night",
                    "line": 52,
                    "col": 1,
                    "file":
                        "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
                },
            ],
            "options": [],
            "stitches": [],
            "line": 43,
            "col": 1,
            "file":
                "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\Act1\\Hotel\\hotel.ink",
        },
    },
};
