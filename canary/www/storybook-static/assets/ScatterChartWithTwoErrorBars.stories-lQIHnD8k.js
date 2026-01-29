import{e as r}from"./iframe-BlWijLqW.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bjd-bfYe.js";import{S as p}from"./ScatterChart-BR8T1e1j.js";import{C as d}from"./CartesianGrid-DlT4qS99.js";import{X as c}from"./XAxis-OLUbmSHc.js";import{Y as y}from"./YAxis-DCz5GEme.js";import{S as h}from"./Scatter-TKxfLH4j.js";import{E as e}from"./ErrorBar-07mqomNz.js";import{T as u}from"./Tooltip-CvfY5XaH.js";import{R as f}from"./RechartsHookInspector-DmBYfqJt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DVoFofdD.js";import"./arrayEqualityCheck-wpbGPGp4.js";import"./resolveDefaultProps-BXixkRdf.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Bq9gEA3Y.js";import"./axisSelectors-BcyrPMqb.js";import"./zIndexSlice-CAH7mPZ1.js";import"./CartesianChart-B-NzXiwJ.js";import"./chartDataContext-Bi-RwErn.js";import"./CategoricalChart-yeAYRiqJ.js";import"./CartesianAxis-Bh0UbraM.js";import"./Layer-3MYXWHxJ.js";import"./Text-zHguMFUU.js";import"./DOMUtils-DB8eToSF.js";import"./Label-Df_5RPeD.js";import"./ZIndexLayer-CJd84X-g.js";import"./types-CMl5R0ed.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CbcjOK7p.js";import"./Curve-DR-_MvJg.js";import"./tooltipContext-DqK1JGcx.js";import"./Symbols-BEH-AFaJ.js";import"./ActiveShapeUtils-CPx9BhWQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IDnxfDb1.js";import"./useAnimationId-B1CL6Xpk.js";import"./Trapezoid-B75mUvLe.js";import"./Sector-BYlteXBh.js";import"./RegisterGraphicalItemId-CGPZoT1R.js";import"./ErrorBarContext-uU_zcojk.js";import"./GraphicalItemClipPath-C9wWAhjz.js";import"./SetGraphicalItem-UAqbhtt1.js";import"./CSSTransitionAnimate-D-7YFrNR.js";import"./useElementOffset-CyDDhNEE.js";import"./iteratee-DmHclTd9.js";import"./Cross-BW--vN7Z.js";import"./index-BlR-9DJp.js";import"./ChartSizeDimensions-CSi05Yh4.js";import"./OffsetShower-C6MwKWid.js";import"./PlotAreaShower-BWRdXOpl.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
