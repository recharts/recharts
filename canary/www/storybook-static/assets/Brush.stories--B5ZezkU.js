import{r as g,R as e}from"./iframe-Knpgl7bH.js";import{B as i}from"./Brush-CpwFFBON.js";import{R as B}from"./zIndexSlice-D_JvDPdC.js";import{C as p}from"./ComposedChart-Bz1qQazH.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-CN57dnng.js";import{L as D}from"./LineChart-W2qr3WSf.js";import{R as m}from"./ReferenceLine-B6Cl7Zda.js";import{C as d}from"./CartesianGrid-BgJ1w8c3.js";import{X as S}from"./XAxis-C-pGSkx8.js";import{Y as A}from"./YAxis-BPwWglGS.js";import{L as R}from"./Legend-C_UgWS6K.js";import{T as w}from"./Tooltip-CLC2K7Jb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-BPxKddK_.js";import"./resolveDefaultProps-E9uQbFMh.js";import"./Text-2mzzLjyY.js";import"./ZIndexLayer-B7sLboyu.js";import"./index-CMcZZbu7.js";import"./index-flTgedm9.js";import"./chartDataContext-DMJoTbMZ.js";import"./axisSelectors-DzWAhEt3.js";import"./throttle-CxSZxpUT.js";import"./polarAxisSelectors-_ossNi2Y.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-loN--ZL0.js";import"./RechartsWrapper-RFuLYV8r.js";import"./index-DBy5LZ5m.js";import"./index-CtQ1gC2H.js";import"./renderedTicksSlice-BhGylDYr.js";import"./index-DCjquko5.js";import"./fillDefinitions-D-i4EmzR.js";import"./CartesianChart-BRDQdhrJ.js";import"./CategoricalChart-BP24IEWh.js";import"./getRadiusAndStrokeWidthFromDot-OQ1wYRa8.js";import"./Curve-CoppqT_1.js";import"./types-TSpqzzom.js";import"./step-CX6BMVFF.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CP1LR4vd.js";import"./Label-CUqt0NPv.js";import"./ActivePoints-CLrwMv3j.js";import"./Dot-B0z7ItJf.js";import"./activeStyles-Dx-Bb5mv.js";import"./useAnimationId-sq4gt-Rn.js";import"./Symbols-DbPd2MPF.js";import"./symbol-D5IcYaCj.js";import"./ErrorBarContext-CNCcQkpF.js";import"./SetGraphicalItem-CJ2jMQXm.js";import"./ActiveShapeUtils-DmSfMRR5.js";import"./useEffectiveDataKey-DbJ28nvU.js";import"./CartesianAxis-d_ZDtRCQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-lkTznI83.js";import"./uniqBy-BRZL2BBs.js";import"./iteratee-CHAMY_xX.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CFbCQW-3.js";import"./Rectangle-DSFuXVLV.js";import"./util-Dxo8gN5i.js";import"./Sector-J3mzscDv.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,je as __namedExportsOrder,Fe as default};
