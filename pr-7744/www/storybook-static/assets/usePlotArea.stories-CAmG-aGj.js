import{R as t}from"./iframe-CnWp8UDJ.js";import{j as a}from"./RechartsWrapper-BLeW-6qK.js";import{R as p}from"./zIndexSlice-Bxeoa1fM.js";import{C as n}from"./ComposedChart-DhJ0H7PO.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B_yZhlkz.js";import{X as l}from"./XAxis-ChzUm0qK.js";import{Y as h}from"./YAxis-1jz_kHbZ.js";import{L as c}from"./Legend-D93VCnCX.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-omDmhEQP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-LX60wKXF.js";import"./throttle-aLzKR_Gj.js";import"./index-39D9i7_F.js";import"./index-Data0V-G.js";import"./isWellBehavedNumber-B6aemPPP.js";import"./d3-scale-C7Jq6zIj.js";import"./index-gtYqs59B.js";import"./index-Dehtp_44.js";import"./renderedTicksSlice-BKgb7qhp.js";import"./index-Doynhu3_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DsDmw2jX.js";import"./chartDataContext-CO0CX1GC.js";import"./CategoricalChart-CM4dP2j4.js";import"./Layer-C_mDLxAs.js";import"./Curve-BQDaiCsn.js";import"./types-BIFao3Et.js";import"./step-4VYt7eZC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dbq_Hz9T.js";import"./Label-WwV9YhCJ.js";import"./Text-B0OOyN3r.js";import"./DOMUtils-CiASkXFs.js";import"./useId-EGP6ZE8R.js";import"./useBackwardsCompatibleTheme-UXRLdwDp.js";import"./ZIndexLayer-BZ4idX5Z.js";import"./useAnimationId-Maj24DOj.js";import"./ActivePoints-C5ifQD97.js";import"./Dot-CVjhwEFH.js";import"./RegisterGraphicalItemId-F3i4J8HM.js";import"./ErrorBarContext-CnG1miAN.js";import"./GraphicalItemClipPath-BoXmuKsm.js";import"./SetGraphicalItem-BDu63G4F.js";import"./getRadiusAndStrokeWidthFromDot-DT21Og_Z.js";import"./ActiveShapeUtils-BhVsu49r.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CwBaIU9L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-COXuV_BO.js";import"./symbol-DgCR7R8V.js";import"./useElementOffset-DBfXPX7X.js";import"./uniqBy-1fP4lO5S.js";import"./iteratee-DiGtiHzb.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
