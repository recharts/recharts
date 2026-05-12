import{e as r}from"./iframe-1J0v0kJa.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-DAZombWX.js";import{C as d}from"./CartesianGrid-BJ72W802.js";import{X as c}from"./XAxis-BA2sHg_J.js";import{Y as y}from"./YAxis-BN3lk6r1.js";import{S as h}from"./Scatter-Dlh9Q5QI.js";import{E as e}from"./ErrorBar-DCtAaVlh.js";import{T as u}from"./Tooltip-O0JzmClx.js";import{R as f}from"./RechartsHookInspector-D3XyLt9P.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-NfAPn5nO.js";import"./arrayEqualityCheck-Crr3Dzh6.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C05SE_tf.js";import"./immer-ZnQZAws8.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CooR3W3l.js";import"./hooks-D7UD8X0t.js";import"./axisSelectors-DmWq6GuE.js";import"./d3-scale-WGdCtqiA.js";import"./zIndexSlice-DMwFl-HJ.js";import"./renderedTicksSlice-CcC_3ltP.js";import"./CartesianChart-T051KWch.js";import"./chartDataContext-CLazaXIr.js";import"./CategoricalChart-_SeB5FDZ.js";import"./CartesianAxis-BEIIuhLy.js";import"./Layer-BVvsC5_K.js";import"./Text-DVd_qj4R.js";import"./DOMUtils-CddqG7G1.js";import"./Label-BoTwLtcO.js";import"./ZIndexLayer-Bol6PWej.js";import"./types-DbkoSsM0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DrCtqFWq.js";import"./Curve-MBHSj-Hn.js";import"./step-D8iwa8wm.js";import"./tooltipContext-DCAa6nAg.js";import"./Symbols-B03fqPxI.js";import"./symbol-DdOQHYIO.js";import"./ActiveShapeUtils-DPgm42Av.js";import"./isPlainObject-yfWDawVf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtnB5yHC.js";import"./useAnimationId-AI_H7XbQ.js";import"./Trapezoid-BQHCtBz1.js";import"./Sector-DrN7HSuk.js";import"./RegisterGraphicalItemId-Ds4EEh5p.js";import"./ErrorBarContext-BoDeu_Di.js";import"./GraphicalItemClipPath-AV19Jsyu.js";import"./SetGraphicalItem-CdiSFPyl.js";import"./CSSTransitionAnimate-BEFL63Vx.js";import"./useElementOffset-DD7oMeZg.js";import"./uniqBy-31dyuDjs.js";import"./iteratee-CanO0FQp.js";import"./Cross-DWSxO7oX.js";import"./index-tjWZGZoc.js";import"./ChartSizeDimensions-DBgMadMY.js";import"./OffsetShower-L7gF9BZe.js";import"./PlotAreaShower-C_TnXU0T.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
