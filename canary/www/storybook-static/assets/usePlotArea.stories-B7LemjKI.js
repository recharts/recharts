import{R as t}from"./iframe-TE0a3h8U.js";import{u as a}from"./CategoricalChart-D_woPTvb.js";import{R as p}from"./zIndexSlice-CuzvPj3e.js";import{C as s}from"./ComposedChart-CK1drtAL.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BxXqtFAj.js";import{X as l}from"./XAxis-DYSrX7Pe.js";import{Y as h}from"./YAxis-nM39HCeg.js";import{L as c}from"./Legend-_H4ztsp0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Zf4efnQ7.js";import"./index-CH7AYfaw.js";import"./index-mICHaOdM.js";import"./index-CbO58SlV.js";import"./index-Bes_wTqv.js";import"./throttle-B9xIgtOp.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D4Hdk4ax.js";import"./resolveDefaultProps-DxKF5pbQ.js";import"./isWellBehavedNumber-Cwb0Yuac.js";import"./d3-scale-ClwuSri4.js";import"./renderedTicksSlice-CV9ehOCs.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D6VrfDcf.js";import"./chartDataContext-CdtLleKV.js";import"./Layer-CEnr9JeS.js";import"./Curve-0Fl3QjsV.js";import"./types-8QdsKxPr.js";import"./step-DBFL-Bln.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CFCWs_6E.js";import"./Label-DW2voJ8G.js";import"./Text-DL22Whxw.js";import"./DOMUtils-CzEfLf16.js";import"./useId-CnhnPuIR.js";import"./useBackwardsCompatibleTheme-Kb0l05fi.js";import"./ZIndexLayer-DV8vU7iD.js";import"./useAnimationId-BD80cuEQ.js";import"./ActivePoints-Wah4GhQ3.js";import"./Dot-CvKEUnwP.js";import"./RegisterGraphicalItemId-BfW92mN9.js";import"./ErrorBarContext-C63SGP0L.js";import"./GraphicalItemClipPath-DIHeVoC3.js";import"./SetGraphicalItem-BZwhXqLy.js";import"./getRadiusAndStrokeWidthFromDot-o3R21rDY.js";import"./ActiveShapeUtils-DlXszYqE.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-zD9IwJ4x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-PfYJfFbB.js";import"./symbol-DF3HRbQ3.js";import"./useElementOffset-2eLJ_fKs.js";import"./uniqBy-DzAw4gbB.js";import"./iteratee-D3tN9cZP.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
