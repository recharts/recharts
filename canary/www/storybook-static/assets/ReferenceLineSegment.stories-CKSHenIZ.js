import{R as e}from"./iframe-C-Iuj2CY.js";import{R as i}from"./zIndexSlice-C4JSr5KN.js";import{C as n}from"./ComposedChart-nt2Gmc-a.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Bmqlh-9x.js";import{X as s}from"./XAxis-d6u4l33E.js";import{Y as c}from"./YAxis-CH97-ORP.js";import{L as d}from"./Line-Dew_1rVx.js";import{R as g}from"./ReferenceLine-Dq4ajmSf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bp4liTDw.js";import"./index-BYGjDTj5.js";import"./index-CKdK4Tlm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DL7WVnFH.js";import"./isWellBehavedNumber-Ku-m6vnz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-7_EuFQF-.js";import"./axisSelectors-BMEelndQ.js";import"./d3-scale-C4GnCzHc.js";import"./index-C4z0ADpB.js";import"./index-8RkzDuen.js";import"./renderedTicksSlice-Cor1xeVL.js";import"./index-DFGRvPnn.js";import"./CartesianChart-BAWmemtm.js";import"./chartDataContext-oGc_LYLd.js";import"./CategoricalChart-CSHLIlSH.js";import"./CartesianAxis-kD5DlR3-.js";import"./Layer-CTC_B_AO.js";import"./Text-CuFXobZ8.js";import"./DOMUtils-D1JEdLYA.js";import"./useId-DB-RDK5Y.js";import"./useBackwardsCompatibleTheme-CO0ZmmTO.js";import"./Label-BQbGJ4sW.js";import"./ZIndexLayer-ChUJUaqX.js";import"./types-DTCaWYmj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-A3JiVHPQ.js";import"./step-CDAaK65-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BJhHPNtS.js";import"./useAnimationId-Cs7J9c_D.js";import"./ActivePoints-D8XBSWMg.js";import"./Dot-BlUpubQM.js";import"./RegisterGraphicalItemId-C_gzfzaw.js";import"./ErrorBarContext-LN9zzfth.js";import"./GraphicalItemClipPath-D1JmIf9k.js";import"./SetGraphicalItem-CVWA9VpP.js";import"./getRadiusAndStrokeWidthFromDot-D9zL_eAZ.js";import"./ActiveShapeUtils-DE2-A3Sf.js";import"./useGraphicalItemIdentity-_eCurvUA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
