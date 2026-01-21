import{e}from"./iframe-B3JCtExw.js";import{R as n}from"./arrayEqualityCheck-BI5ikbve.js";import{C as p}from"./ComposedChart-BpG742gi.js";import{C as s}from"./CartesianGrid-BeqWnVU4.js";import{X as c}from"./XAxis-D8u9sAce.js";import{Y as f}from"./YAxis-jqSdFVky.js";import{L as l}from"./Line-D3Zmpmyn.js";import{R as d}from"./ReferenceLine-gZDjVEbV.js";import{R as h}from"./RechartsHookInspector-B6PrNXux.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-HcHTA_b-.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-D9I6VAiu.js";import"./hooks-Cf16Eb3m.js";import"./axisSelectors-Bj5LT4A-.js";import"./zIndexSlice-CzadPF-N.js";import"./CartesianChart-DfwgXX5-.js";import"./chartDataContext-B7pD_95p.js";import"./CategoricalChart-HwleueHs.js";import"./CartesianAxis-D0PW3MM-.js";import"./Layer-m9bU_GMN.js";import"./Text-DN2HTHOh.js";import"./DOMUtils-k31lOHZq.js";import"./Label-DjeP5w8o.js";import"./ZIndexLayer-BuYvVcNP.js";import"./types-CzJtAzjL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-YAdCW6ic.js";import"./ActivePoints-Cr18JU0C.js";import"./Dot-BO3IuXC8.js";import"./RegisterGraphicalItemId-DL15PSpi.js";import"./ErrorBarContext-Bf3IY7YL.js";import"./GraphicalItemClipPath-DJH2B78L.js";import"./SetGraphicalItem-CgnveGex.js";import"./useAnimationId-YJOXYlAT.js";import"./getRadiusAndStrokeWidthFromDot-CZJ1soND.js";import"./ActiveShapeUtils-B5WBZ39Q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D23yRLTV.js";import"./Trapezoid-54tzhOdh.js";import"./Sector-zNAlF0WR.js";import"./Symbols-CjdLCsX8.js";import"./Curve-CrR1QL9p.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DqnQGlGG.js";import"./ChartSizeDimensions-CMi2DnfJ.js";import"./OffsetShower-DLnhG5IQ.js";import"./PlotAreaShower-CnaAKLan.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
