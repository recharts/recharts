import{R as e}from"./iframe-D48Nzg7a.js";import{R as n}from"./zIndexSlice-Nz3qbcrc.js";import{C as p}from"./ComposedChart-C0XJcgvF.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D5ahigNj.js";import{X as f}from"./XAxis-vF58_Zhz.js";import{Y as l}from"./YAxis-B8Cc3RzQ.js";import{L as d}from"./Line-wnmXZFNC.js";import{R as h}from"./ReferenceLine-BGXlvkhJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DSE-ZCYP.js";import"./index-1Ac2q3vk.js";import"./index-DZyliIRq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-X4i4u3XO.js";import"./isWellBehavedNumber-C7xfGJm3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-S_Xc00BH.js";import"./index-BpddMd5l.js";import"./index-Dqx9cZ4q.js";import"./axisSelectors-CnpCzdAy.js";import"./d3-scale-BmAkfb5N.js";import"./renderedTicksSlice-DkSC6crE.js";import"./CartesianChart-DqIlVucu.js";import"./chartDataContext-DiRp1I73.js";import"./CategoricalChart-DWr61JUe.js";import"./CartesianAxis-DNEYl1Os.js";import"./Layer-DQQ0bNB2.js";import"./Text-BmDi8oon.js";import"./DOMUtils-MwbqvkJM.js";import"./useBackwardsCompatibleTheme-D_bQGNKj.js";import"./Label-Dvc5-O45.js";import"./ZIndexLayer-C5gHLVh2.js";import"./types-DUxuHHgK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C6kUZVG1.js";import"./step-Dw08AzPN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CvUvPizu.js";import"./useAnimationId-C-dtJewN.js";import"./ActivePoints-4s2DAq8-.js";import"./Dot-CABes5hO.js";import"./RegisterGraphicalItemId-DFpeIKrt.js";import"./ErrorBarContext-D4VutYOM.js";import"./GraphicalItemClipPath-BHb4Wa01.js";import"./SetGraphicalItem-aeCrMt0o.js";import"./getRadiusAndStrokeWidthFromDot-DW3hhWH9.js";import"./ActiveShapeUtils-C9yMl5UT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};
