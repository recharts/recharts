import{R as e}from"./iframe-UrDM9Xq3.js";import{R as s}from"./zIndexSlice-ByG8njt8.js";import{C as p}from"./ComposedChart-GlsxxvdN.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DdAU5AXC.js";import{X as d}from"./XAxis-DnTKDl6t.js";import{Y as l}from"./YAxis-B_QpZZ2v.js";import{R as h}from"./ReferenceArea-PtKThScb.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CN88OGp3.js";import"./index-DNiwhT54.js";import"./index-Cn_MLy2m.js";import"./get-DL-gpN5o.js";import"./resolveDefaultProps-PeQIR1GL.js";import"./isWellBehavedNumber-CLVIVmGZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dm1mVgCK.js";import"./index-B2ZS3Yz1.js";import"./index-4YA6lX68.js";import"./renderedTicksSlice-SpzHxRDt.js";import"./axisSelectors-BJCtqUC9.js";import"./d3-scale-DVQsPwxD.js";import"./string-B6fdYHAA.js";import"./CartesianChart-H9EcaXcZ.js";import"./chartDataContext-K_upA5vN.js";import"./CategoricalChart-CUBoZ8Vx.js";import"./CartesianAxis-DMp3qHuF.js";import"./Layer-CegbOy6-.js";import"./Text-Z9b8Q3If.js";import"./DOMUtils-B87CjqTu.js";import"./Label-KmMVZ1kh.js";import"./ZIndexLayer-DAEesPn0.js";import"./types-DWkwwyEz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-CvnkFbTC.js";import"./useAnimationId-cQnLIEvC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
