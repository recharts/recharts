import{R as e}from"./iframe-TE0a3h8U.js";import{R as i}from"./zIndexSlice-CuzvPj3e.js";import{C as a}from"./ComposedChart-CK1drtAL.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CkX0chSu.js";import{X as s}from"./XAxis-DYSrX7Pe.js";import{Y as c}from"./YAxis-nM39HCeg.js";import{L as d}from"./Line-BxXqtFAj.js";import{R as g}from"./ReferenceLine-DsLPeRSw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B9xIgtOp.js";import"./index-CbO58SlV.js";import"./index-Bes_wTqv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DxKF5pbQ.js";import"./isWellBehavedNumber-Cwb0Yuac.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Zf4efnQ7.js";import"./index-CH7AYfaw.js";import"./index-mICHaOdM.js";import"./axisSelectors-D4Hdk4ax.js";import"./d3-scale-ClwuSri4.js";import"./renderedTicksSlice-CV9ehOCs.js";import"./CartesianChart-D6VrfDcf.js";import"./chartDataContext-CdtLleKV.js";import"./CategoricalChart-D_woPTvb.js";import"./CartesianAxis-zD9IwJ4x.js";import"./Layer-CEnr9JeS.js";import"./Text-DL22Whxw.js";import"./DOMUtils-CzEfLf16.js";import"./useId-CnhnPuIR.js";import"./useBackwardsCompatibleTheme-Kb0l05fi.js";import"./Label-DW2voJ8G.js";import"./ZIndexLayer-DV8vU7iD.js";import"./types-8QdsKxPr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-0Fl3QjsV.js";import"./step-DBFL-Bln.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CFCWs_6E.js";import"./useAnimationId-BD80cuEQ.js";import"./ActivePoints-Wah4GhQ3.js";import"./Dot-CvKEUnwP.js";import"./RegisterGraphicalItemId-BfW92mN9.js";import"./ErrorBarContext-C63SGP0L.js";import"./GraphicalItemClipPath-DIHeVoC3.js";import"./SetGraphicalItem-BZwhXqLy.js";import"./getRadiusAndStrokeWidthFromDot-o3R21rDY.js";import"./ActiveShapeUtils-DlXszYqE.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
