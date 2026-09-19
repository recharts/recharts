import{r as p,R as t}from"./iframe-CiEll_hl.js";import{L as n}from"./LineChart-BLTTwq0E.js";import{R as s}from"./zIndexSlice-BWUZw0HV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bs8ZX4h4.js";import{X as d}from"./XAxis-BecTjeSU.js";import{Y as y}from"./YAxis-veNA_t3h.js";import{L as u}from"./Legend-Uo7plN5O.js";import{L as h}from"./Line-Dp0tH0hq.js";import{T as g}from"./Tooltip-DCP_zXab.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-8qI1d7ig.js";import"./resolveDefaultProps-duavw9Kl.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Czhrsmz1.js";import"./throttle-D31XxRNM.js";import"./index-C6gwqJSk.js";import"./index-CWa27twE.js";import"./isWellBehavedNumber-ry_onT8i.js";import"./d3-scale-CoahAzwi.js";import"./index-DPEbYR3l.js";import"./index-d_0OIgID.js";import"./renderedTicksSlice-CDeLucdV.js";import"./index-RfC6TSb7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-YzLYuA0Z.js";import"./chartDataContext-A6K28S5n.js";import"./CategoricalChart-yzrwRYbH.js";import"./CartesianAxis-Cv1crkEc.js";import"./Layer-Bl66F1TU.js";import"./Text-C5G8lazz.js";import"./DOMUtils-HtrcCiap.js";import"./useId-BF2rDIp_.js";import"./useBackwardsCompatibleTheme-B38ON0Kc.js";import"./Label-2sILoPl9.js";import"./ZIndexLayer-DOTS06hC.js";import"./types-MiZov7mG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-WUygGVJ4.js";import"./symbol-BVUZRMIr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CAsd9Skh.js";import"./uniqBy-CYyDJIfO.js";import"./iteratee-hWILKxtV.js";import"./Curve-bnxtETge.js";import"./step-CMCW6W2-.js";import"./AnimatedItems-ABeUxSrb.js";import"./useAnimationId-DB2VCJ-C.js";import"./ActivePoints-Dc8U7ztD.js";import"./Dot-D6RGfzzu.js";import"./RegisterGraphicalItemId-V_3RkT2Z.js";import"./ErrorBarContext-DFolGKyI.js";import"./GraphicalItemClipPath-CNKUlu4p.js";import"./SetGraphicalItem-BGxIGAFZ.js";import"./getRadiusAndStrokeWidthFromDot-IdnOPtwR.js";import"./ActiveShapeUtils-CIEveTom.js";import"./useGraphicalItemIdentity-DPacc47z.js";import"./Cross-C_JPqmaw.js";import"./Rectangle-BFCB6ihn.js";import"./util-Dxo8gN5i.js";import"./Sector-BAfGjF5d.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
