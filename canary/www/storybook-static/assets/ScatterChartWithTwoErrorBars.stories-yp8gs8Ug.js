import{R as r}from"./iframe-jpw6hTzP.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DG9rlfBq.js";import{C as d}from"./CartesianGrid-B8YhQS5n.js";import{X as c}from"./XAxis-i-qKaY8p.js";import{Y as y}from"./YAxis-Cro589xA.js";import{S as h}from"./Scatter-qIXBE4GF.js";import{E as e}from"./ErrorBar-DRhW0Ixb.js";import{T as u}from"./Tooltip-CQP5PMUx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DETDaPtv.js";import"./zIndexSlice-0hywYSss.js";import"./throttle-CyRNR61p.js";import"./index-DO5hoWZ6.js";import"./index-BVY5iI86.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B-NoCwnk.js";import"./isWellBehavedNumber-Bpm3dXa6.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BAw2ZYTH.js";import"./index-B3JmkEsF.js";import"./renderedTicksSlice-DaJpGvtP.js";import"./axisSelectors-fmgxI94T.js";import"./d3-scale-DRfhHoT1.js";import"./CartesianChart-CgGbY7Vc.js";import"./chartDataContext-BOCAF6JU.js";import"./CategoricalChart-CgK2HWLH.js";import"./CartesianAxis-hrtgNZzr.js";import"./Layer-DBhjUf2v.js";import"./Text-CD-hvoQS.js";import"./DOMUtils-ByIChG1Y.js";import"./Label-Ddiq2mWQ.js";import"./ZIndexLayer-qT8qrsoe.js";import"./types-Q9eva-kl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-QuI77x2Z.js";import"./useAnimationId-BDRU6NIW.js";import"./Curve-CvVzTtSx.js";import"./step-DQBQyc1L.js";import"./path-DyVhHtw_.js";import"./tooltipContext-daoShmAn.js";import"./Symbols-DYBQppO_.js";import"./symbol-IJi7h63D.js";import"./ActiveShapeUtils-CdjeeMGu.js";import"./RegisterGraphicalItemId-BKfVpYlc.js";import"./ErrorBarContext-TSI08DrR.js";import"./GraphicalItemClipPath-BtpdwkC7.js";import"./SetGraphicalItem-B7bXtFbE.js";import"./CSSTransitionAnimate-CUDN7UAz.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-C-e6OQM8.js";import"./uniqBy-Dn1sAR5T.js";import"./iteratee-ZOl5KNFh.js";import"./Cross-DJcvNMj3.js";import"./Rectangle-BLYrXLOh.js";import"./Sector-DTQnXnWe.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
