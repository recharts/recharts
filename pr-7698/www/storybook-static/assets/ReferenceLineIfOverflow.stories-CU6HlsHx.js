import{R as e}from"./iframe-zaa1iZav.js";import{R as n}from"./zIndexSlice-BWWEcbGp.js";import{C as p}from"./ComposedChart-SWtXcCgK.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CNCUB2Ph.js";import{X as f}from"./XAxis-BVnwJxOu.js";import{Y as l}from"./YAxis-DJCm-s1B.js";import{L as d}from"./Line-Dy42oF7S.js";import{R as h}from"./ReferenceLine-BYm3K0qE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CPqxLIQd.js";import"./index-BrIYS7Za.js";import"./index-B2mdcnwD.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CJqzH_DM.js";import"./isWellBehavedNumber-DAhZ9La7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bf_8sWMW.js";import"./index-BZPWANmU.js";import"./index-CM-qLXxp.js";import"./axisSelectors-ucT8kUEv.js";import"./d3-scale-DKZbRsMk.js";import"./renderedTicksSlice-jJ4uAB34.js";import"./CartesianChart-BUEIFsCx.js";import"./chartDataContext-CPRHK_4k.js";import"./CategoricalChart-DzU0tABe.js";import"./CartesianAxis-BEMiFdQK.js";import"./Layer-Diqr5-jO.js";import"./Text-CNT20nWc.js";import"./DOMUtils-CDT7WRtk.js";import"./useId-B4zmx8V0.js";import"./useBackwardsCompatibleTheme-XO0ISL55.js";import"./Label-dEEe5X5F.js";import"./ZIndexLayer-Dn1PwF1U.js";import"./types-DFArERnY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-PUx2QnOd.js";import"./step-Bfrhe9AG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-O1YgZXLs.js";import"./useAnimationId-B8kms9uE.js";import"./ActivePoints-DVBi-AIt.js";import"./Dot-oGoSOzAY.js";import"./RegisterGraphicalItemId-dsCSOxKS.js";import"./ErrorBarContext-ZTRuZpEO.js";import"./GraphicalItemClipPath-Dhs9LVS9.js";import"./SetGraphicalItem-Dk_WNLiG.js";import"./getRadiusAndStrokeWidthFromDot-DJ1u3-OH.js";import"./ActiveShapeUtils-lGuUrwlM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ve=["IfOverflow"];export{t as IfOverflow,ve as __namedExportsOrder,we as default};
