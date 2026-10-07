import{R as e}from"./iframe-CB0-Apig.js";import{R as a}from"./zIndexSlice-MYAc-BZR.js";import{C as p}from"./ComposedChart-Dg8T55Bz.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cm79Hmh_.js";import{X as f}from"./XAxis-BkLwCB-i.js";import{Y as l}from"./YAxis-CyKUvs_P.js";import{L as d}from"./Line-CAR7ukmz.js";import{R as h}from"./ReferenceLine-CFlvrir4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B_JaSpEU.js";import"./index-DsRbpnGV.js";import"./index-zuDkrAQT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-zQutOK7U.js";import"./isWellBehavedNumber-CTvZevfR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DVGUOxKt.js";import"./axisSelectors-CXDnm6lL.js";import"./d3-scale-D9ownlTm.js";import"./index-C1lwWxUG.js";import"./index-DTSkq74U.js";import"./renderedTicksSlice-CvPVjrK_.js";import"./index-DyoNT_fx.js";import"./CartesianChart-BJI6UZNQ.js";import"./chartDataContext-BshA8PFe.js";import"./CategoricalChart-DMYjcOfv.js";import"./CartesianAxis-DyZuqlDa.js";import"./Layer-Dp8UDcUQ.js";import"./Text-B6lqzzDo.js";import"./DOMUtils-B6gqp-ty.js";import"./useId-CWVN7Jyj.js";import"./useBackwardsCompatibleTheme-Db0J--Ta.js";import"./Label-EQpvr0td.js";import"./ZIndexLayer-elhV8gwp.js";import"./types-DBJDNIT-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BEFcYSF_.js";import"./step-CjRyMTXy.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DE_zCwRM.js";import"./useAnimationId-DZZDX8rQ.js";import"./ActivePoints-Du6zhbn2.js";import"./Dot-5_weME0s.js";import"./RegisterGraphicalItemId-DP4ziMhF.js";import"./ErrorBarContext-B7WUKUL2.js";import"./GraphicalItemClipPath-BfYW0QzE.js";import"./SetGraphicalItem-D-uUzHqS.js";import"./getRadiusAndStrokeWidthFromDot-DVD_PCP2.js";import"./ActiveShapeUtils-C6gEbnuv.js";import"./useGraphicalItemIdentity-CxywVdEz.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
