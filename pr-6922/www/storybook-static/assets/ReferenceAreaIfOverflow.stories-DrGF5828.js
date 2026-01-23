import{e}from"./iframe-3ssOB91Q.js";import{R as s}from"./arrayEqualityCheck-RWElLsK2.js";import{C as p}from"./ComposedChart-4-taPps0.js";import{C as c}from"./CartesianGrid-r34ttTM3.js";import{X as f}from"./XAxis-B0PHajli.js";import{Y as l}from"./YAxis-CCiXb5zT.js";import{R as h}from"./ReferenceArea-DLvnKFx1.js";import{R as d}from"./RechartsHookInspector-DHP-9GZN.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ctxcgNcU.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-8idYzD5u.js";import"./hooks-6a0TNfIB.js";import"./axisSelectors-DTH02zf7.js";import"./zIndexSlice-ho1ylgk9.js";import"./CartesianChart-D-chxrPJ.js";import"./chartDataContext-CBnI5hri.js";import"./CategoricalChart-CW0qn3M9.js";import"./CartesianAxis-B8B5j-ea.js";import"./Layer-W17HINYn.js";import"./Text-BvProlO0.js";import"./DOMUtils-DJ-ugNhO.js";import"./Label-DzudoiWU.js";import"./ZIndexLayer-CTlKz5-T.js";import"./types-CfIL69ww.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BrCnLm7V.js";import"./useAnimationId-C6CpCegT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cewrc6A2.js";import"./ChartSizeDimensions-BSxBFCsp.js";import"./OffsetShower-BDSx3j6G.js";import"./PlotAreaShower-DLNjbvna.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
