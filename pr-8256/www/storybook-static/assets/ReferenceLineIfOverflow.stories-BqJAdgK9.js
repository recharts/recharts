import{R as e}from"./iframe-Cd5XZAZS.js";import{R as a}from"./zIndexSlice-DK_btX6x.js";import{C as p}from"./ComposedChart-C4dh_bHB.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DTeDcwP-.js";import{X as f}from"./XAxis-DuodIejs.js";import{Y as l}from"./YAxis-BKK4Q1hO.js";import{L as d}from"./Line-DSgOWsRQ.js";import{R as h}from"./ReferenceLine-44pzKgfn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-_VGnYbPZ.js";import"./throttle-PHSKRlho.js";import"./index-B-TxKf-H.js";import"./index-Co6Bjw3c.js";import"./RechartsWrapper-m0J5sskz.js";import"./axisSelectors-BHI5fpRs.js";import"./polarAxisSelectors-n6B6BMl9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CgwU88kX.js";import"./index-CvnUfrKo.js";import"./index-DVl92vRy.js";import"./renderedTicksSlice-DPOz0IRP.js";import"./index-xt3fboRF.js";import"./fillDefinitions-DUfOk_XW.js";import"./CartesianChart-DgF2iEt1.js";import"./chartDataContext-BT9LVt8h.js";import"./CategoricalChart-CUQRrDXZ.js";import"./CartesianAxis-DJMJDg5E.js";import"./Layer-B_2Ec-2K.js";import"./Text-wtrDapFR.js";import"./ZIndexLayer-CbCfhAbh.js";import"./Label-DZuK-EQs.js";import"./types-GkAdah5a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-l9UD6a4a.js";import"./Curve-CXblHPne.js";import"./step-Cqk_pcFb.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CotdwlGF.js";import"./ActivePoints-BkMJ028i.js";import"./Dot-DRLqVGoB.js";import"./activeStyles-BcTmj77e.js";import"./useAnimationId-_tPgr2CA.js";import"./Symbols-CoJLGMis.js";import"./symbol-ZYu2ZO_N.js";import"./ErrorBarContext-BXlIU5Wf.js";import"./SetGraphicalItem-pIsvI9Mb.js";import"./ActiveShapeUtils-ckMpYydv.js";import"./useEffectiveDataKey-Cop8dd2N.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
