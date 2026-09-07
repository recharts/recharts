import{R as t}from"./iframe-DTRlEa3u.js";import{j as a}from"./RechartsWrapper-BBFKLgiK.js";import{R as p}from"./zIndexSlice-CDXLYYsJ.js";import{C as n}from"./ComposedChart-sAjY7YWJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CgbPcuvG.js";import{X as l}from"./XAxis-C0dwGi3V.js";import{Y as h}from"./YAxis-Ds-oNmVm.js";import{L as c}from"./Legend-CwwnoIaV.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BJzTCoJ3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DdPePiMV.js";import"./throttle-D6N_0nid.js";import"./index-CS48B7tj.js";import"./index-o_WhDpRH.js";import"./isWellBehavedNumber-BJiDbB8v.js";import"./d3-scale-5lZtxq-z.js";import"./index-CpmklETy.js";import"./index-Cvz-VVDw.js";import"./renderedTicksSlice-CMohq2ew.js";import"./index-BE7ByIQm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C0fRKmIL.js";import"./chartDataContext-0lwkG_AO.js";import"./CategoricalChart-Br64IOu-.js";import"./Layer-Cxb9aykb.js";import"./Curve-BqpssSWR.js";import"./types-BPUiziHz.js";import"./step-jNVSHd8N.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D3NTNo-L.js";import"./Label-CwRVD2C4.js";import"./Text-BwGttioZ.js";import"./DOMUtils-BlPhfohB.js";import"./useId-DA93zQ1i.js";import"./useBackwardsCompatibleTheme-Tyqh7EHZ.js";import"./ZIndexLayer-B42FtzLK.js";import"./useAnimationId-BQWcd1jo.js";import"./ActivePoints-DKYwbTj3.js";import"./Dot-Dein_ccS.js";import"./RegisterGraphicalItemId-NS8Y_EHr.js";import"./ErrorBarContext-B04e9oFc.js";import"./GraphicalItemClipPath-DCT6ZGzY.js";import"./SetGraphicalItem-D-a-mss5.js";import"./getRadiusAndStrokeWidthFromDot-scqYoR8I.js";import"./ActiveShapeUtils-0NSyvuwL.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CKsN-hMj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-COL8E8J0.js";import"./symbol-QVFjQA5Q.js";import"./useElementOffset-DrFdHzWk.js";import"./uniqBy-C9ZtxYQ4.js";import"./iteratee-BjsuC6vd.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
