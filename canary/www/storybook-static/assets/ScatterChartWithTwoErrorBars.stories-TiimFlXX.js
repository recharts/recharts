import{R as r}from"./iframe-C60CeSr1.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-BzvE18eb.js";import{C as d}from"./CartesianGrid-Dbjuy-le.js";import{X as c}from"./XAxis-BvEbbPhK.js";import{Y as y}from"./YAxis-BsYuPRXA.js";import{S as h}from"./Scatter-CeePZ_7P.js";import{E as e}from"./ErrorBar-D0jWuc2d.js";import{T as u}from"./Tooltip-4d6bzF4V.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-GqvtI-xq.js";import"./zIndexSlice-OJv_DQrU.js";import"./throttle-4y-zsF2K.js";import"./index-CLcnbG-9.js";import"./index-Bqwda9Fq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BGY8S9MU.js";import"./isWellBehavedNumber-ps2XZnBQ.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-8LjSDh6r.js";import"./d3-scale-CKiULClT.js";import"./index-BORXIxjx.js";import"./index-BpZ-_TsI.js";import"./renderedTicksSlice-tOvQVNJQ.js";import"./index-BHPplqCM.js";import"./CartesianChart-Dx5XpQWF.js";import"./chartDataContext-wxbL5Q17.js";import"./CategoricalChart-DorDSMvO.js";import"./CartesianAxis-CFb2o3L1.js";import"./Layer-BkafIlY5.js";import"./Text-DbOMyqnY.js";import"./DOMUtils-DGbVIUY3.js";import"./useId-DOhjH30T.js";import"./useBackwardsCompatibleTheme-NWguYV1j.js";import"./Label-D00_RuVZ.js";import"./ZIndexLayer-DZjPHzll.js";import"./types-Bt5cyCk_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BorEvTXc.js";import"./useAnimationId-SZ0HilGc.js";import"./Curve-Dnnwa-VF.js";import"./step-7U-QL9rs.js";import"./path-DyVhHtw_.js";import"./tooltipContext-D0bzrnnA.js";import"./Symbols-DuK3X_Du.js";import"./symbol-DTBdp9NJ.js";import"./ActiveShapeUtils-D3L9NjGk.js";import"./RegisterGraphicalItemId-TGLRvyhw.js";import"./ErrorBarContext-D1-31f6l.js";import"./GraphicalItemClipPath-D_FqHT2B.js";import"./SetGraphicalItem-BDVcT93s.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-8ZpVe_8o.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-da1IKuQA.js";import"./uniqBy-BKlE9h1Q.js";import"./iteratee-C71t-VFG.js";import"./Cross-BzguAgSh.js";import"./Rectangle-Efiryd3x.js";import"./Sector-Mj2xoxEK.js";const Sr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
