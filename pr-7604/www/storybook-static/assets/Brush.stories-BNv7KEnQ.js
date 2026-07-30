import{r as g,R as e}from"./iframe-Bcp8O5w9.js";import{B as i}from"./Brush-B4SkzG9T.js";import{R as B}from"./zIndexSlice-D89hrw0J.js";import{C as p}from"./ComposedChart-BTnoYdrr.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-D5QNWWOp.js";import{L as D}from"./LineChart-C7BW0A7x.js";import{R as m}from"./ReferenceLine-UUT50zB1.js";import{C as d}from"./CartesianGrid-B6HQ76qh.js";import{X as S}from"./XAxis-BiaLRW8b.js";import{Y as A}from"./YAxis-BfwBAog7.js";import{L as R}from"./Legend-Btq_M8Vo.js";import{T as w}from"./Tooltip-B3P4jtz5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-be5X0p7R.js";import"./resolveDefaultProps-DZIqX7HS.js";import"./Text-wdIqEHol.js";import"./DOMUtils-CK1FWe6a.js";import"./isWellBehavedNumber-Cv5vkYjV.js";import"./chartDataContext-DNuqophf.js";import"./RechartsWrapper-B5FCNVgo.js";import"./index-BdFtKw5i.js";import"./index-CR585iKh.js";import"./index-8PiiTqGz.js";import"./index-D5K7XRz9.js";import"./throttle-DAyQB-br.js";import"./renderedTicksSlice-DrTN80Ah.js";import"./axisSelectors-CoK9S3rY.js";import"./d3-scale-CsP8i0FA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CD4QeXTd.js";import"./CategoricalChart-YaAk4iek.js";import"./Curve-CliZJ8qV.js";import"./types-BoqxM4LK.js";import"./step-BcSwTyGL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dei1yN9c.js";import"./Label-hDShUpMs.js";import"./ZIndexLayer-DGoKIl_r.js";import"./useAnimationId-BscNfyQw.js";import"./ActivePoints-PTULrlcl.js";import"./Dot-Chi-tYTx.js";import"./RegisterGraphicalItemId-BpEAlExL.js";import"./ErrorBarContext-9-QyAyWc.js";import"./GraphicalItemClipPath-KqXDj0-X.js";import"./SetGraphicalItem-3vj6veQk.js";import"./getRadiusAndStrokeWidthFromDot-CozuNNm5.js";import"./ActiveShapeUtils-BmZAHZJ_.js";import"./RechartsThemeContext-BZ4wBUr5.js";import"./CartesianAxis-BtWjjBG7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-8OsQeKqu.js";import"./symbol-BW_3rSZb.js";import"./useElementOffset-CqpNhrrP.js";import"./uniqBy-DzHmY-V-.js";import"./iteratee-gle5_reD.js";import"./Cross-B3v7MqTP.js";import"./Rectangle-D0LEdSIL.js";import"./util-Dxo8gN5i.js";import"./Sector-Ch7tFQyh.js";const Ye={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var L,b,K;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Fe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Fe as __namedExportsOrder,Ye as default};
