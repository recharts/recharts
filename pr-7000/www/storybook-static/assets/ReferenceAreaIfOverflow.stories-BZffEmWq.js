import{e}from"./iframe-ByhUx3i5.js";import{R as s}from"./arrayEqualityCheck-Dc2-6IGJ.js";import{C as p}from"./ComposedChart-BqdUV1Sk.js";import{C as c}from"./CartesianGrid-cSH_-Fn1.js";import{X as f}from"./XAxis-BI5mxokc.js";import{Y as l}from"./YAxis-D42CMzIK.js";import{R as h}from"./ReferenceArea-B28_8io7.js";import{R as d}from"./RechartsHookInspector-7ObrtXBg.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BXU9cl7Q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CIwNTWTh.js";import"./hooks-3yl5iFEg.js";import"./axisSelectors-NQs8EjRk.js";import"./zIndexSlice-D3kDw7sn.js";import"./CartesianChart-R5e0LOwa.js";import"./chartDataContext-BYf5RbAV.js";import"./CategoricalChart-5ePC_oFI.js";import"./CartesianAxis-Dz61qQ6A.js";import"./Layer-C6tXeN-I.js";import"./Text-D9qGFk_y.js";import"./DOMUtils-CN3Smf_c.js";import"./Label-CEJ3y0id.js";import"./ZIndexLayer-ktHWf7_5.js";import"./types-CJt6eGgj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CxW-1m5M.js";import"./useAnimationId-aMq0pZgy.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bitkd77q.js";import"./ChartSizeDimensions-DxQjWf1j.js";import"./OffsetShower-DxCTP-c8.js";import"./PlotAreaShower-DB1zgg4x.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
