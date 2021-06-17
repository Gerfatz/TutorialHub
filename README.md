# TutorialHub

School Project for M152 from Dario Camenzind an Benjamin Zoronjic

## Project setup
Before you start the development server for the first time, you 
need to install the npm dependencies.
```
npm install
```

After that you need to run the gen_image_variants.sh script to 
generate the diffrent resolutions for the images. This will convert 
all images in the public/content/images folder starting with o_ into 
4 diffrent resolutions. Those images will be used as thumbnails for the 
tutorials. For the videos you need to do this manually. For this pull 
the video (name also starting with o_) into the console_scripts folder 
and run the generateVariants.sh script. This needs to be done one video 
at a time. The script will create a folder which contains the diffrent 
resolutions of the video, and the manifest file. This process might take 
a few minutes depending on your computer. If you don't want to wait for 
this to finish, I have uploaded an archive to google drive that have the
files in it. Simply put the folders into /public/content/videos and you 
should be good to go. Here is the link to the archive [https://drive.google.com/file/d/16HrFdHSNcoCb2k3o8qu4Nt2pjNZbkAz9/view?usp=sharing](https://drive.google.com/file/d/16HrFdHSNcoCb2k3o8qu4Nt2pjNZbkAz9/view?usp=sharing)

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
