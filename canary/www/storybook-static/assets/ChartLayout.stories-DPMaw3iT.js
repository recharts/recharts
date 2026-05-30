import{c as e}from"./iframe-Cvf4U4wn.js";import{af as m,ad as h,ab as d,Z as u}from"./zIndexSlice-CO7DftJr.js";import{C as g}from"./ChartSizeDimensions-DHgwMrbE.js";import{C as p}from"./ComposedChart-DDdTWodp.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CBt7R_8A.js";import"./index-BqdhXxVe.js";import"./index-Ie5aROBq.js";import"./get-DcGEMmQ3.js";import"./resolveDefaultProps-_tlFTpxx.js";import"./isWellBehavedNumber-D1x3hQfA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-hVt29Fw0.js";import"./index-_osGLyvR.js";import"./index-84gp7b_-.js";import"./renderedTicksSlice-C6GQfAg5.js";import"./axisSelectors-DVSbKCnr.js";import"./d3-scale-DPGKMlVi.js";import"./CartesianChart-DDk2GzyN.js";import"./chartDataContext-BwbL_Y5V.js";import"./CategoricalChart-Bqu7zn37.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const L={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}};var o,i,a,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
