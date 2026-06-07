import{R as e}from"./iframe-B32UfMsX.js";import{u as m,a as h,d,E as u}from"./zIndexSlice-DkyNtvIV.js";import{C as g}from"./ChartSizeDimensions-DnPS0gIU.js";import{C as p}from"./ComposedChart-QBL839d_.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BidytqCU.js";import"./index-BAP72phy.js";import"./index-wjzF3nV2.js";import"./get-CT3OO5rn.js";import"./resolveDefaultProps-SHHlCQDD.js";import"./isWellBehavedNumber-B3ho9k16.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXDb61uY.js";import"./index-DzoQc6cZ.js";import"./index-Q93duC2Q.js";import"./renderedTicksSlice-DtIdXCHL.js";import"./axisSelectors-B8hXjmBG.js";import"./d3-scale-BwqG5DLv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-s4vgD_mJ.js";import"./chartDataContext-d3sJv4oK.js";import"./CategoricalChart-svLbPFL5.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
