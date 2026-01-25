import{e}from"./iframe-zYnk8EOr.js";import{R as s}from"./arrayEqualityCheck-R2aAAI7x.js";import{C as p}from"./ComposedChart-D5xvMhhv.js";import{C as c}from"./CartesianGrid-qx_M6Mk1.js";import{X as f}from"./XAxis-BSJK083u.js";import{Y as l}from"./YAxis--5gqcMjD.js";import{R as h}from"./ReferenceArea-CtAAk8cl.js";import{R as d}from"./RechartsHookInspector-BM6dBg77.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CV8ibCPI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CuXPMym5.js";import"./hooks-B3MKPDpU.js";import"./axisSelectors-DsIocnZB.js";import"./zIndexSlice-BvNEMV0a.js";import"./CartesianChart-Bb7O5ezJ.js";import"./chartDataContext-93hSB1i9.js";import"./CategoricalChart-B_Ua5Q7Q.js";import"./CartesianAxis-BwSMeEYw.js";import"./Layer-B9ovT-3z.js";import"./Text-BKKp-XNT.js";import"./DOMUtils-BOegbNur.js";import"./Label-GsPpBxAc.js";import"./ZIndexLayer-DbRKS04n.js";import"./types-BQ3BmiiK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CWuLgpNw.js";import"./useAnimationId-C9zF9Z14.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C4mhfMdJ.js";import"./ChartSizeDimensions-DqnYIWpL.js";import"./OffsetShower-BnqP058z.js";import"./PlotAreaShower-Bzo9Sf9-.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
