/*
Baby Names:
Each year, the government releases a list of the 10,000 most common baby names and
their frequencies (the number of babies with that name).The only problem with this is that
some names have multiple spellings. For example, "John" and "Jon" are essentially
the same name but would be listed separately in the list. Given two lists, one of
names/frequencies and the other of pairs of equivalent names, write an algorithm to print
a new list of the true frequency of each name. Note that if John and Jon are synonyms,
and Jon and Johnny are synonyms, then John and Johnny are synonyms.
(It is both transitive and symmetric.) In the final list, any name can be used
as the "real" name.

EXAMPLE Input:
Names: John (15), Jon (12), Chris (13), Kris (4), Christopher (19)
Synonyms: (Jon, John), (John, Johnny), (Chris, Kris), (Chris, Christopher)
Output: John (27), Kris (36)
*/


class BabyNames {

  aggregateObject(names, synonyms) {

    const relations = this.buildRelations(synonyms);
    const result = {};

    Object.getOwnPropertyNames(names).forEach((name) => {
      const mainName = relations[name];
      const currentName = mainName ? mainName : name;

      if (result[currentName]) {
        result[currentName] += names[name];
      } else {
        result[currentName] = names[name];
      }
    });

    return result;
  }

  aggregateArray(names, synonyms) {
    const relations = this.buildRelations(synonyms);
    const result = [];

    names.forEach((value) => {
      const mainName = relations[value.name];
      const currentName = mainName ? mainName : value.name;

      const currentElement = result.find((element) => {
        return element.name === currentName;
      });

      if (currentElement) {
        currentElement.count += value.count;
      } else {
        result.push({ name: currentName, count: value.count });
      }
    });

    console.log('result', result);
    return result;
  }

  buildRelations(synonyms) {
    const relations = {};

    synonyms.forEach((value) => {
      const firstName = value[0];
      const secondName = value[1];
      // console.log(value, firstName, secondName);

      const firstNameParent = this.findParentForName(relations, firstName);
      const secondNameParent = this.findParentForName(relations, secondName);

      if (!firstNameParent && !secondNameParent) {
        relations[firstName] = undefined;
        relations[secondName] = firstName;
      }

      if (firstNameParent) {
        relations[secondName] = firstNameParent;
      }

      if (secondNameParent) {
        relations[firstName] = secondNameParent;
      }

      // console.log('relations: ', relations);
    });

    return relations;
  }

  findParentForName(relations, name) {
    let currentName = relations[name];
    let parent = undefined;

    while (currentName) {
      parent = currentName;
      currentName = relations[currentName];
    }

    // console.log('findParentForName', parent, relations, name);
    return parent;
  }

}

export default BabyNames;
