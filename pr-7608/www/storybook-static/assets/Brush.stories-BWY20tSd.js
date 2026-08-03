import{r as g,R as e}from"./iframe-zGdozCQh.js";import{B as i}from"./Brush-Cj315008.js";import{R as B}from"./zIndexSlice-CEf5y4wD.js";import{C as p}from"./ComposedChart-Dqdl2vPn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-pA2XX7ul.js";import{L as D}from"./LineChart-D4eUTekv.js";import{R as m}from"./ReferenceLine-Bf0X8YHI.js";import{C as d}from"./CartesianGrid-UhJmQ7sb.js";import{X as S}from"./XAxis-PIf9M3x3.js";import{Y as A}from"./YAxis-BF2yy0dt.js";import{L as R}from"./Legend-C2A5xOW4.js";import{T as w}from"./Tooltip-CstuRqLn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-C16c9YM8.js";import"./resolveDefaultProps-DGss-nCf.js";import"./Text-BFD_FCb6.js";import"./DOMUtils-BJDR7s4v.js";import"./isWellBehavedNumber-BpeZz3pN.js";import"./chartDataContext-cAMS_PG1.js";import"./RechartsWrapper-S6h0L_Sx.js";import"./index-Byuc73NK.js";import"./index-lgjWstKk.js";import"./index-Be9faTsQ.js";import"./index-BA1qNDAx.js";import"./throttle-DvYlmrcU.js";import"./renderedTicksSlice-BCsCwo08.js";import"./axisSelectors-BKjuK8lH.js";import"./d3-scale-MsmZCvzu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C5t9uLew.js";import"./CategoricalChart-BpCZjXPz.js";import"./Curve-4P44R3Ym.js";import"./types-D_e406XV.js";import"./step-B84DZizD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-jN_ADWTf.js";import"./Label-Cn4tQISS.js";import"./ZIndexLayer-BxlIB-HR.js";import"./useAnimationId-ZvRvsbh2.js";import"./ActivePoints-CAJ4vJY1.js";import"./Dot-D23X09CK.js";import"./RegisterGraphicalItemId-COPie9tE.js";import"./ErrorBarContext-5XLz8TVO.js";import"./GraphicalItemClipPath-DyeI25HQ.js";import"./SetGraphicalItem-CU1gvNiL.js";import"./graphicalItemIdentity-CDiHfDkn.js";import"./ActiveShapeUtils-9hROMAJM.js";import"./RechartsThemeContext-DKHHji-l.js";import"./CartesianAxis-7tIOhqG7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-BThXlhxZ.js";import"./symbol-BV0awSkH.js";import"./useElementOffset-DESkP0lj.js";import"./uniqBy-CNAGsW9V.js";import"./iteratee-BrMUzA5Z.js";import"./Cross-FBwxDX_O.js";import"./Rectangle-Cys6_Hxz.js";import"./util-Dxo8gN5i.js";import"./Sector-DoePNCKc.js";const Ye={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
