# Copyright (c) 2020, Frappe Technologies Pvt. Ltd. and Contributors
# MIT License. See license.txt
from __future__ import unicode_literals

import frappe

def get_context(context):
	context.developer_mode = frappe.conf.developer_mode
