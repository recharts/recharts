import{R as r}from"./iframe-L3U4PXsg.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-BrV--z-m.js";import{C as d}from"./CartesianGrid-BM8MKiJH.js";import{X as c}from"./XAxis-Cr6XecvK.js";import{Y as y}from"./YAxis-f7uBkTcv.js";import{S as h}from"./Scatter-DSJRHf09.js";import{E as e}from"./ErrorBar-D_l6prKj.js";import{T as u}from"./Tooltip-D-aGw3D6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dhr4IQZK.js";import"./zIndexSlice-DEY0PQhJ.js";import"./throttle-1AGwrNmW.js";import"./index-Bc6oV31c.js";import"./index-DwDM_7Ax.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZ-vNTge.js";import"./isWellBehavedNumber-BwlzE5Kb.js";import"./PolarUtils-CTnnDHZv.js";import"./index-kTWfYntd.js";import"./index-ywjMrX_X.js";import"./axisSelectors-BUQrPPfP.js";import"./d3-scale-BML9T1At.js";import"./renderedTicksSlice-D2JO8twM.js";import"./CartesianChart-INIUEhvM.js";import"./chartDataContext-EPhxp5b3.js";import"./CategoricalChart-mkEHtD3F.js";import"./CartesianAxis-DJ55n4uj.js";import"./Layer-CK7JaaLc.js";import"./Text-DovToi-v.js";import"./DOMUtils-BtvfpILU.js";import"./Label-B7Q2YiAq.js";import"./ZIndexLayer-Bn3RUVWt.js";import"./types-oKR4keO9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CsEJ0H_M.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Cx-Jnru-.js";import"./useAnimationId-BO1w5K0N.js";import"./Curve-SKtCcge4.js";import"./step-0OJURZ58.js";import"./path-DyVhHtw_.js";import"./tooltipContext-q_KI6h-9.js";import"./Symbols-C3FHvuf0.js";import"./symbol-Da9x_VYL.js";import"./ActiveShapeUtils-DLAF0QLB.js";import"./RegisterGraphicalItemId-CUZSiPzN.js";import"./ErrorBarContext-BscpV9GC.js";import"./GraphicalItemClipPath-BgQIEIQL.js";import"./SetGraphicalItem-BkVYHSQy.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-CRPti9cq.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-AZryebb6.js";import"./uniqBy-BfdCN-YR.js";import"./iteratee-BsSJFXKh.js";import"./Cross-CNpsDkfV.js";import"./Rectangle-C4EXzzh1.js";import"./Sector-D9JXQuE4.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
