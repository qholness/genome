var gen_mutation_select = function(data) {
            var mutationselect = document.getElementById("mutationSelection");
            var chromosomeselect = document.getElementById("chromosomeSelection");
            clearchildren(mutationselect);
            clearchildren(chromosomeselect);

            var mutations = get_selection(data, 'mutation');
            var chromosomes = get_selection(data, 'chromosome');
            
            var opt = document.createElement("option");
            opt.value = 0;
            opt.innerHTML = "Select Mutation";
            mutationselect.appendChild(opt);

            var opt = document.createElement("option");
            opt.value = 0;
            opt.innerHTML = "Select Chromosome";
            chromosomeselect.appendChild(opt);
            
            for (var m = 0; m < mutations.length; m++) {
                var mut = mutations[m];
                var mutoption = document.createElement("option");                
                
                mutoption.value = mut;
                mutoption.innerHTML = mut;

                mutationselect.appendChild(mutoption);
            }
            for (var c = 0; c < chromosomes.length; c++) {
                var chrom = chromosomes[c];
                var chromoption = document.createElement("option");
                
                chromoption.value = chrom;
                chromoption.innerHTML = chrom;

                chromosomeselect.appendChild(chromoption);
            }
        }



var importData = function() {
            var data = null;

            try {
                data = JSON.parse(xhttp.response);                
            } catch (error) {
                console.log("Request still working.")
                return 0
            }
            data = data['hits'];
            gen_mutation_select(data);
            return data;
        }