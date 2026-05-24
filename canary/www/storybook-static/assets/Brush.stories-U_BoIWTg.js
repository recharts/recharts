import{u as v,e}from"./iframe-DrZHGfnp.js";import{B as i}from"./Brush-BE-Obwh2.js";import{g as R}from"./arrayEqualityCheck-BU1FgpAp.js";import{C as p}from"./ComposedChart-DxmmuLi3.js";import{p as c}from"./Page-DPte-9pC.js";import{L as t}from"./Line-CIA-i1-C.js";import{R as u}from"./RechartsHookInspector-C7Iml_JQ.js";import{L as B}from"./LineChart-d5-J2gEJ.js";import{R as m}from"./ReferenceLine-DKqxOs1v.js";import{C as d}from"./CartesianGrid-CyZhB5js.js";import{X as S}from"./XAxis-CfPxufGn.js";import{Y as A}from"./YAxis-BDktYU23.js";import{L as w}from"./Legend-CpyzK0FE.js";import{T as N}from"./Tooltip-JtQYOAY5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./d3-scale-txqkfOII.js";import"./immer-D0UXwCcn.js";import"./Layer-ClTbBP2Y.js";import"./resolveDefaultProps-DYZAgT61.js";import"./Text-BwWh8Zp8.js";import"./DOMUtils-DJHj6OuI.js";import"./chartDataContext-C7FGjj0C.js";import"./RechartsWrapper-B7Mz9FPG.js";import"./index-BP-Nf1tN.js";import"./hooks-D3ynsMIn.js";import"./axisSelectors-m6_CTWOp.js";import"./zIndexSlice-D-dyI62l.js";import"./renderedTicksSlice-7FEKlWww.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJW3KXl1.js";import"./CategoricalChart-iLXWxvTy.js";import"./Curve-BOI2pjPZ.js";import"./types-6QYLxKbI.js";import"./step-BToukfgR.js";import"./path-DyVhHtw_.js";import"./ReactUtils-DDlt2sQ2.js";import"./Label-BqIF3DzG.js";import"./ZIndexLayer-BfJNfeY9.js";import"./ActivePoints-Ef6nRbul.js";import"./Dot-DoeZby35.js";import"./RegisterGraphicalItemId-BFqXK8dS.js";import"./ErrorBarContext-RFgpZOgG.js";import"./GraphicalItemClipPath-DRJNib_j.js";import"./SetGraphicalItem-BQUpenlh.js";import"./useAnimationId-BQVYm0pl.js";import"./getRadiusAndStrokeWidthFromDot-DUr3gs5u.js";import"./ActiveShapeUtils-Dr-kHcGB.js";import"./index-BaPlyvUD.js";import"./ChartSizeDimensions-y6v6hFmg.js";import"./OffsetShower-BQ-We3NI.js";import"./PlotAreaShower-DUTHK_JT.js";import"./CartesianAxis-DI4oFfLH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-B4qAZBiK.js";import"./symbol-S8QHyV4z.js";import"./useElementOffset-CqMnl3PK.js";import"./uniqBy-XAk6kl3o.js";import"./iteratee-usRtL8cc.js";import"./Cross-B5ARFrTc.js";import"./Rectangle-D6rErMHV.js";import"./Sector-DH0jrwMS.js";const Ye={component:i},a={render:l=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(u,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:l=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(u,null))},s={render:l=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(B,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(u,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (_args: Args) => {
    const [startIndex, setStartIndex] = useState<number | undefined>(2);
    const [endIndex, setEndIndex] = useState<number | undefined>(5);
    return <>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" isAnimationActive={false} />

            <Brush startIndex={startIndex} endIndex={endIndex} onChange={e => {
            setEndIndex(e.endIndex);
            setStartIndex(e.startIndex);
          }} alwaysShowText />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
        <input type="number" aria-label="startIndex" value={startIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setStartIndex(num);
      }} />
        <input aria-label="endIndex" value={endIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setEndIndex(num);
      }} />
      </>;
  }
}`,...(x=(E=a.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var I,f,L;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData} margin={{
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
        r: 8
      }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <ReferenceLine stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
        <Brush dataKey="name">
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
        <Tooltip />
        <RechartsHookInspector />
      </ComposedChart>;
  }
}`,...(L=(f=o.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var b,K,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData}>
        <Brush>
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
        <RechartsHookInspector />
      </ComposedChart>;
  }
}`,...(D=(K=s.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};const Fe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Fe as __namedExportsOrder,Ye as default};
