import java.util.Scanner;/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Luong Quynh Thu
 */
public class btvn32 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int dodai = 10;
        int [] a = new int[dodai];
        System.out.println("Nhap vao so tu nhien: ");
        for(int i =0;i<10;i++){
            a[i] = sc.nextInt();
        
            if(a[i]==-1){
                System.out.println("Cac phan tu vua nhap la: ");
                break;
            }
        }
        for (int j = 0; j < 10; j++) {
            if(a[j]!=0){
            System.out.println(a[j]);
        }
}
}
}