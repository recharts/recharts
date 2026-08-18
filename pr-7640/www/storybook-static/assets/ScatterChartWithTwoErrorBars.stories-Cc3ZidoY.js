import{R as r}from"./iframe-tjnA4ZJo.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-HSHhF4Dc.js";import{C as d}from"./CartesianGrid-CX-XzHb5.js";import{X as c}from"./XAxis-C_h8MhtB.js";import{Y as y}from"./YAxis-BN_pqP4r.js";import{S as h}from"./Scatter-Dl4tC6B3.js";import{E as e}from"./ErrorBar-BcOgtXmz.js";import{T as u}from"./Tooltip-CbkLMveH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWJ-Ct21.js";import"./zIndexSlice-C0N8aUUS.js";import"./throttle-BG5Cbw48.js";import"./index-BTfui88R.js";import"./index-BBMNndk4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bpk1yIxn.js";import"./isWellBehavedNumber-C0zpNc8z.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BXBph9CX.js";import"./index-zHF4-EZF.js";import"./axisSelectors-kO8GHbei.js";import"./d3-scale-DO15g-NA.js";import"./renderedTicksSlice-cCRvnCrJ.js";import"./CartesianChart-Fpuc0WuY.js";import"./chartDataContext-Czgamfqs.js";import"./CategoricalChart-4thYKElI.js";import"./CartesianAxis-CBg_pQkI.js";import"./Layer-BffJbX--.js";import"./Text-D3he8dQP.js";import"./DOMUtils-Bpsfg4Oe.js";import"./useBackwardsCompatibleTheme-WfOg4bTb.js";import"./Label-CYvlsQvC.js";import"./ZIndexLayer-J8-hOCa0.js";import"./types-B1JXlqQN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-6MMSMcYJ.js";import"./useAnimationId-1S4zeXgZ.js";import"./Curve-CyJ2f9jM.js";import"./step-OCCE-5TJ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DwLel0lg.js";import"./Symbols-kjmF9QMx.js";import"./symbol-FDo79mI1.js";import"./ActiveShapeUtils-D6_9Syl7.js";import"./RegisterGraphicalItemId-CPAkHit-.js";import"./ErrorBarContext-B_e3sY13.js";import"./GraphicalItemClipPath-CVEv0QyJ.js";import"./SetGraphicalItem-Bw7kOs9y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-BCrENfqH.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BodDkwvF.js";import"./uniqBy-n-0FIf0H.js";import"./iteratee-BlG9qfWt.js";import"./Cross-D4DCD1JZ.js";import"./Rectangle-Ckn9RlkE.js";import"./Sector-CiC563Fg.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
