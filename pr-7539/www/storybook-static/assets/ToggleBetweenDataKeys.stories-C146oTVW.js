import{r as n,R as t}from"./iframe-BhYIBUmE.js";import{L as p}from"./LineChart-B0mZX7zf.js";import{R as s}from"./zIndexSlice-iZ75WhkA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B8gFCMp1.js";import{X as d}from"./XAxis-B9ZJYuv4.js";import{Y as y}from"./YAxis-BDjlgMSD.js";import{L as u}from"./Legend-DSTqIi7C.js";import{L as h}from"./Line-CKX7TNtb.js";import{T as g}from"./Tooltip-DGjcwj5R.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQUmtvyG.js";import"./index-BoNxyHn5.js";import"./index-B02QR74t.js";import"./index-DEEvK7wS.js";import"./index-D-p5hhZ6.js";import"./throttle-Y6Q35rOn.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BvbBXc0R.js";import"./axisSelectors-XMI2B6JU.js";import"./resolveDefaultProps-BDtRZXkF.js";import"./isWellBehavedNumber-XdoKmyaC.js";import"./d3-scale-Ca87_qMg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CnNFNMoi.js";import"./chartDataContext-DqiOTlWU.js";import"./CategoricalChart-DhAV5rxK.js";import"./CartesianAxis-D47H33vb.js";import"./Layer-Di4CjYT0.js";import"./Text-DvhjqfeR.js";import"./DOMUtils-0OARPr3L.js";import"./Label-D4aavVkg.js";import"./ZIndexLayer-DzEhLRNI.js";import"./types-98-DlTag.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-pEWRNwOG.js";import"./symbol-CZbvwugO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CSXMIDAf.js";import"./uniqBy-Br7Gv2yg.js";import"./iteratee-B989Z8v9.js";import"./Curve-BFWIv3Fl.js";import"./step-Dbe6DqiS.js";import"./AnimatedItems-BLN0wGQm.js";import"./useAnimationId-BPiSh6IJ.js";import"./ActivePoints-GDUXfCj4.js";import"./Dot-DorxToFy.js";import"./RegisterGraphicalItemId-BXUxqLaU.js";import"./ErrorBarContext-CcwUloBe.js";import"./GraphicalItemClipPath-gTOFxICa.js";import"./SetGraphicalItem-ZzJW--aO.js";import"./getRadiusAndStrokeWidthFromDot-Bno7EZgK.js";import"./ActiveShapeUtils-Di4Bw8dO.js";import"./Cross-Bh5VpJP9.js";import"./Rectangle-BZ1mXMev.js";import"./util-Dxo8gN5i.js";import"./Sector-B7axzzn3.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
