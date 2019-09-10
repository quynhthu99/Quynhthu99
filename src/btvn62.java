/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package btvn6;

/**
 *
 * @author Luong Quynh Thu
 */
public class btvn62 {

    public static void main(String[] args) {

        String[] ten = {
            "A",
            "B",
            "C",
            "D",
            "E"
        };
        int[] diem = {
            6, 9, 4, 5, 2
        };
        for (int k = 0; k < 5; k++) {

            for (int i = 0; i < 4; i++) {
                if (diem[i] > diem[i + 1]) {
                    int t1 = diem[i];
                    diem[i] = diem[i + 1];
                    diem[i + 1] = t1;
                    String t2 = ten[i];
                    ten[i] = ten[i + 1];
                    ten[i + 1] = t2;
                }
            }
        }
        for (int i = 0; i < 5; i++) {

            System.out.println(ten[i] + ": " + diem[i]);
        }

    }
}
