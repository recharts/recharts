import{r as n,R as t}from"./iframe-B2GUem4R.js";import{L as p}from"./LineChart-DE-X5Rmo.js";import{R as s}from"./zIndexSlice-CZi7E6fW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-H72cR-oI.js";import{X as d}from"./XAxis-CFUeYXnK.js";import{Y as y}from"./YAxis-_CiWUi77.js";import{L as u}from"./Legend-Bhh8SQ-f.js";import{L as h}from"./Line-p1FLjwlJ.js";import{T as g}from"./Tooltip-AZ9IybMD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-wIT9NoUO.js";import"./index-CiX8zsFN.js";import"./index-CRfxI4mA.js";import"./index-8D89370m.js";import"./index-C3eO1gGD.js";import"./immer-DXmH-xiw.js";import"./get-Dz6Q_sAk.js";import"./renderedTicksSlice-CFEn6KcH.js";import"./axisSelectors-eBcYGUc1.js";import"./d3-scale-BTfuin0j.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-D8aANFv1.js";import"./isWellBehavedNumber-Dny2ojXK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B-JFZAz_.js";import"./chartDataContext-CqMqFbwN.js";import"./CategoricalChart-DLExbf-B.js";import"./CartesianAxis-DVMfjDIU.js";import"./Layer-D33k1icw.js";import"./Text-BI7UFZae.js";import"./DOMUtils-Bf1ILi-r.js";import"./Label-BkYexeGT.js";import"./ZIndexLayer-B6ZLwcmD.js";import"./types-D4D5wSub.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CIcu7Z1r.js";import"./symbol-NVEfhO40.js";import"./path-DyVhHtw_.js";import"./useElementOffset-qp1GxR-0.js";import"./uniqBy-DhTftgCy.js";import"./iteratee-N9KERHhC.js";import"./Curve-TtTpS3RF.js";import"./step-1OtCv9Fq.js";import"./AnimatedItems-LimEMMjo.js";import"./useAnimationId-D653EGzA.js";import"./ActivePoints-CSw05vyh.js";import"./Dot-t6KHQrBE.js";import"./RegisterGraphicalItemId-CH4DvZUM.js";import"./ErrorBarContext-CorbPQDF.js";import"./GraphicalItemClipPath-CAM-mwtd.js";import"./SetGraphicalItem-C_-j0gLb.js";import"./getRadiusAndStrokeWidthFromDot-By4awG1w.js";import"./ActiveShapeUtils-1-wftwDY.js";import"./Cross-DMq7is0n.js";import"./Rectangle-CNlPjGbB.js";import"./Sector-DDwopboB.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
