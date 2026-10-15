import{R as r}from"./iframe-mtYsn-79.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Cx8EkHGk.js";import{C as d}from"./CartesianGrid-B__X8dsu.js";import{X as c}from"./XAxis-DraxbeeJ.js";import{Y as y}from"./YAxis-B8XavvDr.js";import{S as h}from"./Scatter-BuN1vcZm.js";import{E as e}from"./ErrorBar-CA_Q1Uq2.js";import{T as u}from"./Tooltip-DN9ewhU1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Lhej2phZ.js";import"./zIndexSlice-495T_9tR.js";import"./throttle-BhAErOUJ.js";import"./index-D6LBQYE7.js";import"./index-DsrHO_6p.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dv9djRbQ.js";import"./isWellBehavedNumber-CUExMovG.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-tcQjfxXW.js";import"./d3-scale-7ZjrAl0H.js";import"./index-NJ5U5ys4.js";import"./index-BrIo2_bc.js";import"./renderedTicksSlice-C9Id8AHg.js";import"./index-UWH5XZiD.js";import"./CartesianChart-C2MjyFSz.js";import"./chartDataContext-BlAChyFk.js";import"./CategoricalChart-DBrto0w2.js";import"./CartesianAxis-BWxlG7ih.js";import"./Layer-K-lH1pk5.js";import"./Text-BJaxenL8.js";import"./pageBackground-CdPwgquz.js";import"./useId-DbxZMBee.js";import"./useBackwardsCompatibleTheme-C2I2obbb.js";import"./Label-L2ne4D-Q.js";import"./ZIndexLayer-C6VGe1nr.js";import"./types-Bj-sAee4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BxgBaa2U.js";import"./useAnimationId-BOXwxaVr.js";import"./dataEntryStyles-CD4KrGW2.js";import"./Curve-BJLIKK7P.js";import"./step-CZN-eu_K.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dy0d23en.js";import"./Symbols-Dvpm4sds.js";import"./symbol-CTv1Pr73.js";import"./ActiveShapeUtils-CXyzmERA.js";import"./ErrorBarContext-Ek123Dcx.js";import"./GraphicalItemClipPath-c13meIZR.js";import"./SetGraphicalItem-Cc0cHCgq.js";import"./useEffectiveDataKey-CmlhkQvR.js";import"./CSSTransitionAnimate-BXAhIKBT.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B-V_Sy0W.js";import"./uniqBy-DeXUggee.js";import"./iteratee-CZHsmPrl.js";import"./Cross-DZQn7ql2.js";import"./Rectangle-BVuVZbYm.js";import"./Sector-DoEGZdf8.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
