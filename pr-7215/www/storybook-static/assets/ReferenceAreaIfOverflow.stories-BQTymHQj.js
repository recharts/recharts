import{e}from"./iframe-B82q9u-Y.js";import{g as s}from"./arrayEqualityCheck-CKCQU2qV.js";import{C as p}from"./ComposedChart-CBqvY07d.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-39AKtB2i.js";import{X as l}from"./XAxis-BRaoe5W0.js";import{Y as h}from"./YAxis-CWyiNt5V.js";import{R as d}from"./ReferenceArea-D8omMQlR.js";import{R as x}from"./RechartsHookInspector-z9cebFjB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-g5aDd7Yf.js";import"./immer-WiujJWUS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CBADlju4.js";import"./index-DXyPKPXc.js";import"./hooks-Sri1sPLr.js";import"./axisSelectors-DXfv2Drb.js";import"./d3-scale-B8FZewzC.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-I2t58hxh.js";import"./renderedTicksSlice-CInncnPk.js";import"./CartesianChart-5ApupumH.js";import"./chartDataContext-D6HVVC2S.js";import"./CategoricalChart-DKDPW_6L.js";import"./CartesianAxis-U5xnp7fG.js";import"./Layer-C2GvyuKR.js";import"./Text-DlTF1_pF.js";import"./DOMUtils-CfA92o7z.js";import"./Label-yJEcHIim.js";import"./ZIndexLayer-DTDC0Rqe.js";import"./types-BjP-coDb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BGMFafl1.js";import"./useAnimationId-DLlegLLP.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-dYimQAlj.js";import"./ChartSizeDimensions-BGSkMu5K.js";import"./OffsetShower-DzS61Pg9.js";import"./PlotAreaShower-uXu1OgRK.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
          <RechartsHookInspector />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ae=["IfOverflow"];export{t as IfOverflow,ae as __namedExportsOrder,oe as default};
