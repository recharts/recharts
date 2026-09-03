import{r as g,R as e}from"./iframe-CQz631Nk.js";import{B as s}from"./Brush-Cf1OxTTs.js";import{R as B}from"./zIndexSlice-BiY29BHb.js";import{C as p}from"./ComposedChart-B-N3Zjvf.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-CQpvxMmw.js";import{L as D}from"./LineChart-BM-J_GGw.js";import{R as m}from"./ReferenceLine-CfBTzxmB.js";import{C as d}from"./CartesianGrid-zqpDe6L_.js";import{X as S}from"./XAxis-DHy0v3jD.js";import{Y as A}from"./YAxis-CWW4X-Ki.js";import{L as R}from"./Legend-BRP3UmY1.js";import{T as w}from"./Tooltip-BP0a5D6r.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-DGn6U-cs.js";import"./resolveDefaultProps-BsWR9NdC.js";import"./Text-CpmwLb5H.js";import"./DOMUtils-V3cEDC71.js";import"./isWellBehavedNumber-B7MN_LAX.js";import"./useId-BSAAHf1D.js";import"./useBackwardsCompatibleTheme-DhqH6-Ub.js";import"./chartDataContext-ef-S8XKm.js";import"./axisSelectors-SdSrtuX_.js";import"./throttle-tlVaut9a.js";import"./index-DCbtYhHK.js";import"./index-CDndXHyS.js";import"./d3-scale-DbP7sHTP.js";import"./RechartsWrapper-Btix0jtf.js";import"./index-BlfYBgju.js";import"./index-w2pZ54DA.js";import"./renderedTicksSlice-lkRk7heP.js";import"./index-CUVgoBSt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-WE1bkj_w.js";import"./CategoricalChart-6rYejfBQ.js";import"./Curve-B1Y35Tq4.js";import"./types-qf3XACEN.js";import"./step-DM9ed4F2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B3DzMe78.js";import"./Label-DQhaNgKG.js";import"./ZIndexLayer-LgQGURcB.js";import"./useAnimationId-DN0POjqt.js";import"./ActivePoints-BbCYqZ1B.js";import"./Dot-Br265cWC.js";import"./RegisterGraphicalItemId-Bdyk4ltG.js";import"./ErrorBarContext-BVC7bug8.js";import"./GraphicalItemClipPath-Db7czniJ.js";import"./SetGraphicalItem-DLB5o72P.js";import"./getRadiusAndStrokeWidthFromDot-CtkJeIr5.js";import"./ActiveShapeUtils-BfK0DvMY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Dd11BP7Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-BRx4T2_d.js";import"./symbol-JqaxEo1O.js";import"./useElementOffset-DUjnthxD.js";import"./uniqBy-BOB5B76R.js";import"./iteratee-D419HqXa.js";import"./Cross-D5AY4MRF.js";import"./Rectangle-Cs9OQ1Xh.js";import"./util-Dxo8gN5i.js";import"./Sector-BP4-KhMZ.js";const qe={component:s},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(s,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(s,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},i={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(s,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const He=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,i as NoChartBrush,o as PanoramicBrush,He as __namedExportsOrder,qe as default};
