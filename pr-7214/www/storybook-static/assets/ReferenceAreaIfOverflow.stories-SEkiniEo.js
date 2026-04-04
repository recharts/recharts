import{e}from"./iframe-DchjWIcT.js";import{R as s}from"./arrayEqualityCheck-QCkrs1PG.js";import{C as p}from"./ComposedChart-CFs0TJqd.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-D1l-HRKy.js";import{X as l}from"./XAxis-D4P_mYvM.js";import{Y as h}from"./YAxis-DuKGJBLI.js";import{R as d}from"./ReferenceArea-B2q6eQCv.js";import{R as x}from"./RechartsHookInspector-CPRA6xJz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-SMaOT1cA.js";import"./immer-DLCBpJSm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6NPWdWo.js";import"./index-Brnv01PQ.js";import"./hooks-0MUNxS-P.js";import"./axisSelectors-Cs62S3eJ.js";import"./d3-scale-Dz9swnGz.js";import"./zIndexSlice-B4fo6Fp2.js";import"./renderedTicksSlice-ARMD3d3P.js";import"./CartesianChart-9IsHXkda.js";import"./chartDataContext-CtCLKmwO.js";import"./CategoricalChart-Cx0EsJSw.js";import"./CartesianAxis-DSoy_rG_.js";import"./Layer-BGlDxeZH.js";import"./Text-BMGBMw2v.js";import"./DOMUtils-BQHfItYf.js";import"./Label-DmoQv3Ji.js";import"./ZIndexLayer-D4usu0YU.js";import"./types-pHat4itB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BsEwa7FZ.js";import"./useAnimationId-D5Nwowfc.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DNOa6QVy.js";import"./ChartSizeDimensions-CVsXW5Vd.js";import"./OffsetShower-35EhUoAr.js";import"./PlotAreaShower-CHLX1rVB.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
