
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
public class btvn {
    
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
double a;
double b;
double c;
double d;
double x;
double e;
double x1;
double x2;
//giai phuong trinh bac 2 ax^2+bx+c=0;
System.out.println("Nhap a: ");a = sc.nextDouble();
System.out.println("Nhap b: ");b = sc.nextDouble();
System.out.println("Nhap c: ");
c = sc.nextDouble();
d = (double) b*b-4*a*c;
e = Math.sqrt(d);
x = (-b)/(2*a);
x1 = (-b+e)/(2*a);
x2 = (-b-e)/(2*a);
if(a==0){
    System.out.println("day khong phai phuong trinh bac 2");
}
else if(d<0){
    System.out.println("phuong trinh vo nghiem");
    }
else if(d==0){
    System.out.println("phuong trinh co nghiem kep x="+x);
}
else{
    System.out.println("phuong trinh co nghiem x1="+x1);
    System.out.println("phuong trinh co nghiem x2="+x2);
}
}
}