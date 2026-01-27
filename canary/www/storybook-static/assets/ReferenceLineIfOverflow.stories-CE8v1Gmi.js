import{e}from"./iframe-D1Hwi0RI.js";import{R as n}from"./arrayEqualityCheck-DQEOD_zw.js";import{C as p}from"./ComposedChart-DgxcfSQu.js";import{C as s}from"./CartesianGrid-BxNgwSyo.js";import{X as c}from"./XAxis-BuTZpXCP.js";import{Y as f}from"./YAxis-Bdw8XaXe.js";import{L as l}from"./Line-DpHBAjCF.js";import{R as d}from"./ReferenceLine-Bit55V1A.js";import{R as h}from"./RechartsHookInspector-DsUGDtNJ.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bz6XhQRL.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CXtEZB_H.js";import"./hooks-CSIs-51X.js";import"./axisSelectors-GEJN5kco.js";import"./zIndexSlice-D8jnnygc.js";import"./CartesianChart-Dc2mELGa.js";import"./chartDataContext-GCfI3aAK.js";import"./CategoricalChart-DQ6b8iW8.js";import"./CartesianAxis-CyxUGwT-.js";import"./Layer-Di0VROrF.js";import"./Text-DLOnQ8zM.js";import"./DOMUtils-dbB3jEW_.js";import"./Label-Bb86ILB8.js";import"./ZIndexLayer-By5F7TF9.js";import"./types-C-uSS9Dl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-hNtx3_VI.js";import"./ActivePoints-DbTDI5Wq.js";import"./Dot-BxaODjLb.js";import"./RegisterGraphicalItemId-Pd4SqxWN.js";import"./ErrorBarContext-DWrqh2-_.js";import"./GraphicalItemClipPath-Ba1a27e_.js";import"./SetGraphicalItem-DLoBPGEI.js";import"./useAnimationId-CwGlJXjy.js";import"./getRadiusAndStrokeWidthFromDot-CJ731Roi.js";import"./ActiveShapeUtils-CoHlE8BH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-YjLZgqxG.js";import"./Trapezoid-CD3SuCZk.js";import"./Sector-Dr9-p71P.js";import"./Symbols-0go88kKd.js";import"./Curve-CF532csu.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BkDkQzlc.js";import"./ChartSizeDimensions-CUepdASc.js";import"./OffsetShower-7LYmniyx.js";import"./PlotAreaShower-BWomwUUC.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
