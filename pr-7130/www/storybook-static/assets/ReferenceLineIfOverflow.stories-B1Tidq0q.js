import{e}from"./iframe-RyyUADvi.js";import{R as n}from"./arrayEqualityCheck-BK7ZKOIC.js";import{C as p}from"./ComposedChart-D-HiiP42.js";import{C as s}from"./CartesianGrid-DWbw8Yjd.js";import{X as c}from"./XAxis-CoWhvSWs.js";import{Y as f}from"./YAxis-Un8vVQsB.js";import{L as l}from"./Line-CWDvrl0r.js";import{R as d}from"./ReferenceLine-Dl_RfA2w.js";import{R as h}from"./RechartsHookInspector-p0Yz6ifZ.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwxDEkD6.js";import"./immer-DiJOv4tT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-oQCIJm_t.js";import"./index-DS9IaigZ.js";import"./hooks-ZFjK5fyy.js";import"./axisSelectors-Bf3stQgf.js";import"./d3-scale-ZW2PW4r9.js";import"./zIndexSlice-I41T8JEG.js";import"./renderedTicksSlice-BUipPmkG.js";import"./CartesianChart-BVog2BC6.js";import"./chartDataContext-D7w4QAUg.js";import"./CategoricalChart-D1KFd6eK.js";import"./CartesianAxis-BpXuAb-I.js";import"./Layer-DGeVqCLc.js";import"./Text-BCjtKebt.js";import"./DOMUtils-CUy7YYLN.js";import"./Label-CQil7oNR.js";import"./ZIndexLayer-CXHEgDXB.js";import"./types-Bp-ZZqOO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BuUocuWo.js";import"./ActivePoints-BiNqWYY2.js";import"./Dot-CH5vcBHO.js";import"./RegisterGraphicalItemId-BvOeRSvq.js";import"./ErrorBarContext-DoMKVMyl.js";import"./GraphicalItemClipPath-B8_DVnDn.js";import"./SetGraphicalItem-Cl0KJDHX.js";import"./useAnimationId-6eUUABj9.js";import"./getRadiusAndStrokeWidthFromDot-BZmLJ3C8.js";import"./ActiveShapeUtils-Db-WQFuK.js";import"./isPlainObject-Dd20guMq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BY6gKUrO.js";import"./Trapezoid-BnRug_7I.js";import"./Sector-CY4skt_U.js";import"./Symbols-C-qwK5A2.js";import"./symbol-BBBIWRyY.js";import"./step-4PchhSUC.js";import"./Curve-BOxvHyTd.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BPy7O-_m.js";import"./ChartSizeDimensions-B2WcmWF_.js";import"./OffsetShower-Cy4pmMeQ.js";import"./PlotAreaShower-CgXv_TiK.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
