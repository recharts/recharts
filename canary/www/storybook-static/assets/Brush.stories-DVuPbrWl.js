import{r as g,R as e}from"./iframe-DgA6x1az.js";import{B as i}from"./Brush-DQPgfcne.js";import{R as B}from"./zIndexSlice-BFMaekmq.js";import{C as p}from"./ComposedChart-ByKzrUfc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-D138P_9w.js";import{L as D}from"./LineChart-CiGtn6Po.js";import{R as m}from"./ReferenceLine-DSCKScrC.js";import{C as d}from"./CartesianGrid-obB5dC-e.js";import{X as S}from"./XAxis-COtnzKrI.js";import{Y as A}from"./YAxis-Bq2KiL_g.js";import{L as R}from"./Legend-Ck_IYBzg.js";import{T as w}from"./Tooltip-CbixLulH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-4UauM4-I.js";import"./resolveDefaultProps-WkX6zUQT.js";import"./Text-5b15Y2Dk.js";import"./ZIndexLayer-CKzh_iFN.js";import"./index-TMkZxmcU.js";import"./index-D3kvvSt0.js";import"./chartDataContext-BQDV-mFo.js";import"./axisSelectors-BWYipoBl.js";import"./throttle-BeFzmqAe.js";import"./polarAxisSelectors-FlPJLKCl.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFWCEDhR.js";import"./RechartsWrapper-DDZDydJY.js";import"./index-hmFEHNSs.js";import"./index-DfxP2LJH.js";import"./renderedTicksSlice-Cbzlud4G.js";import"./index-Bhp_Ctpy.js";import"./fillDefinitions-D7cR_ZXA.js";import"./CartesianChart-xScX7k_y.js";import"./CategoricalChart-925-SQc0.js";import"./getRadiusAndStrokeWidthFromDot-9ffd66xL.js";import"./Curve-C1ngk-4z.js";import"./types-BWKVAmkC.js";import"./step-CeJDq7tp.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-C5svgbWd.js";import"./Label-SeLMQAdg.js";import"./ActivePoints-D6pOQsPw.js";import"./Dot-DDXn63wb.js";import"./activeStyles-CoM8kTSe.js";import"./useAnimationId-DOzFiRYM.js";import"./Symbols-DrLVelb5.js";import"./symbol-CCLUbilH.js";import"./ErrorBarContext-BPyt6eZ1.js";import"./SetGraphicalItem-B9ymtMOj.js";import"./ActiveShapeUtils-CCImj5PR.js";import"./useEffectiveDataKey-B9lYa-g7.js";import"./CartesianAxis-RM9TiRUv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-CAQy_pe4.js";import"./uniqBy-BFi66pIj.js";import"./iteratee-B8NyNZ1U.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CEcV7W6E.js";import"./Rectangle-DYgSAKaQ.js";import"./util-Dxo8gN5i.js";import"./Sector-C4f4mMlC.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
