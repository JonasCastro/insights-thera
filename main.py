import requests
import csv
import sys

def mountArrayTags(tags = ''):
  tags = tags.replace("\t", "")
  tags = tags.replace(" ", "")
  return tags.split(';')

def mountCard(value):
  tags = mountArrayTags(value[1])
  return { 
    "text": value[0],
    "tags": tags,
  }

def checkFileExistance(filePath):
    try:
        with open(filePath, 'r') as f:
            return True
    except FileNotFoundError as e:
        return False
    except IOError as e:
        return False
        
def read_csv_and_mount_cards(file_name = 'file_exemple.csv'):
  if not checkFileExistance(file_name):
    print('O Arquivo %s, não foi encontrado!!' % (file_name))
    return []

  cards = []
  with open(file_name, 'rt') as file:
    reader = csv.reader(file)
    try:
      print("Gerando cards a partir do arquivo...")
      for linha in reader:
        cards.append(mountCard(linha))
    except csv.Error as e:
        print('file %s, linha %d: %s' % (file_name, reader.line_num, e))
  return cards

def postCards(cards):
  print("Enviando cards para a api...")
  result = requests.post("http://localhost:3333/cards/new-tags", json={ "cards": cards })
  print("status_code:", result.status_code)

if __name__ == '__main__':
  file_name = 'file_exemple.csv'
  if len(sys.argv) > 1:
    file_name = sys.argv[1]
  print("file_name:", file_name)
  cards = read_csv_and_mount_cards(file_name)
  if len(cards):
    print(len(cards), "cards genados")
    postCards(cards)
  else:
    print("Nenhum card foi gerado!!")
  