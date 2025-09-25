#!/usr/bin/env python3
"""
AM Análises - Dashboard Financeiro
Aplicação Python para controle de receitas e despesas
"""

import tkinter as tk
from tkinter import ttk, messagebox, filedialog
import json
import os
from datetime import datetime, date
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import pandas as pd

class FinancialDashboard:
    def __init__(self, root):
        self.root = root
        self.root.title("AM Análises - Dashboard Financeiro")
        self.root.geometry("1200x800")
        self.root.configure(bg='#f8f9fa')
        
        # Dados
        self.transactions = []
        self.goals = {
            'monthly': 1250,
            'annual': 15000,
            'clients': 4
        }
        
        # Carregar dados salvos
        self.load_data()
        
        # Criar interface
        self.create_widgets()
        self.update_dashboard()
        
    def create_widgets(self):
        # Título
        title_frame = tk.Frame(self.root, bg='#1d4ed8', height=80)
        title_frame.pack(fill='x', padx=10, pady=10)
        title_frame.pack_propagate(False)
        
        title_label = tk.Label(title_frame, text="💰 AM Análises - Dashboard Financeiro", 
                              font=('Arial', 20, 'bold'), fg='white', bg='#1d4ed8')
        title_label.pack(expand=True)
        
        # Frame principal
        main_frame = tk.Frame(self.root, bg='#f8f9fa')
        main_frame.pack(fill='both', expand=True, padx=10, pady=5)
        
        # Frame esquerdo - Controles
        left_frame = tk.Frame(main_frame, bg='white', width=400)
        left_frame.pack(side='left', fill='y', padx=(0, 5))
        left_frame.pack_propagate(False)
        
        # Frame direito - Dashboard
        right_frame = tk.Frame(main_frame, bg='white')
        right_frame.pack(side='right', fill='both', expand=True, padx=(5, 0))
        
        self.create_controls(left_frame)
        self.create_dashboard(right_frame)
        
    def create_controls(self, parent):
        # Nova Transação
        trans_frame = tk.LabelFrame(parent, text="Nova Transação", font=('Arial', 12, 'bold'),
                                   bg='white', fg='#2c3e50')
        trans_frame.pack(fill='x', padx=10, pady=10)
        
        # Descrição
        tk.Label(trans_frame, text="Descrição:", bg='white', font=('Arial', 10)).pack(anchor='w', padx=10, pady=(10, 0))
        self.desc_entry = tk.Entry(trans_frame, font=('Arial', 10), width=30)
        self.desc_entry.pack(fill='x', padx=10, pady=(0, 5))
        
        # Valor
        tk.Label(trans_frame, text="Valor (R$):", bg='white', font=('Arial', 10)).pack(anchor='w', padx=10)
        self.amount_entry = tk.Entry(trans_frame, font=('Arial', 10), width=30)
        self.amount_entry.pack(fill='x', padx=10, pady=(0, 5))
        
        # Tipo
        tk.Label(trans_frame, text="Tipo:", bg='white', font=('Arial', 10)).pack(anchor='w', padx=10)
        self.type_var = tk.StringVar(value="income")
        type_frame = tk.Frame(trans_frame, bg='white')
        type_frame.pack(fill='x', padx=10, pady=(0, 5))
        tk.Radiobutton(type_frame, text="Receita", variable=self.type_var, value="income", 
                      bg='white', font=('Arial', 10)).pack(side='left')
        tk.Radiobutton(type_frame, text="Despesa", variable=self.type_var, value="expense", 
                      bg='white', font=('Arial', 10)).pack(side='left', padx=(20, 0))
        
        # Categoria
        tk.Label(trans_frame, text="Categoria:", bg='white', font=('Arial', 10)).pack(anchor='w', padx=10)
        self.category_var = tk.StringVar(value="consultoria")
        category_combo = ttk.Combobox(trans_frame, textvariable=self.category_var, 
                                     values=["consultoria", "curso", "template", "outros"],
                                     font=('Arial', 10), width=27)
        category_combo.pack(fill='x', padx=10, pady=(0, 10))
        
        # Botão Adicionar
        add_btn = tk.Button(trans_frame, text="Adicionar Transação", command=self.add_transaction,
                           bg='#1d4ed8', fg='white', font=('Arial', 10, 'bold'),
                           relief='flat', padx=20, pady=5)
        add_btn.pack(pady=10)
        
        # Configurações
        config_frame = tk.LabelFrame(parent, text="Configurações", font=('Arial', 12, 'bold'),
                                    bg='white', fg='#2c3e50')
        config_frame.pack(fill='x', padx=10, pady=10)
        
        # Meta Mensal
        tk.Label(config_frame, text="Meta Mensal (R$):", bg='white', font=('Arial', 10)).pack(anchor='w', padx=10, pady=(10, 0))
        self.monthly_goal_entry = tk.Entry(config_frame, font=('Arial', 10), width=30)
        self.monthly_goal_entry.insert(0, str(self.goals['monthly']))
        self.monthly_goal_entry.pack(fill='x', padx=10, pady=(0, 5))
        
        # Meta Anual
        tk.Label(config_frame, text="Meta Anual (R$):", bg='white', font=('Arial', 10)).pack(anchor='w', padx=10)
        self.annual_goal_entry = tk.Entry(config_frame, font=('Arial', 10), width=30)
        self.annual_goal_entry.insert(0, str(self.goals['annual']))
        self.annual_goal_entry.pack(fill='x', padx=10, pady=(0, 5))
        
        # Meta Clientes
        tk.Label(config_frame, text="Meta Clientes Mensais:", bg='white', font=('Arial', 10)).pack(anchor='w', padx=10)
        self.clients_goal_entry = tk.Entry(config_frame, font=('Arial', 10), width=30)
        self.clients_goal_entry.insert(0, str(self.goals['clients']))
        self.clients_goal_entry.pack(fill='x', padx=10, pady=(0, 10))
        
        # Botões
        btn_frame = tk.Frame(config_frame, bg='white')
        btn_frame.pack(fill='x', padx=10, pady=10)
        
        update_btn = tk.Button(btn_frame, text="Atualizar Metas", command=self.update_goals,
                              bg='#059669', fg='white', font=('Arial', 10, 'bold'),
                              relief='flat', padx=15, pady=5)
        update_btn.pack(side='left', padx=(0, 5))
        
        export_btn = tk.Button(btn_frame, text="Exportar", command=self.export_data,
                              bg='#6b7280', fg='white', font=('Arial', 10, 'bold'),
                              relief='flat', padx=15, pady=5)
        export_btn.pack(side='left')
        
    def create_dashboard(self, parent):
        # Métricas principais
        metrics_frame = tk.Frame(parent, bg='white')
        metrics_frame.pack(fill='x', padx=10, pady=10)
        
        # Labels para métricas
        self.revenue_label = tk.Label(metrics_frame, text="Receita Mensal: R$ 0,00", 
                                     font=('Arial', 14, 'bold'), fg='#059669', bg='white')
        self.revenue_label.pack(side='left', padx=10)
        
        self.projects_label = tk.Label(metrics_frame, text="Projetos: 0", 
                                      font=('Arial', 14, 'bold'), fg='#1d4ed8', bg='white')
        self.projects_label.pack(side='left', padx=10)
        
        self.goal_label = tk.Label(metrics_frame, text="Meta: 0%", 
                                  font=('Arial', 14, 'bold'), fg='#dc2626', bg='white')
        self.goal_label.pack(side='left', padx=10)
        
        # Transações recentes
        trans_list_frame = tk.LabelFrame(parent, text="Transações Recentes", 
                                        font=('Arial', 12, 'bold'), bg='white', fg='#2c3e50')
        trans_list_frame.pack(fill='both', expand=True, padx=10, pady=10)
        
        # Treeview para transações
        columns = ('Data', 'Descrição', 'Categoria', 'Valor')
        self.trans_tree = ttk.Treeview(trans_list_frame, columns=columns, show='headings', height=10)
        
        for col in columns:
            self.trans_tree.heading(col, text=col)
            self.trans_tree.column(col, width=150)
        
        # Scrollbar
        scrollbar = ttk.Scrollbar(trans_list_frame, orient='vertical', command=self.trans_tree.yview)
        self.trans_tree.configure(yscrollcommand=scrollbar.set)
        
        self.trans_tree.pack(side='left', fill='both', expand=True, padx=10, pady=10)
        scrollbar.pack(side='right', fill='y', pady=10)
        
    def add_transaction(self):
        try:
            description = self.desc_entry.get().strip()
            amount = float(self.amount_entry.get())
            transaction_type = self.type_var.get()
            category = self.category_var.get()
            
            if not description:
                messagebox.showerror("Erro", "Digite uma descrição!")
                return
            
            transaction = {
                'id': len(self.transactions) + 1,
                'description': description,
                'amount': amount,
                'type': transaction_type,
                'category': category,
                'date': datetime.now().isoformat()
            }
            
            self.transactions.append(transaction)
            self.save_data()
            self.update_dashboard()
            
            # Limpar campos
            self.desc_entry.delete(0, 'end')
            self.amount_entry.delete(0, 'end')
            
            messagebox.showinfo("Sucesso", "Transação adicionada com sucesso!")
            
        except ValueError:
            messagebox.showerror("Erro", "Digite um valor válido!")
        except Exception as e:
            messagebox.showerror("Erro", f"Erro ao adicionar transação: {str(e)}")
    
    def update_goals(self):
        try:
            self.goals['monthly'] = float(self.monthly_goal_entry.get())
            self.goals['annual'] = float(self.annual_goal_entry.get())
            self.goals['clients'] = int(self.clients_goal_entry.get())
            
            self.save_data()
            self.update_dashboard()
            messagebox.showinfo("Sucesso", "Metas atualizadas com sucesso!")
            
        except ValueError:
            messagebox.showerror("Erro", "Digite valores válidos!")
    
    def update_dashboard(self):
        # Calcular métricas do mês atual
        current_month = datetime.now().month
        current_year = datetime.now().year
        
        monthly_transactions = [t for t in self.transactions 
                               if datetime.fromisoformat(t['date']).month == current_month
                               and datetime.fromisoformat(t['date']).year == current_year
                               and t['type'] == 'income']
        
        total_revenue = sum(t['amount'] for t in monthly_transactions)
        projects_count = len(monthly_transactions)
        
        # Atualizar labels
        self.revenue_label.config(text=f"Receita Mensal: R$ {total_revenue:,.2f}")
        self.projects_label.config(text=f"Projetos: {projects_count}")
        
        # Calcular progresso da meta
        if self.goals['monthly'] > 0:
            progress = (total_revenue / self.goals['monthly']) * 100
            self.goal_label.config(text=f"Meta: {progress:.1f}%")
            
            if progress >= 100:
                self.goal_label.config(fg='#059669')
            elif progress >= 75:
                self.goal_label.config(fg='#f59e0b')
            else:
                self.goal_label.config(fg='#dc2626')
        
        # Atualizar lista de transações
        for item in self.trans_tree.get_children():
            self.trans_tree.delete(item)
        
        # Mostrar últimas 20 transações
        recent_transactions = sorted(self.transactions, key=lambda x: x['date'], reverse=True)[:20]
        
        for trans in recent_transactions:
            date_str = datetime.fromisoformat(trans['date']).strftime('%d/%m/%Y')
            amount_str = f"R$ {trans['amount']:,.2f}"
            if trans['type'] == 'expense':
                amount_str = f"-{amount_str}"
            
            self.trans_tree.insert('', 'end', values=(
                date_str,
                trans['description'],
                trans['category'],
                amount_str
            ))
    
    def export_data(self):
        try:
            filename = filedialog.asksaveasfilename(
                defaultextension=".json",
                filetypes=[("JSON files", "*.json"), ("All files", "*.*")],
                title="Exportar Dados Financeiros"
            )
            
            if filename:
                data = {
                    'transactions': self.transactions,
                    'goals': self.goals,
                    'export_date': datetime.now().isoformat()
                }
                
                with open(filename, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                
                messagebox.showinfo("Sucesso", f"Dados exportados para {filename}")
                
        except Exception as e:
            messagebox.showerror("Erro", f"Erro ao exportar dados: {str(e)}")
    
    def save_data(self):
        """Salvar dados em arquivo JSON"""
        data = {
            'transactions': self.transactions,
            'goals': self.goals
        }
        
        try:
            with open('financial_data.json', 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
        except Exception as e:
            print(f"Erro ao salvar dados: {e}")
    
    def load_data(self):
        """Carregar dados do arquivo JSON"""
        try:
            if os.path.exists('financial_data.json'):
                with open('financial_data.json', 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    self.transactions = data.get('transactions', [])
                    self.goals = data.get('goals', self.goals)
        except Exception as e:
            print(f"Erro ao carregar dados: {e}")

def main():
    root = tk.Tk()
    app = FinancialDashboard(root)
    root.mainloop()

if __name__ == "__main__":
    main()
