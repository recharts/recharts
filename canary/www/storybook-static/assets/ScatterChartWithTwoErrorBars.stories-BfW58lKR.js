import{R as r}from"./iframe-CLMMwevR.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-DBqBRcBF.js";import{C as d}from"./CartesianGrid-CArlkuOk.js";import{X as c}from"./XAxis-DkO77iT7.js";import{Y as y}from"./YAxis-Cs8CAcTx.js";import{S as h}from"./Scatter-DLigl6qg.js";import{E as e}from"./ErrorBar-DkrGj9ZA.js";import{T as u}from"./Tooltip-BljQHSzs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BZjp8UCv.js";import"./zIndexSlice-C07rknep.js";import"./throttle--WJjmRve.js";import"./index-iZ7_9Rw4.js";import"./index-DTmItnBv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C-YHYhRk.js";import"./isWellBehavedNumber-DSl6gFKS.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DXBvk1ZI.js";import"./index-fePXAV8a.js";import"./axisSelectors-Bue48vwC.js";import"./d3-scale-DOlcECPa.js";import"./renderedTicksSlice-wRkzPU5z.js";import"./CartesianChart-Q0nxu5Mh.js";import"./chartDataContext-CTT-NX_B.js";import"./CategoricalChart-C94CRL_w.js";import"./CartesianAxis-DUmQAHmM.js";import"./Layer-Cu_Jods-.js";import"./Text-CiZ_8rvc.js";import"./DOMUtils-Cj7lsnlo.js";import"./useBackwardsCompatibleTheme-DuadFd-n.js";import"./Label-BtFWigtA.js";import"./ZIndexLayer-DMkUVhQg.js";import"./types-BzNgNoqU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BI16k_x1.js";import"./useAnimationId-B3zwLWVY.js";import"./Curve-CxAOzKab.js";import"./step-DNzx8Vvb.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dz25T291.js";import"./Symbols-U0YZNd6R.js";import"./symbol-DOolnNi0.js";import"./ActiveShapeUtils-CIArBYiS.js";import"./RegisterGraphicalItemId-DbsNOx6w.js";import"./ErrorBarContext-Bh7QEhRH.js";import"./GraphicalItemClipPath-Cx1IovYW.js";import"./SetGraphicalItem-CkM_d3EZ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-64H3vPLX.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-0ZnUPhxq.js";import"./uniqBy-EzYVTFGO.js";import"./iteratee-DMZj6OWx.js";import"./Cross-yxpJqiFA.js";import"./Rectangle-B1yBKol3.js";import"./Sector-DIkyuY27.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
