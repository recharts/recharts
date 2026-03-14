import{e}from"./iframe-CRc-flGw.js";import{R as n}from"./arrayEqualityCheck-DKsNPC5t.js";import{C as s}from"./ComposedChart-BEPIvTsZ.js";import{C as p}from"./CartesianGrid-VNKFBjJ3.js";import{X as c}from"./XAxis-DefhfpDJ.js";import{Y as f}from"./YAxis-DJLAjyOO.js";import{R as l}from"./ReferenceDot-FQvSqd0w.js";import{R as h}from"./RechartsHookInspector-BfXBIijA.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bl3-Fo8N.js";import"./immer-ByZzKzss.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BeKC2RVo.js";import"./index-1w6ajcFg.js";import"./hooks-DZKzKpMo.js";import"./axisSelectors-DdTNbtlm.js";import"./d3-scale-BQdhaFkz.js";import"./zIndexSlice-D5r4A9oU.js";import"./renderedTicksSlice-Drgf2BHB.js";import"./CartesianChart-XjjZ8yiv.js";import"./chartDataContext-BxD4B1Fo.js";import"./CategoricalChart-GI1F9wsO.js";import"./CartesianAxis-CmjuMVBO.js";import"./Layer-BnBdmezi.js";import"./Text-BTTbtJ1y.js";import"./DOMUtils-XAHmwwbv.js";import"./Label-DhveLrm9.js";import"./ZIndexLayer-D6jxT2Od.js";import"./types-yycQMcyL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-C3bYGGHM.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CWAerfFe.js";import"./ChartSizeDimensions-BlHKMCB6.js";import"./OffsetShower-C9-yzuEJ.js";import"./PlotAreaShower-5DxwHxbi.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
