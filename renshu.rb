# hello = "Hello, World"
# puts hello

puts "求めたい数字を入力してください"
puts "1つ目の数字"
a = gets.to_i
puts "2つ目の数字"
b = gets.to_i
puts "3つ目の数字"
c = gets.to_i
puts "何番目の数字を求めますか？"
t = gets.to_i

n=0

while n < (t - 3)
  d = a + b + c
  a=b
  b=c
  c=d
  n += 1
end

puts "#{t}番目の数は#{c}です"