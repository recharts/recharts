import{r as p,R as t}from"./iframe-rnrsK-Eh.js";import{L as n}from"./LineChart-Bjdy_db4.js";import{R as s}from"./zIndexSlice-D3HmR0ZR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B5iMLlDO.js";import{X as d}from"./XAxis-DcA-2yah.js";import{Y as y}from"./YAxis-CebqVQrE.js";import{L as u}from"./Legend-DCAQZ-xN.js";import{L as h}from"./Line-BDX7TuS6.js";import{T as g}from"./Tooltip-DFlRaAqD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-tBuCuUXe.js";import"./resolveDefaultProps-b1TTGhvT.js";import"./get-CjriyByo.js";import"./axisSelectors-CIZ-q5JG.js";import"./throttle-BHymO33n.js";import"./index-BSOAsjef.js";import"./index-D8r-4r4t.js";import"./polarAxisSelectors-B1h4eON8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BaDfMMmk.js";import"./index-BZjQac1j.js";import"./index-BcrgJFGN.js";import"./renderedTicksSlice-3O1E6NtI.js";import"./index-BWQTU1nE.js";import"./fillDefinitions-ooWue1m4.js";import"./CartesianChart-CdGDQA5c.js";import"./chartDataContext-BaXmKLtm.js";import"./CategoricalChart-B0mb1tZK.js";import"./CartesianAxis-ZiuFLH_J.js";import"./Layer-D4ktbd_J.js";import"./Text-WHgqMzAs.js";import"./ZIndexLayer-dsZ60IUc.js";import"./Label-DJYYuUsE.js";import"./types-CAJhQIqW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CFUB5kvN.js";import"./symbol-B4eSOryt.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BnxZL8WN.js";import"./uniqBy-C0Cq__z-.js";import"./iteratee-CngnK0pj.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-Aa26YM9W.js";import"./Curve-B8ieUi4B.js";import"./step-BNGv-ij0.js";import"./dataEntryStyles-DPy91L9k.js";import"./ActivePoints-G3nCAY-X.js";import"./Dot-CpkbvyGy.js";import"./activeStyles-9CDj_AEF.js";import"./useAnimationId-COqzWo9S.js";import"./ErrorBarContext-YhaLsFzE.js";import"./SetGraphicalItem-Bhp-y0Ji.js";import"./ActiveShapeUtils-O7QOH_04.js";import"./useEffectiveDataKey-DftwbdUx.js";import"./Cross-BmKhywuH.js";import"./Rectangle-8OmFGHQb.js";import"./util-Dxo8gN5i.js";import"./Sector-C0IDAhtH.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
