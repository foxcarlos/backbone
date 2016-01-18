__author__ = 'cgarcia'

import json
import zmq
import time
import os
import ConfigParser
import bottle
import sys
import pymongo
from bottle.ext.websocket import GeventWebSocketServer
from bson.objectid import ObjectId
from os.path import join, dirname
from bottle import route, static_file, template
import datetime
import re
import psycopg2


@bottle.route('/static/<filename:path>')
def static(filename):
    return bottle.static_file(filename, root='static/')

@bottle.route('/')
def index():
    # usuario = ''
    # bottle.response.set_cookie("account", usuario)
    username = bottle.request.get_cookie("account")

    # print('usuario',username)
    return bottle.template('index', {'usuario': username})

@route('/my_ip')
def show_ip():
    ip = bottle.request.environ.get('REMOTE_ADDR')
    # or ip = request.get('REMOTE_ADDR')
    # or ip = request['REMOTE_ADDR']
    print(ip)
    return template("Your IP is: {{ip}}", ip=ip)

bottle.run(host = '0.0.0.0', port = 8086, server = GeventWebSocketServer, reloader = True)
