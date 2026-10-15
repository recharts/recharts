import{R as e}from"./iframe-DpdlAHMd.js";import{R as a}from"./zIndexSlice-D40A4F5S.js";import{C as p}from"./ComposedChart-zgSZL8eg.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-_-u-nYWC.js";import{X as f}from"./XAxis-BEUW7cLW.js";import{Y as l}from"./YAxis-DLQpEtie.js";import{L as d}from"./Line-CdUHiaZ_.js";import{R as h}from"./ReferenceLine-ly0E7e-C.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bui1B-A-.js";import"./index-CKGLfYUI.js";import"./index-D9RL9gGT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DK3XJvDH.js";import"./isWellBehavedNumber-ccQ0ki_-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dd9femQq.js";import"./axisSelectors-DQOroxWm.js";import"./d3-scale-DPtZvEea.js";import"./index-Dgc5VXFD.js";import"./index-CPgT1QoG.js";import"./renderedTicksSlice-BduPU7I5.js";import"./index-938zI0LN.js";import"./CartesianChart-Dhk6ePqg.js";import"./chartDataContext-t_vCqpmk.js";import"./CategoricalChart-Bt7APlp3.js";import"./CartesianAxis-Di7rigDv.js";import"./Layer-B8bai4JO.js";import"./Text-CoXwYvwY.js";import"./pageBackground-D9ogOXyk.js";import"./useId-CnP1W382.js";import"./useBackwardsCompatibleTheme-CGJLu250.js";import"./Label-E3aXJx_S.js";import"./ZIndexLayer-lKfC9naY.js";import"./types-BGps8a2x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-jCmK9z3l.js";import"./step-D1wWY9HN.js";import"./path-DyVhHtw_.js";import"./activeStyles-D6HKGU7f.js";import"./useAnimationId-BE4SknEb.js";import"./dataEntryStyles-YsQ_uBBL.js";import"./ActivePoints-CLGOJg0k.js";import"./Dot-B-SHSrYh.js";import"./ErrorBarContext-CNLce-HY.js";import"./GraphicalItemClipPath-Cs7E0DKS.js";import"./SetGraphicalItem-KfOC3T9M.js";import"./getRadiusAndStrokeWidthFromDot-DY_fHX61.js";import"./ActiveShapeUtils-fnlRVR3C.js";import"./useEffectiveDataKey-jGEWZ8Yk.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
