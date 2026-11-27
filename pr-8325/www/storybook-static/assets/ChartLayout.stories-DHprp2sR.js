import{R as e}from"./iframe-CqOe7k5Y.js";import{u as c,a as h,d,r as u}from"./zIndexSlice-HvZ_KFp3.js";import{C as g}from"./ChartSizeDimensions-CjScV1Wm.js";import{C as p}from"./ComposedChart-BeSg73-5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uDtrY5a-.js";import"./get-CjriyByo.js";import"./throttle-BawAsSGW.js";import"./index-NjrwBPri.js";import"./index-Nzssfkwo.js";import"./RechartsWrapper-C6U1x4NS.js";import"./axisSelectors-HXuL0A3L.js";import"./polarAxisSelectors-DnFOpaLb.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-B6EefrnE.js";import"./index-C49j9LJv.js";import"./index-DQgKuLzP.js";import"./renderedTicksSlice-B-tkfTkQ.js";import"./index-CjpYzq4S.js";import"./fillDefinitions-BUUlO_ua.js";import"./CartesianChart-CGVfE0i2.js";import"./chartDataContext-B9y28Tuh.js";import"./CategoricalChart-Cm4y0z4v.js";function f(){const r=c(),s=h(),m=d(u);return r==null||s==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:r*.9,y:s*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${m}`))}const O={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...r},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},$=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"https://github.com/recharts/recharts/issues/5477",...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.description}}};export{t as WithAbsolutePositionAndFlexboxParents,$ as __namedExportsOrder,O as default};
