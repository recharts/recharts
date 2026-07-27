import{r as n,R as t}from"./iframe-CLpUHFUx.js";import{L as p}from"./LineChart-BqbYZzD5.js";import{R as s}from"./zIndexSlice-ih_i1g5t.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DCiVUYww.js";import{X as d}from"./XAxis-DQukB1wG.js";import{Y as y}from"./YAxis-2SAbeq8Q.js";import{L as u}from"./Legend-DubnagiF.js";import{L as h}from"./Line-CDweeEof.js";import{T as g}from"./Tooltip-CvbcNZGz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-VhXLtIU3.js";import"./index-BQRTjV6n.js";import"./index-BWENVgmR.js";import"./index-CvxUcRs5.js";import"./index-DaW4Sl48.js";import"./throttle-CLd1kjXB.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CuCo3UJj.js";import"./axisSelectors-DcdgEKfW.js";import"./resolveDefaultProps-DTakvVP9.js";import"./isWellBehavedNumber-CHss1wLf.js";import"./d3-scale-BxXYUMYM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BoKvv8NW.js";import"./chartDataContext-BXtd66MC.js";import"./CategoricalChart-D4oV83W1.js";import"./CartesianAxis-Dv_zGlnO.js";import"./Layer-3AQvPOBc.js";import"./Text-CSq4IeED.js";import"./DOMUtils-D-nz1rzx.js";import"./Label-Cri2SigJ.js";import"./ZIndexLayer-DoU1T_G7.js";import"./types-BtWOZotP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-H0HhizFF.js";import"./symbol-2ZaHrFGi.js";import"./path-DyVhHtw_.js";import"./useElementOffset-4nhhdQM-.js";import"./uniqBy-BL16Mnd5.js";import"./iteratee-DMRQCYyf.js";import"./Curve-DZJekjpR.js";import"./step-_f2gFda3.js";import"./AnimatedItems-BvAtBQX7.js";import"./useAnimationId-NKiMzI6a.js";import"./ActivePoints-B2iIRtsT.js";import"./Dot-rjCZu1cP.js";import"./RegisterGraphicalItemId-D5SJC0o6.js";import"./ErrorBarContext-DOU6usMR.js";import"./GraphicalItemClipPath-BJ5GEIwI.js";import"./SetGraphicalItem-DL6fPXwP.js";import"./getRadiusAndStrokeWidthFromDot-b1AZaPVX.js";import"./ActiveShapeUtils-BoZWmQGY.js";import"./Cross-CYjhPBjl.js";import"./Rectangle-5xIBVaz8.js";import"./util-Dxo8gN5i.js";import"./Sector-B8SGIxUc.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
