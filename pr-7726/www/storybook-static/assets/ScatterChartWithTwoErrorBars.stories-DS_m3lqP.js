import{R as r}from"./iframe-BuZZ6Yg-.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-H2bvamG1.js";import{C as d}from"./CartesianGrid-BjSrnW92.js";import{X as c}from"./XAxis-CHYajWYc.js";import{Y as y}from"./YAxis-CIgwtJsC.js";import{S as h}from"./Scatter-BDl_oOTa.js";import{E as e}from"./ErrorBar-CIPYHn9T.js";import{T as u}from"./Tooltip-B6YzORSg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BK57Ddxz.js";import"./zIndexSlice-D06YYCUt.js";import"./throttle-Dl11hTdc.js";import"./index-WVpfO-Tt.js";import"./index-rOOSR0qU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D5JsTaYp.js";import"./isWellBehavedNumber-D8DFMuKm.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BIwvgxsa.js";import"./d3-scale-BuRuIzVX.js";import"./index-pWAlhut8.js";import"./index-DEZgEKu_.js";import"./renderedTicksSlice-DeL7aSpi.js";import"./index-BFZDqkK3.js";import"./CartesianChart-D_6fxtY3.js";import"./chartDataContext-CcDIygPN.js";import"./CategoricalChart-4bcFYgeY.js";import"./CartesianAxis-tEidUAUv.js";import"./Layer-DuZwtXeM.js";import"./Text-277W_4gY.js";import"./DOMUtils-C4sKZxSz.js";import"./useId-DaJNh8-T.js";import"./useBackwardsCompatibleTheme-bmPqm5mS.js";import"./Label-Piq6p-kT.js";import"./ZIndexLayer-CVpPXR5C.js";import"./types-BpoBtvKZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BSKa54qQ.js";import"./useAnimationId-BYxS0Ar5.js";import"./Curve-Cr1UwGdj.js";import"./step-CMi7Hoq0.js";import"./path-DyVhHtw_.js";import"./tooltipContext-3DNW6uAw.js";import"./Symbols-kGct_fvo.js";import"./symbol-C8zFc4Hg.js";import"./ActiveShapeUtils-DdHa4GQ_.js";import"./RegisterGraphicalItemId-BULnM1Vf.js";import"./ErrorBarContext-BnL_B67S.js";import"./GraphicalItemClipPath-iF12rDlU.js";import"./SetGraphicalItem-B24-ge-L.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-CqrWDXFj.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CC8KTtc-.js";import"./uniqBy-CBl0CU3M.js";import"./iteratee-4F6o9M4t.js";import"./Cross-BlwGzwAp.js";import"./Rectangle-Ct-8eUvC.js";import"./Sector-Dw9Qjjbb.js";const Sr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Dr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
