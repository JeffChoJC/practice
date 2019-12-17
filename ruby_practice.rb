def trifling_triplet(string)
    # Write your code here
    bool = true
    array_chars = string.split("")
    
    array_chars.each_with_index do |char, idx|
        puts bool
        if char[idx] == char[idx+1] && char[idx] == char[idx+2]
            return bool = true 
            puts bool
        else 
            bool = false
        end 
    end 
    
    bool
end


# p trifling_triplet('caaabb')
# p trifling_triplet('terrrrrible')
# p trifling_triplet('runninggg')
p trifling_triplet('bootcamp')
# p trifling_triplet('e')