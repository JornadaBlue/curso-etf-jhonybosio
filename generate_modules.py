# Script para gerar as páginas dos módulos restantes
import os

modules = {
    3: {
        "title": "Módulo 3: A Alocação Estratégica",
        "subtitle": "O Método Bosio",
        "file": "/home/ubuntu/modulo_3_completo.md"
    },
    4: {
        "title": "Módulo 4: Otimização e Tributação",
        "subtitle": "O Segredo dos Profissionais",
        "file": "/home/ubuntu/modulo_4_completo.md"
    },
    5: {
        "title": "Módulo 5: O Próximo Nível",
        "subtitle": "A Transição para o Club",
        "file": "/home/ubuntu/modulo_5_completo.md"
    }
}

print("Módulos prontos para serem criados:")
for num, info in modules.items():
    print(f"- Módulo {num}: {info['title']}")
    if os.path.exists(info['file']):
        print(f"  ✓ Arquivo fonte encontrado")
    else:
        print(f"  ✗ Arquivo fonte não encontrado")
