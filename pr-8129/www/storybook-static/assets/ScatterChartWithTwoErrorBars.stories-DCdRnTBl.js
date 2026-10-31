import{R as r}from"./iframe-CIzVR-2-.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BnLcSsR_.js";import{C as d}from"./CartesianGrid-JuGuyBql.js";import{X as c}from"./XAxis-DuVjd9Cl.js";import{Y as y}from"./YAxis-BM-BvKCY.js";import{S as h}from"./Scatter-wvHxUMJ4.js";import{E as e}from"./ErrorBar-DOdNcgpZ.js";import{T as u}from"./Tooltip-Bi9uk3q6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CaOZ9lUC.js";import"./zIndexSlice-CJv9lj0d.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BsWl2j-C.js";import"./throttle-g_l7Z0ZN.js";import"./index-iVHvpgFv.js";import"./index-DkDw0AjC.js";import"./axisSelectors-mbotnnaX.js";import"./polarAxisSelectors-D4S23sJN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CN1jPZAK.js";import"./index-B0W9noqG.js";import"./index-CJvlApl9.js";import"./renderedTicksSlice-CH4A0jxF.js";import"./index-C8XfMsOR.js";import"./CartesianChart-BUE6q1Of.js";import"./ZIndexPortal-DNkKSpm6.js";import"./CategoricalChart-Bt9yIUeV.js";import"./CartesianAxis-B1xkqmAC.js";import"./Layer-BlSvO1E4.js";import"./Text-D3Kha142.js";import"./DOMUtils-D-TrccP0.js";import"./pageBackground-DPTEcMe3.js";import"./ZIndexLayer-eeqaM0q4.js";import"./Label-MgaHTNfc.js";import"./types-Ci0QqKEV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-CqtDfKww.js";import"./LabelList-BTCEEH0Q.js";import"./activeStyles-Dl0q6Ayx.js";import"./useAnimationId-BGu4RQqd.js";import"./dataEntryStyles-DxP76lNF.js";import"./Curve-qbG6zMME.js";import"./step-Ma_Va74-.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DceeobfX.js";import"./Symbols-C3CTyIIX.js";import"./symbol-N4VmGah0.js";import"./ActiveShapeUtils-nEsdy7gj.js";import"./ErrorBarContext-BpJZX0b6.js";import"./SetGraphicalItem-D1cjeVg8.js";import"./useEffectiveDataKey-Bc7YBVWp.js";import"./CSSTransitionAnimate-CoSQauVK.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-39obdmvK.js";import"./uniqBy-BCkSDL9F.js";import"./iteratee-CRTQKy1O.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DPUQkNJu.js";import"./Rectangle-CFbXfnvF.js";import"./Sector-CyDWbC_t.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Args) => {
    const data = [{
      x: 100,
      y: 200,
      errorY: 30,
      errorX: 30
    }, {
      x: 120,
      y: 100,
      errorY: [500, 30],
      errorX: [200, 30]
    }, {
      x: 170,
      y: 300,
      errorY: [10, 20],
      errorX: 20
    }, {
      x: 140,
      y: 250,
      errorY: 30,
      errorX: 20
    }, {
      x: 150,
      y: 400,
      errorY: [20, 300],
      errorX: 30
    }, {
      x: 110,
      y: 280,
      errorY: 40,
      errorX: 40
    }];
    return <ScatterChart width={400} height={400} margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }} layout={args.layout}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" allowDataOverflow={args.allowDataOverflow} />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" allowDataOverflow={args.allowDataOverflow} />
        <Scatter name="A school" data={data} fill="blue">
          {/* This ErrorBar does render, but it does not extend the domain of XAxis unfortunately */}
          <ErrorBar dataKey="errorX" width={2} strokeWidth={3} stroke="green" direction="x" />
          <ErrorBar dataKey="errorY" width={4} strokeWidth={2} stroke="red" direction="y" />
        </Scatter>
        <Tooltip cursor={{
        strokeDasharray: '3 3'
      }} />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
