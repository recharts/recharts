import{R as e}from"./iframe-d_I8TNCn.js";import{R as a}from"./zIndexSlice-C86-Fd8c.js";import{C as p}from"./ComposedChart-DeQBgJOI.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cpl905iN.js";import{X as f}from"./XAxis-CPk4rkW4.js";import{Y as l}from"./YAxis-ST75xEtc.js";import{L as d}from"./Line-DdMP5ELM.js";import{R as h}from"./ReferenceLine-DL-E9Gyz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dub4vgX-.js";import"./index-Basp38ZP.js";import"./index-KJ9I69Vp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DvL_oRGd.js";import"./isWellBehavedNumber-BiGXAn6V.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BhDfTeaQ.js";import"./axisSelectors-DS1SwPss.js";import"./d3-scale-BHQnpvaw.js";import"./index-Bk90M1L4.js";import"./index-IVp7d0na.js";import"./renderedTicksSlice-D-j8NF5Q.js";import"./index-BDSLAMRI.js";import"./CartesianChart-BkYu52zN.js";import"./chartDataContext-C_MhBuQy.js";import"./CategoricalChart-BaXgxPjJ.js";import"./CartesianAxis-C7wfh-vo.js";import"./Layer-yfSSiW9J.js";import"./Text--rvXV2DW.js";import"./DOMUtils-CklqBmUp.js";import"./useId-CcoqHBc4.js";import"./useBackwardsCompatibleTheme-0Rfjr95D.js";import"./Label-C6LY1R7r.js";import"./ZIndexLayer-CUsrGrDa.js";import"./types-Dqfpifaw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-7i5iRSvm.js";import"./step-Zcc4_rmH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-b-EDeVK-.js";import"./useAnimationId-BWx9Rtft.js";import"./ActivePoints-B3dHfjWU.js";import"./Dot-BDaArr9M.js";import"./RegisterGraphicalItemId-dmq8PwmH.js";import"./ErrorBarContext-D8HRGdCI.js";import"./GraphicalItemClipPath-BVkKFKzE.js";import"./SetGraphicalItem-q_w6KGtf.js";import"./getRadiusAndStrokeWidthFromDot-C7z_bU2f.js";import"./ActiveShapeUtils-ByVz5Hkp.js";import"./useGraphicalItemIdentity-BG-BVB46.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
