import{R as e}from"./iframe-BRR_Yx3q.js";import{R as i}from"./zIndexSlice-2cKWUmx1.js";import{C as a}from"./ComposedChart-BrQA-1mf.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-D-wiV_bL.js";import{X as s}from"./XAxis-D2YOv_sk.js";import{Y as c}from"./YAxis-DT9J28i-.js";import{L as d}from"./Line-DrAvxDeD.js";import{R as g}from"./ReferenceLine-BWa1akhp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-9Cm-XaBZ.js";import"./index-C-RWhaz3.js";import"./index-dwufCIeA.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BuYHfJJu.js";import"./isWellBehavedNumber-BoZxamXc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dreti13-.js";import"./index-C7O-rWXn.js";import"./index-CJWeDOqD.js";import"./renderedTicksSlice-DsmsDUZ3.js";import"./axisSelectors-BvSj2dv3.js";import"./d3-scale-DiG9HsKp.js";import"./CartesianChart-D7iKBlwo.js";import"./chartDataContext-7uLTjT1t.js";import"./CategoricalChart-Bo9h-nM1.js";import"./CartesianAxis-CtRqWNRX.js";import"./Layer-DEnO1k0R.js";import"./Text-CNcfggmg.js";import"./DOMUtils-DaLtqU51.js";import"./Label-BFmCxOLP.js";import"./ZIndexLayer-B_gUHSFj.js";import"./types-DUTL6gmw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CgfofNr-.js";import"./step-DD-M69WZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BTME76kn.js";import"./useAnimationId-C1SKzxsx.js";import"./ActivePoints-Du_pXw62.js";import"./Dot-RhTFr113.js";import"./RegisterGraphicalItemId-vR20SUSb.js";import"./ErrorBarContext-DKxut-kF.js";import"./GraphicalItemClipPath-DlaiPyn0.js";import"./SetGraphicalItem-BE7YCbvJ.js";import"./getRadiusAndStrokeWidthFromDot-CtiaEZzs.js";import"./ActiveShapeUtils-BvVAnTtS.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
