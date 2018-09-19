<script>
export default {
  props: ["target", "title", "id"],
  render: function(createElement) {
    const { target, title } = this;
    const list = [];
    for (const item in this.$slots) {
      const t = this.$slots[item];
      if (t) {
        const className =
          (t[0] && t[0].data && t[0].data.attrs.slotclass) || "";
        const id = (t[0] && t[0].data && t[0].data.attrs.slotid) || "";
        const attrs = {
          "data-popo-target": item === "default" ? "center" : item,
        };
        if (id) attrs.id = id;
        list.push(
          createElement(
            "div",
            {
              class: {
                [`popo-target-container ${className}`]: true
              },
              attrs
            },
            t
          )
        );
      }
    };
    const classTarget = {};
    if(this.className) {
      classTarget[this.className] = true;
    }
    return createElement(
      "div",
      {
        class: classTarget,
        attrs: {
          "data-popo": target,
          title: title || "",
          id: this.id || null
        }
      },
      list
    );
  }
};
</script>
