import java.util.Scanner;/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Luong Quynh Thu
 */
public class btvn42 {
    public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
    int x;
        System.out.println("Nhap kich thuoc ma tran: ");
    x = sc.nextInt();
    int [][] A = new int[x][x];
        for (int i = 0; i < A.length; i++) {
            for (int j = 0; j < A[i].length; j++) {
                System.out.println("Nhap vao A["+i+"]["+j+"]");
                A[i][j] = sc.nextInt();
            }
            
        }
    for (int i = 0; i < A.length; i++) {
            for (int j = 0; j < A[i].length; j++) {
                System.out.println("Array2D["+i+"]["+j+"]: "+A[i][j]);
            }
    }
    
    }
}
