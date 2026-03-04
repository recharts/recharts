import{e}from"./iframe-kEab-1de.js";import{R as n}from"./arrayEqualityCheck-CYrh2cjl.js";import{C as p}from"./ComposedChart-CBB2EZz-.js";import{C as s}from"./CartesianGrid-Dz-jm-Oh.js";import{X as c}from"./XAxis-B2e8gJVO.js";import{Y as f}from"./YAxis-C_wTf9xH.js";import{L as l}from"./Line-WaM8nLHp.js";import{R as d}from"./ReferenceLine-BCkt8XHl.js";import{R as h}from"./RechartsHookInspector-CC5UoVXz.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D3Hyj-pA.js";import"./immer-C4eWxQIR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CML9BKQL.js";import"./index-D1RE61xO.js";import"./hooks-CJ2fHPGA.js";import"./axisSelectors-Tp_fxU6n.js";import"./d3-scale-sz-3qxpi.js";import"./zIndexSlice-BaIw-MhD.js";import"./renderedTicksSlice-BrUKQsnm.js";import"./CartesianChart-BAMega6b.js";import"./chartDataContext-DvTCGmxA.js";import"./CategoricalChart-C5mOLgQl.js";import"./CartesianAxis-3YcfdTBf.js";import"./Layer-Dvp9QxpM.js";import"./Text-DdI2ODY4.js";import"./DOMUtils-WUqQkZq5.js";import"./Label-CVjBmkuR.js";import"./ZIndexLayer-DOe9AOBU.js";import"./types-B8qtknYP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BiGj3rxx.js";import"./ActivePoints-E55BUQ9b.js";import"./Dot-oRWifsYs.js";import"./RegisterGraphicalItemId-Z8hxEYqU.js";import"./ErrorBarContext-CSP8NLhc.js";import"./GraphicalItemClipPath-CrzbaPUK.js";import"./SetGraphicalItem-D6ZVSQU1.js";import"./useAnimationId-DmziQOA2.js";import"./getRadiusAndStrokeWidthFromDot-CUkSAeld.js";import"./ActiveShapeUtils-DS-9aDIa.js";import"./isPlainObject-DYt69ZGI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bb8G2Q0h.js";import"./Trapezoid-DOWeSYXh.js";import"./Sector-DyyTlWTh.js";import"./Symbols-eEknJRPm.js";import"./symbol-Mwvb6Rn8.js";import"./step-BiRjne67.js";import"./Curve-B815kJjs.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DRJo_4d4.js";import"./ChartSizeDimensions-D96mYFyL.js";import"./OffsetShower-Db9WbllM.js";import"./PlotAreaShower-_gQbuJS1.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
