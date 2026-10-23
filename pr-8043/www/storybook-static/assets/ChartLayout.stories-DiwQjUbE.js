import{R as e}from"./iframe-BJwrbqqi.js";import{u as m,a as h,d,E as u}from"./zIndexSlice-Dgyv34Z4.js";import{C as g}from"./ChartSizeDimensions-BTYzQtJX.js";import{C as p}from"./ComposedChart-BZiAB31H.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-pfeYxzRR.js";import"./index-G7qNEGy_.js";import"./index-DvHXQAWB.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C-uvAkWz.js";import"./isWellBehavedNumber-pfE5Q5mt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeuEZMtn.js";import"./axisSelectors-C5NObvkt.js";import"./d3-scale-DSWUCzXy.js";import"./index-DsGTB-aY.js";import"./index-WSINJmPt.js";import"./renderedTicksSlice-BnrduSeF.js";import"./index-BP4AOHzk.js";import"./CartesianChart-CLAnODbR.js";import"./chartDataContext-BDqLbH1o.js";import"./CategoricalChart-Db_HBiCU.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},O=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
