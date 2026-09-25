import{r as p,R as t}from"./iframe-BbNtNwCn.js";import{L as n}from"./LineChart-DH9jb3tJ.js";import{R as s}from"./zIndexSlice-VrNRi_G1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D3_l0nV8.js";import{X as d}from"./XAxis-oTutdnda.js";import{Y as y}from"./YAxis-C6UVi-mq.js";import{L as u}from"./Legend-gXJOoLpY.js";import{L as h}from"./Line-HubJkyzh.js";import{T as g}from"./Tooltip-dSp0L5xc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DE-VI6iZ.js";import"./resolveDefaultProps-DhM2CAPd.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BzyIizHG.js";import"./throttle-BKFxohT3.js";import"./index-75aciM30.js";import"./index-DDphzaTv.js";import"./isWellBehavedNumber-uY0CIhkC.js";import"./d3-scale-Dkbi5OyZ.js";import"./index-BSdVWAmb.js";import"./index-Cs8MvahU.js";import"./renderedTicksSlice-DIxEy3cM.js";import"./index-gTTJo4-y.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D4DHjPEA.js";import"./chartDataContext-DlNjoonA.js";import"./CategoricalChart-B7Or92Hs.js";import"./CartesianAxis-Ccs4Ad33.js";import"./Layer-DFZlw494.js";import"./Text-jR3JJSu6.js";import"./DOMUtils-DKOsv_Gf.js";import"./useId-CYI9mRcC.js";import"./useBackwardsCompatibleTheme-w385Ylxa.js";import"./Label-Bi0vIQjw.js";import"./ZIndexLayer-CAj7_5Sx.js";import"./types-fRbVNPnq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Q9EOUoeU.js";import"./symbol-ByDZZZUG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CsS9BC38.js";import"./uniqBy-CEpMhxOs.js";import"./iteratee-YzPuL1o-.js";import"./Curve-IZX4MWkA.js";import"./step-CORgqai8.js";import"./AnimatedItems-LXQvjRXM.js";import"./useAnimationId-CCouJXLZ.js";import"./ActivePoints-BWe-WnoU.js";import"./Dot-xDiH-N__.js";import"./RegisterGraphicalItemId-D25ry5r7.js";import"./ErrorBarContext-Cr3z4FFd.js";import"./GraphicalItemClipPath-B5iQtC38.js";import"./SetGraphicalItem-C_2GZMjS.js";import"./getRadiusAndStrokeWidthFromDot-3xOb0JOi.js";import"./ActiveShapeUtils-CArN8SR1.js";import"./useGraphicalItemIdentity-DD2NYUwk.js";import"./Cross-DzMa72YT.js";import"./Rectangle-D88c0sgw.js";import"./util-Dxo8gN5i.js";import"./Sector-D8F7xXdw.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
