var searchIndex = JSON.parse('{\
"prost_helper":{"doc":"A set of prost helper functions to make prost generated …","t":[8,14,5,5,5,5,5,5,0,14,14,14,5,5,10,14],"n":["ToJson","bytes_try_into_prost","deserialize_buf_bytes","deserialize_buf_vec","deserialize_null_default","deserialize_repeat_buf_bytes","deserialize_repeat_buf_vec","is_zero","macros","prost_into_bytes","prost_into_vec","prost_to_json","serialize_buf","serialize_repeat_buf","to_json","vec_try_into_prost"],"q":["prost_helper","","","","","","","","","","","","","","",""],"d":["Convert the prost message to JSON string for debugging …","","","","customized deserialize function to use default for JSON …","","","customized skip_serializing_if function to skip 0 for …","","","Generate <code>From</code> and <code>Into</code> for your prost message.","","","","","Generate <code>TryFrom</code> and <code>TryInto</code> for your prost message from …"],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],"f":[null,null,[[],[["result",4,["bytes"]],["bytes",3]]],[[],[["vec",3,["u8"]],["result",4,["vec"]]]],[[],["result",4]],[[],[["vec",3,["bytes"]],["result",4,["vec"]]]],[[],[["vec",3,["vec"]],["result",4,["vec"]]]],[[],["bool",15]],null,null,null,null,[[],["result",4]],[[],["result",4]],[[],["string",3]],null],"p":[[8,"ToJson"]]},\
"prost_serde":{"doc":"A prost toolkit to build protobuf with serde support.","t":[3,3,12,11,11,11,11,5,11,11,12,11,11,12,11,11,11,11,12,11,11,12,12,12,12,11,11,11,11,11,11,11,11,11,11],"n":["BuildConfig","BuildOption","attr","borrow","borrow","borrow_mut","borrow_mut","build_with_serde","default","default","description","deserialize","deserialize","files","fmt","fmt","from","from","includes","into","into","opts","output","paths","scope","serialize","serialize","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip"],"q":["prost_serde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","extra attribute to put on generated data structure, for …","","","","","Build the protobuf files with the build opts provided by a …","","","description of the option","","","protobuf files","","","","","protobuf include dirs","","","build options for serde support","dir for generated code, defaults to Cargo OUT_DIR, else …","a list of paths you want to add the attribute","scope of the attribute","","","","","","","","","",""],"i":[0,0,1,2,1,2,1,0,2,1,1,2,1,2,2,1,2,1,2,2,1,2,2,1,1,2,1,2,1,2,1,2,1,2,1],"f":[null,null,null,[[]],[[]],[[]],[[]],[[["str",15]],["buildconfig",3]],[[],["buildconfig",3]],[[],["buildoption",3]],null,[[],["result",4]],[[],["result",4]],null,[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],null,[[]],[[]],null,null,null,null,[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[]]],"p":[[3,"BuildOption"],[3,"BuildConfig"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};