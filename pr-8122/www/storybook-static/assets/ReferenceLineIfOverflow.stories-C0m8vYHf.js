import{R as e}from"./iframe-DTgRciqJ.js";import{R as a}from"./zIndexSlice-DVbLmSgB.js";import{C as p}from"./ComposedChart-BUWqBVBV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DI64TJvK.js";import{X as f}from"./XAxis-GGlBaKPK.js";import{Y as l}from"./YAxis-Bbi7V5fP.js";import{L as d}from"./Line-B2ntj69e.js";import{R as h}from"./ReferenceLine-B7s81fpQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CoYSuL5J.js";import"./throttle-DuudF_mE.js";import"./index-CXPktc_m.js";import"./index-CbEM9QfO.js";import"./RechartsWrapper-MmwUlJ_d.js";import"./axisSelectors-CM_jcbgZ.js";import"./polarAxisSelectors-DsOVQpq2.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B5ifwFr0.js";import"./index-Bf4dxhjD.js";import"./index-nyRg1-_W.js";import"./renderedTicksSlice-BzplMOOM.js";import"./index-BpfdlB3K.js";import"./CartesianChart-Ccp3_hFu.js";import"./ZIndexPortal-BF9a0pAc.js";import"./CategoricalChart-CdgZmB3z.js";import"./CartesianAxis-EgZ7Q5N7.js";import"./Layer-uwDyCJ97.js";import"./Text-BPTv_m6E.js";import"./DOMUtils-CC4KHB5M.js";import"./ZIndexLayer-DulFdvV7.js";import"./Label-ClRWPO-B.js";import"./types-D-ekNx8o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Curve-CjloRNAl.js";import"./step-0aJ3gZqs.js";import"./path-DyVhHtw_.js";import"./LabelList-DQdMNFQg.js";import"./ActivePoints-q_blbmo6.js";import"./Dot-BnzqQ9RW.js";import"./activeStyles-bjUNghBK.js";import"./useAnimationId-D4a67WLs.js";import"./dataEntryStyles-B-5OPbn7.js";import"./Symbols-D1y9xfwW.js";import"./symbol-C3fOvccx.js";import"./ErrorBarContext-CqakUp6M.js";import"./SetGraphicalItem-GIbuPr5j.js";import"./getRadiusAndStrokeWidthFromDot-DXeqlmgf.js";import"./ActiveShapeUtils-DKKlK0pJ.js";import"./useEffectiveDataKey-CRNpNcQe.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
