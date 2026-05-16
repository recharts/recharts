import{e as r}from"./iframe-CiPNgAw4.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-DXQjw-lr.js";import{C as d}from"./CartesianGrid-v62u6AaS.js";import{X as c}from"./XAxis-BLKgRQop.js";import{Y as y}from"./YAxis-D3BtMUGk.js";import{S as h}from"./Scatter-CooTgz3O.js";import{E as e}from"./ErrorBar-NWvlyvVj.js";import{T as u}from"./Tooltip-jRF_hFrM.js";import{R as f}from"./RechartsHookInspector-CVL4J5oe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7DJEHdB.js";import"./arrayEqualityCheck-C6nfogx3.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BDpBhHr1.js";import"./immer-BXEbVIgV.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DQVpqsS2.js";import"./hooks-BI7NI193.js";import"./axisSelectors-Cy_y_L06.js";import"./d3-scale-CMk2gc8P.js";import"./zIndexSlice-BxzsaYhB.js";import"./renderedTicksSlice-Bj7nK2mV.js";import"./CartesianChart-BCFleW8G.js";import"./chartDataContext-BajvTs6w.js";import"./CategoricalChart-DbOO-7mB.js";import"./CartesianAxis-CWGiyJPj.js";import"./Layer-tX1B1sjt.js";import"./Text-BwxXBXY0.js";import"./DOMUtils-D_v29T4S.js";import"./Label-C61zhpRD.js";import"./ZIndexLayer-D-L4yEZ6.js";import"./types-DpsbB84I.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-2ol7Qocl.js";import"./Curve-CIk8sgOv.js";import"./step-DNW2l5aF.js";import"./tooltipContext-BNVb3LYw.js";import"./Symbols-CZNQWcFs.js";import"./symbol-DD46dP6C.js";import"./ActiveShapeUtils-DVoj5wPa.js";import"./isPlainObject-32kxwUzR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvhSXBPG.js";import"./useAnimationId-ZolSEiin.js";import"./Trapezoid-DD_RcOCU.js";import"./Sector-Cott3o-2.js";import"./RegisterGraphicalItemId-Cfezvs_M.js";import"./ErrorBarContext-DeoWvLpT.js";import"./GraphicalItemClipPath-KikDG9N5.js";import"./SetGraphicalItem-Cc5PlSKV.js";import"./CSSTransitionAnimate-CyaqXVnp.js";import"./useElementOffset-BTbIUCG9.js";import"./uniqBy-C_cZU6b-.js";import"./iteratee-Drtbgz-g.js";import"./Cross-2PZ7Q5B8.js";import"./index-BVLD_GdP.js";import"./ChartSizeDimensions-BUpN4cof.js";import"./OffsetShower-BX6EEwKB.js";import"./PlotAreaShower-D9cRvfnk.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
