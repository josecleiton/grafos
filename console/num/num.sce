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
    x=(val > 0.5)*1
endfunction

function x=numDigAplicaFiltro()
    pesosRaw = numDigPesos()
    AdotPesos = A * pesosRaw
    AdotPesosDisp = []
    [n, m] = size(AdotPesos)
    pesosBin = zeros(n, m)
    printf("\n\tA*w | n: %d, m: %d\n", n, m)
    printf("\n\tA*w:\n")
    disp(AdotPesos)
    for i=1:n
        for j=1:m
            pesosBin(i,j) = numDigFiltro(AdotPesos(i, j))
        end
    end
    x = pesosBin
endfunction

