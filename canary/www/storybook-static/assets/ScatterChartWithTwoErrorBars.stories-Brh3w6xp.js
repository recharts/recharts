import{R as r}from"./iframe-B8h9Wvr9.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-C-oHjCA0.js";import{C as d}from"./CartesianGrid-CVHpL8qs.js";import{X as c}from"./XAxis-ClvsjJJf.js";import{Y as y}from"./YAxis-BfjaBbwl.js";import{S as h}from"./Scatter-3Qq_gko8.js";import{E as e}from"./ErrorBar-BbVxZw4n.js";import{T as u}from"./Tooltip-DrFlV5HY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-G4SBGBL6.js";import"./zIndexSlice-CVCC3Ewl.js";import"./resolveDefaultProps-DXlTd2CB.js";import"./get-CjriyByo.js";import"./throttle-BfhZgz01.js";import"./index-CKXNY2A8.js";import"./index-R2j1A_a7.js";import"./axisSelectors-DxXHcDkW.js";import"./polarAxisSelectors-DvWUU3lc.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-B3tlBIXY.js";import"./index-DoR62jFZ.js";import"./index-DqggoQHU.js";import"./renderedTicksSlice-CV8xyIus.js";import"./index-y0390T2N.js";import"./fillDefinitions-DTKKCxhO.js";import"./CartesianChart-Bkkx4Fnj.js";import"./chartDataContext-BVM5VACt.js";import"./CategoricalChart-CyVTcBSA.js";import"./CartesianAxis-CJ6VDRMk.js";import"./Layer-BE-J6P8G.js";import"./Text-DY2xd2YN.js";import"./ZIndexLayer-Bx5YOPf4.js";import"./Label-WZNKLfQt.js";import"./types-BVLhjsLl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Ba3L9xmJ.js";import"./activeStyles-DVd5xcPq.js";import"./useAnimationId-D5-dWWo1.js";import"./Curve-Cp-haaTZ.js";import"./step-YyTtc-k1.js";import"./path-BBMZd4YL.js";import"./tooltipContext-DS16xuY4.js";import"./Symbols-F7LNdmbs.js";import"./symbol-DHr3iGUB.js";import"./ActiveShapeUtils-pnsLPMUZ.js";import"./ErrorBarContext-Dq6hu0_F.js";import"./SetGraphicalItem-CUEe1yBW.js";import"./useEffectiveDataKey-Bc62JqkW.js";import"./CSSTransitionAnimate-CLOCXGwp.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D5rr17de.js";import"./uniqBy-B4zow5Ey.js";import"./iteratee-BmZGYeAG.js";import"./isArguments-yB-y1yaH.js";import"./Cross-TH3H6g8S.js";import"./Rectangle-DWu49_Dg.js";import"./Sector-9XoXTpoZ.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
