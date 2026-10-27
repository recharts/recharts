import{R as r}from"./iframe-CKYCIS4O.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CoLPjpZW.js";import{C as d}from"./CartesianGrid-CSAQRvR1.js";import{X as c}from"./XAxis-BwOdDkr3.js";import{Y as y}from"./YAxis-3_O2t6O0.js";import{S as h}from"./Scatter-0-yw5KBy.js";import{E as e}from"./ErrorBar-DjjiOEHd.js";import{T as u}from"./Tooltip-CCekjfs3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dem0F1Iz.js";import"./zIndexSlice-BVoHtIGl.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DJardr3Q.js";import"./throttle-DZYj3iOj.js";import"./index-nd3hpzmK.js";import"./index-JI8M9eCs.js";import"./axisSelectors-BFrdOsRC.js";import"./polarAxisSelectors-pOJJRSzh.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Chzts2tO.js";import"./index-SMQozWXj.js";import"./index-DaDG0cBs.js";import"./renderedTicksSlice-BxS1V27b.js";import"./index-Da8MkAXq.js";import"./CartesianChart-CI5sjVIs.js";import"./ZIndexPortal-DdwrmGrM.js";import"./CategoricalChart-CFFWqlhP.js";import"./CartesianAxis-8nzccMKS.js";import"./Layer-BD9gaLyO.js";import"./Text-BLfI62nN.js";import"./pageBackground-CEf563-A.js";import"./ZIndexLayer-DQE-ht00.js";import"./Label-V3vvxFs1.js";import"./dataEntryStyles-DAzCaz5j.js";import"./types-CmrXNY74.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DIy8rGs9.js";import"./activeStyles-CNm0YTHp.js";import"./useAnimationId-CSk2ZRUZ.js";import"./Curve-DLtusU6K.js";import"./step-DsdN-LIO.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BQUele7p.js";import"./Symbols-CDAoERqX.js";import"./symbol-Dw776g78.js";import"./ActiveShapeUtils-Ci-vluy8.js";import"./RegisterGraphicalItemId-DJiw9mNN.js";import"./ErrorBarContext-Btx89lB4.js";import"./SetGraphicalItem-B3OCK4rf.js";import"./useEffectiveDataKey-Bc5Nhcfg.js";import"./CSSTransitionAnimate-Cuen8pxe.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B3lS8dsi.js";import"./uniqBy-DiBJQ8ne.js";import"./iteratee-npSfVfao.js";import"./isArguments-yB-y1yaH.js";import"./Cross-6coidCzg.js";import"./Rectangle-C9OOv2OS.js";import"./Sector-B0ghbJbx.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
