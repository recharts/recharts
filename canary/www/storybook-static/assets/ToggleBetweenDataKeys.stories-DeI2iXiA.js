import{r as n,R as t}from"./iframe-CM9KFlpR.js";import{L as p}from"./LineChart-CM0i53p_.js";import{R as s}from"./zIndexSlice-i3oRyNLb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-xoKjjEyX.js";import{X as d}from"./XAxis-BpZNPHzq.js";import{Y as y}from"./YAxis-CI94Yo_i.js";import{L as u}from"./Legend-XLGRzbOD.js";import{L as h}from"./Line-D_p7ofiv.js";import{T as g}from"./Tooltip-Cz2C8J7G.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DaqDuaqH.js";import"./index-BQLe23-Y.js";import"./index-CO_J2hQh.js";import"./index-DWeI466K.js";import"./index-CIwJAIlL.js";import"./throttle-De6mCLNM.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-B9ba2EdW.js";import"./axisSelectors-gWKpmW3G.js";import"./resolveDefaultProps-Ck7rGCA-.js";import"./isWellBehavedNumber-D6ap16Bm.js";import"./d3-scale-BtCHm39u.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bh6VCjY7.js";import"./chartDataContext-Do1rIj0R.js";import"./CategoricalChart-DG8gXHxR.js";import"./CartesianAxis-wxz_d6Fj.js";import"./Layer-CyTLoz3L.js";import"./Text-Z2Be4kdC.js";import"./DOMUtils-5L50_gtE.js";import"./Label-8JT3S2zg.js";import"./ZIndexLayer-CLQFgWIH.js";import"./types-BZH27c5K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-CQYN6ifz.js";import"./symbol-C_YmnP65.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ce1ZX6FX.js";import"./uniqBy-CUPFsq1k.js";import"./iteratee-FPt0V19d.js";import"./Curve-DN_e8w4x.js";import"./step-DSranele.js";import"./AnimatedItems-Dc6JrbcK.js";import"./useAnimationId-OG1_HfMp.js";import"./ActivePoints-BWeInnwU.js";import"./Dot-kCj2iLyE.js";import"./RegisterGraphicalItemId-BY7wzIRb.js";import"./ErrorBarContext-L6TULBDt.js";import"./GraphicalItemClipPath-mABwVFdR.js";import"./SetGraphicalItem-CktbvIN2.js";import"./getRadiusAndStrokeWidthFromDot-CWl-YjkB.js";import"./ActiveShapeUtils-BKApU02X.js";import"./Cross-fbV1HsI7.js";import"./Rectangle-DTzWPR0Y.js";import"./util-Dxo8gN5i.js";import"./Sector-B_QVEzjH.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
