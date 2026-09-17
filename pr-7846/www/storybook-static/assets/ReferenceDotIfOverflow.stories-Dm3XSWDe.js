import{R as e}from"./iframe-C63NoaDu.js";import{R as m}from"./zIndexSlice-BcMwSK9m.js";import{C as p}from"./ComposedChart-DM4H6PYa.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CMbIS0Ex.js";import{X as f}from"./XAxis-C5OImGrG.js";import{Y as l}from"./YAxis-DmSu88f8.js";import{R as d}from"./ReferenceDot-B29XbaRX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-dl1YLV6q.js";import"./index-C9CjOEex.js";import"./index-8uJ0bE2o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DjxgFVah.js";import"./isWellBehavedNumber-BfhF-72O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTWFoE3n.js";import"./axisSelectors-LGmM4kiC.js";import"./d3-scale-CcYn43Vo.js";import"./index-DKS0oalo.js";import"./index-DO3tFlOP.js";import"./renderedTicksSlice-DIKEWQne.js";import"./index-CqricD4t.js";import"./CartesianChart-ENzs0KXc.js";import"./chartDataContext-CfPmzzSW.js";import"./CategoricalChart-DHxPQS0Z.js";import"./CartesianAxis-BRA6gGeC.js";import"./Layer-Ckr3gw9l.js";import"./Text-D_RBmkbp.js";import"./DOMUtils-DA0ZRZ5p.js";import"./useId-BncxSM4U.js";import"./useBackwardsCompatibleTheme-DEjA-f8D.js";import"./Label-1Vc72EU1.js";import"./ZIndexLayer-Cc9mNp0T.js";import"./types-DUwSb1pu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DkFiM3ON.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
