import{e}from"./iframe-CUnLgpW-.js";import{R as n}from"./arrayEqualityCheck-CGwnIdvG.js";import{C as s}from"./ComposedChart-dHSji5Me.js";import{C as p}from"./CartesianGrid-4Fpib6wg.js";import{X as c}from"./XAxis-Ca50gTOu.js";import{Y as f}from"./YAxis-BiZg32ce.js";import{R as l}from"./ReferenceDot-Bw5h11ir.js";import{R as h}from"./RechartsHookInspector-Bx_AeU2-.js";import{p as d}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-3A21IoT3.js";import"./PolarUtils-B2H8NKZh.js";import"./RechartsWrapper-DlEqFuyr.js";import"./hooks-BodQywHm.js";import"./axisSelectors-CesYX3jk.js";import"./zIndexSlice-COAwGY7D.js";import"./CartesianChart-BId6Bjz9.js";import"./chartDataContext-C42Wd2jm.js";import"./CategoricalChart-BBiN7XHJ.js";import"./CartesianAxis-tcRV1YVy.js";import"./Layer-DqDgkHbR.js";import"./Text-Bzx_mpBH.js";import"./DOMUtils-rOWW9V75.js";import"./Label-BFTmbefL.js";import"./ZIndexLayer-CIJpz3dT.js";import"./types-Cya9OZ_P.js";import"./Dot-b-hZt1Z5.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-F2EJmSFt.js";import"./ChartSizeDimensions-BZ4xctFr.js";import"./OffsetShower-DfQZxxZ8.js";import"./PlotAreaShower-ajA77Kx1.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const V=["IfOverflow"];export{t as IfOverflow,V as __namedExportsOrder,Q as default};
