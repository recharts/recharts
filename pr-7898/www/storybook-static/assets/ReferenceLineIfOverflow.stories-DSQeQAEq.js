import{R as e}from"./iframe-C2y7-rH2.js";import{R as a}from"./zIndexSlice-BQPOy7As.js";import{C as p}from"./ComposedChart-CwCxFjZe.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CoBayb9K.js";import{X as f}from"./XAxis-BRv-fAhZ.js";import{Y as l}from"./YAxis-B28w59_W.js";import{L as d}from"./Line-DB6VwbSy.js";import{R as h}from"./ReferenceLine-j0eQxGo0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BDe4zlG9.js";import"./index-Bz54eCtj.js";import"./index-ChrJmNNe.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-vPK17mKC.js";import"./isWellBehavedNumber-6_l4g7Xi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BcfYPaoe.js";import"./axisSelectors-Bw0Qwigf.js";import"./d3-scale-D07iQYqn.js";import"./index-DyeRA5Td.js";import"./index-OvZqyYfZ.js";import"./renderedTicksSlice-DVIPHfrA.js";import"./index-DN97KnNV.js";import"./CartesianChart-B1na8-qP.js";import"./chartDataContext-ClTM7zwW.js";import"./CategoricalChart-BgXqKpLI.js";import"./CartesianAxis-DwUPIt0X.js";import"./Layer-Y5hBKOyR.js";import"./Text-Dg2YZl1D.js";import"./DOMUtils-CYVmP7ld.js";import"./useId-rIBzQY0F.js";import"./useBackwardsCompatibleTheme-xd8BeFgY.js";import"./Label-CSUQJf-z.js";import"./ZIndexLayer-Cqkx5XlC.js";import"./types-DDulV5vn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Bc1dsSwG.js";import"./step-CDQ_m3Wy.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CrKX7S12.js";import"./useAnimationId-BlRPNYZD.js";import"./ActivePoints-DOuEp3Ot.js";import"./Dot-Di-XdVIz.js";import"./RegisterGraphicalItemId-CD4HP7HF.js";import"./ErrorBarContext-J0sVh-nS.js";import"./GraphicalItemClipPath-SSZXiCnp.js";import"./SetGraphicalItem-B36qE1ly.js";import"./getRadiusAndStrokeWidthFromDot-AXkwLV7A.js";import"./ActiveShapeUtils-CXM-saMn.js";import"./useGraphicalItemIdentity-B5eIfUAt.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
