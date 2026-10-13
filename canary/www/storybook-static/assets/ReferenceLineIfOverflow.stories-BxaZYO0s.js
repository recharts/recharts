import{R as e}from"./iframe-BpQ7m7wo.js";import{R as a}from"./zIndexSlice-MwSCz61s.js";import{C as p}from"./ComposedChart-C-yEvf4A.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cf6bVJ7p.js";import{X as f}from"./XAxis-DE6o4Zll.js";import{Y as l}from"./YAxis-DRCAJ4BY.js";import{L as d}from"./Line-D_WboHkY.js";import{R as h}from"./ReferenceLine-C1mAjK1i.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-dkzrvgSW.js";import"./index-DAB_MUnB.js";import"./index-CD4MTvij.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-33rcogn6.js";import"./isWellBehavedNumber-BVcmp2ni.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BVbz7wfB.js";import"./axisSelectors-BYDkrwMW.js";import"./d3-scale-Byhs4CrR.js";import"./index-CXa8VbQ8.js";import"./index-BbHMTUSJ.js";import"./renderedTicksSlice-82sk-Quf.js";import"./index-ByFVwCBJ.js";import"./CartesianChart-DMhVIjmV.js";import"./chartDataContext-84s_zl93.js";import"./CategoricalChart-CxhuSAqC.js";import"./CartesianAxis-1RRtp3t2.js";import"./Layer-DlRoNKW0.js";import"./Text-QB9mhIk2.js";import"./pageBackground-jCojFoRf.js";import"./useId-Ba0OHruW.js";import"./useBackwardsCompatibleTheme-BV9LHmnt.js";import"./Label-BBIpfhf_.js";import"./ZIndexLayer-BrTVgKud.js";import"./types-XUWAitbU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-B_xnDCFo.js";import"./step-aBp-EU0i.js";import"./path-DyVhHtw_.js";import"./activeStyles-C2IhZeJz.js";import"./useAnimationId-D3uGeL-A.js";import"./dataEntryStyles-CFn7kNor.js";import"./ActivePoints-B2GxPwP4.js";import"./Dot-BNcOOzPX.js";import"./ErrorBarContext-DyJjK28E.js";import"./GraphicalItemClipPath-CDr7mMLr.js";import"./SetGraphicalItem-FOIPn71v.js";import"./getRadiusAndStrokeWidthFromDot-_Kbwexmc.js";import"./ActiveShapeUtils-DiATo6ey.js";import"./useEffectiveDataKey-yqjBtOm2.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
