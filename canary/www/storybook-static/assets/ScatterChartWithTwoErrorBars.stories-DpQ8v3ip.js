import{e as r}from"./iframe-C9RdRDH3.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DvvC5kBy.js";import{C as d}from"./CartesianGrid-lcSY4Olk.js";import{X as c}from"./XAxis-zBRK63wF.js";import{Y as y}from"./YAxis-JD4R_vdV.js";import{S as h}from"./Scatter-yMx3Knex.js";import{E as e}from"./ErrorBar-CcrWUeXx.js";import{T as u}from"./Tooltip-hUESGT__.js";import{R as f}from"./RechartsHookInspector-CTsDIORN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BmF3qkQ2.js";import"./arrayEqualityCheck-HNNWYF-c.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cmmY0qvO.js";import"./immer-Bs-9thuH.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DVhUM6Av.js";import"./hooks-wHvHG3dE.js";import"./axisSelectors-D6QzvLNM.js";import"./d3-scale-C5VHC7vJ.js";import"./zIndexSlice-BbsfkO0E.js";import"./renderedTicksSlice-BEDhfrBW.js";import"./CartesianChart-CdaihLfO.js";import"./chartDataContext-BYUFQouT.js";import"./CategoricalChart-DNwSkE9v.js";import"./CartesianAxis-B-LYb471.js";import"./Layer-Br4TNC_V.js";import"./Text-wGfDkrTn.js";import"./DOMUtils-Btd4Fsjb.js";import"./Label-nmn7wUcC.js";import"./ZIndexLayer-BHSqW2ug.js";import"./types-zOKv99jr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BodNcXDX.js";import"./Curve-j2GFynBi.js";import"./step-By0pLWNs.js";import"./tooltipContext-Ch9_uRc6.js";import"./Symbols-D5iKcEZY.js";import"./symbol-B9BxRARk.js";import"./ActiveShapeUtils-CdfDZypJ.js";import"./isPlainObject-BkahSEKD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D2WqxHR4.js";import"./useAnimationId-Dkvf8CAV.js";import"./Trapezoid-CaO4Za9k.js";import"./Sector-Dlz-xsu0.js";import"./RegisterGraphicalItemId-lJJ2Llx7.js";import"./ErrorBarContext-Df_rxzkL.js";import"./GraphicalItemClipPath-BaxGUmwM.js";import"./SetGraphicalItem-OEoYsD-F.js";import"./CSSTransitionAnimate-DS7bjVd5.js";import"./useElementOffset-1-iEdSlv.js";import"./uniqBy-Ctz7O3Q0.js";import"./iteratee-CqWD3rtL.js";import"./Cross-BAMZzrR9.js";import"./index-iNo1MV8G.js";import"./ChartSizeDimensions-BfBAtZfD.js";import"./OffsetShower-DGVkIb09.js";import"./PlotAreaShower-DbkHyMR-.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
