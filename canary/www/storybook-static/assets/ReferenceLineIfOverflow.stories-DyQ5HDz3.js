import{R as e}from"./iframe-CLtR9-MI.js";import{R as a}from"./zIndexSlice-DAD-nkNa.js";import{C as p}from"./ComposedChart-B1Fivz02.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-NAjdvN10.js";import{X as f}from"./XAxis-6BQkQ0ss.js";import{Y as l}from"./YAxis-D2WqE3kW.js";import{L as d}from"./Line-oRa3yORT.js";import{R as h}from"./ReferenceLine-BtzpkKjO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DKa3BIxu.js";import"./index-u5MFF0A2.js";import"./index-5pSzTMen.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D6TYxzEx.js";import"./isWellBehavedNumber-B9qntTjY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BboqGkG2.js";import"./axisSelectors-B01i0yXb.js";import"./d3-scale-B1XD5c5K.js";import"./index-BaHi7qAw.js";import"./index-CZdIlyb1.js";import"./renderedTicksSlice-BY7YJYCI.js";import"./index-CjAhAOwM.js";import"./CartesianChart-BnmKHbJT.js";import"./chartDataContext-Dhs0xlHM.js";import"./CategoricalChart-DJouQuZu.js";import"./CartesianAxis-BeUj4LrW.js";import"./Layer-DSwUEhDY.js";import"./Text-CwyJl8Qf.js";import"./DOMUtils-B1EmNrIU.js";import"./useId-BN1Du40N.js";import"./useBackwardsCompatibleTheme-BJ7QBrpH.js";import"./Label-BpbNna-S.js";import"./ZIndexLayer-D5Qq2-j2.js";import"./types-_UL_m5mX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-B_ohmPvH.js";import"./step-BArTcWqE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-NFxue0WW.js";import"./useAnimationId-CKjPSYvA.js";import"./ActivePoints-LWQ74ttv.js";import"./Dot-Cg_oxTyJ.js";import"./RegisterGraphicalItemId-fH2hJ8mR.js";import"./ErrorBarContext-DJq7p9Zk.js";import"./GraphicalItemClipPath-1HJc_HKi.js";import"./SetGraphicalItem-Ty2V-l5e.js";import"./getRadiusAndStrokeWidthFromDot-DNgkSIfr.js";import"./ActiveShapeUtils-CKYNeMt6.js";import"./useGraphicalItemIdentity-CogcmOBq.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
