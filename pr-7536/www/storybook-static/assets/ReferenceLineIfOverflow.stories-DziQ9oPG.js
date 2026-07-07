import{R as e}from"./iframe-blo479ea.js";import{R as n}from"./zIndexSlice-B-NboAfn.js";import{C as p}from"./ComposedChart-CVG--YjL.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D3R3TJGT.js";import{X as f}from"./XAxis-D2AMCCh6.js";import{Y as l}from"./YAxis-CbVMh33A.js";import{L as d}from"./Line-BBbdtddm.js";import{R as h}from"./ReferenceLine-C8Pb_Idz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CAybpjPd.js";import"./index-5Xauv1a1.js";import"./index-DwOveEH0.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-d-c_EfmU.js";import"./isWellBehavedNumber-vMDquOd-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZW1xtMc.js";import"./index-Bk8DAVsF.js";import"./index-D98VNpy1.js";import"./renderedTicksSlice-DSEoRhRT.js";import"./axisSelectors-BsWadBKB.js";import"./d3-scale-D5iAOdDh.js";import"./CartesianChart-QYdWDySw.js";import"./chartDataContext-Dkqb0EXV.js";import"./CategoricalChart-B3UrSPAC.js";import"./CartesianAxis-Cbfv_t23.js";import"./Layer-C26T8E2g.js";import"./Text-CjpmWysE.js";import"./DOMUtils-Tw2iKYp4.js";import"./Label-CXH82xbV.js";import"./ZIndexLayer-2I4OO_bH.js";import"./types-CAFMP27K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-2n5H6-9L.js";import"./step-D2-UZcK5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bj_FYwBV.js";import"./useAnimationId-NeumBkdx.js";import"./ActivePoints-y80Iu2pf.js";import"./Dot-BqQZbjFP.js";import"./RegisterGraphicalItemId-D8SJKJaD.js";import"./ErrorBarContext-C5s-a9Tb.js";import"./GraphicalItemClipPath-BMIU9EC2.js";import"./SetGraphicalItem-DxPgsw5M.js";import"./getRadiusAndStrokeWidthFromDot-Bz6_dvfT.js";import"./ActiveShapeUtils-DIyj0lNk.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
