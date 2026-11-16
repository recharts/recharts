import{R as r}from"./iframe-DBZHgkHz.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-s-pYM4a6.js";import{C as d}from"./CartesianGrid-Be_XaqOe.js";import{X as c}from"./XAxis-Bnvf5Lo_.js";import{Y as y}from"./YAxis-qEVvtCkb.js";import{S as h}from"./Scatter-DJy-JAz9.js";import{E as e}from"./ErrorBar-BglMjUMk.js";import{T as u}from"./Tooltip-D6OO7ro2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CdEOi8nf.js";import"./zIndexSlice-CCEect8Y.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bvsyp51I.js";import"./throttle-VBcNMDCY.js";import"./index-DGbD_6uH.js";import"./index-EJLKzrUV.js";import"./axisSelectors-CuFbzFkp.js";import"./polarAxisSelectors-BLShzrWN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CCNti6RY.js";import"./index-CyqgVO8h.js";import"./index-BWY5Ai4-.js";import"./renderedTicksSlice-DsR53_S1.js";import"./index-D7sJrNgb.js";import"./fillDefinitions-CJlHmTcA.js";import"./CartesianChart-B8ylmrv_.js";import"./chartDataContext-l1L_LONz.js";import"./CategoricalChart-Bed811or.js";import"./CartesianAxis-BUQjH22T.js";import"./Layer-D9n5kKSs.js";import"./Text-DbdJ2rHF.js";import"./ZIndexLayer-BEGts5gU.js";import"./Label-rCJ8JAiM.js";import"./types-CiZDyVvS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-C2eRsswd.js";import"./activeStyles-Ccn_YinS.js";import"./useAnimationId-DSFmvkxj.js";import"./Curve-BXZ-CwEQ.js";import"./step-Dfu77DD6.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DS1SAGX9.js";import"./Symbols-Dffl-I8q.js";import"./symbol-BsRW9Z6s.js";import"./ActiveShapeUtils-DHVoZWQX.js";import"./ErrorBarContext-D4CjkMQU.js";import"./SetGraphicalItem-CyD7jeIx.js";import"./useEffectiveDataKey-jt0Z3g1O.js";import"./CSSTransitionAnimate-vUsEs-Fv.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-lqrBTYbX.js";import"./uniqBy-4s5Lfnt3.js";import"./iteratee-DHow2gXt.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C3CL5bTC.js";import"./Rectangle-DkLsbkp1.js";import"./Sector-KqGDdt6j.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
