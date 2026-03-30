import{e}from"./iframe-DggZKTRy.js";import{R as s}from"./arrayEqualityCheck-DnZLtMf6.js";import{C as p}from"./ComposedChart-8cXw1Wpu.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Ca4dQTXt.js";import{X as l}from"./XAxis-Dbhs6mKo.js";import{Y as h}from"./YAxis-Dp9rJ-_E.js";import{R as d}from"./ReferenceArea-BAoqS5cQ.js";import{R as x}from"./RechartsHookInspector-DY7Qg7TT.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DXkRukFF.js";import"./immer-DqkR2i4r.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DW5O2LzM.js";import"./index-BLEPV65D.js";import"./hooks-6phBN8Fl.js";import"./axisSelectors-eAEMtAEJ.js";import"./d3-scale-Cv2rvDbO.js";import"./zIndexSlice-D0Ka7Mpu.js";import"./renderedTicksSlice-LD1nL11t.js";import"./CartesianChart-CdnV1DGW.js";import"./chartDataContext-D9KHIkbs.js";import"./CategoricalChart-DMPzgnGo.js";import"./CartesianAxis-BXbHKKX1.js";import"./Layer-BuKRQch4.js";import"./Text-Bd8tFEPJ.js";import"./DOMUtils-DITCnwVy.js";import"./Label-Dxk2zJHG.js";import"./ZIndexLayer-D85cG2g2.js";import"./types-CBaBaM7i.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-mU1cjLaJ.js";import"./useAnimationId-C-Fijf5f.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-87ty5-MJ.js";import"./ChartSizeDimensions-DI522ei_.js";import"./OffsetShower-C9Cav-aa.js";import"./PlotAreaShower-t65TdSVB.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
