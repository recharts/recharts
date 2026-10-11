import{r as p,R as t}from"./iframe-DUGvLzaM.js";import{L as n}from"./LineChart-BHjvn_aX.js";import{R as s}from"./zIndexSlice-B4Mogj2z.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DRgBGN-6.js";import{X as d}from"./XAxis-D-RL7BSf.js";import{Y as y}from"./YAxis-BJE0EUN2.js";import{L as u}from"./Legend-CmBjeBzE.js";import{L as h}from"./Line-BoA-LB1U.js";import{T as g}from"./Tooltip-gOfCJt26.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ba1hxoNM.js";import"./resolveDefaultProps-B6fFLtp3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CGc2s0Fh.js";import"./throttle-iBva9Xri.js";import"./index-Bf1ebX0Z.js";import"./index-D4rZIo04.js";import"./isWellBehavedNumber-Dz-qkofC.js";import"./d3-scale-C86sab-h.js";import"./index-CmYddVJ2.js";import"./index-CwW47wP2.js";import"./renderedTicksSlice-CrtrmLXp.js";import"./index-C-yXSHy-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CoHpfyp6.js";import"./chartDataContext-DrEWUsQF.js";import"./CategoricalChart-W5cmFX3l.js";import"./CartesianAxis-FW2HtnAK.js";import"./Layer-C-Z-OoWn.js";import"./Text-DzH8Q7Re.js";import"./pageBackground-9CWG-5EI.js";import"./useId-Bo2C_hQY.js";import"./useBackwardsCompatibleTheme-Dm759DN1.js";import"./Label-C6rBfDHi.js";import"./ZIndexLayer-ytkVOhJ8.js";import"./types-CAM6k8hf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C4LVhUVE.js";import"./symbol-stOdtstY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DIK-eXNy.js";import"./uniqBy-DCe0PNdF.js";import"./iteratee-eCwGGnHr.js";import"./Curve-BLS66xAF.js";import"./step-CA28nkdr.js";import"./activeStyles-DDiORVPn.js";import"./useAnimationId-FtVQIfuZ.js";import"./dataEntryStyles-DRqvsfnl.js";import"./ActivePoints-C8OEAzuD.js";import"./Dot-B4gb0ExT.js";import"./ErrorBarContext-CAZ1Nd8e.js";import"./GraphicalItemClipPath-BsVVWJrM.js";import"./SetGraphicalItem-BkJcCs8V.js";import"./getRadiusAndStrokeWidthFromDot-Bj_75x8K.js";import"./ActiveShapeUtils-CYHb3Hz-.js";import"./useGraphicalItemIdentity-CNWhuATd.js";import"./Cross-WFlJtkPB.js";import"./Rectangle-D-UuI_l8.js";import"./util-Dxo8gN5i.js";import"./Sector-BrJ9rphR.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
