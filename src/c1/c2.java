/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package c1;
import java.util.Scanner;


/**
 *
 * @author Luong Quynh Thu
 */
public class c2 {
    public static void main(String[] args) {//psvm tab
        Scanner sc = new Scanner(System.in);
        double m;
        double n;
        System.out.println("Nhap m: ");
        m = sc.nextDouble();
        System.out.println("Nhap n: ");
        n = sc.nextDouble();
        float x;
        x = (float) (-m%n);
        System.out.println(x);
        
    }
}
