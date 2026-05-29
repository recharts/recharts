import{c as e}from"./iframe-C5MHh42j.js";import{g as c}from"./zIndexSlice-BAxAD9Hd.js";import{C as d}from"./ComposedChart-WRhT-Z7E.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-DVPuU0ZD.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BEKu5nAB.js";import"./index-BtGgX82p.js";import"./index-CtWdDAnJ.js";import"./get-w_pNkTrF.js";import"./resolveDefaultProps-50eaHBP1.js";import"./isWellBehavedNumber-Fry2DCdR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXiQbHg3.js";import"./index-DTHX5ifG.js";import"./index-Ddmpcm8d.js";import"./renderedTicksSlice-DJahilIk.js";import"./axisSelectors-l2EEhLAN.js";import"./d3-scale-DROX3YQd.js";import"./CartesianChart-DdDBbaWH.js";import"./chartDataContext-B3IBL15G.js";import"./CategoricalChart-iSFUJ3mM.js";import"./Curve-thevB7o-.js";import"./types-DIsFNNUR.js";import"./step-CW5jkV_V.js";import"./path-DyVhHtw_.js";import"./Layer-BTdnKXgq.js";import"./ReactUtils-BVj-7vfo.js";import"./Label-DPuGsfIc.js";import"./Text-Dd3m04ll.js";import"./DOMUtils-DPyYMl93.js";import"./ZIndexLayer-BqFMND8v.js";import"./ActivePoints-hHK0AETy.js";import"./Dot-C9bGlN1x.js";import"./RegisterGraphicalItemId-D7dR1c0l.js";import"./GraphicalItemClipPath-D6R49ofK.js";import"./SetGraphicalItem-3zA0iFCt.js";import"./useAnimationId-D3rbPHOS.js";import"./getRadiusAndStrokeWidthFromDot-Om5tnWtK.js";import"./graphicalItemSelectors-CXCIX9f6.js";const rt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ot=["CustomizedLabel"];export{t as CustomizedLabel,ot as __namedExportsOrder,rt as default};
