import{R as e}from"./iframe-DM7I_Yyj.js";import{R as a}from"./zIndexSlice-fCEc0s5F.js";import{C as p}from"./ComposedChart-C0efLOGA.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DNt1tTHs.js";import{X as f}from"./XAxis-C9bS5ZnW.js";import{Y as l}from"./YAxis-Cygy87Ha.js";import{L as d}from"./Line-BuB5QTku.js";import{R as h}from"./ReferenceLine-BSdtHA27.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D9z--FMJ.js";import"./index-tOsCsIz0.js";import"./index-BSGAosA0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-juvHZLkB.js";import"./isWellBehavedNumber-CD6T6Jdg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8avap2Ow.js";import"./axisSelectors-C4a64MXg.js";import"./d3-scale-BeCTSUmZ.js";import"./index-BPHh1qic.js";import"./index-CtbzcRhJ.js";import"./renderedTicksSlice-D73l8EHs.js";import"./index-1HyAGRae.js";import"./CartesianChart-BtvlbeE8.js";import"./chartDataContext-Bv5z90Vo.js";import"./CategoricalChart-DChxHazb.js";import"./CartesianAxis-CnfqwB17.js";import"./Layer-BuDBFoKe.js";import"./Text-BHb-71ue.js";import"./DOMUtils-x3LNgLWi.js";import"./useId-Cqy_j9lJ.js";import"./useBackwardsCompatibleTheme-ZcFSMvkr.js";import"./Label-D7T4Ye9K.js";import"./ZIndexLayer-DKb6XHFw.js";import"./types-C2i2rvmz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DCsdrtWm.js";import"./step-BWu1v0QN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bps8ucZ8.js";import"./useAnimationId-ByMoBfgF.js";import"./ActivePoints-6ohdy_Z2.js";import"./Dot-C28FoeNl.js";import"./RegisterGraphicalItemId-CHv-hOW4.js";import"./ErrorBarContext-u65-Bu8d.js";import"./GraphicalItemClipPath-ByPtBGRG.js";import"./SetGraphicalItem-BuE0ytWh.js";import"./getRadiusAndStrokeWidthFromDot-Bx2TZeXM.js";import"./ActiveShapeUtils-C8wHq7T4.js";import"./useGraphicalItemIdentity-w6WnNdhF.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
