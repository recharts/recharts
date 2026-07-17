import{R as e}from"./iframe-556vb-qw.js";import{R as n}from"./zIndexSlice-Dx_8tKSl.js";import{C as p}from"./ComposedChart-C3GwbD-o.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D7o76xak.js";import{X as f}from"./XAxis-C8oxlX6U.js";import{Y as l}from"./YAxis-CUYZIBQF.js";import{L as d}from"./Line-CNegRi9e.js";import{R as h}from"./ReferenceLine-BtJbl268.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bki2cXyV.js";import"./index-DiiXHLk0.js";import"./index-CiB0Io8X.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-FVjcPzTE.js";import"./isWellBehavedNumber-Dc37N4M2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-KC_7-tBU.js";import"./index-DQcKumtN.js";import"./index-BtPxInWz.js";import"./renderedTicksSlice-CfWaZqlF.js";import"./axisSelectors-BduM4NJa.js";import"./d3-scale-D2li86P1.js";import"./CartesianChart-D8G919J3.js";import"./chartDataContext-Bs-zR_b9.js";import"./CategoricalChart-CcDvDLSk.js";import"./CartesianAxis-C3UFcQ97.js";import"./Layer-BTltl-Cn.js";import"./Text-UXI8_ZCT.js";import"./DOMUtils-B14va7zq.js";import"./Label-BaM1U3dt.js";import"./ZIndexLayer-BOwqliX9.js";import"./types-CA3u3vRt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CQITscbT.js";import"./step-CFU3znK3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CxcoqNDa.js";import"./useAnimationId-ClUEd6We.js";import"./ActivePoints-CLr-JLZj.js";import"./Dot-J7G-brXT.js";import"./RegisterGraphicalItemId-n-hAz8yp.js";import"./ErrorBarContext-DZjyWL-W.js";import"./GraphicalItemClipPath-CuuadlYj.js";import"./SetGraphicalItem-DRzPdsV9.js";import"./getRadiusAndStrokeWidthFromDot-C_DGpSn1.js";import"./ActiveShapeUtils-BLdFLviC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
