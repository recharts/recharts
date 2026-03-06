import{e}from"./iframe-B_nHVd2r.js";import{R as i}from"./arrayEqualityCheck-DY9D726-.js";import{C as p}from"./ComposedChart-D26vWmHk.js";import{C as a}from"./CartesianGrid-DxD1gzBq.js";import{X as n}from"./XAxis-CW60u556.js";import{Y as s}from"./YAxis-CHeSJRY3.js";import{L as c}from"./Line-DeMf4hlA.js";import{R as d}from"./ReferenceLine-QKFaipN7.js";import{R as g}from"./RechartsHookInspector-fNULTbt1.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-4kbUPRd1.js";import"./immer-BI8B3IAj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DzqzeMkT.js";import"./index-Ccd-ueyn.js";import"./hooks-J0Oqh1od.js";import"./axisSelectors-BMRY7YQG.js";import"./d3-scale-B9XrMCDb.js";import"./zIndexSlice-CcXit2BS.js";import"./renderedTicksSlice-BzSKsfOY.js";import"./CartesianChart-DEWcUEuJ.js";import"./chartDataContext-CnxSTV7I.js";import"./CategoricalChart-BQ2UlDix.js";import"./CartesianAxis-CcM516-L.js";import"./Layer-CuJ2fFlM.js";import"./Text-DiyzG_aV.js";import"./DOMUtils-DYxHXfua.js";import"./Label-Dso9Y4kd.js";import"./ZIndexLayer-BUYIYBsc.js";import"./types-BNmhs72m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DvQ3Bihg.js";import"./ActivePoints-kvA6RkM9.js";import"./Dot-Bdj5CCRw.js";import"./RegisterGraphicalItemId-DYT3txR2.js";import"./ErrorBarContext-D0DhrZWs.js";import"./GraphicalItemClipPath-rjxHDAAK.js";import"./SetGraphicalItem-BcnT6vB3.js";import"./useAnimationId-DeeI7Yuu.js";import"./getRadiusAndStrokeWidthFromDot-DJFnzptW.js";import"./ActiveShapeUtils-Bm79eQGO.js";import"./isPlainObject-Bku77CDs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsvkISRN.js";import"./Trapezoid-Bt86oLyu.js";import"./Sector-BoI-sHTN.js";import"./Symbols-DkF8brZX.js";import"./symbol-DVZ8Ov9_.js";import"./step-DYOoDPDf.js";import"./Curve-RQsVLKEt.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D4ywjx6k.js";import"./ChartSizeDimensions-CZvd_Zg7.js";import"./OffsetShower-8fEwfkJg.js";import"./PlotAreaShower-DdlKlbvs.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
