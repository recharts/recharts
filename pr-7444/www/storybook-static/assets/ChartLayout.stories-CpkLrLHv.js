import{R as e}from"./iframe-DHxweIO9.js";import{u as m,a as h,d,E as u}from"./zIndexSlice-oAGhcyxs.js";import{C as g}from"./ChartSizeDimensions-Dh_1BzBL.js";import{C as p}from"./ComposedChart-RKqXsJZg.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-LtTlQghk.js";import"./index-BPm8HOAZ.js";import"./index-D2s_06CJ.js";import"./get-C0Lt804T.js";import"./resolveDefaultProps-BFfik0lP.js";import"./isWellBehavedNumber-zbgy0N68.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1v1VArt.js";import"./index-Cen9NMit.js";import"./index-1DHoilgY.js";import"./renderedTicksSlice-D0SVQkh2.js";import"./axisSelectors-BtfV9moc.js";import"./d3-scale-8GVIzX8d.js";import"./string-B6fdYHAA.js";import"./CartesianChart-FIs-jkte.js";import"./chartDataContext-BdeADzKD.js";import"./CategoricalChart-DTsRp_4F.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
