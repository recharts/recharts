import{R as e}from"./iframe-CgifVdGo.js";import{R as c}from"./zIndexSlice-cYNAtEFZ.js";import{C as d}from"./ComposedChart-CGqH3jPg.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CksipODj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-RNDoIp5v.js";import"./index-CE-jOOb9.js";import"./index-2TSMvrpE.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BWqJsMaX.js";import"./isWellBehavedNumber-B5I1Y8ko.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bdtf4nFv.js";import"./index-B-WSnDkr.js";import"./index-BIPnoVIq.js";import"./renderedTicksSlice-CdxlE0u2.js";import"./axisSelectors-BoKC2N9p.js";import"./d3-scale-B4rm30Tj.js";import"./CartesianChart-5X0OU6Ae.js";import"./chartDataContext-Cgkpv-Wp.js";import"./CategoricalChart-gWPq6G-r.js";import"./Layer-CeyNxq54.js";import"./AnimatedItems-wyY7R1ar.js";import"./Label-TzQ7qbgp.js";import"./Text-CP2PjM28.js";import"./DOMUtils-D8x8v_7W.js";import"./ZIndexLayer-D9Ef8fDH.js";import"./useAnimationId-B2JL6a3u.js";import"./ActivePoints-CRIrUZTw.js";import"./Dot-ki06ENMH.js";import"./types-IwSvkxMz.js";import"./RegisterGraphicalItemId-DWqGyRZG.js";import"./GraphicalItemClipPath-ChEyBJAa.js";import"./SetGraphicalItem-DiTEFY4D.js";import"./getRadiusAndStrokeWidthFromDot-CVuDAoNN.js";import"./ActiveShapeUtils-PZHl54QD.js";import"./Curve-kzqc65C_.js";import"./step-BTn_xVWj.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BbHJl_IG.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
