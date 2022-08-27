import { useNavigate } from "react-router-dom";
import { UseCategoryList } from "../../hooks/useCategoryList";
import { useAllOrders } from "../../hooks/useAllOrders";
import Api from "../../services/Api";
import "./styles.scss";

type ChatProps = {
  id: string;
  order: string;
};
type Props = {
  id: string;
};

function ListAllOrders() {
  const { listCategory } = UseCategoryList();
  const { allOrderList } = useAllOrders();
  const navigate = useNavigate();
  const openOderClick = async (id: string) => {
    if (id!.trim() === "") {
      return;
    }
    const chat = await Api.createChat(id!)
      .then(function (res: ChatProps | any) {
        return res.data;
      })
      .catch(function (err) {
        return console.log(err);
      });
    const participant = await Api.addUserChat(chat.id)
      .then(function (res: ChatProps | any) {
        return res.data;
      })
      .catch(function (err) {
        return console.log(err);
      });

    if (chat && participant) {
      navigate(`/room/${chat.order}_${chat.id}`);
    }
  };

  return (
    <div className="listAllOrder">
      <div className="list_header">
        <h2>Meus Pedidos:</h2>
      </div>
      <div className="orders">
        {allOrderList.length == 0 ? (
          <p>Nenhum pedido no momento! </p>
        ) : (
          allOrderList.map((item: any) => {
            const [fulldate] = item.created_at.split("T");
            const [year, week, day] = fulldate.split("-");
            const date = `${day}/${week}/${year}`;
            const category = listCategory.map((cat) => {
              if (item.category_id === cat.id) {
                return cat.name;
              }
            });
            return (
              <div
                className="order_container"
                onClick={() => openOderClick(item.id)}
                key={item.id}
              >
                <span className="order_type">{category}</span>
                <div className="order_wrapper">
                  <div className="order_wrp">
                    <div className="order_data">
                      <span>Id:</span>
                      <p className="text">{item.id}</p>
                    </div>
                    <div className="order_data">
                      <span>Detalhes:</span>
                      <p className="text">{item.details}</p>
                    </div>
                  </div>
                  <div className="order_wrp">
                    <div className="order_data">
                      <span>Status:</span>
                      <p>{item.status}</p>
                    </div>
                    <div className="order_data">
                      <span className="text">Data de Criação:</span>
                      <p className="text">{date}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
export default ListAllOrders;
