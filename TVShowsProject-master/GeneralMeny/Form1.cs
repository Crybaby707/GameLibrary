using System;
using System.Collections.Generic;
using System.Windows.Forms;
//using TVShows.Domain;

namespace GeneralMeny
{
    public partial class Form1 : Form
    {
        private void AddGame()
        {
            //var army = new TVShows.Domain.Content();
/*            army.Name = textBox1.Text;
            textBox1.Clear();
            armyRepository.CreateArmy(army);
            dataGridView1.DataSource = GetArmies();
            dataGridView1.Refresh();*/

        }


        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "tVShowsDataSet.Contents". При необходимости она может быть перемещена или удалена.
            this.contentsTableAdapter.Fill(this.tVShowsDataSet.Contents);

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            AddGame();
        }
    }
}
