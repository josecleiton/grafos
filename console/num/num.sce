A = [
1,1,0,1,1,1,1, 1;
0,0,0,1,0,0,1, 1;
1,0,1,1,1,1,0, 1;
1,0,1,1,0,1,1, 1;
0,1,1,1,0,0,1, 1;
1,1,1,0,0,1,1, 1;
1,1,1,0,1,1,1, 1;
1,0,0,1,0,0,1, 1;
1,1,1,1,1,1,1, 1;
1,1,1,1,0,1,1, 1;
] 
b = [
0,0,0,0;
0,0,0,1;
0,0,1,0;
0,0,1,1;
0,1,0,0;
0,1,0,1;
0,1,1,0;
0,1,1,1;
1,0,0,0;
1,0,0,1;
]
function x=numDigPesos()
    x=A\b
endfunction

function x=numDigFiltro(val)
    x=(val > 0.5)*1.0
endfunction

function x=numDigAplicaFiltro()
    pesosRaw = numDigPesos()
    pesosBin = []
    AdotPesos = A * pesosRaw
    AdotPesosDisp = []
    [n, m] = size(AdotPesos)
    printf("\n\tA*w | n: %d, m: %d\n", n, m)
    printf("\n\tA*w\n")
    disp(AdotPesos)
    for i=1:n
        for j=1:m
            v = AdotPesos(i, j)
            pesosBin = [pesosBin, numDigFiltro(v)]
        end
        low = (i-1)*m + 1
        high = (i-1)*m+m
        AdotPesosDisp = cat(1, AdotPesosDisp, pesosBin(low:high))
    end
    printf("\n\tA*w formatada como matriz apenas para visualização:\n")
    disp(AdotPesosDisp)
    x = pesosBin
endfunction

