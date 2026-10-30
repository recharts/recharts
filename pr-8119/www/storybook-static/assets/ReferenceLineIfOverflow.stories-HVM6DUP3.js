import{R as e}from"./iframe-D4SWC0C9.js";import{R as a}from"./zIndexSlice-DtLu2rz0.js";import{C as p}from"./ComposedChart-CixY_uah.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B0MTC305.js";import{X as f}from"./XAxis-DY95kjca.js";import{Y as l}from"./YAxis-DZiEXhVb.js";import{L as d}from"./Line-BMXJqgb8.js";import{R as h}from"./ReferenceLine-Cfgh5dKZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CuPg7ygH.js";import"./throttle-i1uEXwfS.js";import"./index-o5eRcHSQ.js";import"./index-Bm9m5_PU.js";import"./RechartsWrapper-B-nLjLBG.js";import"./axisSelectors-D7bj-nZi.js";import"./polarAxisSelectors-5Is9yWXM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CqqO4xMX.js";import"./index-BzqOahcD.js";import"./index-BdcBqhlp.js";import"./renderedTicksSlice-BWlvISfj.js";import"./index-BOyzEbCc.js";import"./CartesianChart-D2bJStRT.js";import"./ZIndexPortal-Dz8Csonx.js";import"./CategoricalChart-Cyf0p9sz.js";import"./CartesianAxis-jJfvsanR.js";import"./Layer--YLSv_ie.js";import"./Text-K3oqQ0qr.js";import"./DOMUtils-_TTo3kuP.js";import"./ZIndexLayer-DpB3cuZ0.js";import"./Label-B4GKK3W-.js";import"./types-BULmlw12.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Curve-CLAbzDX3.js";import"./step-DJAY54DS.js";import"./path-DyVhHtw_.js";import"./LabelList-D_z7ECQv.js";import"./ActivePoints-D3cp_ck3.js";import"./Dot-fLjTiyXC.js";import"./activeStyles-DGXStsvL.js";import"./useAnimationId-DKXEwRJj.js";import"./dataEntryStyles-Df562HAt.js";import"./Symbols-mjJ7TtB9.js";import"./symbol-IW8UYWs4.js";import"./ErrorBarContext-CkfaNLfH.js";import"./SetGraphicalItem-CmNEMHt3.js";import"./getRadiusAndStrokeWidthFromDot-DOd7rr-G.js";import"./ActiveShapeUtils-CKN1RXI0.js";import"./useEffectiveDataKey-B-O25Qiu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
