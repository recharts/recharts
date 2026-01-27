import{e}from"./iframe-BZbOzzTY.js";import{R as s}from"./arrayEqualityCheck-D0qDv0Fd.js";import{C as p}from"./ComposedChart-BgDb9u1m.js";import{C as c}from"./CartesianGrid-BfQ3xRz4.js";import{X as f}from"./XAxis-D_0iXdcr.js";import{Y as l}from"./YAxis-Dya7AK5Z.js";import{R as h}from"./ReferenceArea-Cu_eUrg7.js";import{R as d}from"./RechartsHookInspector-135t8dQu.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dw2Mrgq2.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Bx7P3ldu.js";import"./hooks-CeNJ-Qya.js";import"./axisSelectors-Cv1qfvr6.js";import"./zIndexSlice-J5rUHDmR.js";import"./CartesianChart-Bmuz99Xe.js";import"./chartDataContext-D5Kp386R.js";import"./CategoricalChart-BBkfjreJ.js";import"./CartesianAxis-B2T9DZ1W.js";import"./Layer-Ca1ZcU8K.js";import"./Text-Dp7XyQOy.js";import"./DOMUtils-vtRXHL3R.js";import"./Label-D9W5dwQ-.js";import"./ZIndexLayer-CLlHxURh.js";import"./types-CCRlLAaX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CkInrNvF.js";import"./useAnimationId-CbTMmgPX.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index--k4eFqf6.js";import"./ChartSizeDimensions-OWBI4sZr.js";import"./OffsetShower-BDJynaSn.js";import"./PlotAreaShower-DgtK3Nlq.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
