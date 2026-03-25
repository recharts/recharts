import{e}from"./iframe-CldnC2PN.js";import{R as s}from"./arrayEqualityCheck-BkMemVly.js";import{C as p}from"./ComposedChart-BngszoqL.js";import{C as c}from"./CartesianGrid-BEaZvAgk.js";import{X as f}from"./XAxis-Cj8qZ5rT.js";import{Y as l}from"./YAxis-CrDGCN3a.js";import{R as h}from"./ReferenceArea-CwoJ5-9C.js";import{R as d}from"./RechartsHookInspector-D62gTWo0.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwrkZ9kS.js";import"./immer-DMaWcifR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAnE3XKK.js";import"./index-B042oD1N.js";import"./hooks-C8l2rjci.js";import"./axisSelectors-DvlPsvJ3.js";import"./d3-scale-fXH-4SOh.js";import"./zIndexSlice-Dkmz4iFf.js";import"./renderedTicksSlice-Be71JRZt.js";import"./CartesianChart-D5D4yxlx.js";import"./chartDataContext-HhqUZ6D1.js";import"./CategoricalChart-SLN0-3Ts.js";import"./CartesianAxis-BLyyO5TZ.js";import"./Layer-Bdw6vRTF.js";import"./Text-DSAVQ0ab.js";import"./DOMUtils-CLNPxtlu.js";import"./Label-CL4-mp52.js";import"./ZIndexLayer-Bu6n17y5.js";import"./types-dYqueN3V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CtzrYFnf.js";import"./useAnimationId-3owPHR_y.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-VkK4RKSk.js";import"./ChartSizeDimensions-De6H2yR6.js";import"./OffsetShower-QG2XVoqu.js";import"./PlotAreaShower-x9Z3Lf2d.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
