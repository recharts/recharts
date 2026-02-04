import{e}from"./iframe-lWBX64pI.js";import{R as n}from"./arrayEqualityCheck-Bc4Ot0PW.js";import{C as p}from"./ComposedChart-C9sU2uaY.js";import{C as s}from"./CartesianGrid-Dbc3AG7y.js";import{X as c}from"./XAxis-TPgD44nE.js";import{Y as f}from"./YAxis-Bfy5qxVv.js";import{L as l}from"./Line-bzYOlBDc.js";import{R as d}from"./ReferenceLine-DhIX7xOq.js";import{R as h}from"./RechartsHookInspector-DQzLYc7l.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-F9aAykDU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Djqv5WdD.js";import"./hooks-DxrNJMr4.js";import"./axisSelectors-BWmy8ZsX.js";import"./zIndexSlice-DrTdUYuM.js";import"./CartesianChart-Dxi5Jpt2.js";import"./chartDataContext-BrNcW05w.js";import"./CategoricalChart-CNbBFS0r.js";import"./CartesianAxis-CCAPZiMN.js";import"./Layer-BUTtt9Bz.js";import"./Text-Cr9QQRZN.js";import"./DOMUtils-DKHDOrvS.js";import"./Label-BnM6Z2ZH.js";import"./ZIndexLayer-BWtmJpZw.js";import"./types-CeMusotU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Caa168vS.js";import"./ActivePoints-4ReyECY6.js";import"./Dot-CQ7tD8sg.js";import"./RegisterGraphicalItemId-nVIwNLcs.js";import"./ErrorBarContext-BmsITwJg.js";import"./GraphicalItemClipPath-B0xhchCc.js";import"./SetGraphicalItem-CksZixPS.js";import"./useAnimationId-Bj8WvXUY.js";import"./getRadiusAndStrokeWidthFromDot-C6m3BF6S.js";import"./ActiveShapeUtils-BBPTy8PE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2euSkY-d.js";import"./Trapezoid-C8NVxs2k.js";import"./Sector-EvQq1WWA.js";import"./Symbols-D38f067d.js";import"./Curve-BU8W3PHf.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-04LEDiAf.js";import"./ChartSizeDimensions-BCIgaepb.js";import"./OffsetShower-CEpgJiJ4.js";import"./PlotAreaShower-BJAGaSX0.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
