NO_OF_CHARS = 256

# Function to return count of characters in a string
def get_char_count_array(string): 
    count = [0] * NO_OF_CHARS 
    for i in string: 
        count[ord(i)]+=1
    return count 

# Function to return index of first non-repeating
# character in a string
def get_non_repeating_char(string):
    count = get_char_count_array(string)
    index = -1
    k = 0

    for i in string:
        if count[ord(i)] == 1:
            index = k
            break     
        k += 1
        
    return index

# Function to reorder characters in string
def reorder_string(string):
    count = get_char_count_array(string)
    char_list = []
    found = 0

    for i in string:
        if count[ord(i)] == 1:
            found += 1
            if (found == 1):
                char_list.insert(0, i)
            else:
                char_list.insert(found - 1, i)
        else:
            char_list.append(i)       
        
    return "" .join(char_list)

user_input = input("Enter a string: ")
index = get_non_repeating_char(user_input.lower())

if index==-1:
    print("all characters are repeating")
else:
    print("non-repeating character is: " + user_input[index])
    print("reordered string is: " + reorder_string(user_input.lower()))
    