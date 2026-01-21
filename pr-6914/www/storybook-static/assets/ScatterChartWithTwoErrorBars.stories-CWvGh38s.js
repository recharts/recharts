import{e as r}from"./iframe-B3JCtExw.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-C2PHA5GP.js";import{C as d}from"./CartesianGrid-BeqWnVU4.js";import{X as c}from"./XAxis-D8u9sAce.js";import{Y as y}from"./YAxis-jqSdFVky.js";import{S as h}from"./Scatter-4aLyA4zI.js";import{E as e}from"./ErrorBar-BKSVQ1CZ.js";import{T as u}from"./Tooltip-BmkvFz22.js";import{R as f}from"./RechartsHookInspector-B6PrNXux.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D9I6VAiu.js";import"./arrayEqualityCheck-BI5ikbve.js";import"./resolveDefaultProps-HcHTA_b-.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Cf16Eb3m.js";import"./axisSelectors-Bj5LT4A-.js";import"./zIndexSlice-CzadPF-N.js";import"./CartesianChart-DfwgXX5-.js";import"./chartDataContext-B7pD_95p.js";import"./CategoricalChart-HwleueHs.js";import"./CartesianAxis-D0PW3MM-.js";import"./Layer-m9bU_GMN.js";import"./Text-DN2HTHOh.js";import"./DOMUtils-k31lOHZq.js";import"./Label-DjeP5w8o.js";import"./ZIndexLayer-BuYvVcNP.js";import"./types-CzJtAzjL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-YAdCW6ic.js";import"./Curve-CrR1QL9p.js";import"./tooltipContext-b-HqDcfL.js";import"./Symbols-CjdLCsX8.js";import"./ActiveShapeUtils-B5WBZ39Q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D23yRLTV.js";import"./useAnimationId-YJOXYlAT.js";import"./Trapezoid-54tzhOdh.js";import"./Sector-zNAlF0WR.js";import"./RegisterGraphicalItemId-DL15PSpi.js";import"./ErrorBarContext-Bf3IY7YL.js";import"./GraphicalItemClipPath-DJH2B78L.js";import"./SetGraphicalItem-CgnveGex.js";import"./CSSTransitionAnimate-DHL1ll2J.js";import"./useElementOffset-BoaozXpF.js";import"./iteratee-Cz7oSf5Y.js";import"./Cross-B0CbIQuP.js";import"./index-DqnQGlGG.js";import"./ChartSizeDimensions-CMi2DnfJ.js";import"./OffsetShower-DLnhG5IQ.js";import"./PlotAreaShower-CnaAKLan.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const fr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,fr as __namedExportsOrder,ur as default};
