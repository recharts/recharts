import{r as n,R as t}from"./iframe-MCQmK-TG.js";import{L as p}from"./LineChart-CB6f3FNc.js";import{R as s}from"./zIndexSlice-BMHpWHLe.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-UiabJrkf.js";import{X as d}from"./XAxis-xj8vDJ23.js";import{Y as y}from"./YAxis-BUA5jm-O.js";import{L as u}from"./Legend-Vw1i6A5_.js";import{L as h}from"./Line-D58bgiXU.js";import{T as g}from"./Tooltip-DoSHN02A.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSMirUgA.js";import"./index-DCwDEUXM.js";import"./index-4hl_PvHL.js";import"./index-iUk-FcRS.js";import"./index-CGFRGdbT.js";import"./throttle-exFJ19dN.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-5teDD8C_.js";import"./axisSelectors-t6G1HMN1.js";import"./resolveDefaultProps-DF8ch7IU.js";import"./isWellBehavedNumber-DF6QZ0lN.js";import"./d3-scale-1trsZxCl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CbiEQRIX.js";import"./chartDataContext-oq73vT2r.js";import"./CategoricalChart-DG8zA7C6.js";import"./CartesianAxis-B42rFi6U.js";import"./Layer-BUisE7Gh.js";import"./Text-LGFyNulV.js";import"./DOMUtils-DeN2A_86.js";import"./Label-DaldQZFv.js";import"./ZIndexLayer-BnKxJfbB.js";import"./types-Cz27ONEA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D248hYs2.js";import"./symbol-C8I9OgJ7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-IqQ0qYQD.js";import"./uniqBy-9wyvpuL-.js";import"./iteratee-D6dL79SH.js";import"./Curve-DfisrzMh.js";import"./step-DU3HZd3T.js";import"./AnimatedItems-Z_ZNAYUP.js";import"./useAnimationId-Ptyt1Cmf.js";import"./ActivePoints-DBM0wjQk.js";import"./Dot-CZGz3E6B.js";import"./RegisterGraphicalItemId-CwAmMMrt.js";import"./ErrorBarContext-7PhmiQse.js";import"./GraphicalItemClipPath-BDardp6y.js";import"./SetGraphicalItem-RVuvzcbz.js";import"./getRadiusAndStrokeWidthFromDot-00OVvYcl.js";import"./ActiveShapeUtils-BJxvN-bC.js";import"./Cross-BuwOH600.js";import"./Rectangle-Dp_gpqgG.js";import"./util-Dxo8gN5i.js";import"./Sector-CSOrAi9m.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
