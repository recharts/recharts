import{e}from"./iframe-BjHGzV_g.js";import{R as n}from"./arrayEqualityCheck-DSmzEAOj.js";import{C as s}from"./ComposedChart-B9pmH1Bx.js";import{C as p}from"./CartesianGrid-DuvwaQ2k.js";import{X as c}from"./XAxis-DS6la1y6.js";import{Y as f}from"./YAxis-ChYWGLAS.js";import{R as l}from"./ReferenceDot-B_E8j2uq.js";import{R as h}from"./RechartsHookInspector-D9VSdGzF.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BgzxguqS.js";import"./PolarUtils-DVfIyed4.js";import"./RechartsWrapper-BpQ0Nvj-.js";import"./hooks-j3l1IZT0.js";import"./axisSelectors-Dcbbky9Q.js";import"./zIndexSlice-CeUR4dop.js";import"./CartesianChart-NrBloX0j.js";import"./chartDataContext-CvBxgAkC.js";import"./CategoricalChart-DUk9fPa6.js";import"./CartesianAxis-BWIPgogw.js";import"./Layer-C_w7y8lS.js";import"./Text-D_R22YNN.js";import"./DOMUtils-DJKWXfCz.js";import"./Label-CYo-ySuR.js";import"./ZIndexLayer-CXQSohMh.js";import"./types-CnIXHZZY.js";import"./Dot-DgNeiD7R.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D2ltde3K.js";import"./ChartSizeDimensions-RaKYClSi.js";import"./OffsetShower-CgzrN99U.js";import"./PlotAreaShower-CopDbqvE.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const V=["IfOverflow"];export{t as IfOverflow,V as __namedExportsOrder,Q as default};
