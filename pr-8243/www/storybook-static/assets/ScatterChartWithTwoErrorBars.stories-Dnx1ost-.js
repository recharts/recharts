import{R as r}from"./iframe-DHoXusD1.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-nd4IIF1M.js";import{C as d}from"./CartesianGrid-Dfi9spYg.js";import{X as c}from"./XAxis-hvLT-HVR.js";import{Y as y}from"./YAxis-_YVzx5KE.js";import{S as h}from"./Scatter-Bg-MNcwu.js";import{E as e}from"./ErrorBar-CoWtv9Hc.js";import{T as u}from"./Tooltip-D3ME52ET.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B415nsX3.js";import"./zIndexSlice-FsvXxdXV.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-htUurm4w.js";import"./throttle-bPL_CYHd.js";import"./index-CCctG3OF.js";import"./index-lVEyBlWW.js";import"./axisSelectors-pR92cyKp.js";import"./polarAxisSelectors-BGegD2Hb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BrVNT65M.js";import"./index-Dy3TNkua.js";import"./index-DNIoQSRO.js";import"./renderedTicksSlice-BXV4OD99.js";import"./index-DVO0bVkJ.js";import"./fillDefinitions-BK2qfHam.js";import"./CartesianChart-0nvsDd6J.js";import"./chartDataContext-Cv05qjwa.js";import"./CategoricalChart-C50aZvEG.js";import"./CartesianAxis-D3kgYeFy.js";import"./Layer-DvTlLbe7.js";import"./Text-DGMTORnL.js";import"./ZIndexLayer-ZLuJl0PO.js";import"./Label-DH0ZiH3v.js";import"./types-BuL5d7PW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DjrRjJ6y.js";import"./activeStyles-CtCkxF9Y.js";import"./useAnimationId-BUoKLqt_.js";import"./Curve-CobFJY2m.js";import"./step-7L3GLQ3k.js";import"./path-DyVhHtw_.js";import"./tooltipContext-bHP8AoZ-.js";import"./Symbols-Buf-PQNY.js";import"./symbol-CzqK2yND.js";import"./ActiveShapeUtils-CJDCK8tA.js";import"./ErrorBarContext-BUjEWD9b.js";import"./SetGraphicalItem-x9UkOjiz.js";import"./useEffectiveDataKey-Ckh-4MN_.js";import"./CSSTransitionAnimate-DE14fdi4.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-0dudveHh.js";import"./uniqBy-Cb8Ka0OF.js";import"./iteratee-DACkWKhu.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Dbucp1-Q.js";import"./Rectangle-DvIJVMhk.js";import"./Sector-CkJljpkv.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
