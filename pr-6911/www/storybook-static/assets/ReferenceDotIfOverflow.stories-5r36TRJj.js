import{e}from"./iframe-BJE3gYiz.js";import{R as n}from"./arrayEqualityCheck-DOpOKb7k.js";import{C as s}from"./ComposedChart-CjmpYIzW.js";import{C as p}from"./CartesianGrid-IzZGbxwv.js";import{X as c}from"./XAxis-CiUlidyy.js";import{Y as f}from"./YAxis-DFb5sVBj.js";import{R as l}from"./ReferenceDot-Cgi2ISzz.js";import{R as h}from"./RechartsHookInspector-CmJjyPOL.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKNlGFt8.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-6YVSs0X2.js";import"./hooks-CzpWgTi2.js";import"./axisSelectors-BAfv6-Wm.js";import"./zIndexSlice-CPc0PYoJ.js";import"./CartesianChart-Dvfq7kHx.js";import"./chartDataContext-dCefmzkT.js";import"./CategoricalChart-BCQDahMf.js";import"./CartesianAxis-DYQqdQ0S.js";import"./Layer-BpHZQDe5.js";import"./Text-CV7Ey6jK.js";import"./DOMUtils-DGjslG0U.js";import"./Label-8Du7WhKH.js";import"./ZIndexLayer-PGry8EqE.js";import"./types-BgpWyLLK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-ELwl5DRr.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BZmliZtD.js";import"./ChartSizeDimensions-kmApRxRi.js";import"./OffsetShower-Cu7vEAUz.js";import"./PlotAreaShower-3gxA0MT2.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
