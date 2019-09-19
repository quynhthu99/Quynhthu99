
import java.util.Arrays;
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
public class test {

    static char[][] caro = {
        {'-', '-', '-'},
        {'-', '-', '-'},
        {'-', '-', '-'}
    };
    static int x, y;
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        for (int i = 0; i < caro.length; i++) {
            System.out.println("");
            System.out.println("");
            for (int j = 0; j < 3; j++) {
                System.out.print(caro[i][j] + " ");
            }
        }
        System.out.println("");
        while (true) {
            System.out.println("");
            System.out.println("Nguoi thu nhat nhap O tai vi tri: ");
            input();
            show1();
            if (check() || check2()) {
                System.out.println(check());
                break;
            } else {

                System.out.println("");
                System.out.println("Nguoi thu hai nhap X tai vi tri: ");
                input();
                show2();
                if (check() || check2()) {
                    System.out.println(check());
                    break;
                } else {
                    continue;
                }
            }
        }
    }

    static char input() {
        while (true) {
            System.out.print("Nhap toa do x = ");
            x = sc.nextInt();
            System.out.print("Nhap toa do y = ");
            y = sc.nextInt();
            if (x >= 3 || y > 3 || caro[x][y] != '-') {
                System.out.println("Nhap lai");
            } else {
                break;
            }
        }
        return caro[x][y];

    }

    static void show1() {
        for (int j = 0; j < 3; j++) {
            for (int i = 0; i < 3; i++) {
                if (i == x && j == y) {
                    caro[i][j] = 'O';
                }
            }
        }
        for (int j = 0; j < 3; j++) {
            System.out.println("");
            System.out.println("");
            for (int i = 0; i < 3; i++) {
                System.out.print(caro[i][j] + " ");
            }
        }
    }

    static void show2() {
        for (int j = 0; j < 3; j++) {
            for (int i = 0; i < 3; i++) {
                if (i == x && j == y) {
                    caro[i][j] = 'X';
                }
            }
        }
        for (int j = 0; j < 3; j++) {
            System.out.println("");
            System.out.println("");
            for (int i = 0; i < 3; i++) {
                System.out.print(caro[i][j] + " ");
            }
        }
    }

    static boolean check() {
        for (int j = 0;; j++) {
            for (int i = 0;; i++) {
                if (caro[i][j] == caro[i + 1][j + 1] && caro[i + 1][j + 1] == caro[i + 2][j + 2] && caro[i][j] == 'O') {
                    System.out.println("Nguoi thu nhat thang");
                    return true;
                } else if (caro[i][j] == caro[i + 1][j + 1] && caro[i + 1][j + 1] == caro[i + 2][j + 2] && caro[i][j] == 'X') {
                    System.out.println("Nguoi thu hai thang");
                    return true;
                } else if (caro[i][j] == caro[i][j + 1] && caro[i][j + 1] == caro[i][j + 2] && caro[i][j] == 'X') {
                    System.out.println("Nguoi thu hai thang");
                    return true;
                } else if (caro[i][j] == caro[i][j + 1] && caro[i][j + 1] == caro[i][j + 2] && caro[i][j] == 'O') {
                    System.out.println("Nguoi thu nhat thang");
                    return true;
                } else if (caro[i][j] == caro[i + 1][j] && caro[i + 1][j] == caro[i + 2][j] && caro[i][j] == 'X') {
                    System.out.println("Nguoi thu hai thang");
                    return true;
                } else if (caro[i][j] == caro[i + 1][j] && caro[i + 1][j] == caro[i + 2][j] && caro[i][j] == 'O') {
                    System.out.println("Nguoi thu nhat thang");
                    return true;
                } else {
                    return false;
                }
            }
        }

    }

    static boolean check2() {
        int count = 0;
        boolean X = false;
        for (int j = 0; j < 3; j++) {
            for (int i = 0; i < 3; i++) {
                if (caro[i][j] == '-') {
                    count++;
                }
            }
        }
        if (count == 1) {
            System.out.println("Game over");
            X = true;
        }
        return X;
    }
}
