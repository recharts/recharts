import{R as t}from"./iframe-eHTE8XbR.js";import{j as a}from"./RechartsWrapper-DGSwepyW.js";import{R as p}from"./zIndexSlice-CwHm8jEL.js";import{C as n}from"./ComposedChart-BxOpXvKQ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DcoeyTM0.js";import{X as l}from"./XAxis-Cvnzf1dT.js";import{Y as h}from"./YAxis-BfTKYpb9.js";import{L as c}from"./Legend-QRCMyOs4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-l2cuQuhM.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CazxXIUK.js";import"./throttle-D7Re1Y2w.js";import"./index-Dxr-7wC-.js";import"./index-gcAHcJS-.js";import"./isWellBehavedNumber-BEewLsBb.js";import"./d3-scale-CyTtDi_G.js";import"./index-BaEdESzW.js";import"./index-sqcRhlaW.js";import"./renderedTicksSlice-GO_dvkn7.js";import"./index-1QxhuPS4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DWMHxp7T.js";import"./chartDataContext-B57YfjZ7.js";import"./CategoricalChart-NxXAGTpx.js";import"./Layer-Rvjy0lqp.js";import"./Curve-CpXkKn29.js";import"./types-BOeFjqIc.js";import"./step-B8Kmttuh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-iYX-QLNJ.js";import"./Label-BHKNCvXv.js";import"./Text-qSZv8Fj3.js";import"./DOMUtils-C0F5dZFI.js";import"./useId-6ohiSOpB.js";import"./useBackwardsCompatibleTheme-BGy_-u8K.js";import"./ZIndexLayer-DPdP9SWD.js";import"./useAnimationId-Dn1LCCOz.js";import"./ActivePoints-CD98k9Q1.js";import"./Dot-CrWlWXGl.js";import"./RegisterGraphicalItemId-Cmo8QrR_.js";import"./ErrorBarContext-B3ngcVu0.js";import"./GraphicalItemClipPath-Dm2FfYtP.js";import"./SetGraphicalItem-Byf3PY1O.js";import"./getRadiusAndStrokeWidthFromDot-D8K1Hpkd.js";import"./ActiveShapeUtils-DCxXoOp2.js";import"./useGraphicalItemIdentity-Bl8ISiJK.js";import"./CartesianAxis-Dyb6UtbO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DDfe-hwq.js";import"./symbol-D-YCUPvh.js";import"./useElementOffset-Bry01jEA.js";import"./uniqBy-BULF0lLX.js";import"./iteratee-rBBB7cDD.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
