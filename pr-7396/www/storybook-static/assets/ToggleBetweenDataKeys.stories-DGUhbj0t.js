import{r as n,R as t}from"./iframe-CsUTfbme.js";import{L as p}from"./LineChart-C2ATgd-I.js";import{R as s}from"./zIndexSlice-DJN3Z2tA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BBnIe7aE.js";import{X as d}from"./XAxis-B66nDtTW.js";import{Y as y}from"./YAxis-DU0GmGih.js";import{L as u}from"./Legend-Br8yEIsg.js";import{L as h}from"./Line-Ciwn5_Ze.js";import{T as g}from"./Tooltip-ghaBd95J.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bz5AtJCZ.js";import"./index-84tIClUK.js";import"./index-CiR04iLY.js";import"./index-CpMCAhl1.js";import"./index-C0tTD0a-.js";import"./immer-BS6zuvPx.js";import"./get-CGtvq50a.js";import"./renderedTicksSlice-DKAjtNca.js";import"./axisSelectors-BaY3t_zv.js";import"./d3-scale-D08hqUcH.js";import"./resolveDefaultProps-DOSPF-U5.js";import"./isWellBehavedNumber-CaHmgZiw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-xV6uxcxT.js";import"./chartDataContext-Dks_l25O.js";import"./CategoricalChart-CDn_aEvK.js";import"./CartesianAxis-D0Iddbyw.js";import"./Layer-C0UzjkXP.js";import"./Text-1xaaQRGr.js";import"./DOMUtils-CCNMXYAS.js";import"./Label-BrqLuQxp.js";import"./ZIndexLayer-BszTzZbW.js";import"./types-CNmnDBmM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DdktixUl.js";import"./symbol-DRRDZ1JJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BfTrE2Dz.js";import"./uniqBy-cNbdeQjK.js";import"./iteratee-CEEi4l6n.js";import"./Curve-DdC8EqTQ.js";import"./step-DsryQMe8.js";import"./ReactUtils-CIWjNZdp.js";import"./ActivePoints-BlInVAX5.js";import"./Dot-BHvXSrDt.js";import"./RegisterGraphicalItemId-Bdk-Jfc1.js";import"./ErrorBarContext-BqDYRxxf.js";import"./GraphicalItemClipPath-ciWvPzTM.js";import"./SetGraphicalItem-X5S3Yot0.js";import"./useAnimationId-DbHaBqmd.js";import"./getRadiusAndStrokeWidthFromDot-CsCejuOB.js";import"./ActiveShapeUtils-eKrzz-9L.js";import"./Cross-C0eJKPB6.js";import"./Rectangle-DR8qZyZF.js";import"./Sector-Bte7IZhf.js";const ft={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
