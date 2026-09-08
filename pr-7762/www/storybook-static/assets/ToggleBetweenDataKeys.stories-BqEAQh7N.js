import{r as p,R as t}from"./iframe-BAkJeTr4.js";import{L as n}from"./LineChart-DHaLtAhh.js";import{R as s}from"./zIndexSlice-CKNgQ3a1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cl9Si-sv.js";import{X as d}from"./XAxis-BD-kVe53.js";import{Y as y}from"./YAxis-wkouAcT5.js";import{L as u}from"./Legend-Dcb99-gu.js";import{L as h}from"./Line-CY96wbQv.js";import{T as g}from"./Tooltip-1xUbPnX5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-EWDb0L0f.js";import"./resolveDefaultProps-5cpPAvAv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CSrb8LKj.js";import"./throttle-Dv1aPsuB.js";import"./index-DjVuoFnH.js";import"./index-XgffbxYa.js";import"./isWellBehavedNumber-tRFPHljB.js";import"./d3-scale-CDR0rKSq.js";import"./index-DAtUpVNY.js";import"./index-D15jXgP1.js";import"./renderedTicksSlice-BJEMwp3X.js";import"./index-I2U5t58b.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDPBhM-t.js";import"./chartDataContext-BT4eLMiU.js";import"./CategoricalChart-BbbjbFxH.js";import"./CartesianAxis-DtahLlIk.js";import"./Layer-CKQWhaEi.js";import"./Text-CbVPJcpZ.js";import"./DOMUtils-Cq0_H_rP.js";import"./useId-Dap1RfTv.js";import"./useBackwardsCompatibleTheme-sM5V7IYB.js";import"./Label-Dc3MUSo6.js";import"./ZIndexLayer-D5m0oF5l.js";import"./types-HIIkAPMh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-fYq7nkG0.js";import"./symbol-DpBVLgIw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-A8S9o9XT.js";import"./uniqBy-DQFF8pwP.js";import"./iteratee-plK0tt8R.js";import"./Curve-BVog-1mq.js";import"./step-C9hVegCW.js";import"./AnimatedItems-DuF6Bkm2.js";import"./useAnimationId-CvTUgOKN.js";import"./ActivePoints-AYIQDcyP.js";import"./Dot-CleLxuMG.js";import"./RegisterGraphicalItemId-Bt_uVbrn.js";import"./ErrorBarContext-DuO3heB_.js";import"./GraphicalItemClipPath-Bys_fmGG.js";import"./SetGraphicalItem-BwMH--N4.js";import"./getRadiusAndStrokeWidthFromDot-BNUuDnnH.js";import"./ActiveShapeUtils-EPv0ZgAx.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D6GYkf9L.js";import"./Rectangle-DL0w3-z6.js";import"./util-Dxo8gN5i.js";import"./Sector-DJxmcL1Z.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
