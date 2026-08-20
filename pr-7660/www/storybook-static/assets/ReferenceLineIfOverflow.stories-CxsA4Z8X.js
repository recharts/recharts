import{R as e}from"./iframe-zwg8Ck3J.js";import{R as n}from"./zIndexSlice-NosrfnoV.js";import{C as p}from"./ComposedChart-B4XJvNSo.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CrVK4PBC.js";import{X as f}from"./XAxis-DImn2N-Q.js";import{Y as l}from"./YAxis-DeKq7CDg.js";import{L as d}from"./Line-SbcmXKdw.js";import{R as h}from"./ReferenceLine-Cx54Ofo7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Ba88YkIO.js";import"./index-IvyDBjKP.js";import"./index-OSBoZXok.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DG88vi2D.js";import"./isWellBehavedNumber-CwtCjuBS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJ_EMk4a.js";import"./index-CbO-5G1T.js";import"./index-DgDwqqQh.js";import"./axisSelectors-B51wYZzi.js";import"./d3-scale-BoLYoZ-J.js";import"./renderedTicksSlice-Df0H0Vcu.js";import"./CartesianChart-DJ82atYN.js";import"./chartDataContext-BLU5FY0s.js";import"./CategoricalChart-COKLxFKu.js";import"./CartesianAxis-B8LFrX_I.js";import"./Layer-BMjk1XnO.js";import"./Text-B5wvjkWp.js";import"./DOMUtils-DeVFgjhY.js";import"./useId-BhnbWZv2.js";import"./useBackwardsCompatibleTheme-CUoFrMEf.js";import"./Label-Bd61VRBp.js";import"./ZIndexLayer-B0otcv7p.js";import"./types-Cw6qbFf6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DTQAtFrE.js";import"./step-CQ4et_T9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-m2rS7Ine.js";import"./useAnimationId-CNfugt_c.js";import"./ActivePoints-COOLxxHx.js";import"./Dot-Cd6zRWlN.js";import"./RegisterGraphicalItemId-BdhGFYIv.js";import"./ErrorBarContext-DQaSvvRh.js";import"./GraphicalItemClipPath-DzwEZpNn.js";import"./SetGraphicalItem-C-Nezax8.js";import"./getRadiusAndStrokeWidthFromDot-5Aw72VVf.js";import"./ActiveShapeUtils-CVVSTnC5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
