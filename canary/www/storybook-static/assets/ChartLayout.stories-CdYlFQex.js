import{R as e}from"./iframe-u4ce63CG.js";import{u as m,a as h,d,G as u}from"./zIndexSlice-BYJycarP.js";import{C as g}from"./ChartSizeDimensions-BUY6gmui.js";import{C as p}from"./ComposedChart-C2sXY6fb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B6MgLZYN.js";import"./index-BVP_svq1.js";import"./index-BKlhDgWa.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CgaWkI-c.js";import"./isWellBehavedNumber-DjD-6vVv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Zz5ful62.js";import"./axisSelectors-CGHflyYT.js";import"./d3-scale-B8KmfmKn.js";import"./index-pI1Zm9lH.js";import"./index-PkCf_CwH.js";import"./renderedTicksSlice-Cs4cysVU.js";import"./index-CMticpJd.js";import"./CartesianChart-Ddb32mjN.js";import"./chartDataContext-0PEmuSXk.js";import"./CategoricalChart-BiBJy5y7.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const H={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},L=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.description}}};export{t as WithAbsolutePositionAndFlexboxParents,L as __namedExportsOrder,H as default};
