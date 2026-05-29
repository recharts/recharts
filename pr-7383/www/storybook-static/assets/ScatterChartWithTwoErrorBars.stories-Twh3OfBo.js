import{c as r}from"./iframe-C5fgHeit.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-DQcwPHYW.js";import{C as d}from"./CartesianGrid-DF1051eG.js";import{X as c}from"./XAxis-DgWVtNyr.js";import{Y as y}from"./YAxis-CoKsJgTz.js";import{S as h}from"./Scatter-Cp-q7kGv.js";import{E as e}from"./ErrorBar-C09tQstX.js";import{T as u}from"./Tooltip-Bw7pP9bN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bfu9Nl_Q.js";import"./zIndexSlice-Cm8Wfowt.js";import"./immer-kTf3s8ve.js";import"./index-DjwzGHbn.js";import"./index-BKpk60GZ.js";import"./get-DWrZfuk9.js";import"./resolveDefaultProps-CYeq70FN.js";import"./isWellBehavedNumber-D0_xXiuE.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CS-SMU20.js";import"./index-GhOblPXW.js";import"./renderedTicksSlice-BX_JZwB0.js";import"./axisSelectors-DhSKO8Kw.js";import"./d3-scale-CZ_aTrcE.js";import"./CartesianChart-aHIkR0ek.js";import"./chartDataContext-CZBf5hkj.js";import"./CategoricalChart-DGE9Xwb5.js";import"./CartesianAxis-DBytmeds.js";import"./Layer-Cc_zBrzh.js";import"./Text-tcokI-pA.js";import"./DOMUtils-DIorzim0.js";import"./Label-DviSNP2P.js";import"./ZIndexLayer-DJnVmrOS.js";import"./types-CutKYO-q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-XexX1ZTx.js";import"./Curve-C5tRxImZ.js";import"./step-Dfgw13sm.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bjd2BcFJ.js";import"./Symbols-BAb-Z_BR.js";import"./symbol-B7BiD5Uu.js";import"./ActiveShapeUtils-BJ_lKbaS.js";import"./RegisterGraphicalItemId-Dq8Ivo6G.js";import"./ErrorBarContext-CKHx2UXB.js";import"./GraphicalItemClipPath-BWUEd7L8.js";import"./SetGraphicalItem-dBJjG1CE.js";import"./useAnimationId-DkZHsCyz.js";import"./CSSTransitionAnimate-CZo8XfNv.js";import"./useElementOffset-CyRs7Ghn.js";import"./uniqBy-DrtRQAo9.js";import"./iteratee-WGyIZ-Gp.js";import"./Cross-DJilIOTx.js";import"./Rectangle-CelBvebx.js";import"./Sector-8_MFoJRk.js";const gr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,xr as __namedExportsOrder,gr as default};
