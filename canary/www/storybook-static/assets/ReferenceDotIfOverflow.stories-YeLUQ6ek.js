import{e}from"./iframe-DYXgwBIj.js";import{R as n}from"./arrayEqualityCheck-CLSXPhEJ.js";import{C as s}from"./ComposedChart-BNyuImgf.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-UrtTG0Ey.js";import{X as f}from"./XAxis-DxuZp48g.js";import{Y as l}from"./YAxis-DLCMUUgi.js";import{R as h}from"./ReferenceDot-Drdi0HVs.js";import{R as d}from"./RechartsHookInspector-DNZQsUA4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-xhU6-TKE.js";import"./immer-DqnPv083.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJ4twCb0.js";import"./index-DKQaQPo5.js";import"./hooks-B36GXF-L.js";import"./axisSelectors-D1Sw3rlY.js";import"./d3-scale-DvhayWTq.js";import"./zIndexSlice-grNRpkcv.js";import"./renderedTicksSlice-BsOdr-UA.js";import"./CartesianChart-BhbBZsjR.js";import"./chartDataContext-CQgEv-1D.js";import"./CategoricalChart-8xICKxcP.js";import"./CartesianAxis-C_t8uogb.js";import"./Layer-B2chWpFo.js";import"./Text-1DsuNyNG.js";import"./DOMUtils-YQarvmoJ.js";import"./Label-BotO9q2I.js";import"./ZIndexLayer-D-ilahJA.js";import"./types-D3wyGAu1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-TZcM57dL.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DIOmg34x.js";import"./ChartSizeDimensions-DgpSyLAE.js";import"./OffsetShower-hXudHQen.js";import"./PlotAreaShower-DjlUc4SO.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
