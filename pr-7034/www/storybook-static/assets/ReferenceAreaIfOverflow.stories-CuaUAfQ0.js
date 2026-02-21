import{e}from"./iframe-DAZKVxz9.js";import{R as s}from"./arrayEqualityCheck-dPOQS8pO.js";import{C as p}from"./ComposedChart-DTJu-yAB.js";import{C as c}from"./CartesianGrid-B_MixTEO.js";import{X as f}from"./XAxis-DrBlWbCQ.js";import{Y as l}from"./YAxis-BKsd-W4f.js";import{R as h}from"./ReferenceArea-ZgeHlCFX.js";import{R as d}from"./RechartsHookInspector-B2Mat80Z.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Xx_SsgwN.js";import"./immer-4-TXwIq-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjWlMXU1.js";import"./index-D3IpfJcR.js";import"./hooks-Dot9B-8s.js";import"./axisSelectors-DztuZ7GM.js";import"./d3-scale-ChhyAw2W.js";import"./zIndexSlice-D3HE9JYU.js";import"./renderedTicksSlice-BvtRkGHb.js";import"./CartesianChart-CKg6csWi.js";import"./chartDataContext-DGYaAAtE.js";import"./CategoricalChart-DeG47lga.js";import"./CartesianAxis-B8h3nSA3.js";import"./Layer-B5mQaLs_.js";import"./Text-CNFMu9xe.js";import"./DOMUtils-Dpu0-rWt.js";import"./Label-DNW4k13o.js";import"./ZIndexLayer-CksZ3gAG.js";import"./types-4_oq0AJp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-nMN8f2_i.js";import"./useAnimationId-Bfut_0eb.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B6PIiwfp.js";import"./ChartSizeDimensions-BLB7KQxE.js";import"./OffsetShower-DvPblFBG.js";import"./PlotAreaShower-CQAhfZmY.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
