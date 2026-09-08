import{R as e}from"./iframe-BAkJeTr4.js";import{u as m,a as h,d,G as u}from"./zIndexSlice-CKNgQ3a1.js";import{C as g}from"./ChartSizeDimensions-DD4QiXLj.js";import{C as p}from"./ComposedChart-BuIARBZ7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dv1aPsuB.js";import"./index-DjVuoFnH.js";import"./index-XgffbxYa.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-5cpPAvAv.js";import"./isWellBehavedNumber-tRFPHljB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-EWDb0L0f.js";import"./axisSelectors-CSrb8LKj.js";import"./d3-scale-CDR0rKSq.js";import"./index-DAtUpVNY.js";import"./index-D15jXgP1.js";import"./renderedTicksSlice-BJEMwp3X.js";import"./index-I2U5t58b.js";import"./CartesianChart-DDPBhM-t.js";import"./chartDataContext-BT4eLMiU.js";import"./CategoricalChart-BbbjbFxH.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const H={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},L=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
