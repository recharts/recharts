import{e}from"./iframe-BXZsi3ZJ.js";import{R as n}from"./arrayEqualityCheck-Cr28DIq7.js";import{C as s}from"./ComposedChart-A4rsHRl-.js";import{C as p}from"./CartesianGrid-DvwO1gtD.js";import{X as c}from"./XAxis-vWhvLlJA.js";import{Y as f}from"./YAxis-CF2_AxHC.js";import{R as l}from"./ReferenceDot-qMMO5uHO.js";import{R as h}from"./RechartsHookInspector-BcsNAcT5.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKwhIINC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbqalEnK.js";import"./hooks-CeRNCNPw.js";import"./axisSelectors-DViO6aT3.js";import"./zIndexSlice-47t4gEct.js";import"./CartesianChart-34kvrnIo.js";import"./chartDataContext-RNK-qzkr.js";import"./CategoricalChart-Cfh0DMKR.js";import"./CartesianAxis-D3TuOOex.js";import"./Layer-CHngc-aq.js";import"./Text-BiWmZivS.js";import"./DOMUtils-C3G08RNL.js";import"./Label-BOPAlXUc.js";import"./ZIndexLayer-BN0SI8Of.js";import"./types-5-uOdbL9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BSyucR2X.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Chn5vrwc.js";import"./ChartSizeDimensions-DJrZeKfe.js";import"./OffsetShower-DmQZJejv.js";import"./PlotAreaShower-CTSmLut9.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
