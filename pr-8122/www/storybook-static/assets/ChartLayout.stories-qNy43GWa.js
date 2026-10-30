import{R as e}from"./iframe-GbU_LfIz.js";import{u as m,a as h,d,t as u}from"./zIndexSlice-B-uY-xMG.js";import{C as g}from"./ChartSizeDimensions-CNzu-N38.js";import{C as p}from"./ComposedChart-B3bI5XzW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DaFP4Osr.js";import"./throttle-lL1L3VRP.js";import"./index-DYswmNhd.js";import"./index-CWvB4q6F.js";import"./RechartsWrapper-CBlrkAx1.js";import"./axisSelectors-plpcnepy.js";import"./polarAxisSelectors-CUkA6wv5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-m-_CTi_p.js";import"./index-Dg1dPLnL.js";import"./index-DZowzVKz.js";import"./renderedTicksSlice-D3e3FCUI.js";import"./index-C9cCXc93.js";import"./CartesianChart-6Jqeuu6_.js";import"./ZIndexPortal-CkMateYW.js";import"./CategoricalChart-C2S0aau2.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},O=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.description}}};export{t as WithAbsolutePositionAndFlexboxParents,O as __namedExportsOrder,L as default};
