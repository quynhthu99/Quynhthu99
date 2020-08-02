import java.util.Scanner;/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Luong Quynh Thu
 */
public class btvn31 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
         int dodai = 10;
        int[] a = new int[dodai];
        for (int i = 0; i < dodai ; i++) {
            System.out.println("Nhap phan tu thu "+i+":");
            a[i] = sc.nextInt();
        }
        int sum = 0;
        int sum1 = 0;
        for(int j = 0; j < dodai; j++){            
        
         sum = sum + a[j];
         if(j == 9){System.out.println("Tong la: "+sum);
        }
    }
        for(int n = 0; n < dodai; n++){
           if(n%2==0){
               System.out.println("Phan tu o vi tri chan la: "+a[n]);
           }
           else if(n%2==1){
               System.out.println("Phan tu o vi tri le la: "+a[n]);
           }
        }
        for (int m  = 0; m < dodai;m++){
            if(a[m]%2==0){
               System.out.println("Phan tu chia het cho 2 la: "+a[m]);
               sum1 = sum1 + a[m];
               if(m==9){
                   System.out.println("Tong cac phan tu chan la: "+sum1);
               }
           }
           else if(a[m]%5==1){
               System.out.println("Phan tu chia 5 du 1 la: "+a[m]);
           }
        } 
        
}
    
    
}
