// gradiente
function grad(x, y)
 subplot(1,2,1)   
 xx=linspace(-2,2,50); yy=xx
 n=length(xx)
 grafico()//gráfico da função 3D
 z=f(x,y);
 xh=[x];yh=[y];zh=[z]
 param3d(x,y,f(x,y))// gráfico do ponto
 t=0.1;iter=0;d=0.001;zx=1;zy=1 
 while norm([zx,zy])>0.01&iter<50
  zx=(f(x+d,y)-f(x,y))/d
  zy=(f(x,y+d)-f(x,y))/d
  x=x-t*zx; y=y-t*zy; z=f(x,y)
  xh=[xh,x];yh=[yh,y];zh=[zh,z]
  param3d(xh,yh,zh);iter=iter+1
 end
 c = gce();  
 c.mark_mode="on";
 c.mark_style=10;
 c.mark_foreground=color("red"); 
 nz=length(zh); subplot(1,2,2)
 plot2d(1:nz,zh,5); xgrid(3)
endfunction
  
function z=f(x, y)
z=sin(x.^2/2-y.^2+3).*cos(2*x+1-exp(y))
endfunction

function grafico()
 for i=1:n
    for j=1:n  
      zz(i,j)=f(xx(i),yy(j))
    end
 end
 plot3d(xx,yy,zz)
endfunction
