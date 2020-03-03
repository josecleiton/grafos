package main

import (
	"fmt"
	"github.com/josecleiton/gograph/neural/util"
	"gonum.org/v1/gonum/mat"
	"log"
)

func main() {
	a := mat.NewDense(3, 2, []float64{
		0, 1,
		1, 0,
		1, 1,
	})
	b := mat.NewVecDense(3, []float64{0, 0, 1})
	x, err := util.PseudoInverse(a, b)
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println(*x)
}
