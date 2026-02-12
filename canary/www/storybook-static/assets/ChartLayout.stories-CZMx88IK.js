import{e}from"./iframe-3u-Q1UnB.js";import{e as m,f as h,b as d,B as u}from"./arrayEqualityCheck-4YdFFnIZ.js";import{C as f}from"./ChartSizeDimensions-BtJ4zNfJ.js";import{C as c}from"./ComposedChart-B88mQwK1.js";import{R as g}from"./RechartsHookInspector-CGCoL2RB.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cxetozbj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTxIwYKV.js";import"./hooks-CA6mXnfo.js";import"./axisSelectors-tXlpibGR.js";import"./zIndexSlice-DFZrsegf.js";import"./CartesianChart-CPrM6Y72.js";import"./chartDataContext-oduysAeX.js";import"./CategoricalChart-C1AjKJFD.js";import"./index-BW-nQ8nH.js";import"./OffsetShower-CS2dm1Mz.js";import"./PlotAreaShower-DAGea8GQ.js";function x(){const s=m(),r=h(),p=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${p}`))}const B={component:c,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(c,{...s},e.createElement(f,null),e.createElement(x,null),e.createElement(g,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
            </ComposedChart>
          </div>
        </div>
      </div>;
  },
  args: {
    width: 500,
    height: 500
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const D=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,D as __namedExportsOrder,B as default};
