import{R as e}from"./iframe-D3XpTouC.js";import{R as a}from"./zIndexSlice-nnBmRw_5.js";import{C as p}from"./ComposedChart-e1zdTWw-.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BLCGW2dx.js";import{X as f}from"./XAxis-gmDKzFC9.js";import{Y as l}from"./YAxis-FbLbV3M6.js";import{L as d}from"./Line-y-cDtTXP.js";import{R as h}from"./ReferenceLine-d_UkpmXq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DlZqYg6P.js";import"./throttle-B0HYRial.js";import"./index-DHhgNiiB.js";import"./index-DTv10PLm.js";import"./RechartsWrapper-sYdg_-aY.js";import"./axisSelectors-DLLpPrx1.js";import"./polarAxisSelectors-C3Rr3kNg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-k39_yHUv.js";import"./index-CSVEFX3e.js";import"./index-nr8cRX1L.js";import"./renderedTicksSlice-BzU7dsOB.js";import"./index-BIeNSbTD.js";import"./CartesianChart-DoW6CJ46.js";import"./chartDataContext-BRwGn-1-.js";import"./CategoricalChart-C7DNEYYD.js";import"./CartesianAxis-DzZUDYVE.js";import"./Layer-D4bzgnBD.js";import"./Text-B7A0Zl2p.js";import"./pageBackground-BB2_LToU.js";import"./useId-2hxDKCu1.js";import"./ZIndexLayer-DtbAElLD.js";import"./Label-C-8XXSAc.js";import"./dataEntryStyles-lBmwmj-v.js";import"./types-BmT-ScX1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CryrSNFf.js";import"./step-Bc6BB28K.js";import"./path-DyVhHtw_.js";import"./activeStyles-CSOHGyzI.js";import"./useAnimationId-SaX7cxM4.js";import"./ActivePoints-D01Qbd0d.js";import"./Dot-Dh-neF-t.js";import"./RegisterGraphicalItemId-BJwNChl_.js";import"./ErrorBarContext-6Mnl7Bdn.js";import"./SetGraphicalItem-9ERbeIZR.js";import"./getRadiusAndStrokeWidthFromDot-2Ds3FVhy.js";import"./ActiveShapeUtils-DcUYSyXw.js";import"./useEffectiveDataKey-BFS5aOAm.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
