import{R as r}from"./iframe-DgQvZQyh.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-B0veBN79.js";import{C as d}from"./CartesianGrid-BonfojMO.js";import{X as c}from"./XAxis-B4xwOvnI.js";import{Y as y}from"./YAxis-B-S92WaL.js";import{S as h}from"./Scatter-CFaSrqqq.js";import{E as e}from"./ErrorBar-SlVjgfhF.js";import{T as u}from"./Tooltip-PE5z2rM6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQot8Dvj.js";import"./zIndexSlice-Btq-n8Y8.js";import"./throttle-Dk-DfWHx.js";import"./index-Cq8r6DAn.js";import"./index-BZXsqVam.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CgdEm8CY.js";import"./isWellBehavedNumber-1FtJDRA4.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Bb9OGTvq.js";import"./index-D86HQKsa.js";import"./axisSelectors-VvYM7u3M.js";import"./d3-scale-uYT3pExD.js";import"./renderedTicksSlice-Cx5LcFk7.js";import"./CartesianChart-CPjqqiaN.js";import"./chartDataContext-CZdqNQBA.js";import"./CategoricalChart-ZwyKDo7N.js";import"./CartesianAxis-BguBsSE9.js";import"./Layer-jy0y6JzX.js";import"./Text-BCNrLAhU.js";import"./DOMUtils-Dc6imoC2.js";import"./useId-Dpr_zhHQ.js";import"./useBackwardsCompatibleTheme-CyfSeWLo.js";import"./Label-D7SUzQZZ.js";import"./ZIndexLayer-COjkhmxj.js";import"./types-DyDamtmF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CDuN3lv4.js";import"./useAnimationId-CMrpUBKd.js";import"./Curve-ihXVzoU6.js";import"./step-ByO1iE7m.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DlkaB1DR.js";import"./Symbols-Cx2m1nqb.js";import"./symbol-DU_MIklD.js";import"./ActiveShapeUtils-bdnMAsi3.js";import"./RegisterGraphicalItemId-CgmuqVKA.js";import"./ErrorBarContext-C9gjoIKa.js";import"./GraphicalItemClipPath-wWG5NmBB.js";import"./SetGraphicalItem-WfznSmPk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-4182V0NX.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BASXZrSa.js";import"./uniqBy-rST57Vux.js";import"./iteratee-BL-nEGkT.js";import"./Cross-DJTs7157.js";import"./Rectangle-CkzbQ6sY.js";import"./Sector-D-WZW2-Q.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Sr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
