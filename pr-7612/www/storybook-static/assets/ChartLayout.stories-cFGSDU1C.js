import{R as e}from"./iframe-CFlvYhwJ.js";import{u as m,a as h,d,H as u}from"./zIndexSlice-DsYga1t6.js";import{C as g}from"./ChartSizeDimensions-BEV8afTP.js";import{C as p}from"./ComposedChart-B5QMSZu4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DGHHBzas.js";import"./index-CK40W1ET.js";import"./index-CMfIljZ8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D1HAFajw.js";import"./isWellBehavedNumber-CZKybQSl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CRpfhqml.js";import"./index-CkY-i2Tp.js";import"./index-BETjCkd5.js";import"./renderedTicksSlice-1CrcAe52.js";import"./axisSelectors-CI91Gt8x.js";import"./d3-scale-dVjou3RT.js";import"./CartesianChart-BaNzafos.js";import"./chartDataContext-C13UfWCq.js";import"./CategoricalChart-DdrlD6Qo.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const B={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
