# from _socket import _RetAddress
# import json
# from http.server import BaseHTTPRequestHandler, HTTPServer
# from socketserver import BaseServer
# from urllib.parse import urlparse, parse_qs
# from huggingface_hub import login
# # from hf_logic import HfLlmLogicBrain
# from dotenv import load_dotenv
# import os

# from langchain_huggingface import HuggingFaceEndpoint
# from langchain_core.prompts import PromptTemplate

# class HfLlmLogicBrain:
#     def __init__(self, hf_token):
    
#       repo_id = "mistralai/Mistral-7B-Instruct-v0.2"
#       self.llm = HuggingFaceEndpoint(
#           repo_id=repo_id,
#           temperature=0.5,
#           huggingfacehub_api_token=hf_token,
#       )

#     def respond(self, question):
#       template = """"
#       Answer the following question in a few sentences:
      
#       {question}
#       """

#       prompt = PromptTemplate.from_template(template)

      
#       llm_chain = prompt | self.llm
#       response = llm_chain.invoke({"question": question})
      
#       return response
      

# class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
#     # Class attribute for brain
#     brain = None
#     load_dotenv()
    
#     @classmethod
#     def initialize_brain(cls):
#         # Replace 'your_token_here' with your actual Hugging Face token
#         hf_token = os.getenv('HF_TOKEN')  # Ensure to provide the actual token here if not using environment variable
#         login(hf_token)
#         cls.brain = HfLlmLogicBrain(hf_token)

#     def do_GET(self):
#         # Check if brain is initialized
#         if self.brain is None:
#             self.send_response(500)
#             self.send_header('Content-type', 'application/json')
#             self.send_header('Access-Control-Allow-Origin', '*')
#             self.send_header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE')
#             self.send_header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#             self.send_header('Access-Control-Allow-Credentials', 'true')
#             self.end_headers()
#             response = {'error': 'Brain not initialized'}
#             self.wfile.write(json.dumps(response).encode())
#             return

#         # Check the path
#         if self.path.startswith('/makethejump/bot'):
#             # Parse query parameters
#             parsed_path = urlparse(self.path)
#             query_params = parse_qs(parsed_path.query)
            
#             # Check for 'prompt' in the query parameters
#             if 'prompt' not in query_params:
#                 self.send_response(400)
#                 self.send_header('Content-type', 'application/json')
#                 self.send_header('Access-Control-Allow-Origin', '*')
#                 self.send_header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE')
#                 self.send_header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#                 self.send_header('Access-Control-Allow-Credentials', 'true')
#                 self.end_headers()
#                 response = {'error': "'prompt' query parameter is required"}
#                 self.wfile.write(json.dumps(response).encode())
#                 return

#             prompt = query_params['prompt'][0]
            
#             print(f'Prompt: {prompt}')
#             response = self.brain.respond(prompt)
#             print(f'Response: {response}')
            
#             response_data = {'response': response}
            
#             # Send response
#             self.send_response(200)
#             self.send_header('Content-type', 'application/json')
#             self.send_header('Access-Control-Allow-Origin', '*')
#             self.send_header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE')
#             self.send_header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#             self.send_header('Access-Control-Allow-Credentials', 'true')
#             self.end_headers()
#             self.wfile.write(json.dumps(response_data).encode())
#         else:
#             self.send_response(404)
#             self.send_header('Content-type', 'application/json')
#             self.send_header('Access-Control-Allow-Origin', '*')
#             self.send_header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE')
#             self.send_header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#             self.send_header('Access-Control-Allow-Credentials', 'true')
#             self.end_headers()
#             response = {'error': 'Not found'}
#             self.wfile.write(json.dumps(response).encode())

from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/about')
def about():
    return 'About'