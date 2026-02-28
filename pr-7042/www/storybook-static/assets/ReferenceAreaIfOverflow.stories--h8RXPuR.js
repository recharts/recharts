import{e}from"./iframe-DRzfceQj.js";import{R as s}from"./arrayEqualityCheck-rosVEDiH.js";import{C as p}from"./ComposedChart-cRVCNOzO.js";import{C as c}from"./CartesianGrid-Bod_OhoR.js";import{X as f}from"./XAxis-sc_rEheo.js";import{Y as l}from"./YAxis-BpCe0zSN.js";import{R as h}from"./ReferenceArea-D3XpSGcy.js";import{R as d}from"./RechartsHookInspector-iKfkRHZC.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Yo3rtldJ.js";import"./immer-CpErEFQU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cr19GrQC.js";import"./index-DhdVzYen.js";import"./hooks-BGhayb2I.js";import"./axisSelectors-KcSamBS9.js";import"./d3-scale-DMFBv7ef.js";import"./zIndexSlice-DFfzt0na.js";import"./renderedTicksSlice-WbT8TKLW.js";import"./CartesianChart-BpAHu02o.js";import"./chartDataContext-uibfkBE8.js";import"./CategoricalChart-BFsoF5NC.js";import"./CartesianAxis-BV4F2Vv5.js";import"./Layer-sUtHTMZe.js";import"./Text-5VoS0hOZ.js";import"./DOMUtils-D7MRyEG_.js";import"./Label-CCBnxLca.js";import"./ZIndexLayer-rLB6bkwI.js";import"./types-BIqkUGja.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CbvKmtU7.js";import"./useAnimationId-B4oBcBYL.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DKayDJ64.js";import"./ChartSizeDimensions-BcANsdLL.js";import"./OffsetShower-MalEY5Hj.js";import"./PlotAreaShower-BKiBhzbZ.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
