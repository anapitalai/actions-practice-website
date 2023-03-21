Action Syntax

name: Name of workflow
on: workflow_dispatch                     ##     When the job should be triggered
jobs:
    first_job:
        runs-on: ubuntu-latest
        steps:                                     ##the steps, 2 steps here
            name: Print greeting                   ##name of step
            run: echo 'This is cool!!!'             ##what needs to be run
            name: Print goodbye
            run: echo 'bye ma ioko!!'



###working one 
name: First Workflow Name

on: workflow_dispatch

jobs:
  first_job:
    runs-on: ubuntu-latest

    steps: 
    - name: Print greeting
      run: echo 'Hello, this is the first step in the job first_job'
    - name: Print Goodbye
      run: echo 'Done ma bye'



