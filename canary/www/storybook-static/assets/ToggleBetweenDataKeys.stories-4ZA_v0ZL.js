import{r as n,R as t}from"./iframe-C_py9VKy.js";import{L as p}from"./LineChart-Bi2vQMMx.js";import{R as s}from"./zIndexSlice-CXPNbLh0.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D7LbaWML.js";import{X as d}from"./XAxis-BQTm69sE.js";import{Y as y}from"./YAxis-1vUjo3Fh.js";import{L as u}from"./Legend-C9QuHw3N.js";import{L as h}from"./Line-COmMeHls.js";import{T as g}from"./Tooltip-D5bH_ViD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CyYB6xNR.js";import"./index-ConrPCjE.js";import"./index-B6PDA8Su.js";import"./index-om3Avrtj.js";import"./index-DFxAgAdx.js";import"./throttle-y-97qzKM.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-XRbHFGyF.js";import"./axisSelectors-B-GKTKT_.js";import"./resolveDefaultProps-DKxyIA_C.js";import"./isWellBehavedNumber-wktK8CV7.js";import"./d3-scale-pH2VCnNX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dc2BthVN.js";import"./chartDataContext-CG11iTCQ.js";import"./CategoricalChart-DJCSwk8E.js";import"./CartesianAxis-DS2REUGr.js";import"./Layer-CJpPulsx.js";import"./Text-CnffV04t.js";import"./DOMUtils-B2RmK7a8.js";import"./Label-DaE8MMQO.js";import"./ZIndexLayer-cfs89nNi.js";import"./types-BjPO6Abx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BRpNQush.js";import"./symbol-BeAdi3ON.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Z_Rs-D5L.js";import"./uniqBy-DjIUo5Dj.js";import"./iteratee-ZqN9mw6Q.js";import"./Curve-Ca8nGQE4.js";import"./step-CMEfwDT5.js";import"./AnimatedItems-BApiggtL.js";import"./useAnimationId-BmA3o4RX.js";import"./ActivePoints-VBrZY_w6.js";import"./Dot-CgRov5lu.js";import"./RegisterGraphicalItemId-BKPrbhTB.js";import"./ErrorBarContext-SwQJmcJ0.js";import"./GraphicalItemClipPath-oE60EnJf.js";import"./SetGraphicalItem-B_lgAFV8.js";import"./getRadiusAndStrokeWidthFromDot-CRhSkevf.js";import"./ActiveShapeUtils-SIhXzT4o.js";import"./Cross-DS3tGU5b.js";import"./Rectangle-Dwgjvbsc.js";import"./util-Dxo8gN5i.js";import"./Sector-PxeYqRgC.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
