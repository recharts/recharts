import{R as e}from"./iframe-C749ZEo3.js";import{R as n}from"./zIndexSlice-DkHm22lp.js";import{C as p}from"./ComposedChart-BDBDopuV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Ckq7puT5.js";import{X as f}from"./XAxis-B1Zyj3MJ.js";import{Y as l}from"./YAxis-B2DRI57X.js";import{L as d}from"./Line-UPSPma38.js";import{R as h}from"./ReferenceLine-BV95YLUW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CELIeDih.js";import"./index-BvdVRi_-.js";import"./index-BBhpwV9s.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-6zK50N0i.js";import"./isWellBehavedNumber-tfpL7kaQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Mb5ys-Ox.js";import"./index-D27ZEbdc.js";import"./index-Cclh13Kt.js";import"./renderedTicksSlice-B967Fzve.js";import"./axisSelectors-DqDg1DKC.js";import"./d3-scale-DpaPidEg.js";import"./CartesianChart-B3fNYna3.js";import"./chartDataContext-D1rfIYla.js";import"./CategoricalChart-CQbOZOy_.js";import"./CartesianAxis-CwN7eQSV.js";import"./Layer-FHePmoXC.js";import"./Text-C7YPKDRG.js";import"./DOMUtils-D28hoCtk.js";import"./Label-SA_6xz2S.js";import"./ZIndexLayer-BPz0-wLY.js";import"./types-CCzU3Dbp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-D0zH9wUo.js";import"./step-BM8N9mx2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D44ZJFQN.js";import"./useAnimationId-BXnZ6W5r.js";import"./ActivePoints-Crx-wa0M.js";import"./Dot-CRKEafBC.js";import"./RegisterGraphicalItemId-HD16Gn5o.js";import"./ErrorBarContext-CXrvXgEG.js";import"./GraphicalItemClipPath-DnnLxorK.js";import"./SetGraphicalItem-JwiICpaG.js";import"./getRadiusAndStrokeWidthFromDot-YLlbYGyD.js";import"./ActiveShapeUtils-6Wqxn4P9.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
