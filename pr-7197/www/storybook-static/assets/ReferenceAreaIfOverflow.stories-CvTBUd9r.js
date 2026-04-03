import{e}from"./iframe-Bg9Z345n.js";import{R as s}from"./arrayEqualityCheck-CR8W5Kti.js";import{C as p}from"./ComposedChart-XHqgTgy-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Dn3x157K.js";import{X as l}from"./XAxis-DhRZk_Mh.js";import{Y as h}from"./YAxis-BhiIVd-U.js";import{R as d}from"./ReferenceArea-rFpwOE4k.js";import{R as x}from"./RechartsHookInspector-DZje97zi.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-1kFCboKo.js";import"./immer-BVutyhQF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8iTtnHJd.js";import"./index-DmHLw308.js";import"./hooks-BQaOS62t.js";import"./axisSelectors-26bP4L-h.js";import"./d3-scale-Dqhx0vW7.js";import"./zIndexSlice-peT_55F_.js";import"./renderedTicksSlice-By7COYk0.js";import"./CartesianChart-LuczCI7G.js";import"./chartDataContext-UodH6WPb.js";import"./CategoricalChart-DxtCX4Pl.js";import"./CartesianAxis-2wCCgYqS.js";import"./Layer-BdGV6vMM.js";import"./Text-DxC6lCk_.js";import"./DOMUtils-DkCGUMsy.js";import"./Label-CELZqSQs.js";import"./ZIndexLayer-DPL5778T.js";import"./types-B4W4ehrV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-EnxeHGuf.js";import"./useAnimationId-DlZyApEc.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CjwjTBDZ.js";import"./ChartSizeDimensions-Uo90Geyy.js";import"./OffsetShower-C3m1IvZt.js";import"./PlotAreaShower-CfpcGPOz.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
