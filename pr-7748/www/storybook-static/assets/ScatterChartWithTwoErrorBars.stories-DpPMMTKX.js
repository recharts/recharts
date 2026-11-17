import{R as r}from"./iframe-SOI7ETqc.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-UWGgXn7O.js";import{C as d}from"./CartesianGrid-BAWvBOLm.js";import{X as c}from"./XAxis-gIhRIlH1.js";import{Y as y}from"./YAxis-Du2dgY78.js";import{S as h}from"./Scatter-7VicIUss.js";import{E as e}from"./ErrorBar-CoaepSa_.js";import{T as u}from"./Tooltip-ouyy3uAo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-2ihhOObz.js";import"./zIndexSlice-BU6oUWx4.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BpnJBtrD.js";import"./throttle-BuYpA644.js";import"./index-Code9Alh.js";import"./index-RwN-WdR-.js";import"./axisSelectors-DhazdA5O.js";import"./polarAxisSelectors-C18_Wica.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3TBblIj9.js";import"./index-B7zG0fHt.js";import"./index-QpX9BTHL.js";import"./renderedTicksSlice-B4lGJD7y.js";import"./index-C2xwEmrx.js";import"./fillDefinitions-C3mr1Tm6.js";import"./CartesianChart-D5ZzAIe3.js";import"./chartDataContext-8RiMC0Sw.js";import"./CategoricalChart-D1aUY5yi.js";import"./CartesianAxis-CkyCX2PR.js";import"./Layer-BdUzTy7V.js";import"./Text-CVVDOvxk.js";import"./ZIndexLayer-uSStm6JU.js";import"./Label-_MgncHEc.js";import"./types-DLi1Gmf3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Dm-FbuH_.js";import"./activeStyles--vF_fmID.js";import"./useAnimationId-C4SjfD_p.js";import"./Curve-B541BDSp.js";import"./step-B7wEb5SP.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Cq5r6BX8.js";import"./Symbols-D5dhbVXH.js";import"./symbol-D7DCXDTW.js";import"./ActiveShapeUtils-BXeGDetF.js";import"./ErrorBarContext-DHxWeWr-.js";import"./SetGraphicalItem-CGNGdUIc.js";import"./useEffectiveDataKey-B6JvOkpp.js";import"./CSSTransitionAnimate-BUO9sqVl.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DtBbnSGS.js";import"./uniqBy-C8wr_V1k.js";import"./iteratee-BgCV5Vfx.js";import"./isArguments-yB-y1yaH.js";import"./Cross-6WxxuO1-.js";import"./Rectangle-BKn3hEIk.js";import"./Sector-BOLNzO_s.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
