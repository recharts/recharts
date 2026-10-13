import{r as g,R as e}from"./iframe-DuosGyDB.js";import{B as s}from"./Brush-DYwsk8W6.js";import{R as B}from"./zIndexSlice-Da09UpSD.js";import{C as p}from"./ComposedChart-kJQ__URY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-BjQkedG_.js";import{L as D}from"./LineChart-xl1viAHd.js";import{R as m}from"./ReferenceLine-C7b8ox0c.js";import{C as d}from"./CartesianGrid-Cg8lG5oY.js";import{X as S}from"./XAxis-C-4m1UDl.js";import{Y as A}from"./YAxis-0dGXX3NL.js";import{L as R}from"./Legend-eZbVNtkY.js";import{T as w}from"./Tooltip-BrMBPvou.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-kSYl9qai.js";import"./resolveDefaultProps-CFaFAnLx.js";import"./Text-ws-7QaY4.js";import"./pageBackground-BOChA0aI.js";import"./isWellBehavedNumber-BR0iKwBs.js";import"./useId-5tXA_KMi.js";import"./useBackwardsCompatibleTheme-EzUoSKUQ.js";import"./chartDataContext-Fsi0dBi5.js";import"./axisSelectors-BhFgqUpp.js";import"./throttle-BFe2F0jb.js";import"./index-BIKpN8wQ.js";import"./index-CkmA4MDq.js";import"./d3-scale-BcfysILW.js";import"./RechartsWrapper-DqMyJeth.js";import"./index-Bx3uuCHN.js";import"./index-DB6X8Jkp.js";import"./renderedTicksSlice-Bhnw81l8.js";import"./index-C8gr5WFK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BF7NkNru.js";import"./CategoricalChart-CnszpMMB.js";import"./Curve-BLnV7n0Y.js";import"./types-DpRgdAcC.js";import"./step-BE4SoRR0.js";import"./path-DyVhHtw_.js";import"./activeStyles-Cx6m_4O3.js";import"./Label-CD5z-ltE.js";import"./ZIndexLayer-B7YuRzj4.js";import"./useAnimationId-DZvkGEgW.js";import"./dataEntryStyles-BoHQtdtS.js";import"./ActivePoints-0tjl7oMt.js";import"./Dot-CVHLTOCE.js";import"./ErrorBarContext-BL5frxgR.js";import"./GraphicalItemClipPath-Bpu4eZkp.js";import"./SetGraphicalItem-Cbz0EDFc.js";import"./getRadiusAndStrokeWidthFromDot-BHE1JVwz.js";import"./ActiveShapeUtils-HElctZzh.js";import"./useEffectiveDataKey-BuRZ7bwL.js";import"./CartesianAxis-BQQINrGM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-BB8GDQjJ.js";import"./symbol-2BGeghEi.js";import"./useElementOffset-icNFqDBx.js";import"./uniqBy-Cc00XvmO.js";import"./iteratee-Dr0P3_26.js";import"./Cross-RcbzNpk6.js";import"./Rectangle-xphMqkoD.js";import"./util-Dxo8gN5i.js";import"./Sector-BdKNyDn7.js";const qe={component:s},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(s,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(s,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},i={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(s,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},He=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(C=a.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var E,I,f;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      </ComposedChart>;
  }
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var L,b,K;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      </ComposedChart>;
  }
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};export{a as ControlledBrush,i as NoChartBrush,o as PanoramicBrush,He as __namedExportsOrder,qe as default};
