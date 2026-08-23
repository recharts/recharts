import{R as t}from"./iframe-1kyud43n.js";import{u as a}from"./CategoricalChart-BmX_T4yF.js";import{R as p}from"./zIndexSlice-Cz5lyADs.js";import{C as s}from"./ComposedChart-DbMpgtlU.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B3NZzZlI.js";import{X as l}from"./XAxis-hMDf8ppU.js";import{Y as h}from"./YAxis-CNW7YlNA.js";import{L as c}from"./Legend-DjbGlKzg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C6lw4dqn.js";import"./index-C2be1uTX.js";import"./index-XjPcI5ms.js";import"./index-DSXagRxi.js";import"./index-_AXMDP6s.js";import"./throttle-Hu0TR0tN.js";import"./get-C2VjdU0L.js";import"./axisSelectors-l88JnyTW.js";import"./resolveDefaultProps-BuZ_Ktq7.js";import"./isWellBehavedNumber-CN4_9Vj1.js";import"./d3-scale-CyS0eQ4Y.js";import"./renderedTicksSlice-DyP9_snd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DvAV2_6S.js";import"./chartDataContext-CIvFsnLa.js";import"./Layer-BIHn5b7O.js";import"./Curve-DxkIWAgM.js";import"./types-CTti3ygY.js";import"./step-CTArbJyP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DeTQYvPq.js";import"./Label-C1lR5ca8.js";import"./Text-DH0wfypU.js";import"./DOMUtils-PMyjxqYh.js";import"./useId-9eWNRi00.js";import"./useBackwardsCompatibleTheme-CSH7ZS6o.js";import"./ZIndexLayer-JkDBeXjs.js";import"./useAnimationId-RVCSWKWu.js";import"./ActivePoints-Bncm4L2S.js";import"./Dot-DagwZWJ3.js";import"./RegisterGraphicalItemId-BzVYbG1B.js";import"./ErrorBarContext-k5tsvNfO.js";import"./GraphicalItemClipPath-CPrhIVsz.js";import"./SetGraphicalItem-ydaT6l1I.js";import"./getRadiusAndStrokeWidthFromDot-Cv0Blg-c.js";import"./ActiveShapeUtils-rwurj85y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-ClVpcem5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-f2mRqTBE.js";import"./symbol-DKOlcRcH.js";import"./useElementOffset-DQHbmpKz.js";import"./uniqBy-B-IGlKv3.js";import"./iteratee-DZnlicew.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
