cd ../public/content/images

SIZES=('250' '400' '650' '800')

for file in '.'/o_*
do
    for size in ${SIZES[@]}
    do
        width=$size
        height=$(expr $size \* 3 / 4 )
        filename=${file%.*}
        ffmpeg -i $file -vf scale=-1:$height,crop=$width:$height -y ${filename:4}-$size.${file##*.}
    done
done