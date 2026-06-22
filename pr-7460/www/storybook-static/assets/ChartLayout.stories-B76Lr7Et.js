import{R as e}from"./iframe-BaabCOfo.js";import{u as m,a as h,d,E as u}from"./zIndexSlice-CWxxXgIH.js";import{C as g}from"./ChartSizeDimensions-J7IavCG-.js";import{C as p}from"./ComposedChart-D9WOh2Dq.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BLHHDgig.js";import"./index-B1UijuQJ.js";import"./index-vSeH92Tc.js";import"./get-C9kPOoUz.js";import"./resolveDefaultProps-m6H7CCvK.js";import"./isWellBehavedNumber-B34pSeK5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BzVbI7QS.js";import"./index-DXTcRTSc.js";import"./index-CADxnCms.js";import"./renderedTicksSlice-qKkoa7Pp.js";import"./axisSelectors-BaT59QoB.js";import"./d3-scale-xd-t_SLV.js";import"./CartesianChart-C9YeuOyj.js";import"./chartDataContext-DaAkZdG0.js";import"./CategoricalChart-_HoXNLFS.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const H={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
