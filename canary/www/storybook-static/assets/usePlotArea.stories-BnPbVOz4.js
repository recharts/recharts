import{R as t}from"./iframe-D3DZ11bG.js";import{j as a}from"./RechartsWrapper-2mvRmank.js";import{R as p}from"./zIndexSlice-koFSVmIS.js";import{C as n}from"./ComposedChart-CV7c6-M5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DHnCGymS.js";import{X as l}from"./XAxis-BAFnXrYz.js";import{Y as h}from"./YAxis-BVoshuZP.js";import{L as c}from"./Legend-Ca-gTBq5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BrEHrPl8.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BkLxkidb.js";import"./throttle-DvSgxNGl.js";import"./index-DAXiWeRu.js";import"./index-DCVZlAXE.js";import"./isWellBehavedNumber-DgENaxxs.js";import"./d3-scale-7R73k4zX.js";import"./index-DunVsAad.js";import"./index-B2DufawG.js";import"./renderedTicksSlice-Z6YIazxJ.js";import"./index-DCmUTN9n.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cp3-TDst.js";import"./chartDataContext-D1-Rpxku.js";import"./CategoricalChart-I8UNjAYq.js";import"./Layer-CwzWBsuX.js";import"./Curve-CA5Po7Op.js";import"./types-D0iIZkpY.js";import"./step-rY0xOYgJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-pWsx1jF-.js";import"./Label-Bbim0zl5.js";import"./Text-C7ib1IN2.js";import"./DOMUtils-oxRtXime.js";import"./useId-CgLLCsym.js";import"./useBackwardsCompatibleTheme-s53ki85_.js";import"./ZIndexLayer-DQIxNGdf.js";import"./useAnimationId-CJPwsDgU.js";import"./ActivePoints-DfCGR7pV.js";import"./Dot-Cjsgvwdl.js";import"./RegisterGraphicalItemId-BuIVKkOb.js";import"./ErrorBarContext-DowgzNp1.js";import"./GraphicalItemClipPath-B4npPoNm.js";import"./SetGraphicalItem-DA1q5iTH.js";import"./getRadiusAndStrokeWidthFromDot-BebdBJmz.js";import"./ActiveShapeUtils-B-ZLq9Vo.js";import"./useGraphicalItemIdentity-B9okNIr3.js";import"./CartesianAxis-CFVJgng7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BmiRNSoU.js";import"./symbol-ewDroYQf.js";import"./useElementOffset-v6QQZTKl.js";import"./uniqBy-B2eJUSMl.js";import"./iteratee-Dd_Q50jQ.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
