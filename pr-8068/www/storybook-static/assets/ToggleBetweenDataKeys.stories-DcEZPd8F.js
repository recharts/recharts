import{r as p,R as t}from"./iframe-fRQcLAl5.js";import{L as n}from"./LineChart-DMySCMHl.js";import{R as s}from"./zIndexSlice-Dn-AwdFU.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cm7w7xPd.js";import{X as d}from"./XAxis-YHoN4cJ8.js";import{Y as y}from"./YAxis-B2vH-p_Z.js";import{L as u}from"./Legend-BhFF4tti.js";import{L as h}from"./Line-DpSpydaT.js";import{T as g}from"./Tooltip-ByfooWk2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-UgoWSvvL.js";import"./resolveDefaultProps-BSRNeAis.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BcHvjcBD.js";import"./throttle-D9yJ7HBS.js";import"./index-k5JxmCtc.js";import"./index-DGdlAhFZ.js";import"./isWellBehavedNumber-D73y1wlb.js";import"./d3-scale-DfAPImNq.js";import"./index-CvX2HSRN.js";import"./index-BMhLMrsl.js";import"./renderedTicksSlice-B-odeO7S.js";import"./index-0uuwnO43.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-78VpV4en.js";import"./chartDataContext-DbJ6pwXa.js";import"./CategoricalChart-BOoKbn6G.js";import"./CartesianAxis-KAWGVqFX.js";import"./Layer-CbRW8QEs.js";import"./Text-Cru6BjP5.js";import"./pageBackground-CEHLL-Ei.js";import"./useId-C-HGw4dN.js";import"./useBackwardsCompatibleTheme-BHb08z9X.js";import"./Label-B-GmpToQ.js";import"./ZIndexLayer-Cs8fSrLZ.js";import"./dataEntryStyles-DAJ1H5Ij.js";import"./types-9LI4VHBg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CR7Uf5m5.js";import"./symbol-BJALyMWh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BrWRK1of.js";import"./uniqBy-CluqMtWA.js";import"./iteratee-CLrT16T3.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CS-yaUma.js";import"./step-CpSFtT8B.js";import"./activeStyles-mU47mh7y.js";import"./useAnimationId-BA218cv-.js";import"./ActivePoints-D7vn9lL2.js";import"./Dot-CoF5eEMQ.js";import"./RegisterGraphicalItemId-B0TmU9i7.js";import"./ErrorBarContext-DLnk70v-.js";import"./GraphicalItemClipPath-DvSzn1zw.js";import"./SetGraphicalItem-fs95wN3Y.js";import"./getRadiusAndStrokeWidthFromDot-BW7yBTjT.js";import"./ActiveShapeUtils-DqrHb297.js";import"./useEffectiveDataKey-H8Jal8DL.js";import"./Cross-Cp9Y6JoO.js";import"./Rectangle-DEwZ1key.js";import"./util-Dxo8gN5i.js";import"./Sector-CIORA0ys.js";const Rt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Tt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Tt as __namedExportsOrder,Rt as default};
