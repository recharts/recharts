import{e}from"./iframe-C389UKKQ.js";import{g as s}from"./arrayEqualityCheck-Cu2SMg-k.js";import{C as p}from"./ComposedChart-Bc2F2Aqn.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-CruiBcA5.js";import{X as l}from"./XAxis-CkTpgH_L.js";import{Y as h}from"./YAxis-DdPwtx1e.js";import{R as d}from"./ReferenceArea-BJplu3fd.js";import{R as x}from"./RechartsHookInspector-CxbWCB6n.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2PDdAmjP.js";import"./immer-4pDlWF5t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-De-O4PZ_.js";import"./index-CDhhJ3He.js";import"./hooks-yBoCoA8O.js";import"./axisSelectors-B2s8T9Mh.js";import"./d3-scale-CLP74tcR.js";import"./zIndexSlice-DHdgWlAr.js";import"./renderedTicksSlice-BUt1aBWJ.js";import"./CartesianChart-3kGQQmyR.js";import"./chartDataContext-UATbZCFS.js";import"./CategoricalChart-C8H-MuO4.js";import"./CartesianAxis-BfjJ9MKk.js";import"./Layer-BRJkvvA0.js";import"./Text-CdmDvBPW.js";import"./DOMUtils-CjAbMbXQ.js";import"./Label-BsU6QA-m.js";import"./ZIndexLayer-OX2yCAej.js";import"./types-9ii6Ug_u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-Bdl90qEj.js";import"./useAnimationId-CxUXlcSZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BR3VF3oH.js";import"./ChartSizeDimensions-BBcqsgSH.js";import"./OffsetShower-CIf7NCdz.js";import"./PlotAreaShower-DabrICzc.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
