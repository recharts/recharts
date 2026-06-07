import{R as e}from"./iframe-BB3m-jQ-.js";import{R as n}from"./zIndexSlice-FQKZcMr3.js";import{C as p}from"./ComposedChart-B0LqgEa_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D-mGIltq.js";import{X as f}from"./XAxis-pxNAoOYF.js";import{Y as l}from"./YAxis-DFvGwgRl.js";import{L as d}from"./Line-BbNuxZg2.js";import{R as h}from"./ReferenceLine-B8TBDvpB.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bb2hNnOx.js";import"./index-iRCZcjtj.js";import"./index-B5zT9Os4.js";import"./get-Bu83WliH.js";import"./resolveDefaultProps-D0AMNGzs.js";import"./isWellBehavedNumber-CFV6UIHi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BeVmqhAg.js";import"./index-AMNPHvWI.js";import"./index-CDnCFTh2.js";import"./renderedTicksSlice-eHBrq3FU.js";import"./axisSelectors-D1VEbPH5.js";import"./d3-scale-m2Sr9nLg.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CVsCYNZX.js";import"./chartDataContext-DDcaXf9b.js";import"./CategoricalChart-5b78-xMl.js";import"./CartesianAxis-DNzSt2Ud.js";import"./Layer-Bqk0isqQ.js";import"./Text-CQr6lPUD.js";import"./DOMUtils-v0Nl75wH.js";import"./Label-DntCvjB2.js";import"./ZIndexLayer-BGBP_zx3.js";import"./types-DSXkzfdz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DSs4mNcf.js";import"./step-BVafN2Sf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CAeOjIy6.js";import"./useAnimationId-D5BtmEUA.js";import"./ActivePoints-C8hQhNqS.js";import"./Dot-D2XHIErC.js";import"./RegisterGraphicalItemId-Co_tAnFn.js";import"./ErrorBarContext-BC4Vqnor.js";import"./GraphicalItemClipPath-Bd5aR1hb.js";import"./SetGraphicalItem-QprqGCl_.js";import"./getRadiusAndStrokeWidthFromDot-V3DuSoMt.js";import"./ActiveShapeUtils-DMvn0j27.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
