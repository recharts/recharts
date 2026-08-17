import{R as r}from"./iframe-D48Nzg7a.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-Drmqpk62.js";import{C as d}from"./CartesianGrid-D5ahigNj.js";import{X as c}from"./XAxis-vF58_Zhz.js";import{Y as y}from"./YAxis-B8Cc3RzQ.js";import{S as h}from"./Scatter-BZ3-2FR3.js";import{E as e}from"./ErrorBar-U5Yp3FKx.js";import{T as u}from"./Tooltip-DYdz9UJp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-S_Xc00BH.js";import"./zIndexSlice-Nz3qbcrc.js";import"./throttle-DSE-ZCYP.js";import"./index-1Ac2q3vk.js";import"./index-DZyliIRq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-X4i4u3XO.js";import"./isWellBehavedNumber-C7xfGJm3.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BpddMd5l.js";import"./index-Dqx9cZ4q.js";import"./axisSelectors-CnpCzdAy.js";import"./d3-scale-BmAkfb5N.js";import"./renderedTicksSlice-DkSC6crE.js";import"./CartesianChart-DqIlVucu.js";import"./chartDataContext-DiRp1I73.js";import"./CategoricalChart-DWr61JUe.js";import"./CartesianAxis-DNEYl1Os.js";import"./Layer-DQQ0bNB2.js";import"./Text-BmDi8oon.js";import"./DOMUtils-MwbqvkJM.js";import"./useBackwardsCompatibleTheme-D_bQGNKj.js";import"./Label-Dvc5-O45.js";import"./ZIndexLayer-C5gHLVh2.js";import"./types-DUxuHHgK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CvUvPizu.js";import"./useAnimationId-C-dtJewN.js";import"./Curve-C6kUZVG1.js";import"./step-Dw08AzPN.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BIjf47GM.js";import"./Symbols-D4C9qW9l.js";import"./symbol-CsWtmKEW.js";import"./ActiveShapeUtils-C9yMl5UT.js";import"./RegisterGraphicalItemId-DFpeIKrt.js";import"./ErrorBarContext-D4VutYOM.js";import"./GraphicalItemClipPath-BHb4Wa01.js";import"./SetGraphicalItem-aeCrMt0o.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-xb38UR83.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CWdvxxkR.js";import"./uniqBy-DBAMUzKM.js";import"./iteratee-Dm8hLA5j.js";import"./Cross-CBvfo1Yn.js";import"./Rectangle-BLR_lgnH.js";import"./Sector-C3TmLlhC.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
