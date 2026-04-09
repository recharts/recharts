import{e}from"./iframe-ClXyKNgm.js";import{R as n}from"./arrayEqualityCheck-CyG4bWUs.js";import{C as p}from"./ComposedChart-GRruxady.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DhWCZGnV.js";import{X as f}from"./XAxis-BLwhd0IJ.js";import{Y as l}from"./YAxis-CJcxVAZe.js";import{L as d}from"./Line-DczUaO1B.js";import{R as h}from"./ReferenceLine-TNyqQRVE.js";import{R as w}from"./RechartsHookInspector-CDiaVfBA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B-5xg8HJ.js";import"./immer-CtYLZrTd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-UQqzQ8rP.js";import"./index-CwEdYiZd.js";import"./hooks-BkOTtN17.js";import"./axisSelectors-DQofLmtB.js";import"./d3-scale-PvLZ5v4V.js";import"./zIndexSlice-Dm0UpM_Z.js";import"./renderedTicksSlice-BNvm7omS.js";import"./CartesianChart-DPC4KDkL.js";import"./chartDataContext-Bjc2K54y.js";import"./CategoricalChart-BKNmBDhd.js";import"./CartesianAxis-XpuqdPkr.js";import"./Layer-BeDFs85c.js";import"./Text-o1n-qtV3.js";import"./DOMUtils-CHkqX7Ip.js";import"./Label-YkL7q8Nt.js";import"./ZIndexLayer-cavkLRXR.js";import"./types-C9EK63kj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dlva77EJ.js";import"./ActivePoints-BtoLWo_Y.js";import"./Dot-CTW0FmYa.js";import"./RegisterGraphicalItemId-BL_NupUm.js";import"./ErrorBarContext-PkrPZ9Kd.js";import"./GraphicalItemClipPath-DtnEohhM.js";import"./SetGraphicalItem-taT8ii8S.js";import"./useAnimationId-C8K-aL18.js";import"./getRadiusAndStrokeWidthFromDot-DuLFzzBx.js";import"./ActiveShapeUtils-BifvGgSB.js";import"./isPlainObject-B5RD0MRm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BAftZiAJ.js";import"./Trapezoid-BOXkO72-.js";import"./Sector-BWSYDmpz.js";import"./Symbols-BGqZ-C7G.js";import"./symbol-DPWTbt42.js";import"./step-hxAHDxbx.js";import"./Curve-gxNk9RQQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CMB9sNFg.js";import"./ChartSizeDimensions-DpOcPLnw.js";import"./OffsetShower-C3ti5__k.js";import"./PlotAreaShower-Ji8AleEw.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
