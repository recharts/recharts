import{r as n,R as t}from"./iframe-rYRmlY_w.js";import{L as p}from"./LineChart-B_lQRq1z.js";import{R as s}from"./zIndexSlice-CW9g3Df4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B1mxfGL-.js";import{X as d}from"./XAxis-B2S1kxsc.js";import{Y as y}from"./YAxis-BWeWjLFg.js";import{L as u}from"./Legend-DTUQ316l.js";import{L as h}from"./Line-OyqWaweM.js";import{T as g}from"./Tooltip-BJy8LCx9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Df0Nzpvc.js";import"./index-LHDP7ZRA.js";import"./index-mkET9CIq.js";import"./index-C9MyWVnc.js";import"./index-XYmaX6Gc.js";import"./throttle-DMLB0n1a.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CawrvlcN.js";import"./resolveDefaultProps-BpsYi27l.js";import"./isWellBehavedNumber-I3Ct3Qx4.js";import"./d3-scale-C-FCD3Na.js";import"./renderedTicksSlice-BaDCcj0z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Di-wUoL0.js";import"./chartDataContext-CUzIUSSV.js";import"./CategoricalChart-BXI0eqUO.js";import"./CartesianAxis-BPXoMhkW.js";import"./Layer-Dpa7ZKP5.js";import"./Text-yyeh64ow.js";import"./DOMUtils-vuT3ag2A.js";import"./Label-C_0fnefy.js";import"./ZIndexLayer-DjuCBj9U.js";import"./types-B2Hj88Lf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C6kBHVPv.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-hfYUrlaK.js";import"./symbol-Bbig07af.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BlBkdftn.js";import"./uniqBy-1Q7zCRmp.js";import"./iteratee-C2W6XbU2.js";import"./Curve-Dde8oLlo.js";import"./step-BmztjEzR.js";import"./AnimatedItems-CIev447X.js";import"./useAnimationId-B08Ps5mJ.js";import"./ActivePoints-BM73sJ66.js";import"./Dot-BJyh6EJc.js";import"./RegisterGraphicalItemId-CgoQC8_y.js";import"./ErrorBarContext-D9hFLWDz.js";import"./graphicalItemIdentity-CcyqkVrD.js";import"./SetGraphicalItem-BR2pwaBe.js";import"./getRadiusAndStrokeWidthFromDot-rFO_VTeN.js";import"./ActiveShapeUtils-CwtXXETb.js";import"./Cross-Ce6okpil.js";import"./Rectangle-B78Clo56.js";import"./util-Dxo8gN5i.js";import"./Sector-CY7poIyV.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
