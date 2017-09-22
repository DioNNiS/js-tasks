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

  aggregate(names, synonyms) {
    const relations = this.buildRelations(synonyms);
    return this.calculate(names, relations);
  }

  calculate(names, relations) {
    const result = {};

    Object.getOwnPropertyNames(names).forEach((name) => {
      const index = this.findSetForName(name, relations);
      if (index > -1) {
        this.addToResult(result, relations[index][0], names[name]);
      } else {
        this.addToResult(result, name, names[name]);
      }
    });

    return result;
  }

  addToResult(result, key, count) {
    if (result[key]) {
      result[key] += count;
    } else {
      result[key] = count;
    }
  }

  buildRelations(synonyms) {
    const relations = [];

    synonyms.forEach((value) => {
      const firstName = value[0];
      const secondName = value[1];

      const firstNameIndex = this.findSetForName(firstName, relations);
      const secondNameIndex = this.findSetForName(secondName, relations);

      if (firstNameIndex === -1 && secondNameIndex === -1) {
        relations.push(value);
      } else if (firstNameIndex !== -1 && secondNameIndex !== -1) {
        if (firstNameIndex !== secondNameIndex) {
          relations[firstNameIndex] = relations[firstNameIndex].concat(relations[secondNameIndex]);
          relations.splice(secondNameIndex, 1);
        }
      } else {
        if (firstNameIndex !== -1) {
          relations[firstNameIndex].push(secondName);
        } else {
          relations[secondNameIndex].push(firstName);
        }
      }

      console.log('relations: ', relations);
    });

    return relations;
  }

  findSetForName(name, relations) {
    let index = -1;
    relations.find((set, i) => {
      index = set.indexOf(name);
      // console.log(set, index);
      if (index > -1) {
        index = i;
        return true;
      }
    });

    return index;
  }

  /*
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

    // console.log('result', result);
    return result;
  }

  buildRelations(synonyms) {
    let relations = {};

    synonyms.forEach((value) => {
      const firstName = value[0];
      const secondName = value[1];

      const firstNameParent = this.findParentForName(relations, firstName);
      const secondNameParent = this.findParentForName(relations, secondName);

      console.log(firstName, firstNameParent, secondName, secondNameParent);

      if (firstNameParent === -1 && secondNameParent === -1) {
        relations[firstName] = undefined;
        relations[secondName] = firstName;
      } else if (firstNameParent !== -1 && secondNameParent !== -1) {
        relations[firstName] = secondNameParent;
        console.log('2', firstName, secondName, firstNameParent, secondNameParent);
        relations = this.updateParentsForName(relations, firstNameParent, secondNameParent);
        // console.log('1', relations);
      } else if (firstNameParent !== -1) {
        relations[secondName] = firstNameParent;
      } else if (secondNameParent !== -1) {
        relations[firstName] = secondNameParent;
      }

      console.log('relations: ', relations);
    });

    return relations;
  }

  updateParentsForName(relations, parent, newParent) {
    const result = Object.assign({}, relations);

    console.log('updateParentsForName', relations, parent, newParent);
    Object.getOwnPropertyNames(result).forEach((key) => {
      if (result[key] === parent || key === parent) {
        result[key] = newParent;
      }
    });

    return result;
  }

  findParentForName(relations, name) {
    let currentName = relations[name];
    let parent = relations[name];

    while (currentName) {
      parent = currentName;
      currentName = relations[currentName];
    }

    // console.log('findParentForName', parent, relations, name);
    return parent;
  }
  */

}

export default BabyNames;
