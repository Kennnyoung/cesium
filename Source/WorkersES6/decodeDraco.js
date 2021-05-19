import dracoModule from wasmConfig.modulePat.js';
if (defined(wasmConfig.wasmBinaryFile)) {
        if (!defined(dracoModule)) {
          dracoModule = self.DracoDecoderModule;
        }

        dracoModule(wasmConfig).then(function (compiledModule) {
          initWorker(compiledModule);
        });
      } else {
        initWorker(dracoModule());
      }
    });
  }
}
export default decodeDraco;

;
