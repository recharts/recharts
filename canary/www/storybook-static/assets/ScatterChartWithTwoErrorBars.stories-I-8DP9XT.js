import{e as r}from"./iframe-DpWgHt6w.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-B73wXwWk.js";import{C as d}from"./CartesianGrid-DG4l4Bs6.js";import{X as c}from"./XAxis-D6yPajmq.js";import{Y as y}from"./YAxis-YoDPLsa3.js";import{S as h}from"./Scatter-otmlkrv5.js";import{E as e}from"./ErrorBar-CB06wOPF.js";import{T as u}from"./Tooltip-CMAZBnKM.js";import{R as f}from"./RechartsHookInspector-6ffAoSqV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0YIbfluk.js";import"./arrayEqualityCheck-DwmAcYIn.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-COHSVhtV.js";import"./immer-DDDJMxmJ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CN4qQn03.js";import"./hooks-BAFDLItO.js";import"./axisSelectors-xFLTDAtC.js";import"./d3-scale-cdM3iwUh.js";import"./zIndexSlice-QDaeSxhx.js";import"./renderedTicksSlice-DdqXW_Ob.js";import"./CartesianChart-Cb4Oxfp_.js";import"./chartDataContext-Dv1BkF7u.js";import"./CategoricalChart-Cws7_zW3.js";import"./CartesianAxis-Boaam3Pv.js";import"./Layer-CgpQp7eP.js";import"./Text-BFrtQgrO.js";import"./DOMUtils-B14zrq1j.js";import"./Label-D5phAYj6.js";import"./ZIndexLayer-CK7DJrWn.js";import"./types-DZ2OBnNV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DCSGTX2b.js";import"./Curve-BqRAMsJi.js";import"./step-InUwQjei.js";import"./tooltipContext-CQEG5yO5.js";import"./Symbols-DT0KAb22.js";import"./symbol-Btcnnf07.js";import"./ActiveShapeUtils-LLoi1e2l.js";import"./isPlainObject-B9PQnOFQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BwaSbVPa.js";import"./useAnimationId-DyHfJJP5.js";import"./Trapezoid-BUbhVMuQ.js";import"./Sector-c9hexcBL.js";import"./RegisterGraphicalItemId-Bt0sIJ7x.js";import"./ErrorBarContext-DzKYs5DP.js";import"./GraphicalItemClipPath-DC27cx5Q.js";import"./SetGraphicalItem-BnrGj-ZR.js";import"./CSSTransitionAnimate-DZcMIAYv.js";import"./useElementOffset-Cy-Pbb11.js";import"./uniqBy-P7Rpg-nk.js";import"./iteratee-CvqUUzUs.js";import"./Cross-BejlkNkc.js";import"./index-DtY3ArMC.js";import"./ChartSizeDimensions-B93BH9rD.js";import"./OffsetShower-BhzT3OUi.js";import"./PlotAreaShower-BHWXXqUJ.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
