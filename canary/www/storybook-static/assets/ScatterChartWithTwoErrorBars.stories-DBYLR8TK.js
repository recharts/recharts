import{R as r}from"./iframe-DgJplLvS.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BkyZjuHH.js";import{C as d}from"./CartesianGrid-DBabwDzt.js";import{X as c}from"./XAxis-Cv0cLySm.js";import{Y as y}from"./YAxis-Dq42uhEw.js";import{S as h}from"./Scatter-D7mEGvWU.js";import{E as e}from"./ErrorBar-C4vjFG-O.js";import{T as u}from"./Tooltip-Diuoded2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkMI-tV9.js";import"./zIndexSlice-BEw7ZoBF.js";import"./throttle-BFtjLKgc.js";import"./index-CuR81imj.js";import"./index-DVtuWZEP.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CgspoxK6.js";import"./isWellBehavedNumber-CYMKDc-o.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Bwl4xJcj.js";import"./index-DBV_c5tC.js";import"./renderedTicksSlice-RcICWtpY.js";import"./axisSelectors-YqbMVrI6.js";import"./d3-scale-T7rND5KE.js";import"./CartesianChart-CDSt_igg.js";import"./chartDataContext-B8YdYa_T.js";import"./CategoricalChart-B_F4Qeg4.js";import"./CartesianAxis-iv3hpdCC.js";import"./Layer-CDKK6jHZ.js";import"./Text-DSQZtkf1.js";import"./DOMUtils-C8GJnqc6.js";import"./Label-DUk5cie5.js";import"./ZIndexLayer-DezlpkmC.js";import"./types-DgMxxOTT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-hO6Ptiqq.js";import"./useAnimationId-SGeRDQQf.js";import"./Curve-BjTIUQH-.js";import"./step-CkXO2b_C.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CSxEZFbz.js";import"./Symbols-5r-kjQvx.js";import"./symbol-wGUlUL8e.js";import"./ActiveShapeUtils-Cjw-C0nA.js";import"./RegisterGraphicalItemId-B36x_Amu.js";import"./ErrorBarContext-PVL9kjDM.js";import"./GraphicalItemClipPath-Dn9TF0yr.js";import"./SetGraphicalItem-9qFMsJKM.js";import"./CSSTransitionAnimate-CfNGYTru.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BA__8TOj.js";import"./uniqBy-BsO6J-fr.js";import"./iteratee-m2OFbEqY.js";import"./Cross-dkc1C4KG.js";import"./Rectangle-BkNYTIw0.js";import"./Sector-DOS1I4Dx.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
