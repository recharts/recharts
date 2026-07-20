import{R as r}from"./iframe-S_Q04LyU.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CejCiepA.js";import{C as d}from"./CartesianGrid-HgE65v3j.js";import{X as c}from"./XAxis-D78GJHE5.js";import{Y as y}from"./YAxis-Cd8RwLuY.js";import{S as h}from"./Scatter-DS5uGgZ1.js";import{E as e}from"./ErrorBar-MJr91FD-.js";import{T as u}from"./Tooltip-DnzE8zYC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DllIXhjL.js";import"./zIndexSlice-Bxg2BBQ3.js";import"./throttle-sJ5Xwj7N.js";import"./index-B7fnCzo3.js";import"./index-bxbAArpl.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dy-13YZo.js";import"./isWellBehavedNumber-B7JVG4WI.js";import"./PolarUtils-CTnnDHZv.js";import"./index-rMJKouwD.js";import"./index-TooQEcPQ.js";import"./renderedTicksSlice-xSk0hPIv.js";import"./axisSelectors-BPn6DSnk.js";import"./d3-scale-C2cmQNtP.js";import"./CartesianChart-BKdvFgR6.js";import"./chartDataContext-pLCds2Ae.js";import"./CategoricalChart-90tJb_l9.js";import"./CartesianAxis-DhttszFl.js";import"./Layer-gdhaFlzY.js";import"./Text-C30Me8vu.js";import"./DOMUtils-b86ja7SN.js";import"./Label-DpgEyudD.js";import"./ZIndexLayer-Cyu3q_2t.js";import"./types-B2JQaABL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-BE3OLqfb.js";import"./useAnimationId-CWYmV7EH.js";import"./Curve-By1OgGZW.js";import"./step-DWBBqdOb.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dkeeb5v3.js";import"./Symbols-B-Gfn4AE.js";import"./symbol-BVP44yda.js";import"./ActiveShapeUtils-CQj2Q4HD.js";import"./RegisterGraphicalItemId-C_r44y5X.js";import"./ErrorBarContext-TTmfdmNR.js";import"./GraphicalItemClipPath-BhFzIWrz.js";import"./SetGraphicalItem-CmPnocAL.js";import"./CSSTransitionAnimate-BC_5yRqr.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DsJA345U.js";import"./uniqBy-BtJ9oYS7.js";import"./iteratee-DpqljlNu.js";import"./Cross-CwJEmN7U.js";import"./Rectangle-Qt7Z3o8D.js";import"./Sector-BeHgqQjL.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
