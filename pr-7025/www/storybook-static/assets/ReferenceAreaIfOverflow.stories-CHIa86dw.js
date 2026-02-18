import{e}from"./iframe-DRECDyJu.js";import{R as s}from"./arrayEqualityCheck-CwmcLezE.js";import{C as p}from"./ComposedChart-CFtzaxo-.js";import{C as c}from"./CartesianGrid-TIXS1aWN.js";import{X as f}from"./XAxis-0kgYDqpD.js";import{Y as l}from"./YAxis-DS55SlTE.js";import{R as h}from"./ReferenceArea-DYNAhmHY.js";import{R as d}from"./RechartsHookInspector-CkXF-mFA.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BL8CG5Be.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CU5EzhmX.js";import"./hooks-CjbPLp91.js";import"./axisSelectors-B-ON6UuJ.js";import"./zIndexSlice-DfG_LBZH.js";import"./renderedTicksSlice-BLRX00yy.js";import"./CartesianChart-B_9qra-d.js";import"./chartDataContext-D1nxolyM.js";import"./CategoricalChart-B6UPKjrz.js";import"./CartesianAxis-BgGI7FTB.js";import"./Layer-BVdUfIl0.js";import"./Text-DYPz2gV9.js";import"./DOMUtils-bfarr5el.js";import"./Label-CYBLI-Y2.js";import"./ZIndexLayer-DsAf8BK3.js";import"./types-BSPZHGNH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-Bt3TSPnX.js";import"./useAnimationId-DgWDlavz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-2vD-No8t.js";import"./ChartSizeDimensions-EJWE07nJ.js";import"./OffsetShower-Dgs61RIJ.js";import"./PlotAreaShower-B71aiz9a.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
