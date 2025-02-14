from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
import time

app = Flask(__name__)
CORS(app)

# Tentativa de conexão com MySQL (aguarda o container estar pronto)
while True:
    try:
        db = mysql.connector.connect(
            host="db",
            user="root",
            password="example",
            database="mydatabase"
        )
        print("✅ Conectado ao MySQL!")
        break
    except mysql.connector.Error as err:
        print(f"❌ Erro ao conectar ao MySQL: {err}. Tentando novamente...")
        time.sleep(5)

@app.route('/api/items')
def get_items():
    cursor = db.cursor(dictionary=True)  # Retorna resultado como dicionário
    cursor.execute("SELECT * FROM items")
    items = cursor.fetchall()
    cursor.close()
    return jsonify(items)

@app.route('/hello')
def hello():
    return "Hello World"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
