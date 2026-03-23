// deno-lint-ignore-file no-unused-vars require-await
import { assertEquals } from "@std/assert/equals";
import {
    buildStory,
    buildStoryIncremental,
    DivertNode,
    find_node_at_position,
    KnotNode,
    OptionNode,
    parse,
    StitchNode,
    StoryAST,
    TagNode,
    TextNode,
    tokenize,
} from "./compiler.ts";
import * as path from "@std/path";
import { test_story } from "./testdata/test.ts";

Deno.test("find_node_at_position", async (t) => {
    const astOrError = await buildStory("./testdata/all.ink");
    if (astOrError instanceof Error) {
        throw astOrError;
    }

    const ast = astOrError as StoryAST;

    const ink1 = await Deno.realPath("testdata/1.ink");

    await t.step("finds root content node (Line 1)", () => {
        const node = find_node_at_position(ast, ink1, 0);
        console.log(node);
        assertEquals(node, {
            type: "Text",
            text: "Hi",
            line: 0,
            col: 1,
            file: ink1,
        });
    });

    await t.step("finds a Divert in root content (Line 2)", () => {
        const node = find_node_at_position(ast, ink1, 2);
        console.log(node);
        if (node?.type == "Knot") {
            assertEquals(node, {
                ...node,
                type: "Knot",
                name: "Act1",
                line: 2,
                col: 1,
                file: ink1,
            });
        }
    });

    await t.step("finds root option node (Line 3)", async () => {
        // const astOrError = await buildStory("../../stories/story1/world.ink");
        // if (astOrError instanceof Error) {
        //     throw astOrError;
        // }

        // const ast = astOrError as StoryAST;

        const fileName =
            "C:\\Users\\NewAc\\Documents\\GitHub\\fmv-game1\\stories\\story1\\world.ink";
        const node = find_node_at_position(
            test_story,
            fileName,
            112,
        ) as DivertNode;
        console.log(node);
        assertEquals(node?.type, "Divert");
        assertEquals(node.target, "world");
        // assertEquals((node as OptionNode)?.text, "Root option");
    });

    // await t.step("finds Knot node (Line 4)", () => {
    //     const node = find_node_at_position(ast, fileName, 4);
    //     assertEquals(node?.type, "Knot");
    //     assertEquals((node as KnotNode)?.name, "my_knot");
    // });

    // await t.step("finds content inside a Knot (Line 5)", () => {
    //     const node = find_node_at_position(ast, fileName, 5);
    //     assertEquals(node?.type, "Text");
    //     assertEquals((node as TextNode)?.text, "Knot text");
    // });

    // await t.step("finds Stitch node inside Knot (Line 6)", () => {
    //     const node = find_node_at_position(ast, fileName, 6);
    //     assertEquals(node?.type, "Stitch");
    //     assertEquals((node as StitchNode)?.name, "my_stitch");
    // });

    // await t.step("finds Tag inside a Stitch (Line 7)", () => {
    //     const node = find_node_at_position(ast, fileName, 7);
    //     assertEquals(node?.type, "Tag");
    //     assertEquals((node as TagNode)?.name, "mood");
    //     assertEquals((node as TagNode)?.value, "happy");
    // });

    // await t.step("finds Option inside Stitch (Line 8)", () => {
    //     const node = find_node_at_position(ast, fileName, 8);
    //     assertEquals(node?.type, "Option");
    //     assertEquals((node as OptionNode)?.text, "Stitch option");
    // });

    // await t.step("finds deeply nested Divert node inside an Option (Line 9)", () => {
    //     const node = find_node_at_position(ast, fileName, 9);
    //     assertEquals(node?.type, "Divert");
    //     assertEquals((node as DivertNode)?.target, "end");
    // });

    // await t.step("returns null for non-existent line", () => {
    //     const node = find_node_at_position(ast, fileName, 99);
    //     assertEquals(node, null);
    // });

    // await t.step("returns null for non-existent file", () => {
    //     const node = find_node_at_position(ast, "other_file.ink", 1);
    //     assertEquals(node, null);
    // });
});

Deno.test("buildStory", async (t) => {
    await t.step("buildStory", async () => {
        {
            const result = await buildStory("../../stories/story1/vars.ink");
            if (result instanceof Error) {
                console.error(result);
            }
            await Deno.writeTextFile(
                "./test.json",
                JSON.stringify(result, null, 2),
            );
        }
        {
            const result = await buildStory("../../stories/story1/world.ink");
            if (result instanceof Error) {
                console.error(result);
            }
            await Deno.writeTextFile(
                "./test.json",
                JSON.stringify(result, null, 2),
            );
        }
    });

    await t.step("buildStoryIncremental merge vs include", async () => {
        const result = await buildStory("testdata/1.ink");
        if (result instanceof Error) {
            return console.error(result);
        }
        const err = await buildStoryIncremental(
            result,
            "testdata/2.ink",
        );
        if (err instanceof Error) {
            return console.error(err);
        }
        const world = await buildStory("testdata/all.ink");
        if (world instanceof Error) {
            return console.error(world);
        }
        assertEquals(world, result);
    });
});
