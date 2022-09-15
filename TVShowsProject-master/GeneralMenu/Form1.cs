using TVShows.BL;
using TVShows.Domain;

namespace GeneralMenu
{
    public partial class Form1 : Form
    {
        private readonly TVShows.DAL.ContentRepository contentRepository;
        private readonly IContentBL _contentBL;


        public Form1()
        {
            InitializeComponent();
            this.contentRepository = new TVShows.DAL.ContentRepository(new TVShows.Data.TVShowDbContext());
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            SetupDataGridView();
        }

        private void SetupDataGridView()
        {
            dataGridView1.DataSource = GetContent();
            //var kek = GetContent();
            //var content = kek.FirstOrDefault(f => f.ContentID == 15);
            //Console.WriteLine(kek);
            // IList<Army.Domain.Army>
        }

        public IEnumerable<Content> GetContent()
        {
            return contentRepository.GetAll();
        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            var army = new TVShows.Domain.Content();
            army.Title = textBox1.Text;
            army.Description = textBox2.Text;
            army.PremiereDate = int.Parse(textBox3.Text);
            army.Img = textBox4.Text;
            army.Rate = 0;
            textBox1.Clear();
            contentRepository.CreateContent(army);
            dataGridView1.DataSource = GetContent();
            dataGridView1.Refresh();
        }
    }
}