
import java.util.Scanner;/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//package btvn6;

/**
 *
 * @author Luong Quynh Thu
 */
public class btvn64 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhap mang A: ");
        int dodaiA = sc.nextInt();
        int[] A = new int[dodaiA];
        for (int i = 0; i < A.length; i++) {
            System.out.println("Nhap A[" + i + "]: ");
            A[i] = sc.nextInt();
        }
        boolean X = true;
        for (int k = 0; k < A.length; k++) {

            for (int i = 0; i < A.length - 1; i++) {
                if (A[i] > A[i + 1]) {
                    int t = A[i];
                    A[i] = A[i + 1];
                    A[i + 1] = t;
                    X = false;

                }
            }
            
        }
        if(X == false) {
                System.out.println("Mang ban dau chua duoc sap xep");
                
            }
            else{
                System.out.println("Mang ban dau da duoc sap xep");
               
            }
        System.out.println("Mang A: ");

        for (int i = 0; i < A.length; i++) {
            System.out.print(A[i]);
        }
    }
}
