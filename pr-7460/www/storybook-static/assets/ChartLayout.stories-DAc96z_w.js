import{R as e}from"./iframe-DGhU-a9T.js";import{u as m,a as h,d,E as u}from"./zIndexSlice-D4C6hgdT.js";import{C as g}from"./ChartSizeDimensions-D6xnFn55.js";import{C as p}from"./ComposedChart-Juh79sHc.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-6aMp-_7U.js";import"./index-Cst7TkYL.js";import"./index-DSZNwJZV.js";import"./get-BovgKQJV.js";import"./resolveDefaultProps-Dbt_ZrM5.js";import"./isWellBehavedNumber-CmPQeXr3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbVRBKBT.js";import"./index-B_yATEtm.js";import"./index-DCbVvyOU.js";import"./renderedTicksSlice-DlUNX-2S.js";import"./axisSelectors-B2LpzdTT.js";import"./d3-scale-CGHFSatL.js";import"./string-B6fdYHAA.js";import"./CartesianChart-rdohZj9d.js";import"./chartDataContext-D0QBQcjy.js";import"./CategoricalChart-CgcUCFFA.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
            </ComposedChart>
          </div>
        </div>
      </div>;
  },
  args: {
    width: 500,
    height: 500
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const O=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,O as __namedExportsOrder,L as default};
