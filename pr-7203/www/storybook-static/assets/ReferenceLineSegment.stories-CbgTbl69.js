import{e}from"./iframe-BVwI20TL.js";import{R as i}from"./arrayEqualityCheck-q35BrOAH.js";import{C as p}from"./ComposedChart-gqrKgpX-.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DjH5RQr0.js";import{X as s}from"./XAxis-Luh5ls2c.js";import{Y as c}from"./YAxis-CkI3VGvs.js";import{L as d}from"./Line-Cg3NfnSh.js";import{R as g}from"./ReferenceLine-Dq0kFhx4.js";import{R as f}from"./RechartsHookInspector-DZcmofN9.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-PLOIW3pB.js";import"./immer-CKYyw7I3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1ccuPti.js";import"./index-aBikmdLQ.js";import"./hooks-DZGA03xX.js";import"./axisSelectors-BSaMlK4p.js";import"./d3-scale-DIeSkgov.js";import"./zIndexSlice-CZKvoJNP.js";import"./renderedTicksSlice-B3vc9s72.js";import"./CartesianChart-B_CBLak0.js";import"./chartDataContext-yFkjRteM.js";import"./CategoricalChart-CfauKlBd.js";import"./CartesianAxis-lBH2hlA3.js";import"./Layer-BmJqKhGN.js";import"./Text-CcVVjC8p.js";import"./DOMUtils-aQVlIlVH.js";import"./Label-3Z8b_JxM.js";import"./ZIndexLayer-BZIg8_TU.js";import"./types-BIqLm2SJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-dYl2dBOE.js";import"./ActivePoints-B9lq65JZ.js";import"./Dot-DeCDV3Wq.js";import"./RegisterGraphicalItemId-8gcs_7Mt.js";import"./ErrorBarContext-B-N11lls.js";import"./GraphicalItemClipPath-D5L_NXCW.js";import"./SetGraphicalItem-dD-mjnVv.js";import"./useAnimationId-CflNsn_7.js";import"./getRadiusAndStrokeWidthFromDot-DxWoOp80.js";import"./ActiveShapeUtils-BmYZJk21.js";import"./isPlainObject-BNX6QwlN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_wHaT59.js";import"./Trapezoid-C9IYD2pk.js";import"./Sector-B_oSB9k0.js";import"./Symbols-DeCFkgF7.js";import"./symbol-D_Kx8u1W.js";import"./step-BWajvomR.js";import"./Curve-Bi3if4gv.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DF74iLY4.js";import"./ChartSizeDimensions-BbmTVycb.js";import"./OffsetShower-DUJyuqc9.js";import"./PlotAreaShower-Dc_-yokV.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
