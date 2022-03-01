import os

# Constants
path = os.path.dirname(os.path.abspath(__file__))

file_to_read = os.path.join(path, 'src', 'galeria.pug')
file_to_write = os.path.join(path, 'src', 'gallery_aux.pug')
file_to_replace = os.path.join(path, 'dist', 'galeria.html')

mode = 'production'  # development or production
context = 'pug'  # pug or html

# Look for images in the file_to_read file
images = []

with open(file_to_read) as file:
    data = file.readlines()

    for line in data:
        if 'data-pswp-srcset' in line:
            images_string = line.split(
                'data-pswp-srcset="'
            )[1].split('"')[0]

            image_string = images_string.split(", ")
            for image in image_string:
                images.append(image.split(" ")[0])

# Create the auxiliary file where the images will be converted later
with open(file_to_write, 'w') as file:
    for image in images:
        if context == 'html':
            file.write('<img src="{}"/>\n'.format(image))
        elif context == 'pug':
            file.write('img(src=require(".{}"))\n'.format(image))

# Write the proper path of every converted image
if mode == 'production':
    content = ''
    with open(file_to_replace, 'r') as file:
        content = file.read()

    with open(file_to_replace, 'w') as file:
        for image in images:
            if image in content:
                content = content.replace(
                    image,
                    "/src{}.webp".format(image.rsplit('.', 1)[0])
                )
        
        file.write(content)
