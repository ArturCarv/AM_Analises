#!/usr/bin/env python3
"""
Script para otimizar imagens do site AM Análises
Comprime imagens mantendo qualidade visual
"""

import os
from PIL import Image
import sys

def optimize_image(input_path, output_path, quality=85, max_width=1200):
    """
    Otimiza uma imagem reduzindo tamanho e mantendo qualidade
    """
    try:
        with Image.open(input_path) as img:
            # Converter para RGB se necessário
            if img.mode in ('RGBA', 'LA', 'P'):
                # Criar fundo branco para imagens com transparência
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Redimensionar se muito grande
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Salvar otimizada
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            # Calcular economia
            original_size = os.path.getsize(input_path)
            new_size = os.path.getsize(output_path)
            savings = ((original_size - new_size) / original_size) * 100
            
            print(f"✅ {os.path.basename(input_path)}: {original_size/1024:.1f}KB → {new_size/1024:.1f}KB ({savings:.1f}% economia)")
            
    except Exception as e:
        print(f"❌ Erro ao processar {input_path}: {e}")

def main():
    """
    Processa todas as imagens na pasta Exemplos
    """
    print("🖼️  Otimizando imagens do site AM Análises...")
    print("=" * 50)
    
    # Criar pasta para imagens otimizadas
    optimized_dir = "Exemplos_Optimized"
    if not os.path.exists(optimized_dir):
        os.makedirs(optimized_dir)
    
    total_savings = 0
    total_original = 0
    processed = 0
    
    # Processar todas as imagens
    for root, dirs, files in os.walk("Exemplos"):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                input_path = os.path.join(root, file)
                
                # Manter estrutura de pastas
                rel_path = os.path.relpath(input_path, "Exemplos")
                output_path = os.path.join(optimized_dir, rel_path)
                
                # Criar diretório se não existir
                os.makedirs(os.path.dirname(output_path), exist_ok=True)
                
                # Otimizar imagem
                original_size = os.path.getsize(input_path)
                optimize_image(input_path, output_path)
                new_size = os.path.getsize(output_path)
                
                total_original += original_size
                total_savings += (original_size - new_size)
                processed += 1
    
    print("=" * 50)
    print(f"📊 Resumo da otimização:")
    print(f"   • {processed} imagens processadas")
    print(f"   • Tamanho original: {total_original/1024/1024:.1f} MB")
    print(f"   • Tamanho otimizado: {(total_original-total_savings)/1024/1024:.1f} MB")
    print(f"   • Economia total: {total_savings/1024/1024:.1f} MB ({(total_savings/total_original)*100:.1f}%)")
    print("\n✨ Imagens otimizadas salvas em 'Exemplos_Optimized'")
    print("💡 Substitua a pasta 'Exemplos' pela 'Exemplos_Optimized' quando estiver satisfeito!")

if __name__ == "__main__":
    main()
