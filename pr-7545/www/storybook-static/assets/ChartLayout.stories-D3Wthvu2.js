import{R as e}from"./iframe-BLb3YVtb.js";import{j as m,k as h,b as d,A as u}from"./zIndexSlice-DJkgkDD9.js";import{C as g}from"./ChartSizeDimensions-CspwGo5c.js";import{C as p}from"./ComposedChart-Dwy4LS3D.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-6auUp_qF.js";import"./index-DEpMuUHp.js";import"./index-wtrxX94s.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CnVWahPK.js";import"./isWellBehavedNumber-DlUvkjSQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CUaMC7NX.js";import"./index-DpQytYeA.js";import"./index-Cj1DGWT6.js";import"./renderedTicksSlice-k5ys3P6y.js";import"./axisSelectors-DadMFlsr.js";import"./d3-scale-Bikema70.js";import"./CartesianChart-B4u-2HHw.js";import"./chartDataContext-BoMs8zEW.js";import"./CategoricalChart-Csrvckvr.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const H={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
