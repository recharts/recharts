import{R as t}from"./iframe-BBXYJHV9.js";import{j as a}from"./RechartsWrapper--QMYLh37.js";import{R as p}from"./zIndexSlice-DeV5nVkQ.js";import{C as n}from"./ComposedChart-CI6CKZVa.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BXAC9OJ9.js";import{X as l}from"./XAxis-OTNhB7fI.js";import{Y as h}from"./YAxis-BTJMRiMh.js";import{L as c}from"./Legend-B0OYWchs.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cuufas3t.js";import"./get-C2VjdU0L.js";import"./axisSelectors-ldrqaVXy.js";import"./throttle-D_5C5TP0.js";import"./index-CKKng9rb.js";import"./index-DD1sJSjK.js";import"./isWellBehavedNumber-Df9i-Xuh.js";import"./d3-scale-Cim9t_7k.js";import"./index-C1POlg4L.js";import"./index-DaLQCs1D.js";import"./renderedTicksSlice-D2BRqvUe.js";import"./index-CyGTPXip.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Sq09cuqY.js";import"./chartDataContext-CvGK2QEJ.js";import"./CategoricalChart-BQqZpjdB.js";import"./Layer-CLVZjsru.js";import"./Curve-D-Wgwm0-.js";import"./types-Bf4vH5cc.js";import"./step-CPCTXlnC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Szq-E2F-.js";import"./Label-lRXxfB4K.js";import"./Text-D82BKuR8.js";import"./DOMUtils-CzO3u12F.js";import"./useId-B4ofBqjM.js";import"./useBackwardsCompatibleTheme-DCcJalTw.js";import"./ZIndexLayer-DTr1Fcax.js";import"./useAnimationId-CBIZAPE4.js";import"./ActivePoints-ogH_t-gd.js";import"./Dot-CeQpq0Ml.js";import"./RegisterGraphicalItemId-B-07fAKx.js";import"./ErrorBarContext-CrrVco2B.js";import"./GraphicalItemClipPath-h1d35KAS.js";import"./SetGraphicalItem-Dp4v1WTr.js";import"./getRadiusAndStrokeWidthFromDot-BRVPa3kE.js";import"./ActiveShapeUtils-DcqMOZEc.js";import"./useGraphicalItemIdentity-DpGCweuE.js";import"./CartesianAxis-a8cTgv_e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BkHE8TEA.js";import"./symbol-CFAfa1rt.js";import"./useElementOffset-DEgSccfA.js";import"./uniqBy-CSB_7q17.js";import"./iteratee--uwqTho3.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
