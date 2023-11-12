let text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, maiores " +
    "obcaecati rem numquam deserunt itaque voluptatum? Numquam veniam non, atque libero ipsa officiis " +
    "dolor obcaecati ipsam magni? Officia consectetur vitae inventore amet consequuntur praesentium ab " +
    "dicta, corporis, repellat unde quidem tempore reiciendis dolor facilis aperiam? Itaque cumque tempora, " +
    "iusto tempore, minus nihil iste eos veniam, placeat quibusdam nemo et. Blanditiis optio exercitationem " +
    "soluta a ullam molestiae eligendi, minima magnam assumenda excepturi tempore quas impedit cupiditate sapiente " +
    "quasi deleniti temporibus explicabo consequuntur doloribus magni? Enim unde inventore excepturi, doloremque eum " +
    "laudantium, natus minima optio voluptate consequatur, non possimus officiis nobis atque! Possimus, culpa libero " +
    "distinctio quo fugiat est ratione iure tempora recusandae. Officiis, dolores quibusdam voluptas quia nihil praesentium, " +
    "nulla minus ut quo iste atque nobis fuga corporis earum porro voluptates repudiandae? Ipsum ex atque repellat, quaerat a " +
    "ducimus totam impedit quibusdam vel vitae temporibus consectetur cum, dolorem nulla excepturi, id nostrum hic laborum ab " +
    "maiores libero doloribus ea beatae non. Vero velit numquam, laboriosam architecto quibusdam nihil excepturi maiores unde " +
    "commodi incidunt doloremque mollitia aut dolorem aliquam dolore? Sed autem repellendus nobis nesciunt ea voluptatibus est " +
    "mollitia? Magni, quas. Accusantium totam incidunt sequi natus magni explicabo laborum voluptatibus, nulla dignissimos debitis " +
    "delectus doloremque cupiditate. Ex porro exercitationem iusto facere asperiores voluptate saepe quibusdam corrupti quas voluptates, " +
    "nobis consectetur ab molestiae ad explicabo laboriosam dolor cupiditate eos beatae. Corporis voluptate voluptatem, necessitatibus " +
    "excepturi tenetur sit quia totam velit praesentium vel nesciunt, officiis eaque assumenda. A asperiores fugiat debitis culpa odio " +
    "deleniti ipsum id tempora sequi? Provident distinctio quisquam inventore accusamus neque illo nihil, debitis soluta, veniam aliquid " +
    "quaerat laboriosam ex obcaecati nostrum. Consectetur sequi cumque quaerat porro commodi voluptatum adipisci sit, officia labore illo "

let map = new Map()

mapping = (string) => {
    for (let i = 0; i < string.length; i++) {
        if(!map.has(string.charAt(i))){
            map.set(string.charAt(i), 1)
        } else {
            map.set(string.charAt(i), map.get(string.charAt(i)) + 1)
        }
    }
}
mapping(text)
console.log(map);