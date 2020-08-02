
import java.util.Scanner;



/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Luong Quynh Thu
 */
public class NewClass {
   public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
    double a;
    double b;
    double p;
    double v;
    double h;
    double n;
    double m;
    
       System.out.println("Nhap a: ");
       a = sc.nextDouble();
       System.out.println("Nhap b: ");
       b = sc.nextDouble();
       // tinh tong p = a+b;
       p = (double) a+b;
       System.out.println("p=" + p );
       // tinh tich v=a*b;
       v = (double) a*b;
       System.out.println("v="+v);
       // tinh hieu h = a-b;
       h = (double) a-b;
       System.out.println("h="+h);
       // tinh thuong n=a/b;
       n = (double) a/b;
       if( b==0){
           System.out.println("khong co thuong cua a cho b");
       }
       else{
           System.out.println("n="+n);
       }
       // tinh luy thua co so a so mu b;
       m = Math.pow(a,b);
       System.out.println("m="+m);
    
}
}