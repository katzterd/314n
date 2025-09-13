#!/usr/bin/env bash

  if [ -z "${TORGATE_HOSTNAME}" ]; then
      echo "TORGATE_HOSTNAME environment var is undefined, onion header will be disabled";
      sed -i 's/__TORGATE_HEADER__//' /nginx.conf
  else
      sed -i 's/__TORGATE_HEADER__/'"add_header Onion-Location http:\/\/${TORGATE_HOSTNAME}\$request_uri;"'/' /nginx.conf
  fi

  for ARGS in $@; do
	    case $ARGS in    
	        "createdb")     bash /createdb.sh;;
	        "createadmin")  /createadmin;;
	    esac
  done
  
  if [[ -z $@ ]]; then
      supervisord -c /supervisord.conf
  fi
