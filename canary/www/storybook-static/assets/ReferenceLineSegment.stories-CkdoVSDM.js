import{R as e}from"./iframe-C-3ZsddJ.js";import{R as i}from"./zIndexSlice-CznyzfFG.js";import{C as n}from"./ComposedChart-CtuYyNef.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DaW9DFl3.js";import{X as s}from"./XAxis-ZaXNF9D9.js";import{Y as c}from"./YAxis-D4KLVqJs.js";import{L as d}from"./Line-eY7q5xtu.js";import{R as g}from"./ReferenceLine-Dw0mAC4z.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B2MnXNQi.js";import"./index-DEbaciLb.js";import"./index--fwLI_yC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-4qg6ukUo.js";import"./isWellBehavedNumber-CP7J40iL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-wMqgqvbl.js";import"./axisSelectors-BJ1i-OvH.js";import"./d3-scale-DV_TqrZd.js";import"./index-CcPqlA3d.js";import"./index-CyMO1IzJ.js";import"./renderedTicksSlice-ICI7wfEt.js";import"./index-ClJuK0WQ.js";import"./CartesianChart-COKBOn7U.js";import"./chartDataContext-BcbpFEXE.js";import"./CategoricalChart-sAB9uLf6.js";import"./CartesianAxis-BdVIPGTu.js";import"./Layer-Cx38LgLI.js";import"./Text-gCPwfBz1.js";import"./pageBackground-Bkm5uuC-.js";import"./useId-BDuxZkB8.js";import"./useBackwardsCompatibleTheme-X6WlIU0M.js";import"./Label-DKMse05f.js";import"./ZIndexLayer-G1m3PEiN.js";import"./dataEntryStyles-CEJLUdCX.js";import"./types-DCBC51xd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-W1QfAwKp.js";import"./step-DTUF9rZD.js";import"./path-DyVhHtw_.js";import"./activeStyles-L7DCCiqF.js";import"./useAnimationId-SiWxI2IO.js";import"./ActivePoints-BcMP_3VG.js";import"./Dot-BAgolGjt.js";import"./RegisterGraphicalItemId-CDIE6wwE.js";import"./ErrorBarContext-CDKXoSuu.js";import"./SetGraphicalItem-BIMysWhn.js";import"./getRadiusAndStrokeWidthFromDot-DU6SJcR2.js";import"./ActiveShapeUtils-DDCkf_lK.js";import"./useEffectiveDataKey-B7scz4IZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
