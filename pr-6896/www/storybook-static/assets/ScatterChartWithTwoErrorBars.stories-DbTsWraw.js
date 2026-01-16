import{e as r}from"./iframe-C-3BuwuQ.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-Bb53wgl7.js";import{C as d}from"./CartesianGrid-BjcHRlcY.js";import{X as c}from"./XAxis-C5T_Hme-.js";import{Y as y}from"./YAxis-BdnZ6VvH.js";import{S as h}from"./Scatter-DOo-n8Lg.js";import{E as e}from"./ErrorBar-DUFkncz1.js";import{T as u}from"./Tooltip-DBF9JwRu.js";import{R as f}from"./RechartsHookInspector-_jP1ustk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bcu3XnIN.js";import"./arrayEqualityCheck-FeQgOIOo.js";import"./resolveDefaultProps-B8KPX6JC.js";import"./PolarUtils-C0kEye-G.js";import"./hooks-DEo8Vj_c.js";import"./axisSelectors-TDNCuVG_.js";import"./zIndexSlice-CFeEDpl4.js";import"./CartesianChart-DDw6NmdK.js";import"./chartDataContext-CCRblB7F.js";import"./CategoricalChart-E0yZOneU.js";import"./CartesianAxis-CtyApd07.js";import"./Layer-BtreNavR.js";import"./Text-DQ4MnNVk.js";import"./DOMUtils-g9jP34sD.js";import"./Label-C_nqqcnR.js";import"./ZIndexLayer-cK31z4E4.js";import"./types-CX-GD2h3.js";import"./ReactUtils-DhVfiJt6.js";import"./Curve-DOZfooTf.js";import"./tooltipContext-f-uNjk8y.js";import"./Symbols-mlCUJH03.js";import"./ActiveShapeUtils-BI8SVP5k.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BYl-A-mY.js";import"./useAnimationId-0OWcJ5q4.js";import"./Trapezoid-DRLGjDBA.js";import"./Sector-Dgl5Ps14.js";import"./RegisterGraphicalItemId-CC6kQy01.js";import"./ErrorBarContext--fqfYIAi.js";import"./GraphicalItemClipPath-4wjIziT0.js";import"./SetGraphicalItem-wdcyb_2X.js";import"./CSSTransitionAnimate-PNsYWohM.js";import"./useElementOffset-EnpVvfdz.js";import"./iteratee-Qha-Yhcf.js";import"./Cross-DbyTsFp8.js";import"./index-DWdef0jv.js";import"./ChartSizeDimensions-B8NVQVZ1.js";import"./OffsetShower-g_YOgmWj.js";import"./PlotAreaShower-CrDYc66T.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
