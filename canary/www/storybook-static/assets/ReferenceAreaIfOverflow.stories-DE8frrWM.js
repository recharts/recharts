import{e}from"./iframe-B0wKxNpK.js";import{R as s}from"./arrayEqualityCheck-5nuhtSeT.js";import{C as p}from"./ComposedChart-CLdtbTIL.js";import{C as c}from"./CartesianGrid-BXbLZ40w.js";import{X as f}from"./XAxis-y_MJiFx9.js";import{Y as l}from"./YAxis-Cj3ZlpOa.js";import{R as h}from"./ReferenceArea-Bp-hyBZl.js";import{R as d}from"./RechartsHookInspector-DYn9zJB9.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CIdIqjjC.js";import"./immer-DUb1bWtb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CrtUXLbx.js";import"./index-Cnz4_p8Q.js";import"./hooks-oSTNajEI.js";import"./axisSelectors-C1uueI6X.js";import"./d3-scale-CQFM5VB3.js";import"./zIndexSlice-BcKpuoZl.js";import"./renderedTicksSlice-dfIm6fl5.js";import"./CartesianChart-CLpt04B_.js";import"./chartDataContext-CfWR9eN6.js";import"./CategoricalChart-DBWdCLL2.js";import"./CartesianAxis-BqdAX1QZ.js";import"./Layer-DSIwel9q.js";import"./Text-DlBKXZA-.js";import"./DOMUtils-CSAF-8sx.js";import"./Label-BdkcMQDU.js";import"./ZIndexLayer-70VD5Z7C.js";import"./types-CYNiifb0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BLIXCh-E.js";import"./useAnimationId-BdZ_5XMP.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CyRoQl_d.js";import"./ChartSizeDimensions-Bu6AufwQ.js";import"./OffsetShower-Crn6XKfz.js";import"./PlotAreaShower-YsEXXYRG.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
