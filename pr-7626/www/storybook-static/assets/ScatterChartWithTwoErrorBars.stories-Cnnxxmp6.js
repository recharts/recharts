import{R as r}from"./iframe-Bh1U-oMl.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-Vsu1VYhG.js";import{C as d}from"./CartesianGrid-DLxfJWcm.js";import{X as c}from"./XAxis-BDDyTBp4.js";import{Y as y}from"./YAxis-DLWlNOvC.js";import{S as h}from"./Scatter-D7AUb7Qq.js";import{E as e}from"./ErrorBar-FblNDU5C.js";import{T as u}from"./Tooltip-BTmBefKP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJiANDik.js";import"./zIndexSlice-CbwDGfhV.js";import"./throttle-DMII0ZAy.js";import"./index-CIfG7xc6.js";import"./index-B7DuV58o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cs5bXre5.js";import"./isWellBehavedNumber-Dyeu8bHm.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BJEvKA6W.js";import"./index-Pl0BuMhm.js";import"./axisSelectors-KgYrPzsA.js";import"./d3-scale-DvNPjBaU.js";import"./renderedTicksSlice-6pXaWoy-.js";import"./CartesianChart-YxKbksJG.js";import"./chartDataContext-B8xHbf95.js";import"./CategoricalChart-DcSXPqkv.js";import"./CartesianAxis-DON_KZPp.js";import"./Layer-C3H-dOT5.js";import"./Text-bdpnJJaC.js";import"./DOMUtils-TtYkNMfa.js";import"./Label-CoZlS51A.js";import"./ZIndexLayer-C51_GrjW.js";import"./types-w_TylJof.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Bbvr3NVw.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BvF3WRYv.js";import"./useAnimationId-0BmLZ6mF.js";import"./Curve-D4WkqVii.js";import"./step-CbC2c93d.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B5aE_LSZ.js";import"./Symbols-DQ62W2JC.js";import"./symbol-B_QuibgC.js";import"./ActiveShapeUtils-0P_4fb1E.js";import"./RegisterGraphicalItemId-UrCBGtwU.js";import"./ErrorBarContext-CYylskZD.js";import"./GraphicalItemClipPath-CR-53Dh0.js";import"./SetGraphicalItem-oPzo6Gr-.js";import"./CSSTransitionAnimate-BUqwGE8u.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CkLuT-ex.js";import"./uniqBy-DzWBXKbZ.js";import"./iteratee-CG3_OUhe.js";import"./Cross-I1vCGe6r.js";import"./Rectangle-B31sdsfS.js";import"./Sector-BkVuw3Sh.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
