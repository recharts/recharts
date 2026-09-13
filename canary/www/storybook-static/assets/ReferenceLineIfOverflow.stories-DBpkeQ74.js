import{R as e}from"./iframe-D3DZ11bG.js";import{R as a}from"./zIndexSlice-koFSVmIS.js";import{C as p}from"./ComposedChart-CV7c6-M5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dbs6Ozeh.js";import{X as f}from"./XAxis-BAFnXrYz.js";import{Y as l}from"./YAxis-BVoshuZP.js";import{L as d}from"./Line-DHnCGymS.js";import{R as h}from"./ReferenceLine-B5nGVAU2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DvSgxNGl.js";import"./index-DAXiWeRu.js";import"./index-DCVZlAXE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BrEHrPl8.js";import"./isWellBehavedNumber-DgENaxxs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2mvRmank.js";import"./axisSelectors-BkLxkidb.js";import"./d3-scale-7R73k4zX.js";import"./index-DunVsAad.js";import"./index-B2DufawG.js";import"./renderedTicksSlice-Z6YIazxJ.js";import"./index-DCmUTN9n.js";import"./CartesianChart-Cp3-TDst.js";import"./chartDataContext-D1-Rpxku.js";import"./CategoricalChart-I8UNjAYq.js";import"./CartesianAxis-CFVJgng7.js";import"./Layer-CwzWBsuX.js";import"./Text-C7ib1IN2.js";import"./DOMUtils-oxRtXime.js";import"./useId-CgLLCsym.js";import"./useBackwardsCompatibleTheme-s53ki85_.js";import"./Label-Bbim0zl5.js";import"./ZIndexLayer-DQIxNGdf.js";import"./types-D0iIZkpY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CA5Po7Op.js";import"./step-rY0xOYgJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-pWsx1jF-.js";import"./useAnimationId-CJPwsDgU.js";import"./ActivePoints-DfCGR7pV.js";import"./Dot-Cjsgvwdl.js";import"./RegisterGraphicalItemId-BuIVKkOb.js";import"./ErrorBarContext-DowgzNp1.js";import"./GraphicalItemClipPath-B4npPoNm.js";import"./SetGraphicalItem-DA1q5iTH.js";import"./getRadiusAndStrokeWidthFromDot-BebdBJmz.js";import"./ActiveShapeUtils-B-ZLq9Vo.js";import"./useGraphicalItemIdentity-B9okNIr3.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
