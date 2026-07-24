import{R as t}from"./iframe-Bfq89VA1.js";import{u as a}from"./CategoricalChart-C2BN44hW.js";import{R as p}from"./zIndexSlice-CIiurCy7.js";import{C as s}from"./ComposedChart-DVfhgAYP.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BUzvUqJl.js";import{X as l}from"./XAxis-XWWA5Vcg.js";import{Y as h}from"./YAxis-BKOVychP.js";import{L as c}from"./Legend-BUmlfFwj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Clucjzln.js";import"./index-CJwKc2JD.js";import"./index-C5yh5hWX.js";import"./index-CYj6WtTt.js";import"./index-BrZplGoV.js";import"./throttle-D9Dxi9p7.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Bq1WS_1z.js";import"./axisSelectors-DeSjN-yN.js";import"./resolveDefaultProps-sI76rt8e.js";import"./isWellBehavedNumber-Cjy03S2S.js";import"./d3-scale-DNdF6BGI.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BR20NBVb.js";import"./chartDataContext-CtFpG3fr.js";import"./Layer-Ddny-Z-5.js";import"./Curve-DuW3zwTN.js";import"./types-BzfB60xK.js";import"./step-De5xdkMr.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-u8tbY5MQ.js";import"./Label-TzQ05lix.js";import"./Text-hgAABJUd.js";import"./DOMUtils-D5O5VN8V.js";import"./ZIndexLayer-BNbeMphj.js";import"./useAnimationId-nFx4hlTa.js";import"./ActivePoints-BuFY0qPt.js";import"./Dot-CdihK_4o.js";import"./RegisterGraphicalItemId-Cqi3B4nU.js";import"./ErrorBarContext-C94DxYOd.js";import"./GraphicalItemClipPath-BPnHFI7W.js";import"./SetGraphicalItem-COSatqks.js";import"./getRadiusAndStrokeWidthFromDot-SR9W1edy.js";import"./ActiveShapeUtils-DWYip-It.js";import"./CartesianAxis-BwpzYsrw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-sZizIm6P.js";import"./symbol-mIOUQ11t.js";import"./useElementOffset-JKh4KBSu.js";import"./uniqBy-Bd3SP3U8.js";import"./iteratee-C88R0o-M.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
