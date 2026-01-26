import{e}from"./iframe-BfI_ST9A.js";import{R as s}from"./arrayEqualityCheck-Dpn6Yh1q.js";import{C as p}from"./ComposedChart-C5RXmCa-.js";import{C as c}from"./CartesianGrid-B6zMTXDB.js";import{X as f}from"./XAxis-BmtgQOLB.js";import{Y as l}from"./YAxis-DTgMZjXd.js";import{R as h}from"./ReferenceArea-DIn39tA6.js";import{R as d}from"./RechartsHookInspector-CVEQV9do.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-AaslCT8i.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-B_X6-_SZ.js";import"./hooks-DvK6IaUs.js";import"./axisSelectors-DDmdM9p6.js";import"./zIndexSlice-DXwF7pA6.js";import"./CartesianChart-DXCnOxpF.js";import"./chartDataContext-CeBJp2Px.js";import"./CategoricalChart-DD3vhlwU.js";import"./CartesianAxis-DmSsZovB.js";import"./Layer-Y7LjbTmX.js";import"./Text-rhuK2TCR.js";import"./DOMUtils-bXouPdN4.js";import"./Label-bNYHk-eM.js";import"./ZIndexLayer-BqmPWyE4.js";import"./types-C63RoX8s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-ClKhcP1j.js";import"./useAnimationId-COKmXqbi.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-ChuKY9XN.js";import"./ChartSizeDimensions-BiyrgYor.js";import"./OffsetShower-SG_pY0kd.js";import"./PlotAreaShower-DWEL4ESW.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
