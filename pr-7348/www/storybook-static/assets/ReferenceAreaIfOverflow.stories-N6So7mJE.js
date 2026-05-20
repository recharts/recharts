import{e}from"./iframe-BExdC6gN.js";import{g as s}from"./arrayEqualityCheck-DOMqUAof.js";import{C as p}from"./ComposedChart-CfHGhx4q.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-BwP7A8dN.js";import{X as l}from"./XAxis-CiJpP_bt.js";import{Y as h}from"./YAxis-CJCe92Ep.js";import{R as d}from"./ReferenceArea-D6k9zWzO.js";import{R as x}from"./RechartsHookInspector-jedlPGVn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BABy-fAx.js";import"./immer-fLQu0D5z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFXm4Z4I.js";import"./index-dnhQRVhY.js";import"./hooks-f9uoWTfr.js";import"./axisSelectors-G4Ozr4C7.js";import"./d3-scale-CPvJwxK1.js";import"./zIndexSlice-DqK4zht4.js";import"./renderedTicksSlice-Cgs3_pbO.js";import"./CartesianChart-DEFw3dUf.js";import"./chartDataContext-zs3q_52z.js";import"./CategoricalChart-GKia85wb.js";import"./CartesianAxis-DOEtdq2b.js";import"./Layer-Bn8zfoRz.js";import"./Text-DprtRutp.js";import"./DOMUtils-DUHeo9eF.js";import"./Label-BEYaNe1v.js";import"./ZIndexLayer-7iJ9Z1BS.js";import"./types-DfAw3uAA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-DUkG5lzX.js";import"./useAnimationId-DlRyv4oq.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bb8SVNOL.js";import"./ChartSizeDimensions-DVous5ni.js";import"./OffsetShower-DTmFDKEr.js";import"./PlotAreaShower-D_ibhKaV.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
