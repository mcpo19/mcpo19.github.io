(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{273:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"zeros-and-ones"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zeros-and-ones","aria-hidden":"true"}},[t._v("#")]),t._v(" Zeros and Ones")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ----------------------------------------//")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   INPUT    ->    [ ]     ->   OUTPUT")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (PROBLEM)     ALGORITHM     (SOLUTION)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ----------------------------------------//")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" random "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" choice\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ALGORITHM (Hill Climbing's Search Routine)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" constraints"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" search_iterations_limit"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. Initialize random solution.")]),t._v("\n    solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" initialize_solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" constraints"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    solution_fitness "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" objective_function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. Repeat until — current_solution has best fitness in neighborhood – or – iterations limit is reached.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("search_iterations_limit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2.1. Generate current_solution's neighborhood.")]),t._v("\n        neighborhood "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" neighborhood_function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" constraints"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get best neighbor and its fitness from the neighborhood.")]),t._v("\n        best_neighbor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" best_neighbor_fitness "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_best_neighbor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("neighborhood"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        print_search"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" solution_fitness"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" best_neighbor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" best_neighbor_fitness"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Utility function to follow the search process. You can ignore it.")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2.2. If the best neighbor has a better fitness than the solution,")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# then it becomes the current solution.")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" best_neighbor_fitness "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" solution_fitness"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" best_neighbor\n            solution_fitness "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" best_neighbor_fitness\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If there are no neighbors with a better fitness than the current solution,")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# then we stop (i.e. break) the search.")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Once we exit the loop — either by reaching the limit of iterations")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or for not having a better neighbor — we return the solution.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" solution\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ---------------------------------------------------------------------//")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Below are the functions that compose the algorithm's search function:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ---------------------------------------------------------------------//")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize_solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" constraints"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" build_solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" is_admissible"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" constraints"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" build_solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" solution\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build_solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" choice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"numbers"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" solution\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_admissible")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" constraints"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decision_variables"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" constraints"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"min_max"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" constraints"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"min_max"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("objective_function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decision_variables"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    binary_solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" convert_to_binary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("binary_solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("convert_to_binary")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    binary_rep "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    binary_solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" digit "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" binary_rep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        binary_solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    remaining_zeros "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("binary_solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("remaining_zeros"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        binary_solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("insert"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" binary_solution\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("neighborhood_function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decision_variables"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" constraints"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    numbers "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"numbers"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    neighborhood "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" numbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        neighborhood"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" numbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        neighborhood"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        neighborhood"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        neighborhood"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" neighborhood\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# UNNECESSARY FOR THIS PROBLEM:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# def generate_neighbor(solution, i):")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     # bit flip")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     neighbor = solution.copy()")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     neighbor[i] = not neighbor[i]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     return neighbor")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_best_neighbor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("neighborhood"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    fitness_list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" neighbor "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" neighborhood"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        neighbor_fitness "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" objective_function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("neighbor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"numbers"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        fitness_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("neighbor_fitness"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    best_neighbor_fitness "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fitness_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    best_neighbor_index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fitness_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("best_neighbor_fitness"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    best_neighbor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" neighborhood"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("best_neighbor_index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" best_neighbor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" best_neighbor_fitness\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Utility function (not part of the algorithm)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_search")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" solution_fitness"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" best_neighbor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" best_neighbor_fitness"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decision_variables"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Iteration ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(': \\n"')])]),t._v("\n    message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Current solution item(s) --\x3e ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\\n"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# message += f"Current solution binary  --\x3e {_binary_string(solution, decision_variables)}\\n"')]),t._v("\n    message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Current solution binary  --\x3e ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("convert_to_binary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\\n"')])]),t._v("\n    message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Current solution fitness --\x3e ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("solution_fitness"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\\n"')])]),t._v("\n    message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Best neighbor item(s)    --\x3e ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("best_neighbor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\\n"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# message += f"Best neighbor binary     --\x3e {_binary_string(best_neighbor, decision_variables)}\\n"')]),t._v("\n    message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Current solution binary  --\x3e ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("convert_to_binary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\\n"')])]),t._v("\n    message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Best neighbor fitness    --\x3e ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("best_neighbor_fitness"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\\n\\n"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PROGRAM NEEDS 3 INITIAL INPUTS: Decision variables, Constraint variable, Number of iterations")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Decision variable(s)")]),t._v("\n    decision_variables "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"numbers"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Constraint")]),t._v("\n    constraints "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"min_max"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Number of search iterations limit")]),t._v("\n    search_iterations_limit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Call the search function")]),t._v("\n    solution "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" search"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decision_variables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" constraints"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" search_iterations_limit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print result")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Final solution: \\n')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("solution"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);