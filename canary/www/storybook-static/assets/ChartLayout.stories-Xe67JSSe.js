import{R as e}from"./iframe-FAdFbT6J.js";import{u as m,a as h,d,t as u}from"./zIndexSlice-COO8R9lj.js";import{C as g}from"./ChartSizeDimensions-CrEfR2qA.js";import{C as p}from"./ComposedChart-ByetWKbs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dtf0HKLA.js";import"./throttle-DmbGe_oo.js";import"./index-Bi2HKvdy.js";import"./index-CAO6Ulba.js";import"./RechartsWrapper-B8CA35TH.js";import"./axisSelectors-DjwIFZga.js";import"./polarAxisSelectors-CZ0SBXPQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfdNPJMp.js";import"./index-BCrgpV8I.js";import"./index-D2Bzwkru.js";import"./renderedTicksSlice-C41wjkwS.js";import"./index-Cdi1oYuJ.js";import"./CartesianChart-BPlrTUFV.js";import"./ZIndexPortal-B1h9CFOj.js";import"./CategoricalChart-D9WR_D7Z.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},O=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
