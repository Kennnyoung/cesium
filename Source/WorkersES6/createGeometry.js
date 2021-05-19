import f from "Workers/" + moduleNam.js';
module = f;
        moduleCache[module] = f;
      });
    }
  }
  return module;
}

function createGeometry(parameters, transferableObjects) {
  var subTasks = parameters.subTasks;
  var length = subTasks.length;
  var resultsOrPromises = new Array(length);

  for (var i = 0; i < length; i++) {
    var task = subTasks[i];
    var geometry = task.geometry;
    var moduleName = task.moduleName;

    if (defined(moduleName)) {
      var createFunction = getModule(moduleName);
      resultsOrPromises[i] = createFunction(geometry, task.offset);
    } else {
      //Already created geometry
      resultsOrPromises[i] = geometry;
    }
  }

  return when.all(resultsOrPromises, function (results) {
export default PrimitivePipeline.packCreateGeometryResults(
      results,
      transferableObjects
    );
