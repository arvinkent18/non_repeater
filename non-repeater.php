<?php
    function findNonRepeatingCharacter($str) {
        for ($i = 0; $i <= strlen($str); $i++) {
	    if (substr_count($str, substr($str, $i, 1)) == 1) {
                return substr($str, $i, 1);
            }
        }
    }

    function reorderString($str) {
       $strList = array();
       $cnt = 0;

       for ($i = 0; $i <= strlen($str); $i++) {
            if (substr_count($str, substr($str, $i, 1)) == 1) {
                if ($cnt == 0) {
                    array_unshift($strList, $str[$i]);
                    $cnt++;
                }
                else {
                    array_splice($strList, $cnt, 0, $str[$i]);
                    $cnt++;
                }
            }
            else {
                array_push($strList, $str[$i]);
            }
       }

       return $strList;
    }


    echo "Enter string: ";
    $handle = fopen("php://stdin", "rb");
    $line = fgets($handle);
    
    echo "Non-repeating character is: " . findNonRepeatingCharacter($line) . PHP_EOL;
    echo "Reordered string is: " . implode("", reorderString($line));
