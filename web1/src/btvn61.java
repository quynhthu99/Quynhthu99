
import java.util.Scanner;/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//package btvn6{

/**
 *
 * @author Luong Quynh Thu
 */
public class btvn61 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhap mang A: ");
        int dodaiA = sc.nextInt();
        System.out.println("Nhap mang B: ");
        int dodaiB = sc.nextInt();
        int[] A = new int[dodaiA];
        int[] B = new int[dodaiB];
        int doDaiC = A.length + B.length;
        int[] C = new int[doDaiC];
        for (int i = 0; i < A.length; i++) {
            System.out.println("Nhap A[" + i + "]: ");
            A[i] = sc.nextInt();
        }
        for (int i = 0; i < B.length; i++) {
            System.out.println("Nhap B[" + i + "]: ");
            B[i] = sc.nextInt();

        }
        System.out.print("A = {");
        for (int i = 0; i < A.length; i++) {

            System.out.print(A[i] + ";");
        }
        System.out.println("}");
        System.out.print("B = {");
        for (int i = 0; i < B.length; i++) {
            System.out.print(B[i] + ";");
        }
        System.out.println("}");
        System.out.print("A = { ");
        for (int k = 0; k < A.length; k++) {
            for (int i = 0; i < A.length - 1; i++) {
                if (A[i] > A[i + 1]) {
                    int t = A[i];
                    A[i] = A[i + 1];
                    A[i + 1] = t;
                }
            }
        }
        for (int i = 0; i < A.length; i++) {
            System.out.print(A[i] + ";");
        }

        System.out.println("}");
        System.out.print("B = { ");
        for (int k = 0; k < B.length; k++) {
            for (int i = 0; i < B.length - 1; i++) {
                if (B[i] > B[i + 1]) {
                    int t = B[i];
                    B[i] = B[i + 1];
                    B[i + 1] = t;
                }
            }
        }
        for (int i = 0; i < B.length; i++) {
            System.out.print(B[i] + ";");
        }

        System.out.println(
                "}");

        for (int k = 0; k < C.length; k++) {
            if (k < dodaiA) {
                C[k] = A[k];
            } else {
                C[k] = B[k - dodaiA];
            }
        }
        for (int i = 0; i < C.length; i++) {

            for (int k = 0; k < C.length - 1; k++) {
                if (C[k] > C[k + 1]) {
                    int t = C[k];
                    C[k] = C[k + 1];
                    C[k + 1] = t;

                }

            }
        }
        System.out.println("C= ");
        for (int k = 0; k < C.length; k++) {
            System.out.print(C[k]);
        }
    }
}
