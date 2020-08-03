import java.util.Scanner;/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Luong Quynh Thu
 */
public class btvn41 {
     public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
       int[][] array2D = new int[5][5];
         for (int i = 0; i < array2D.length; i++) {
             for (int j = 0; j < array2D[i].length; j++) {
                 System.out.println("Nhap vao array2D["+i+"]["+j+"]");
                 array2D[i][j] = sc.nextInt();
                 
             }
             
         }
         for (int i = 0; i < array2D.length; i++) {
             for (int j = 0; j < array2D[i].length; j++) {
                 System.out.println("Array2D["+i+"]["+j+"]: "+array2D[i][j]);
             }
         }
         int sum =0;
         for (int i = 0; i < array2D.length; i++) {
             for (int j = 0; j < array2D[i].length; j++) {
                 sum = sum + array2D[i][j];
                 if((i == array2D.length - 1)){
                     if((j == array2D[i].length - 1)){
                     System.out.println("Tong la: "+ sum);
                 }
                         
                 
                 
             }
             
         }
         
     }
         for (int i = 0; i < array2D.length; i++) {
             for (int j = 0; j < array2D[i].length; j++) {
                 if (array2D[i][j]%3 == 0) {
                     System.out.println("Phan tu chia het cho 3 la: array2D["+i+"]["+j+"]: "+array2D[i][j]);
                     
                 }
             }
         }
         int count = 0;
         for (int i = 0; i < array2D.length; i++) {
             for (int j = 0; j < array2D[i].length; j++) {
                 for (int k = 1; k <= array2D[i][j]; k++) {
                     if((array2D[i][j]) % k == 0){
                         count ++;
             }
                     if(count == 2){
                         System.out.println("array2D["+i+"]["+j+"]: "+array2D[i][j]+" la so nguyen to");
                     }
                     }
                 }
             }
         }
}
