import{R as r}from"./iframe-Dg9AlkU9.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-APX8RTGc.js";import{C as d}from"./CartesianGrid-CEgse3j_.js";import{X as c}from"./XAxis-lGCMel2W.js";import{Y as y}from"./YAxis-CGrAoAPm.js";import{S as h}from"./Scatter-Z2XqiSZN.js";import{E as e}from"./ErrorBar-mfwMTZyz.js";import{T as u}from"./Tooltip-CUpj4qOU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-7nbSuF2A.js";import"./zIndexSlice-BMqB4Gyy.js";import"./throttle-DhT8i8lB.js";import"./index-DkFl9iqn.js";import"./index-CroN4XyC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cbi8IAhV.js";import"./isWellBehavedNumber-Dlf7mknf.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BE4Y3W85.js";import"./index-Bo0WYItg.js";import"./renderedTicksSlice-BJY2ZaZb.js";import"./axisSelectors-Bnxxm030.js";import"./d3-scale-BxAYr4dK.js";import"./CartesianChart-DsbYlNNZ.js";import"./chartDataContext-CTYD4WLT.js";import"./CategoricalChart-Cfe3Pj_n.js";import"./CartesianAxis-ClvRbJ15.js";import"./Layer-BfnZZDJ0.js";import"./Text-B-psx-iS.js";import"./DOMUtils-Bk_tuO3J.js";import"./Label-c2urfMyQ.js";import"./ZIndexLayer-A0r-fd7s.js";import"./types-BOBXQHFv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Bsg2W_jH.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Bh9SS3B5.js";import"./useAnimationId-DpUIMGhl.js";import"./Curve-C5hYWQKe.js";import"./step-DxvJ6z8y.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B3xwhiGR.js";import"./Symbols-D8R954sr.js";import"./symbol-C6xbsDKr.js";import"./ActiveShapeUtils-App4amhZ.js";import"./RegisterGraphicalItemId-D2VyX5Qp.js";import"./ErrorBarContext-U9oTNNG2.js";import"./GraphicalItemClipPath-DQk35kuh.js";import"./SetGraphicalItem-CLD5IGSv.js";import"./CSSTransitionAnimate-Bfwjq7yI.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-I4cHeDkl.js";import"./uniqBy-D39sA4fz.js";import"./iteratee-BlVn9B3O.js";import"./Cross-CGJxbaYQ.js";import"./Rectangle-D8eTHIfd.js";import"./Sector-B6DjodAy.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Yr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Yr as __namedExportsOrder,Xr as default};
