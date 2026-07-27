import{R as r}from"./iframe-Dk6QtUOm.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CE1KQgM7.js";import{C as d}from"./CartesianGrid-DTFcpM_v.js";import{X as c}from"./XAxis-DpzwYtrF.js";import{Y as y}from"./YAxis-5MZ6qw-w.js";import{S as h}from"./Scatter-BvacOL-m.js";import{E as e}from"./ErrorBar-DJOCa7KV.js";import{T as u}from"./Tooltip-CAO9Dq7b.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtQEiJyx.js";import"./zIndexSlice-DIYdct83.js";import"./throttle-D98VVn5G.js";import"./index-DoZuvuq0.js";import"./index-U7zmREmi.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-iHCSp8Qu.js";import"./isWellBehavedNumber-D_eFFsbn.js";import"./PolarUtils-CTnnDHZv.js";import"./index-COkLsuib.js";import"./index-DoCUyrNc.js";import"./renderedTicksSlice-1Do5QcM1.js";import"./axisSelectors-D6uzbqkR.js";import"./d3-scale-B2mup6zM.js";import"./CartesianChart-BPW_q9xK.js";import"./chartDataContext-BWXJwi3S.js";import"./CategoricalChart-DDK0QtzY.js";import"./CartesianAxis-BFE0ezxc.js";import"./Layer-CriLvMlw.js";import"./Text-B_RemiZL.js";import"./DOMUtils-C0erXEEq.js";import"./Label-Cv9o4t_y.js";import"./ZIndexLayer-CQwtlObF.js";import"./types-Df8kiDN0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-CpjG7pC9.js";import"./useAnimationId-BV1Lvx7_.js";import"./Curve-DD_9uNW0.js";import"./step-74BZyyTl.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CGoUR7V-.js";import"./Symbols-_cvEA0x0.js";import"./symbol-DQm7NK9B.js";import"./ActiveShapeUtils-CJey3tMT.js";import"./RegisterGraphicalItemId-DRrwgsJN.js";import"./ErrorBarContext-60D9zT8I.js";import"./GraphicalItemClipPath-DJOu5Ece.js";import"./SetGraphicalItem-D9C9m9l_.js";import"./CSSTransitionAnimate-JzolyPsT.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CDl8IrDv.js";import"./uniqBy-DUa1oDxC.js";import"./iteratee-qwNKeEU2.js";import"./Cross-AtwPrNGl.js";import"./Rectangle-COIgOmTW.js";import"./Sector-CB9kSF6e.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Xr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Xr as __namedExportsOrder,Er as default};
