import{e as r}from"./iframe-BVH8UecD.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-bOE1UgAI.js";import{C as d}from"./CartesianGrid-VinvqS6A.js";import{X as c}from"./XAxis-DOmXqRCS.js";import{Y as y}from"./YAxis-Bmsarh4g.js";import{S as h}from"./Scatter-R1q8YadH.js";import{E as e}from"./ErrorBar-8n5ruXi6.js";import{T as u}from"./Tooltip-DuGZbbvN.js";import{R as f}from"./RechartsHookInspector-Dq3yykk5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BZaLp-vS.js";import"./arrayEqualityCheck-vgKGXjJg.js";import"./resolveDefaultProps-Cdk0Kr5w.js";import"./PolarUtils-D3PpCgED.js";import"./hooks-EmSSg1xf.js";import"./axisSelectors-CdzAnCbl.js";import"./zIndexSlice-BoigZ-y7.js";import"./CartesianChart-nAdRozku.js";import"./chartDataContext-DfFz62HT.js";import"./CategoricalChart-361vez3Q.js";import"./CartesianAxis-DndSeeNX.js";import"./Layer-CdphaBoS.js";import"./Text-B5hVuEjR.js";import"./DOMUtils-Awr9GIGy.js";import"./Label-DbioSpEE.js";import"./ZIndexLayer-Qipy46x2.js";import"./types-iQF7hC2M.js";import"./ReactUtils-CPhzqwNY.js";import"./Curve-5Yzr7IBn.js";import"./tooltipContext-BBDmyfFl.js";import"./Symbols-Bx3sDerM.js";import"./ActiveShapeUtils-BkZUQSXK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWlX6cPO.js";import"./useAnimationId-B1orywOS.js";import"./Trapezoid-BHTAQ8Mn.js";import"./Sector-DWTAjqin.js";import"./RegisterGraphicalItemId-BvvWKN3n.js";import"./ErrorBarContext-B2FM21nb.js";import"./GraphicalItemClipPath-Ds_tmloi.js";import"./SetGraphicalItem-B2OXJLzy.js";import"./CSSTransitionAnimate-BT_yIxnL.js";import"./useElementOffset-DiypH9bb.js";import"./iteratee-DmvGlhfZ.js";import"./Cross-Dr7NJTwI.js";import"./index-C-t36GsJ.js";import"./ChartSizeDimensions-C0bbugJp.js";import"./OffsetShower-CgbwF9et.js";import"./PlotAreaShower-HC6koTfx.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ur=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,ur as __namedExportsOrder,hr as default};
