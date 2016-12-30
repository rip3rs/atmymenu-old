# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "ubuntu/trusty64"

  config.vm.box_check_update = true

  config.vm.network "private_network", ip: "192.168.33.18"

  config.vm.provider "virtualbox" do |vb|
    # Name the box
    vb.name = "At My Menu Box"

    # Customize the amount of memory on the VM:
    vb.memory = "4096"
  end

  config.vm.provision "shell", inline: <<-SHELL

    # Variables

    # Enables sites
    PAGE_CONF="atmymenu.dev"

    # Shell Script
    echo "##########################################"
    echo "#            APT-GET UPDATE              #"
    echo "##########################################"
    echo " "
    sudo apt-get -y update && sudo apt-get -y upgrade
    echo " "
    echo " "

    echo "##########################################"
    echo "#           GIT & ANT & UNZIP            #"
    echo "##########################################"
    echo " "
    sudo apt-get install -y git ant php5-curl php5-gd unzip
    echo " "
    echo " "

    echo "##########################################"
    echo "#            Nginx MongoDB               #"
    echo "##########################################"
    echo " "
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
    echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
    sudo apt-get update
    sudo apt-get install -y nginx
    sudo apt-get install -y mongodb-org
    sudo update-rc.d nginx defaults
    service mongod status
    echo " "
    echo " "

    echo "##########################################"
    echo "#            NODEJS 5.x REPO             #"
    echo "##########################################"
    echo " "
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    echo " "
    echo " "

    echo "##########################################"
    echo "#            NODEJS INSTALL              #"
    echo "##########################################"
    echo " "
    sudo apt-get install -y nodejs
    echo " "
    echo " "

    echo "##########################################"
    echo "#            NPM global i                #"
    echo "##########################################"
    echo " "
    npm install -g grunt-cli
    npm install -g less-cli
    npm install -g browserify
    echo " "
    echo " "

    echo "##########################################"
    echo "#        Making the directory            #"
    echo "##########################################"
    echo " "
    sudo mkdir -p /var/www/$PAGE_CONF
    sudo chown vagrant:vagrant /var/www/$PAGE_CONF
    echo " "
    echo " "

    echo "##########################################"
    echo "#     Move files into the folder         #"
    echo "##########################################"
    echo " "
    rsync -a --progress /vagrant/* /var/www/$PAGE_CONF
    echo " "
    echo " "

    echo "##########################################"
    echo "#         installing node modules        #"
    echo "##########################################"
    echo " "
    cd /var/www/$PAGE_CONF
    npm i
    echo " "
    echo " "

    echo "##########################################"
    echo "#          Setup Nginx hosts             #"
    echo "##########################################"
    echo " "
    cp /vagrant/config/nginx/$PAGE_CONF /etc/nginx/sites-available/
    echo "cp /vagrant/config/nginx/$PAGE_CONF /etc/nginx/sites-available/"
    echo "Copied!"
    echo " "
    echo " "

    echo "##########################################"
    echo "#            Enable Sites                #"
    echo "##########################################"
    echo " "
    sudo ln -s /etc/nginx/sites-available/$PAGE_CONF /etc/nginx/sites-enabled/
    echo " "
    echo " "

    echo "##########################################"
    echo "#            Restart Nginx               #"
    echo "##########################################"
    echo " "
    echo "Restarting Nginx."
    sudo service nginx restart
    echo " "
    echo " "

    echo "##########################################"
    echo "#   Setup direct path to working folder  #"
    echo "##########################################"
    echo " "
    echo "cd /var/www/$PAGE_CONF" >> /home/vagrant/.bashrc
    echo "cd /var/www/$PAGE_CONF" >> /home/vagrant/.bashrc
    echo " "
    echo " "

    echo "##########################################"
    echo "#   Vagrant UP is complete!11oneeleven   #"
    echo "##########################################"

  SHELL

end
