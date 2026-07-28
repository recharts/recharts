import{R as r}from"./iframe-DuK0Qil1.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-D1VgBPU7.js";import{C as d}from"./CartesianGrid-CoCKhxhu.js";import{X as c}from"./XAxis-5-F4R60_.js";import{Y as y}from"./YAxis-DUlzRBIx.js";import{S as h}from"./Scatter-BX5yEKDd.js";import{E as e}from"./ErrorBar-BYam74aS.js";import{T as u}from"./Tooltip-CiBanZOe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DniM3uOm.js";import"./zIndexSlice-CDnfQqmd.js";import"./throttle-DSTeDcIR.js";import"./index-tfefZ_nO.js";import"./index-CKpzsMgh.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-oCmlrVLK.js";import"./isWellBehavedNumber-DX_vizwS.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DwA8b1Ou.js";import"./index-DhoW-uSW.js";import"./renderedTicksSlice-CSJ2A-w6.js";import"./axisSelectors-_6NgKNdR.js";import"./d3-scale-DuTdgHoH.js";import"./CartesianChart-BQw3D51-.js";import"./chartDataContext-CfvZMLTP.js";import"./CategoricalChart-D9Svi6qf.js";import"./CartesianAxis-D2hc_RJR.js";import"./Layer-DkfKlAwf.js";import"./Text-D4DIOP-8.js";import"./DOMUtils-n5aJojsY.js";import"./Label-BVUrQ6r5.js";import"./ZIndexLayer-BaKptJ0d.js";import"./types-Ch2-4RAi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CZE5IotG.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-CBhdDdvc.js";import"./useAnimationId-nnglBd7S.js";import"./Curve-CAqM1U-K.js";import"./step-BW4Xq2ef.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DVN15Dsi.js";import"./Symbols-Br9ylzN1.js";import"./symbol-Bg-Ontnx.js";import"./ActiveShapeUtils-B7fe-RtC.js";import"./RegisterGraphicalItemId-BqmtVyAz.js";import"./ErrorBarContext-84EKHKmH.js";import"./GraphicalItemClipPath-BN5jaNNE.js";import"./SetGraphicalItem-D4hSZyvD.js";import"./CSSTransitionAnimate-CHIBwZqG.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B2PIp49y.js";import"./uniqBy-eNjjwLbW.js";import"./iteratee-BKzRmdu1.js";import"./Cross-CnY9yMSL.js";import"./Rectangle-BwZ6jX28.js";import"./Sector-Drp5OGvW.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
