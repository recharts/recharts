import{P as n,c as t}from"./iframe-Bhg7B6nu.js";import{L as p}from"./LineChart-0eOMbApz.js";import{g as s}from"./zIndexSlice-CpfnlaY3.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-2VeWgHga.js";import{X as d}from"./XAxis-BaFC3En6.js";import{Y as y}from"./YAxis-CDnoamqb.js";import{L as u}from"./Legend-BV6bfmU5.js";import{L as g}from"./Line-DnXTv09L.js";import{T as h}from"./Tooltip-uYtmtlnI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BO-9qVe8.js";import"./index-hZ-hNf3X.js";import"./index-LweJEeHr.js";import"./index-fTPSImHI.js";import"./index-BeLXdiSX.js";import"./immer-DB_z4hP2.js";import"./get-Bdfg8b7E.js";import"./renderedTicksSlice-BWF9zmW-.js";import"./axisSelectors-CdfzhIk0.js";import"./d3-scale-CZa5b7JS.js";import"./resolveDefaultProps-DYGylzt5.js";import"./isWellBehavedNumber-CRt7foTE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B_99cbzZ.js";import"./chartDataContext-CTHxBaCW.js";import"./CategoricalChart-Dr5hcJGP.js";import"./CartesianAxis-D1bYab0n.js";import"./Layer-CWtBt3tO.js";import"./Text-B3Epq4Nr.js";import"./DOMUtils-umXRQPav.js";import"./Label-g9fCGbFu.js";import"./ZIndexLayer-BLUBt3jh.js";import"./types-CBsC6Zml.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D0IR3Ewb.js";import"./symbol-DtDt1tne.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ByWie8Pg.js";import"./uniqBy-DE9J9zXb.js";import"./iteratee-_s1w9D9m.js";import"./Curve-CepT2fcB.js";import"./step-B9W3HLIp.js";import"./ReactUtils-BhSP1QaD.js";import"./ActivePoints-DopF7LMV.js";import"./Dot-DS4twGmw.js";import"./RegisterGraphicalItemId-BzH-PWzG.js";import"./ErrorBarContext-D0cT0mEH.js";import"./GraphicalItemClipPath-BljaU2rV.js";import"./SetGraphicalItem-DpMnWL3z.js";import"./useAnimationId-CDEhZOSy.js";import"./getRadiusAndStrokeWidthFromDot-CR_o6rYy.js";import"./ActiveShapeUtils-CZOt3Dfh.js";import"./Cross-D5JF58Wa.js";import"./Rectangle-JbDXy-um.js";import"./Sector-C5Td0knX.js";const ft={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(g,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(h,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const vt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,vt as __namedExportsOrder,ft as default};
