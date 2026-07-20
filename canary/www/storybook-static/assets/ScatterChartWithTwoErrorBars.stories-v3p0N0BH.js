import{R as r}from"./iframe-DXKzzws4.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-B7WP5ka3.js";import{C as d}from"./CartesianGrid-dn8jQool.js";import{X as c}from"./XAxis-B7JoDVaz.js";import{Y as y}from"./YAxis-rHqCYw2v.js";import{S as h}from"./Scatter-I_zUu3rX.js";import{E as e}from"./ErrorBar-BNwarBfo.js";import{T as u}from"./Tooltip-BgqWabVR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CAtabfYs.js";import"./zIndexSlice-DMX8Hhzz.js";import"./throttle-BD3oF8Du.js";import"./index-lFjFQb2-.js";import"./index-CL_M0WF6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BSNhK7r6.js";import"./isWellBehavedNumber-C7AyK_9S.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D033D4Zv.js";import"./index-Bg5IH0LC.js";import"./renderedTicksSlice-egJwNk4f.js";import"./axisSelectors-v3JljGjn.js";import"./d3-scale-DYAtoVGZ.js";import"./CartesianChart-BbjVuMqC.js";import"./chartDataContext-CSoMwZ9z.js";import"./CategoricalChart-CAv3CBz7.js";import"./CartesianAxis-CVHxu40z.js";import"./Layer-C_ZH39cx.js";import"./Text-H0ump6nt.js";import"./DOMUtils-DglI10nq.js";import"./Label-C30Q7qcI.js";import"./ZIndexLayer-CMaU0WuF.js";import"./types-BceUICSF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-DnXQuXZD.js";import"./useAnimationId-DeOyrvrW.js";import"./Curve-DmVGde8u.js";import"./step-BR5H3S21.js";import"./path-DyVhHtw_.js";import"./tooltipContext-9yQi8er7.js";import"./Symbols-COmsubEa.js";import"./symbol-BUlFMA9I.js";import"./ActiveShapeUtils-D95WmeDO.js";import"./RegisterGraphicalItemId-CW1tA6c4.js";import"./ErrorBarContext-CuLgZ_wX.js";import"./GraphicalItemClipPath-C72bnPxn.js";import"./SetGraphicalItem-CYGj1XVR.js";import"./CSSTransitionAnimate-DpQvyCIg.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BqV11enm.js";import"./uniqBy-CUADLInF.js";import"./iteratee-CHkUkcds.js";import"./Cross-5OJntGQy.js";import"./Rectangle-DKjzEYBW.js";import"./Sector-G5hJhTYV.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
