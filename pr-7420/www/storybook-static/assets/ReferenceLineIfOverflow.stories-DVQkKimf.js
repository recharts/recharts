import{R as e}from"./iframe-ebWVliJd.js";import{R as n}from"./zIndexSlice-BrrGtknp.js";import{C as p}from"./ComposedChart-BOJ1HV40.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BSR6Azjm.js";import{X as f}from"./XAxis-BweeNrXM.js";import{Y as l}from"./YAxis-CXtDAlyU.js";import{L as d}from"./Line-BIWAc-1H.js";import{R as h}from"./ReferenceLine-C1-Qq6qG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-u2yF5cyx.js";import"./index-CMkBnQa6.js";import"./index-Ca07HsLe.js";import"./get-D4k_mNx-.js";import"./resolveDefaultProps-B5O-6-WI.js";import"./isWellBehavedNumber-DRTDdH6f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DUxjIduK.js";import"./index-DF02JQD9.js";import"./index-r7VIACUV.js";import"./renderedTicksSlice-Ba1ooYto.js";import"./axisSelectors-BiXUDLnL.js";import"./d3-scale-BkusLtz6.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BJML043z.js";import"./chartDataContext-DV3K9IA2.js";import"./CategoricalChart-DdVMa29B.js";import"./CartesianAxis-R8Sp45dD.js";import"./Layer-CrSVK8w0.js";import"./Text-C6J-h8kC.js";import"./DOMUtils-D1VV_WMD.js";import"./Label-CEbu9yOv.js";import"./ZIndexLayer-DymXXG8t.js";import"./types-DIjbaJzk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Cnpigwxh.js";import"./step-CrKVzxVu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-VPYkwJ4F.js";import"./index-BPJnJB5S.js";import"./useAnimationId-n62HywHx.js";import"./ActivePoints-B8szihic.js";import"./Dot-DBDb90gK.js";import"./RegisterGraphicalItemId-YmUQslDz.js";import"./ErrorBarContext-4bUYjOjX.js";import"./GraphicalItemClipPath-CLalv2k5.js";import"./SetGraphicalItem-DrFDycKg.js";import"./getRadiusAndStrokeWidthFromDot-viuhEb9q.js";import"./ActiveShapeUtils-WXdDf590.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
