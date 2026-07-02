import{r as n,R as t}from"./iframe-CUx1TCgW.js";import{L as p}from"./LineChart-CNLXTUer.js";import{R as s}from"./zIndexSlice-CyWJB_IO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-uH6Q1yTX.js";import{X as d}from"./XAxis-XVUuusjp.js";import{Y as y}from"./YAxis-DnVtyTYT.js";import{L as u}from"./Legend-DP9jdGkT.js";import{L as h}from"./Line-BEUTyBzO.js";import{T as g}from"./Tooltip--yATZ1LX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DPzAHq-Z.js";import"./index-CvhQIsHS.js";import"./index-BwmXDkUH.js";import"./index-DFl4S33S.js";import"./index-BJ8mfrgX.js";import"./throttle-BjWBzxHj.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DwQTH0-L.js";import"./axisSelectors-VAnXlTNN.js";import"./resolveDefaultProps-BueptT4L.js";import"./isWellBehavedNumber-CUV8846M.js";import"./d3-scale-BarhEeTK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BiT6vKeC.js";import"./chartDataContext-DUiXobBm.js";import"./CategoricalChart-BV_ZCc_1.js";import"./CartesianAxis-BocxUsAL.js";import"./Layer-DkHmdg7h.js";import"./Text-C0Bz7-yS.js";import"./DOMUtils-D7djwgJL.js";import"./Label-Bd7WMI0X.js";import"./ZIndexLayer-B-tk4cwY.js";import"./types-5kZg7jgz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Ce7wtBIG.js";import"./symbol-3q2YBEtt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DNdZu7MT.js";import"./uniqBy-DSJ0hFsD.js";import"./iteratee-CuBpgztc.js";import"./Curve-Mg827IgF.js";import"./step-Dl-o-ZW1.js";import"./AnimatedItems-ScvXBbCb.js";import"./useAnimationId-Cx6lzC6E.js";import"./ActivePoints-BFL4MLXA.js";import"./Dot-CUsFN3PS.js";import"./RegisterGraphicalItemId-BLmhcDXv.js";import"./ErrorBarContext-h5QrqZl2.js";import"./GraphicalItemClipPath-J1io5uDl.js";import"./SetGraphicalItem-CaISs0rU.js";import"./getRadiusAndStrokeWidthFromDot-CPoinBTG.js";import"./ActiveShapeUtils-D9lVsXDE.js";import"./Cross-Bzly_9F2.js";import"./Rectangle-C2v-PTgf.js";import"./util-Dxo8gN5i.js";import"./Sector-BCKOGouU.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
