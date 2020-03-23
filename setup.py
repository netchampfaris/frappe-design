# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in frappe_design/__init__.py
from frappe_design import __version__ as version

setup(
	name='frappe_design',
	version=version,
	description='Frappe Design Guidelines and Components',
	author='Frappe Technologies',
	author_email='developers@frappe.io',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
