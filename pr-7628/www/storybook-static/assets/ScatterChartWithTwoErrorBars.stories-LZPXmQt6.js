import{R as r}from"./iframe-CXzAxIFn.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-C4THDDbp.js";import{C as d}from"./CartesianGrid-B22KpBM2.js";import{X as c}from"./XAxis-CskEzE-5.js";import{Y as y}from"./YAxis-wlQFPYGV.js";import{S as h}from"./Scatter-CTfgU43c.js";import{E as e}from"./ErrorBar-Cmomw7df.js";import{T as u}from"./Tooltip-qGf575g5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CktPaUvK.js";import"./zIndexSlice-DKHp-gjy.js";import"./throttle-BEsGyRMh.js";import"./index-D8seYp4q.js";import"./index-CTRG8-wP.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-JH3hFqB6.js";import"./isWellBehavedNumber-De_HX__8.js";import"./PolarUtils-CTnnDHZv.js";import"./index-ZTBFmJUb.js";import"./index-Bt5TuINX.js";import"./axisSelectors-BUJigeZt.js";import"./d3-scale-BDPPBhC0.js";import"./renderedTicksSlice-CEhRwZ6b.js";import"./CartesianChart-8S5--7wV.js";import"./chartDataContext-DY-mZyCM.js";import"./CategoricalChart-CEtFLcT-.js";import"./CartesianAxis-DNVNHP1o.js";import"./Layer-ypGDY04h.js";import"./Text-CpguaXBO.js";import"./DOMUtils-tMvYpyJu.js";import"./Label-BVxyVS7u.js";import"./ZIndexLayer-1UiKp4gF.js";import"./types-BCNeIHLh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CpUwpPC6.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DRjz3iml.js";import"./useAnimationId-BbyN3hun.js";import"./Curve-sYpKNcK8.js";import"./step-DNi3GMvN.js";import"./path-DyVhHtw_.js";import"./tooltipContext-3cpvxxGl.js";import"./Symbols-M_D3JkXn.js";import"./symbol-BPpS_VN0.js";import"./ActiveShapeUtils-CfdhJDcC.js";import"./RegisterGraphicalItemId-CeJgXyMl.js";import"./ErrorBarContext-xfWRS9uR.js";import"./graphicalItemIdentity-D7fkuVDS.js";import"./SetGraphicalItem-CTeY4uJY.js";import"./CSSTransitionAnimate-42Gdbp7v.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Cj8IkOFp.js";import"./uniqBy-Bi1ukr1C.js";import"./iteratee-zjhPqw6K.js";import"./Cross-DBG8i-4N.js";import"./Rectangle-CIymDIR1.js";import"./Sector-vqU42HK2.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
