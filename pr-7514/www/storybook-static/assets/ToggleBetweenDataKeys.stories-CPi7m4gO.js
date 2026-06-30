import{r as n,R as t}from"./iframe-DJHXlrGw.js";import{L as p}from"./LineChart-Cs7y5ZNA.js";import{R as s}from"./zIndexSlice-CFaJnUYw.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-SaI1xQn-.js";import{X as d}from"./XAxis-Bazc91VB.js";import{Y as y}from"./YAxis-BulSHvtc.js";import{L as u}from"./Legend-BJ-Clvso.js";import{L as h}from"./Line-B15qEuth.js";import{T as g}from"./Tooltip-MtmhfVvh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkeMmjUq.js";import"./index-DwS8J4hC.js";import"./index-Be4tbGBe.js";import"./index-BPz6-png.js";import"./index-DwRJQzwD.js";import"./throttle-DAd10cPx.js";import"./get-j_9LvNGC.js";import"./renderedTicksSlice-BKsRhTz6.js";import"./axisSelectors-ClcXvPv0.js";import"./d3-scale-DpYCNPeY.js";import"./resolveDefaultProps-CeQOO-Pe.js";import"./isWellBehavedNumber-Czb4zvRP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BtZogvmq.js";import"./chartDataContext-CJXmJdS8.js";import"./CategoricalChart-BtoYqjdS.js";import"./CartesianAxis-CkFZLbcD.js";import"./Layer-DZpjcI0F.js";import"./Text-CRISoaMT.js";import"./DOMUtils-R0ltg_fS.js";import"./Label-R2VOv6mw.js";import"./ZIndexLayer-KkfMfF_A.js";import"./types-vAWUzS0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CyeV-LI-.js";import"./symbol-Dm5QNlld.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CFTv--jx.js";import"./uniqBy-BVl6QLa6.js";import"./iteratee-BhdXRguK.js";import"./Curve-Dw1fPQvk.js";import"./step-vGwa_xXj.js";import"./AnimatedItems-BgKM4093.js";import"./useAnimationId-CR2wKsf0.js";import"./ActivePoints-ChuwA-C_.js";import"./Dot-C_JeniDT.js";import"./RegisterGraphicalItemId-Dmdqk05n.js";import"./ErrorBarContext-DLSy_XzC.js";import"./GraphicalItemClipPath-Cd-sqkad.js";import"./SetGraphicalItem-BYhVDRYC.js";import"./getRadiusAndStrokeWidthFromDot-WrvxTCng.js";import"./ActiveShapeUtils-CSLmPB1h.js";import"./Cross-kJELHEFE.js";import"./Rectangle-Z1GABkaC.js";import"./util-Dxo8gN5i.js";import"./Sector-BLgFTjIx.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
