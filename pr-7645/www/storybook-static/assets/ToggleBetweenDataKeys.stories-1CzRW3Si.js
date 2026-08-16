import{r as n,R as t}from"./iframe-DsrT6Igl.js";import{L as p}from"./LineChart-D_1kgV6-.js";import{R as s}from"./zIndexSlice-h68Ml9Fg.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-X4YDn1xd.js";import{X as d}from"./XAxis-B8sGkbA_.js";import{Y as y}from"./YAxis-CZhK_UtL.js";import{L as u}from"./Legend-sjZw4-N_.js";import{L as h}from"./Line-Co0or1gx.js";import{T as g}from"./Tooltip-CH2R-UVQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSffRmp6.js";import"./index-TmgrHUX7.js";import"./index-yiXd6Pb-.js";import"./index-CcGDpKo8.js";import"./index-CFQPgMx1.js";import"./throttle-CKywVGzs.js";import"./get-C2VjdU0L.js";import"./axisSelectors-wSA8VE6u.js";import"./resolveDefaultProps-B9PzJr_D.js";import"./isWellBehavedNumber-BKc-Hacq.js";import"./d3-scale-xIAfNFu1.js";import"./renderedTicksSlice-CMKIM6y2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BZwpOQ8g.js";import"./chartDataContext-CfBgcaN6.js";import"./CategoricalChart-CEyUxV14.js";import"./CartesianAxis-BXcmAp6r.js";import"./Layer-DLKGrOO6.js";import"./Text-C481n1OT.js";import"./DOMUtils-C9ccNhGG.js";import"./useBackwardsCompatibleTheme-DXRl_guv.js";import"./Label-Vp0epMck.js";import"./ZIndexLayer-CReW--vZ.js";import"./types-Dr4WwlRr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-X8jAVduP.js";import"./symbol-Blfcknp3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-KJy6JXTO.js";import"./uniqBy-CcAT-JF8.js";import"./iteratee-Ch_bSXv9.js";import"./Curve-BpJvhb6R.js";import"./step-CipQ0fCR.js";import"./AnimatedItems-BHAzNwyg.js";import"./useAnimationId-B6Rv0dv4.js";import"./ActivePoints-BFA4rG7L.js";import"./Dot-B2h-3AQs.js";import"./RegisterGraphicalItemId-Bitjrotw.js";import"./ErrorBarContext-CvpDkEE-.js";import"./GraphicalItemClipPath-acoCHMXA.js";import"./SetGraphicalItem-vfAWovt3.js";import"./getRadiusAndStrokeWidthFromDot-CeZkjRIS.js";import"./ActiveShapeUtils-ETIvX2m5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DdS7YOJT.js";import"./Rectangle-BTeUrZeI.js";import"./util-Dxo8gN5i.js";import"./Sector-DqkrMSqs.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
