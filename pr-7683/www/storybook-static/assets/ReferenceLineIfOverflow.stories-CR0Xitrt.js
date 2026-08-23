import{R as e}from"./iframe-1kyud43n.js";import{R as n}from"./zIndexSlice-Cz5lyADs.js";import{C as p}from"./ComposedChart-DbMpgtlU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BGxA39av.js";import{X as f}from"./XAxis-hMDf8ppU.js";import{Y as l}from"./YAxis-CNW7YlNA.js";import{L as d}from"./Line-B3NZzZlI.js";import{R as h}from"./ReferenceLine-CZbzZ59d.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Hu0TR0tN.js";import"./index-DSXagRxi.js";import"./index-_AXMDP6s.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BuZ_Ktq7.js";import"./isWellBehavedNumber-CN4_9Vj1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6lw4dqn.js";import"./index-C2be1uTX.js";import"./index-XjPcI5ms.js";import"./axisSelectors-l88JnyTW.js";import"./d3-scale-CyS0eQ4Y.js";import"./renderedTicksSlice-DyP9_snd.js";import"./CartesianChart-DvAV2_6S.js";import"./chartDataContext-CIvFsnLa.js";import"./CategoricalChart-BmX_T4yF.js";import"./CartesianAxis-ClVpcem5.js";import"./Layer-BIHn5b7O.js";import"./Text-DH0wfypU.js";import"./DOMUtils-PMyjxqYh.js";import"./useId-9eWNRi00.js";import"./useBackwardsCompatibleTheme-CSH7ZS6o.js";import"./Label-C1lR5ca8.js";import"./ZIndexLayer-JkDBeXjs.js";import"./types-CTti3ygY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DxkIWAgM.js";import"./step-CTArbJyP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DeTQYvPq.js";import"./useAnimationId-RVCSWKWu.js";import"./ActivePoints-Bncm4L2S.js";import"./Dot-DagwZWJ3.js";import"./RegisterGraphicalItemId-BzVYbG1B.js";import"./ErrorBarContext-k5tsvNfO.js";import"./GraphicalItemClipPath-CPrhIVsz.js";import"./SetGraphicalItem-ydaT6l1I.js";import"./getRadiusAndStrokeWidthFromDot-Cv0Blg-c.js";import"./ActiveShapeUtils-rwurj85y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
