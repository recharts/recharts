import{R as r}from"./iframe-BSWUJvVD.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DPvOfcMc.js";import{C as d}from"./CartesianGrid-DZaQ-sHd.js";import{X as c}from"./XAxis-CjaWOmHo.js";import{Y as y}from"./YAxis-CPNRWSYb.js";import{S as h}from"./Scatter-DO2KENUH.js";import{E as e}from"./ErrorBar-Dua_QJty.js";import{T as u}from"./Tooltip-uFYXTgrh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DTzsDh4q.js";import"./zIndexSlice-Dodw6VBB.js";import"./throttle-DttCRvoG.js";import"./index-Dvw34fMT.js";import"./index-B3tdJtlF.js";import"./get-Vl9hB9kE.js";import"./resolveDefaultProps-BmihZEmA.js";import"./isWellBehavedNumber-BmaIQTH1.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CvaVBha6.js";import"./index-C2hfqVYs.js";import"./renderedTicksSlice-DqZNOnEy.js";import"./axisSelectors-DyTmTh7D.js";import"./d3-scale-C12KvtOu.js";import"./CartesianChart-DPI5HXtq.js";import"./chartDataContext-DSlpgtsU.js";import"./CategoricalChart-DIaxl7pb.js";import"./CartesianAxis-CVEh4tt_.js";import"./Layer-Cf5OzKEI.js";import"./Text-AXOyatW-.js";import"./DOMUtils-BQwhIlov.js";import"./Label-DXe68yB0.js";import"./ZIndexLayer-Cq8G8FQO.js";import"./types-Dnz1a-tR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Z4j2jX_N.js";import"./useAnimationId-DQFk0Too.js";import"./Curve-DsJVJiVT.js";import"./step-n-r0mMGx.js";import"./path-DyVhHtw_.js";import"./tooltipContext-qkhEuIOD.js";import"./Symbols-Bya0QLqm.js";import"./symbol-2I3qt-S_.js";import"./ActiveShapeUtils-CLmLa7pa.js";import"./RegisterGraphicalItemId-C0E0VwJr.js";import"./ErrorBarContext-CvQvhsxB.js";import"./GraphicalItemClipPath-BiLMWHLg.js";import"./SetGraphicalItem-DXqqCptu.js";import"./CSSTransitionAnimate-BNorGpqy.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CYaTUNRm.js";import"./uniqBy-BgH0Yxrn.js";import"./iteratee-Dfdp0kkr.js";import"./Cross-D8os7VLI.js";import"./Rectangle-BwGjqEA9.js";import"./Sector-k8eS64ue.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
