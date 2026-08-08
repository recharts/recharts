import{R as e}from"./iframe-3VVC0EYx.js";import{u as m,a as h,d,H as u}from"./zIndexSlice-C9c9QQWy.js";import{C as g}from"./ChartSizeDimensions-D3X3aRX9.js";import{C as p}from"./ComposedChart-BSwVfM9_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CNUd1gZq.js";import"./index-dUhqMgMz.js";import"./index-C9Se9_4o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DJCePyCz.js";import"./isWellBehavedNumber-D8cUYDpZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cu7UZSGV.js";import"./index-D9g8mJB5.js";import"./index-CufvXBKU.js";import"./axisSelectors-B7dqcVa4.js";import"./d3-scale-CshH80dj.js";import"./renderedTicksSlice-D0fiht4g.js";import"./CartesianChart-B55un86Y.js";import"./chartDataContext-ylnzbaG8.js";import"./CategoricalChart-DbawHDOk.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const B={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.description}}};const L=["WithAbsolutePositionAndFlexboxParents"];export{t as WithAbsolutePositionAndFlexboxParents,L as __namedExportsOrder,B as default};
