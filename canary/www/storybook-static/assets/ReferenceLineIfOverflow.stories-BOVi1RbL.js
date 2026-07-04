import{R as e}from"./iframe-DD3MNlJs.js";import{R as n}from"./zIndexSlice-DsPtdaG-.js";import{C as p}from"./ComposedChart-Ch5rhd-f.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C9oxbD3w.js";import{X as f}from"./XAxis-C5LFfJlv.js";import{Y as l}from"./YAxis-BU-eH5Uj.js";import{L as d}from"./Line-C4g4hOlz.js";import{R as h}from"./ReferenceLine-CtW82iCC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BsgVdVzc.js";import"./index-Bck27UYR.js";import"./index-a_wokTdP.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bl223uSE.js";import"./isWellBehavedNumber-CNMhuHyW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CCnqh_-x.js";import"./index-DseUKmqi.js";import"./index-D7phJECN.js";import"./renderedTicksSlice-BfcmamU7.js";import"./axisSelectors-BHK7QjqO.js";import"./d3-scale-yWlQ4_Nx.js";import"./CartesianChart-aRdig7-B.js";import"./chartDataContext-B7qXvLbV.js";import"./CategoricalChart-Cq7n2KtT.js";import"./CartesianAxis-BeN5FwRC.js";import"./Layer-BSwpDfMb.js";import"./Text-BWwrC4eC.js";import"./DOMUtils-CKULAiMw.js";import"./Label-CTgAmEuq.js";import"./ZIndexLayer-BIp4crEt.js";import"./types-3SXpu3DM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Bmu0g7Ld.js";import"./step-C2Nk1uI6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems--KiCkiyG.js";import"./useAnimationId-3wwsxOl9.js";import"./ActivePoints-DIeqY30s.js";import"./Dot-M9tiGPsp.js";import"./RegisterGraphicalItemId-UFa7fX9c.js";import"./ErrorBarContext-C82oMdbu.js";import"./GraphicalItemClipPath-NC5NbT5H.js";import"./SetGraphicalItem-BanwGypR.js";import"./getRadiusAndStrokeWidthFromDot-bkIsgxom.js";import"./ActiveShapeUtils-DNZIetEU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
