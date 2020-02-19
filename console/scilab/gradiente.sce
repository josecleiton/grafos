function z=grad(x, y)
    z = f(x, y)
    txa = 0.1 // taxa de aprendizado
    iter = 0
    delta = 0.001
    zdx = 1; zdy = 1; // derivadas em relação a x e y
    xh = [x]; yh = [y]; zh = [z]; // vetores que serão utilizados para guardar
                            // todos os valores de x, y, z durante o loop
    while norm([zdx, zdy]) > delta & iter < 10000
        zdx = (f(x + delta, y) - f(x, y))/delta
        zdy = (f(x, y + delta) - f(x, y))/delta
        x = x - txa * zdx
        y = y - txa * zdy
        z = f(x, y)
        
        xh = [xh, x]; yh = [yh, y]; zh = [zh, z]
        param3d(xh, yh, zh)
        iter = iter + 1
    end
    plt2d(zh)
endfunction

function grafico()
    subplot(1, 2, 1); xx = [-2:0.08:2]
    plt(xx)
endfunction

function plt(xx)
    for i=1:n
        for j=1:n
            zz(i, j) = f(xx(i), xx(j))
        end
    end
    plot3d(xx, yy, zz)
endfunction

function plt2d(z)
    nz = length(z)
    plot2d(1:nz, zh,5); xgrid(3)
endfunction

function z=f(x, y)
    z=sin(x.^2/2-y.^2+3).*cos(2*x+1-exp(y))
endfunction
