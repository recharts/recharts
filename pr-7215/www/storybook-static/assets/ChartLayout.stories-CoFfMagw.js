import{e}from"./iframe-DDxjm-WU.js";import{f as m,h,b as d,A as u}from"./arrayEqualityCheck-BDTW-iCp.js";import{C as f}from"./ChartSizeDimensions-DNtnVTHS.js";import{C as p}from"./ComposedChart-CQsXSi4S.js";import{R as g}from"./RechartsHookInspector-Bsn_fuN0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C_ucOoTo.js";import"./immer-Dkl5Am7g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bpo229F5.js";import"./index-c9CLkn1R.js";import"./hooks-YOhxCck_.js";import"./axisSelectors-z--bPkJA.js";import"./d3-scale-5ginP8HL.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-CyBi_8s9.js";import"./renderedTicksSlice-Bbo75at4.js";import"./CartesianChart-ChctIvnC.js";import"./chartDataContext-kNPZezMX.js";import"./CategoricalChart-CBIMgpMR.js";import"./index-PKdkWvoA.js";import"./OffsetShower-kAoxPyWs.js";import"./PlotAreaShower-CCGJY3Cl.js";function x(){const r=m(),o=h(),c=d(u);return r==null||o==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:o*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const q={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(f,null),e.createElement(x,null),e.createElement(g,null))))),args:{width:500,height:500}};var s,i,a,n,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div style={{
      display: 'flex',
      height: '100vh'
    }}>
        <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }} className="spacer-top">
          <div style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: '100px'
        }} className="spacer-left">
            <ComposedChart {...args}>
              <ChartSizeDimensions />
              <ShowScale />
              <RechartsHookInspector />
            </ComposedChart>
          </div>
        </div>
      </div>;
  },
  args: {
    width: 500,
    height: 500
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const G=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,G as __namedExportsOrder,q as default};
