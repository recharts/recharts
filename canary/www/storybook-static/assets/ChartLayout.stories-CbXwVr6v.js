import{R as e}from"./iframe-Cuw567ao.js";import{u as m,a as h,d,G as u}from"./zIndexSlice-BuAoIKSs.js";import{C as g}from"./ChartSizeDimensions-D-S7zcRf.js";import{C as p}from"./ComposedChart-Qred9gjF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bjmeh804.js";import"./index-DPZE1hYp.js";import"./index-CitLG62V.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-EeLa_nJM.js";import"./isWellBehavedNumber-B73u9WX2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dc_lFngx.js";import"./axisSelectors-C6YnqdB_.js";import"./d3-scale-sEI--FZR.js";import"./index-DSKcUbNG.js";import"./index-1-Kpwwt_.js";import"./renderedTicksSlice-DdMSNSAt.js";import"./index-CYPd_aD4.js";import"./CartesianChart-D-_oA4AU.js";import"./chartDataContext-CU7BnpPX.js";import"./CategoricalChart-BLUN9mEz.js";function f(){const s=m(),r=h(),c=d(u);return s==null||r==null?null:e.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}},e.createElement("text",{x:s*.9,y:r*.9,textAnchor:"end",dominantBaseline:"hanging",stroke:"black"},`scale: ${c}`))}const H={component:p,docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},t={render:s=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},className:"spacer-top"},e.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",top:"100px"},className:"spacer-left"},e.createElement(p,{...s},e.createElement(g,null),e.createElement(f,null))))),args:{width:500,height:500}},L=["WithAbsolutePositionAndFlexboxParents"];var o,n,i,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
