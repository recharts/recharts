import{R as e}from"./iframe-HmoKwHFX.js";import{j as m,k as h,b as d,A as u}from"./zIndexSlice-6UlwHzZx.js";import{C as g}from"./ChartSizeDimensions-vc600DB-.js";import{C as p}from"./ComposedChart-DNBXzl8_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CggiDJGE.js";import"./index-DbZ1xFPe.js";import"./index-V8abjlH7.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BgbskIps.js";import"./isWellBehavedNumber-ChlLFPsN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-j2c0QQIE.js";import"./index-BOpt7wnK.js";import"./index-B9uDrVyK.js";import"./renderedTicksSlice-CKWPLZmb.js";import"./axisSelectors-BQeYBj0I.js";import"./d3-scale-BDs_cJTc.js";import"./CartesianChart-BAb-9k9W.js";import"./chartDataContext-DrbaCNot.js";import"./CategoricalChart-5OT8W9pW.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const H={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const L=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,L as __namedExportsOrder,H as default};
