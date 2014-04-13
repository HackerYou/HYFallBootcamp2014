<!-- OMIT from table of contents -->

# Solving problems

Problems usually involve `input => procedure => output`. Imagine the input/values going into a black box. The box is like a function, unless we have the source code we don't actually know what its doing to the input. Then the box spits out the answer/output.

## When solving problems, don't:

- panic
- start writing code
- search google (unless this isn't a learning exercise)
- work out an algorithm that solves the problem

## Steps:

1. **Understand inputs**: what are the valid inputs? type of inputs?
2. **Understand outputs**: what are the desired outputs? should the output be returned or printed? what is the type?
3. Work out **examples** by hand to understand relationship between input and output. Use these later as test cases. For each example provide an input and predict an output. 
4. Write **pseudocode** for a simple mechanical solution. Ask "does this handle most cases?". Often humans solve problems not in a systematic way. Think about a simple solution. Humans take shortcuts but computers don't have to. Computers can solve problems in a brain-dead way... because they're fast. If a for loop is about 1000 machine instructions and we're doing a problem that's looping 365k times then that would take  about 0.03 seconds for a processor that can do 1B operations per second.
5. Don't optimize prematurely. Milliseconds is good enough for most situations. Let's worry about performance when we have to.
6. Develop incrementally and test often. Break problems down. Simplify by making assumptions. Get something working and prefect later.