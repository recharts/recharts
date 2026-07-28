import{r as g,R as e}from"./iframe-DuK0Qil1.js";import{B as i}from"./Brush-DCS2vAp5.js";import{R as B}from"./zIndexSlice-CDnfQqmd.js";import{C as p}from"./ComposedChart-CoDAatDa.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-DNdMLtbX.js";import{L as D}from"./LineChart-lP3Ye75E.js";import{R as m}from"./ReferenceLine-DGqnPZ1G.js";import{C as d}from"./CartesianGrid-CoCKhxhu.js";import{X as S}from"./XAxis-5-F4R60_.js";import{Y as A}from"./YAxis-DUlzRBIx.js";import{L as R}from"./Legend-CFgZ7u0m.js";import{T as w}from"./Tooltip-CiBanZOe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-DkfKlAwf.js";import"./resolveDefaultProps-oCmlrVLK.js";import"./Text-D4DIOP-8.js";import"./DOMUtils-n5aJojsY.js";import"./isWellBehavedNumber-DX_vizwS.js";import"./chartDataContext-CfvZMLTP.js";import"./RechartsWrapper-DniM3uOm.js";import"./index-DwA8b1Ou.js";import"./index-DhoW-uSW.js";import"./index-tfefZ_nO.js";import"./index-CKpzsMgh.js";import"./throttle-DSTeDcIR.js";import"./renderedTicksSlice-CSJ2A-w6.js";import"./axisSelectors-_6NgKNdR.js";import"./d3-scale-DuTdgHoH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BQw3D51-.js";import"./CategoricalChart-D9Svi6qf.js";import"./Curve-CAqM1U-K.js";import"./types-Ch2-4RAi.js";import"./step-BW4Xq2ef.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CBhdDdvc.js";import"./Label-BVUrQ6r5.js";import"./ZIndexLayer-BaKptJ0d.js";import"./useAnimationId-nnglBd7S.js";import"./ActivePoints-Dq5H8yZY.js";import"./Dot-C7D6mqds.js";import"./RegisterGraphicalItemId-BqmtVyAz.js";import"./ErrorBarContext-84EKHKmH.js";import"./GraphicalItemClipPath-BN5jaNNE.js";import"./SetGraphicalItem-D4hSZyvD.js";import"./getRadiusAndStrokeWidthFromDot-DcB-LW-j.js";import"./ActiveShapeUtils-B7fe-RtC.js";import"./RechartsThemeContext-CZE5IotG.js";import"./CartesianAxis-D2hc_RJR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-Br9ylzN1.js";import"./symbol-Bg-Ontnx.js";import"./useElementOffset-B2PIp49y.js";import"./uniqBy-eNjjwLbW.js";import"./iteratee-BKzRmdu1.js";import"./Cross-CnY9yMSL.js";import"./Rectangle-BwZ6jX28.js";import"./util-Dxo8gN5i.js";import"./Sector-Drp5OGvW.js";const Ye={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
